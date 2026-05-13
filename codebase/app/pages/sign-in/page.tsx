'use client';

import Image from "next/image";
import '@/app/ui/auth.css';
import { signIn } from "next-auth/react";
import { SignupForm } from "@/app/pages/sign-in/signup-form";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    reason?: string;
  };
}) {
  const params = await searchParams;
  const isExpired = params?.reason === "expired";
  return (
    <div className="shell">
      <div className="panel-left">
        <div className="logo-row">
          <Image
            className="logo-img"
            src="https://res.cloudinary.com/dvn2qowpg/image/upload/v1777399428/LWS/Logo/Wordmark_white_x04u5n.png"
            alt="LWS"
            width={220}
            height={60}
            unoptimized
          />
        </div>

        <div className="mid">
          <div className="headline">
            Lightweight <br />
            solutions <br />
            <span className="red">
              Operating <br />
              System
            </span>
          </div>

          <p className="subtext">
            Sign in to continue to your dashboard
          </p>
        </div>

        <div className="bottom" style={{ display: "none" }}>
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-val">20</div>
              <div className="stat-lbl">Active Session</div>
            </div>

            <div className="stat">
              <div className="stat-val">20</div>
              <div className="stat-lbl">OnGoing Projects</div>
            </div>

            <div className="stat">
              <div className="stat-val">6</div>
              <div className="stat-lbl">Live Projects</div>
            </div>
          </div>
        </div>
      </div>

      <div className="panel-right">
        <div className="card">
          <div className="card-top">
            <h1>Welcome back.</h1>
            <p>Sign in to your VERA workspace.</p>
          </div>

          <div id="errorBox" className="error-box hidden"></div>
          {isExpired && (
                <p>
                    Your session expired. Please sign in again.
                </p>
            )}
          < SignupForm />

          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-txt">or continue with</span>
            <div className="divider-line"></div>
          </div>

          <div className="sso-row">
            <button
              type="button"
              className="btn-sso"
              onClick={() => signIn("google", { callbackUrl: "/pages/landing" })}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>

              Google
            </button>

            <button
              type="button"
              className="btn-sso"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#F25022" d="M1 1h10v10H1z" />
                <path fill="#7FBA00" d="M13 1h10v10H13z" />
                <path fill="#00A4EF" d="M1 13h10v10H1z" />
                <path fill="#FFB900" d="M13 13h10v10H13z" />
              </svg>

              Microsoft
            </button>
          </div>

          <div
            className="demo-block"
            style={{ marginTop: "24px", display: "none" }}
          >
            <div className="demo-head">
              Demo Accounts - Click to Autofill
            </div>

            <div className="demo-row">
              <button
                type="button"
                className="demo-chip qf"
                data-email="admin@lws.com"
                data-pass="admin123"
              >
                Admin
              </button>

              <span className="demo-cred">
                admin@lws.com / admin123
              </span>
            </div>

            <div className="demo-row">
              <button
                type="button"
                className="demo-chip qf"
                data-email="employee@lws.com"
                data-pass="employee123"
              >
                Employee
              </button>

              <span className="demo-cred">
                employee@lws.com / employee123
              </span>
            </div>

            <div className="demo-row">
              <button
                type="button"
                className="demo-chip qf"
                data-email="client@lws.com"
                data-pass="client123"
              >
                Client
              </button>

              <span className="demo-cred">
                client@lws.com / client123
              </span>
            </div>
          </div>

          <p className="footer-note" style={{ marginTop: "20px" }}>
            © 2026 Lightweight Solutions · Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
}