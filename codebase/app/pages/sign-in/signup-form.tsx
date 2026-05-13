import { loginWithCreds } from "@/actions/auth";
import Link from 'next/dist/client/link'

export function SignupForm() {
    return (
        <form action={loginWithCreds} id="loginForm" autoComplete="on">
            <div className="field">
                <label className="label" htmlFor="email">
                    Work Email
                </label>

                <input
                    className="input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@lightweightsolutions.me"
                    autoComplete="email"
                    required
                />
            </div>

            <div className="field">
                <label className="label" htmlFor="password">
                    Password
                </label>

                <input
                    className="input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    autoComplete="current-password"
                    required
                />
            </div>

            <div className="row-split">
                <label className="check-label">
                    <input type="checkbox" defaultChecked />
                    {" "}Keep me signed in
                </label>

                <Link href="/forgot-password" className="link-red">
                    Forgot password?
                </Link>
            </div>

            <button type="submit" className="btn-primary">
                Sign In to VERA

                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </form>
    )
}