"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <div id="footer-body">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div>
                        <Image src="https://res.cloudinary.com/dvn2qowpg/image/upload/v1777399428/LWS/Logo/Wordmark_Red_pjjmyc.png" alt="Lightweight Solutions" width={100} height={22}/>
                            <p className="footer-brand-desc">Smart, simplified software for enterprises and startups across Southeast Asia. Founded 2008, Makati.</p>
                            <div className="footer-socials">
                                <Link href="https://fb.com/LightweightSolutions" target="_blank" className="f-social" aria-label="Facebook">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                </Link>
                                <Link href="https://linkedin.com/company/12687215" target="_blank" className="f-social" aria-label="LinkedIn">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                                </Link>
                                <Link href="https://twitter.com/LW_Solutions" target="_blank" className="f-social" aria-label="X">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2" /></svg>
                                </Link>
                            </div>
                            <div className="footer-contacts">
                                <Link href="mailto:info@lightweightsolutions.me">info@lightweightsolutions.me</Link>
                                <Link href="tel:+639175974975">+63 917 597 4975</Link>
                                <Link href="tel:+63270071075">(02) 7007 1075</Link>
                                <Link href="mailto:hr@lightweightsolutions.me" style={{ marginTop: '6px', display: 'block' }}>hr@lightweightsolutions.me</Link>
                            </div>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            <li><Link href="#">Custom Software</Link></li>
                            <li><Link href="#">Mobile Apps</Link></li>
                            <li><Link href="#">Website Dev</Link></li>
                            <li><Link href="#">Staff Augmentation</Link></li>
                            <li><Link href="#">Digital Marketing</Link></li>
                            <li><Link href="#">AI Chatbot</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Products</h4>
                        <ul>
                            <li><Link href="#">INDX</Link></li>
                            <li><Link href="#">eRaffle</Link></li>
                            <li><Link href="#">Chatbot</Link></li>
                            <li><Link href="#">Data Bank</Link></li>
                        </ul>
                        <h4 style={{ marginTop: '24px' }}>Company</h4>
                        <ul>
                            <li><Link href="#">About us</Link></li>
                            <li><Link href="#">Portfolio</Link></li>
                            <li><Link href="#">Careers</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Partners</h4>
                        <ul>
                            <li><Link href="#">AWS Cloud</Link></li>
                            <li><Link href="#">Huawei Cloud</Link></li>
                            <li><Link href="#">Zoho</Link></li>
                        </ul>
                        <h4 style={{ marginTop: '24px' }}>Offices</h4>
                        <ul>
                            <li><Link href="#" style={{ lineHeight: '1.5' }}>Makati, Philippines</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bar">
                    <p>© 2026 Lightweight Solutions. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Sitemap</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}