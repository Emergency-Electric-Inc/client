import React from 'react';
import {Grid} from "@material-ui/core";
import {LandingPageSection, StyledContainer, StyledTypography} from "../../styles/landing-page/landingPageStyles";
import Testimonial from "./Testimonial";
import Buttons from './Buttons'

function Testimonials() {
    return (
        <LandingPageSection id='testimonials'>
            <StyledContainer maxWidth='lg'>
                <StyledTypography variant='h4'>Testimonials</StyledTypography>
                <StyledTypography variant='h2'>Hear from our customers</StyledTypography>
                <Grid container spacing={2}>
                    <Grid item xs={0} sm/>
                    <Grid item xs={12} sm={5}>
                        <Testimonial
                            author='John Robertson'
                            summary='They do very good electrical work. They are friendly,
                                conscientious about their work, arrive on time, charge fair
                                prices and make good recommendations about our electrical
                                service. I liked their personal touch, and helpful, attentive
                                interest. I have used them twice and would use them again'
                        />
                    </Grid>
                    <Grid item xs={0} sm/>
                    <Grid item xs={12} sm={5}>
                        <Testimonial
                            author='Arlene W.'
                            summary='They were very efficient, prompt and courteous. They even did a
                                little bit extra that they really did not have to do. They were
                                quick. I have used them twice now'
                        />
                    </Grid>
                    <Grid item xs={0} sm/>
                </Grid>
                <Buttons color='primary' desc='Our Goals' link='#goals'/>
            </StyledContainer>
        </LandingPageSection>
    )
}

export default Testimonials