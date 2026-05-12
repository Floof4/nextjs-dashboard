'use server';

export const login = async () => {
    await signIn("github", { callbackUrl: "/pages/landing" });
}