'use server';

import { signIn, signOut } from "@/app/auth";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/lib/prisma";
import { AuthError } from "next-auth";
import error from "next/error";

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

export const logout = async () => {
    await signOut({ redirectTo: "/"});
    revalidatePath("/");
}

export const loginWithCreds = async (formData: FormData) => {
    const rawFormData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        role: "ADMIN",
        redirectTo: "/pages/landing",
    };
    const existingUser = await getUserByEmail(formData.get("email") as string);
    console.log("Existing user:", existingUser);

    try {
        await signIn("credentials", rawFormData);
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