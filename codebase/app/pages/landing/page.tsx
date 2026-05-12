import Navbar from "@/app/pages/landing/components/Navbar";
import Hero from "@/app/pages/landing/components/Hero";
import Marquee from "@/app/pages/landing/components/Marquee";
import Services from "@/app/pages/landing/components/Services";
import Why from "@/app/pages/landing/components/Why";
import Products from "@/app/pages/landing/components/Products";
import Trophy from "@/app/pages/landing/components/Trophy";
import Contact from "@/app/pages/landing/components/Contact";
import FooterCTA from "@/app/pages/landing/components/FooterCTA";
import Footer from "@/app/pages/landing/components/Footer"; 

export default function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Marquee />
            <Services />
            <Why />
            <Products />
            <Trophy />
            <Contact />
            <FooterCTA />
            <Footer /> 
        </>
    );
}
