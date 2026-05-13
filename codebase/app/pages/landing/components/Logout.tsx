"use client";

import { logout } from "@/actions/auth";

export default function LogoutButton({
    userId,
}: {
    userId: string;
}) {
    const logoutWithId = logout.bind(null, userId);

    return (
        <form action={logoutWithId}>
            <button className="btn" type="submit">
                Logout
            </button>
        </form>
    );
}