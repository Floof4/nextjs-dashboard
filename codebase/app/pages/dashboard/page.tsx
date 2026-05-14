import "@/app/ui/app.css";

import { auth } from "@/app/auth";
import { redirect } from "next/navigation";
import { redis } from "@/app/lib/redis";

export default async function Page() {

    const session =
        await auth();

    // not logged in
    if (!session?.user) {

        redirect(
            "/pages/sign-in"
        );
    }

    const sessionId =
        (session as any)
            ?.sessionId;

    // invalid session
    if (!sessionId) {

        redirect(
            "/pages/sign-in"
        );
    }

    // Redis validation
    const cache =
        await redis.get(
            `session:${sessionId}`
        );

    // revoked or expired
    if (!cache) {

        redirect(
            "/pages/sign-in?reason=expired"
        );
    }

    return (
        <div className="app" id="app">

            <aside
                className="sidebar"
                style={{
                    background: "#fff"
                }}
            >
                <div className="sidebar-brand">

                    <div className="brand-mark">
                        LW
                    </div>

                    <div>

                        <div className="brand-text">
                            LWS Hub
                        </div>

                        <div className="brand-sub">
                            Internal Operations
                        </div>

                    </div>
                </div>
            </aside>

            <div className="main">
                Dashboard
            </div>

        </div>
    );
}