"use client";
import Image from "next/image";
import '@/app/ui/auth.css';

export default function LoginClient() {
  return (
    <div className="bg">
      <div className="shape s1"></div>
      <div className="shape s2"></div>
      <div className="shape s3"></div>
      <div className="shape s4"></div>
      <div className="shape s5"></div>

      <nav className="top-nav">
        <div className="nav-logo">
          <Image
            src="https://res.cloudinary.com/dvn2qowpg/image/upload/v1777399428/LWS/Logo/Wordmark_white_x04u5n.png"
            alt="LWS"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </nav>

      <div className="card-wrap">
        <div className="portal-badge">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Client Portal Access
        </div>

        <div className="card">
          <div className="card-hd">
            <Image
              className="logo"
              src="https://res.cloudinary.com/dvn2qowpg/image/upload/v1777399428/LWS/Logo/Wordmark_Red_pjjmyc.png"
              alt="LWS"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />

            <h1>Welcome to your portal.</h1>
            <p>Access your projects, invoices, and deliverables.</p>
          </div>

          <div className="card-body">
            <div id="errorBox" className="error-box hidden"></div>

            <form id="loginForm" autoComplete="on">
              <div className="field">
                <label className="label" htmlFor="email">
                  Email Address
                </label>

                <input
                  className="input input-client"
                  type="email"
                  id="email"
                  placeholder="your@company.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>

                <input
                  className="input input-client"
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
              </div>

              <div className="row-opt">
                <label className="check-label">
                  <input type="checkbox" defaultChecked /> Remember me
                </label>

                <a href="/forgot-password" className="link-red">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn-primary">
                Access My Portal

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
              </button>
            </form>

            <div className="divider" style={{ display: "none" }}>
              <div className="divider-line"></div>
              <span className="divider-txt">demo</span>
              <div className="divider-line"></div>
            </div>

            <div className="demo-block" style={{ display: "none" }}>
              <div className="demo-head">Click to Autofill Demo</div>

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
          </div>

          <div className="trust-strip" style={{ display: "none" }}>
            <div className="trust-item">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              256-bit SSL
            </div>

            <div className="trust-item">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Secure
            </div>

            <div className="trust-item">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              24/7 Support
            </div>
          </div>
        </div>

        <div className="card-footer">
          <p>
            © 2026 Lightweight Solutions &nbsp;·&nbsp;
            <a href="#">Privacy Policy</a>
            &nbsp;·&nbsp;
            <a href="#">Terms and Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
}