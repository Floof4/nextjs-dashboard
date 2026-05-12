"use client";

export default function Contact() {
    return (
        <section id="contact-sec">
            <div className="cta-frame">
                <div className="cta-l">
                    <h2 className="cta-l-title">Let's build<br />your <span className="accent">next</span><br />system</h2>
                    <div className="checklist">
                        <div className="check-row">
                            <span className="chk-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></span>
                            <span>Direct collaboration with your technical team</span>
                        </div>
                        <div className="check-row">
                            <span className="chk-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></span>
                            <span>Security and reliability from day one</span>
                        </div>
                        <div className="check-row">
                            <span className="chk-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></span>
                            <span>Integrates with your existing systems</span>
                        </div>
                        <div className="check-row">
                            <span className="chk-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></span>
                            <span>Clear scope, structured delivery</span>
                        </div>
                        <div className="check-row">
                            <span className="chk-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></span>
                            <span>Built for enterprise, AI, and operational scale</span>
                        </div>
                        <div className="check-row">
                            <span className="chk-ico"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></span>
                            <span>From idea to deployed system, end-to-end</span>
                        </div>
                    </div>
                    <a href="#contact-sec" className="btn btn-primary btn-full">BOOK A FREE CONSULTATION</a>
                </div>

                <div className="cta-r">
                    <div>
                        <h3 className="form-head-title">Start your <span style={{ fontFamily: 'var(--f-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--gold)' }}>project</span></h3>
                        <p className="form-head-sub">Tell us what you're building. We'll take it from there.</p>
                    </div>
                    <div className="form-fields">
                        <div>
                            <label className="f-label">Full Name *</label>
                            <input type="text" className="f-input" placeholder="Juan dela Cruz" />
                        </div>
                        <div>
                            <label className="f-label">Email *</label>
                            <input type="email" className="f-input" placeholder="email@example.com" />
                        </div>
                        <div>
                            <label className="f-label">Mobile Number *</label>
                            <input type="tel" className="f-input" placeholder="+63 9XX XXX XXXX" />
                        </div>
                        <div>
                            <label className="f-label">Company</label>
                            <input type="text" className="f-input" placeholder="ABC Company" />
                        </div>
                        <div>
                            <label className="f-label">Project overview *</label>
                            <textarea className="f-textarea" placeholder="AI system for internal operations…"></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-full" id="submitBtn">START BUILDING</button>
                </div>
            </div>
        </section>
    );
}