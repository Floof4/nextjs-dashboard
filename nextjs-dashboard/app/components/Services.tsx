import Link from "next/link";
import Image from "next/image";

export default function Services() {
    return (
        <section id="services">
            <div className="wrap">
                <div className="svc-card">
                    <div className="svc-left">
                        <span className="sec-label">Our services</span>
                        <h2 className="svc-left-title">Built <span className="accent">around</span><br />your goals</h2>
                        <div className="svc-list" id="svcList"></div>
                    </div>
                    <div className="svc-right" id="svcRight">
                        <div className="svc-detail">
                            <div className="svc-d-eyebrow" id="dEyebrow">Service · 01</div>
                            <h3 className="svc-d-title" id="dTitle">AI Development</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}