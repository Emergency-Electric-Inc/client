import React from 'react';
import Header from "./header/Header";
import About from './about/About';
import Services from "./services/Services";
import Testimonials from "./testimonials/Testimonials";
import Goals from "./goals/Goals";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

function LandingPage() {
    return (
        <>
            <Header/>
            <About />
            <Services />
            <Testimonials />
            <Goals />
            <Contact />
            <Footer />
        </>
    )
}

export default LandingPage;