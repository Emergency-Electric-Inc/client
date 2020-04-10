import React from 'react';
import {Image, StyledTypography} from "../../../styles/landing-page/landingPageStyles";

function Picture({picture, title, summary}) {
    return (
        <>
            <Image src={picture} alt={title}/>
            <StyledTypography variant='h4'>{title}</StyledTypography>
            <StyledTypography paragraph>{summary}</StyledTypography>
        </>
    )
}

export default Picture;