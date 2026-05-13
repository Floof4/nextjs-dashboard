import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";
import { redis } from "@/app/lib/redis";

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

            // Initial login
            if (user) {
                token.id = user.id;
                token.role = user.role;
            }

            // Refresh inactivity timeout
            if (token.id) {
                await redis.set(
                    `session:${token.id}`,
                    JSON.stringify({
                        id: token.id,
                        role: token.role,
                    }),
                    "EX",
                    60 * 15 // 15 mins
                );
            }

            return token;
        },

        async session({ session, token }) {
            console.log("SESSION CHECK", await redis.get(`session:${token.id}`));
            const cache = await redis.get(
                `session:${token.id}`
            );

            // Session expired/revoked
            if (!cache) {
                session.user = undefined as any;
                return session;
            }

            session.user.id = token.id as string;
            session.user.role = token.role as string;

            return session;
        },
    }
});