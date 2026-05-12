import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "@/app/lib/prisma";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
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
});