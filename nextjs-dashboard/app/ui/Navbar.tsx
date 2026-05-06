import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav id="navbar">
            <div className="nb-logo">
                <Link href="/">
                    <Image src="https://res.cloudinary.com/dvn2qowpg/image/upload/v1777399428/LWS/Logo/Wordmark_Red_pjjmyc.png" alt="Lightweight Solutions" width={150} height={50} />
                </Link>
            </div>
            <div className="nb-links">
                <Link href="#services" className="nb-link">Services</Link>
                <Link href="#products" className="nb-link">Products</Link>
                <Link href="#trophy" className="nb-link">Recognition</Link>
                <Link href="#contact-sec" className="nb-link">Contact</Link>
            </div>
            <div className="nb-cta">
                <div className="nb-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <Link href="#contact-sec" className="btn btn-primary">TALK TO US</Link>
            </div>
        </nav>
    );
}