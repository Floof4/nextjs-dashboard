"use client";

export default function Products() {
    return (
        <section id="products">
            <div className="wrap">
                <div className="prod-head">
                    <div>
                        <span className="sec-label">Our products</span>
                        <h2 className="t-h2">Software <span className="accent">we've built</span><br />and own</h2>
                    </div>
                    <a href="#products" className="btn btn-outline">All products →</a>
                </div>

                <div className="prod-grid">
                    <div className="prod-card" tabIndex={0}>
                        <div className="prod-inner">
                            <div className="prod-face prod-front">
                                <span className="prod-tag">Healthcare · SaaS</span>
                                <div style={{ marginTop: 'auto' }}>
                                    <h3 className="prod-title">INDX</h3>
                                    <span className="prod-front-hint">Hover to flip</span>
                                </div>
                            </div>
                            <div className="prod-face prod-back">
                                <h4 className="prod-back-title">Modern dental clinics, simplified.</h4>
                                <p className="prod-back-desc">Scheduling, patient records, billing and data security - every workflow a clinic runs, in one calm interface.</p>
                                <a href="#" className="prod-back-cta">Learn more →</a>
                            </div>
                        </div>
                    </div>

                    <div className="prod-card" tabIndex={0}>
                        <div className="prod-inner">
                            <div className="prod-face prod-front">
                                <span className="prod-tag">Marketing · Events</span>
                                <div style={{ marginTop: 'auto' }}>
                                    <h3 className="prod-title">eRaffle</h3>
                                    <span className="prod-front-hint">Hover to flip</span>
                                </div>
                            </div>
                            <div className="prod-face prod-back">
                                <h4 className="prod-back-title">Promo campaigns, run effortlessly.</h4>
                                <p className="prod-back-desc">Used by leading multinational brands across the Philippines to launch, manage, and verify raffles at scale.</p>
                                <a href="#" className="prod-back-cta">Learn more →</a>
                            </div>
                        </div>
                    </div>

                    <div className="prod-card" tabIndex={0}>
                        <div className="prod-inner">
                            <div className="prod-face prod-front">
                                <span className="prod-tag">AI · Messaging</span>
                                <div style={{ marginTop: 'auto' }}>
                                    <h3 className="prod-title">Chatbot Platform</h3>
                                    <span className="prod-front-hint">Hover to flip</span>
                                </div>
                            </div>
                            <div className="prod-face prod-back">
                                <h4 className="prod-back-title">Conversations that actually convert.</h4>
                                <p className="prod-back-desc">Intelligent chatbots that integrate with any messaging platform - easy setup, precise responses, real outcomes.</p>
                                <a href="#" className="prod-back-cta">Learn more →</a>
                            </div>
                        </div>
                    </div>

                    <div className="prod-card" tabIndex={0}>
                        <div className="prod-inner">
                            <div className="prod-face prod-front">
                                <span className="prod-tag">Data · Operations</span>
                                <div style={{ marginTop: 'auto' }}>
                                    <h3 className="prod-title">Data Bank</h3>
                                    <span className="prod-front-hint">Hover to flip</span>
                                </div>
                            </div>
                            <div className="prod-face prod-back">
                                <h4 className="prod-back-title">Paper records, finally retired.</h4>
                                <p className="prod-back-desc">Transform paper into a secure, centralised digital data bank - instant access, zero filing cabinets.</p>
                                <a href="#" className="prod-back-cta">Learn more →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}