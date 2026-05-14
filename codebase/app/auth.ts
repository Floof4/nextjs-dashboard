import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { redis } from "@/app/lib/redis";
import { headers } from "next/headers";
import { generateSessionId } from "@/app/lib/session";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID!,
            clientSecret: process.env.AUTH_GOOGLE_SECRET!,
        }),
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {
                if (!credentials || !credentials.email || !credentials.password) {
                    return null;
                }

                const email = credentials.email as string;
                const hash = await bcrypt.hash(credentials.password as string, 10);

                let user: any = await prisma.user.findFirst({
                    where: { email },
                });

                if (!user) {
                    user = await prisma.user.create({
                        data: {
                            email,
                            password: hash,
                        },
                    });
                } else {
                    const isMatch = await bcrypt.compare(credentials.password as string, user.password);
                    if (!isMatch) {
                        throw new Error("Invalid email or password");
                    }
                }
                return user
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {

            if (user) {

                token.id = user.id;
                token.role = user.role;

                const sessionId = generateSessionId();

                token.sessionId = sessionId;

                const headersList = await headers();

                const ipAddress =
                    headersList.get("x-forwarded-for") ||
                    "unknown";

                const userAgent =
                    headersList.get("user-agent") ||
                    "unknown";

                // LOGIN HISTORY
                await prisma.loginHistory.create({
                    data: {
                        userId: user.id,
                        ipAddress,
                        userAgent,
                    },
                });

                // ACTIVE SESSION
                await prisma.activeSession.create({
                    data: {
                        userId: user.id,
                        sessionId,
                        ipAddress,
                        userAgent,
                        expiresAt: new Date(
                            Date.now() +
                            1000 * 60 * 15
                        ),
                    },
                });

                // REDIS SESSION
                await redis.set(
                    `session:${sessionId}`,
                    JSON.stringify({
                        userId: user.id,
                        role: user.role,
                    }),
                    "EX",
                    60 * 15,

                );
            }

            return token;
        },

        async session({ session, token }) {

            const cache =
                await redis.get(
                    `session:${token.sessionId}`
                );

            // revoked / expired
            if (!cache) {

                await prisma.activeSession.deleteMany({
                    where: {
                        sessionId:
                            token.sessionId as string,
                    },
                });

                return null as any;
            }

            session.user.id =
                token.id as string;

            session.user.role =
                token.role as string;

            (session as any).sessionId =
                token.sessionId;

            return session;
        }
    }
});