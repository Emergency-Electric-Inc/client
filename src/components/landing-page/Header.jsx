import React from 'react';
import {LandingPageSection, StyledContainer, StyledTypography} from '../../styles/landing-page/landingPageStyles';
import {Button} from '@material-ui/core';

function Header() {
    return (
        <LandingPageSection header id='page-top'>
            <StyledContainer maxWidth='lg' header>
                    <StyledTypography variant='h1' color='primary'>Emergency Electric INC</StyledTypography>
                    <StyledTypography variant='h4' color='primary'>24 Hour Service | Licensed and Insured | Residential
                        and Commercial</StyledTypography>
                    <Button color='primary' variant='contained'>Apply Now</Button>
            </StyledContainer>
        </LandingPageSection>
    )
}

export default Header;