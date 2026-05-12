"use client";

import Link from "next/link";

export default function FooterCTA() {
    return (
        <div id="footer-cta">
            <h2 className="footer-cta-h">
                <span className="line-med">Let's simplify</span>
                <span className="line-blk">TECHNOLOGY</span>
            </h2>
            <Link href="#contact-sec" className="btn btn-primary">BOOK A FREE CONSULTATION</Link>
        </div>
    );
}