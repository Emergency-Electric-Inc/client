import React from 'react';
import Header from "./Header";
import About from './About';
import Services from "./Services";
import Testimonials from "./Testimonials";

function LandingPage() {
    return (
        <>
            <Header/>
            <About />
            <Services />
            <Testimonials />
        </>
    )
}

export default LandingPage;