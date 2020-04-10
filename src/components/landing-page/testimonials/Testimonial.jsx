import React from 'react';
import {StyledPaper, StyledTypography} from "../../../styles/landing-page/landingPageStyles";

function Testimonial({summary, author}) {
    return (
        <StyledPaper>
            <StyledTypography paragraph>{summary}</StyledTypography>
            <cite>{author}</cite>
        </StyledPaper>
    )
}

export default Testimonial