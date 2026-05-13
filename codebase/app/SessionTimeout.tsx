"use client";

import { useEffect, useRef } from "react";
import { signOut } from "next-auth/react";

const TIMEOUT = 1000 * 60 * 15; // 15 minutes

export default function SessionTimeout() {
    const timer = useRef<NodeJS.Timeout | null>(null);
 
    const reset = () => {
        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            // redirect to login with "expired" flag
            signOut({
                callbackUrl: "/pages/sign-in?reason=expired",
            });
        }, TIMEOUT);
    };

    useEffect(() => {
        const events = [
            "mousemove",
            "keydown",
            "click",
            "scroll",
        ];

        events.forEach((e) =>
            window.addEventListener(e, reset)
        );

        reset();

        return () => {
            if (timer.current) clearTimeout(timer.current);

            events.forEach((e) =>
                window.removeEventListener(e, reset)
            );
        };
    }, []);

    return null;
}