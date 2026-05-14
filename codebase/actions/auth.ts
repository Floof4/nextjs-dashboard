'use server';

import { signIn, signOut } from "@/app/auth";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
import { AuthError } from "next-auth";
import error from "next/error";
import { redis } from "@/app/lib/redis";
import crypto from "crypto";
import { cookies } from "next/headers";

const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email,
            },
        });
        return user;
    } catch (error) {
        console.error("Error fetching user by email:", error);
        return null;
    }
}

export const logout = async (userId: string) => {
    await redis.del(`session:${userId}`);
    await signOut({ redirectTo: "/" });
    revalidatePath("/");
}

export const loginWithCreds = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        role: "ADMIN",
        redirectTo: "/pages/dashboard",
    };
    const existingUser = await getUserByEmail(formData.get("email") as string);
    console.log("Existing user:", existingUser);

    try {
        await signIn("credentials", rawFormData);
        const remember =
            formData.get("remember") === "on";

        if (remember) {

            const deviceToken =
                crypto.randomUUID();

            await redis.set(
                `trusted:${deviceToken}`,
                JSON.stringify({
                    userId: formData.get("userId") as string,
                }),
                "EX",
                    60 * 15 // 15 mins
            );

            const cookieStore =
                await cookies();

            cookieStore.set(
                "trusted_device",
                deviceToken,
                {
                    httpOnly: true,
                    secure:
                        process.env.NODE_ENV ===
                        "production",
                    sameSite: "lax",
                    maxAge:
                        60 * 60 * 24 * 30,
                    path: "/",
                }
            );
        }
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    console.error("Invalid email or password");
                    break;
                default:
                    console.error("An unknown error occurred during sign-in:", error);
            }
        } throw error
    }
    revalidatePath("/");
}