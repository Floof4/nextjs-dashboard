"use client";

export default function Why() {
    return (
        <section id="why">
            <div className="wrap why-head">
                <div>
                    <span className="sec-label">Why choose us</span>
                    <h2 className="t-h2">Built for how<br />you <span className="accent">actually</span> work</h2>
                </div>
                <p style={{ maxWidth: '380px', color: 'var(--muted)', fontSize: '16px', lineHeight: '1.55' }}>
                    Sixteen years of shipping software that holds up under real operational load - not pitch decks.
                </p>
            </div>
            <div className="why-grid">
                <div className="why-col">
                    <div className="why-ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
                    </div>
                    <div className="why-title">Clarity in complex systems</div>
                    <p className="why-desc">We turn complex operational and technical requirements into structured, scalable software systems designed for real-world use.</p>
                </div>
                <div className="why-col">
                    <div className="why-ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                    </div>
                    <div className="why-title">Built for scale and reliability</div>
                    <p className="why-desc">Our solutions are engineered to support growth across users, data, and processes without sacrificing performance or stability.</p>
                </div>
                <div className="why-col">
                    <div className="why-ico">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <div className="why-title">Close collaboration, real execution</div>
                    <p className="why-desc">We work directly with your team from planning to deployment, ensuring every solution aligns with business goals and operational reality.</p>
                </div>
            </div>
        </section>
    );
}