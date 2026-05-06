import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero">
            <p className="hero-eyebrow">SOFTWARE BUILT FOR CLARITY AT SCALE.</p>
            <h1 className="t-hero hero-heading">
                <span className="line-med">Let's simplify</span>
                <span className="line-blk">TECHNOLOGY</span>
            </h1>
            <p className="hero-sub">AI-powered &nbsp;·&nbsp; Agile &nbsp;·&nbsp; Built for Southeast Asia</p>
            <div className="hero-cta">
                <a href="#contact-sec" className="btn btn-primary">BOOK A FREE CONSULTATION</a>
            </div>
            <div className="hero-stats">
                <div className="stat-pill">
                    <div className="stat-n">100<span className="accent">+</span></div>
                    <div className="stat-l">Projects delivered</div>
                </div>
                <div className="stat-pill">
                    <div className="stat-n">16<span className="accent">+</span></div>
                    <div className="stat-l">Years in business</div>
                </div>
                <div className="stat-pill">
                    <div className="stat-n">SEA</div>
                    <div className="stat-l">Market focus</div>
                </div>
            </div>
        </section>
    );
}