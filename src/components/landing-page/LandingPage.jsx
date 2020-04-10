import React from 'react';
import Header from "./Header";
import About from './About';
import Services from "./Services";
import Testimonials from "./Testimonials";
import Goals from "./Goals";
import Contact from "./Contact";

function LandingPage() {
    return (
        <>
            <Header/>
            <About />
            <Services />
            <Testimonials />
            <Goals />
            <Contact />
        </>
    )
}

export default LandingPage;