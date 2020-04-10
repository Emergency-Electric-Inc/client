import React from 'react';
import {Grid} from '@material-ui/core';
import {LandingPageSection, StyledContainer, StyledTypography} from "../../../styles/landing-page/landingPageStyles";
import Buttons from '../shared/Buttons';
import residential from '../../../assets/erik-mclean-1117932-unsplash.jpg';
import commercial from '../../../assets/osama-saeed-1433239-unsplash.jpg';
import Picture from "./Picture";

function Services() {
    return (
        <LandingPageSection inverted id='services'>
            <StyledContainer>
                <StyledTypography variant='h4'>Services</StyledTypography>
                <StyledTypography variant='h2'>We Specialize In</StyledTypography>
                <Grid container>
                    <Grid item xs={0} sm/>
                    <Grid item xs={12} sm={5}>
                        <Picture
                            picture={residential}
                            title='Residential'
                            summary='Emergency Electric, Inc can assist with any type of residential renovation, whether you are building an extension to your home or installing recessed lights in your condo.'
                        />
                    </Grid>
                    <Grid item xs={0} sm/>
                    <Grid item xs={12} sm={5}>
                        <Picture
                            picture={commercial}
                            title='Commercial'
                            summary='Emergency Electric, Inc offers a variety of commercial services, by our commercial electrical contractors.'
                        />
                    </Grid>
                    <Grid item xs={0} sm/>
                </Grid>
                <Buttons color='secondary' desc='What Others Say' link='#testimonials'/>
            </StyledContainer>
        </LandingPageSection>
    )
}

export default Services;