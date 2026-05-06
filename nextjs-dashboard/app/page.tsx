import Navbar from "@/app/ui/Navbar";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";
import Services from "@/app/components/Services";
import Why from "@/app/components/Why";
import Products from "@/app/components/Products";
import Trophy from "@/app/components/Trophy";
import Contact from "@/app/components/Contact";
import FooterCTA from "@/app/components/FooterCTA";
import Footer from "@/app/components/Footer"; 

export default function Page() {
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
