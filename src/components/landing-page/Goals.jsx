import React from 'react';
import {LandingPageSection, StyledTypography, StyledContainer} from "../../styles/landing-page/landingPageStyles";
import Buttons from "./Buttons";

function Goals() {
    return (
        <LandingPageSection inverted id='goals'>
            <StyledContainer maxWidth='lg' description>
                <StyledTypography variant='h2'>Our Goals</StyledTypography>
                <StyledTypography paragraph>We are committed to excellence. Our goal is to exceed your
                    expectations. Using our years of experience and expertise and by
                    providing a dynamic and skilled team, we will ensure your projects are
                    a complete success. Our primary measure of success is customer
                    satisfaction. We define customers as employees, partners and clients.
                    Our intent is to earn and maintain the respect and trust of everyone
                    we come in contact with when representing Emergency Electric Inc.</StyledTypography>
                <Buttons color='secondary' desc='Contact Us' link='#contact' />
            </StyledContainer>
        </LandingPageSection>
    )
}

export default Goals;