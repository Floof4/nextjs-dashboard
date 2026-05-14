import { auth } from "@/app/auth";
import { NextResponse } from "next/server";
import { redis } from "@/app/lib/redis";

export default auth(async function middleware(
    req
) {
    console.log("MIDDLEWARE HIT");
    const session =
        req.auth;

    // not logged in
    if (!session?.user) {

        return NextResponse.redirect(
            new URL(
                "/pages/sign-in",
                req.url
            )
        );
    }

    const sessionId =
        (session as any)
            ?.sessionId;

    // invalid session
    if (!sessionId) {

        return NextResponse.redirect(
            new URL(
                "/pages/sign-in",
                req.url
            )
        );
    }

    // Redis validation
    const cache =
        await redis.get(
            `session:${sessionId}`
        );

    // revoked or expired
    if (!cache) {

        return NextResponse.redirect(
            new URL(
                "/pages/sign-in?reason=expired",
                req.url
            )
        );
    }

    // trusted device
    const trusted =
        req.cookies.get(
            "trusted_device"
        )?.value;

    if (trusted) {

        const trustedData =
            await redis.get(
                `trusted:${trusted}`
            );

        if (trustedData) {

            console.log(
                "Trusted device detected"
            );
        }
    }
    
    return NextResponse.next();

});

export const config = {
    matcher: [
        "/pages/dashboard",
        "/pages/dashboard/:path*",

        "/pages/admin",
        "/pages/admin/:path*",
    ]
};