import React from 'react';
import Header from "./Header";
import About from './About';
import Services from "./Services";
import Testimonials from "./Testimonials";
import Goals from "./Goals";
import Contact from "./Contact";
import Footer from "./Footer";

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