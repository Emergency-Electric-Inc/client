import styled, {css} from 'styled-components';
import headerImage from '../../assets/electrical-electrician-electricity-1435183.jpg'
import {Button, Container, Grid, Paper, TextField, Typography} from "@material-ui/core";

export const LandingPageSection = styled.section`
    padding: 8rem 0;
        
    h4 {
        text-transform: uppercase;
    }
    
    ${props => props.inverted && css`
        background-color: #351a1a;
        color: #b48a66;
    `}
    
    ${props => props.header && css`
        min-height: 30rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background: linear-gradient(90deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 100%),url(${headerImage});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        
        @media (min-width: 992px) {
            height: 100vh;
        }
    `}
`;

export const StyledContainer = styled(Container)`
    text-align: center;
    
    ${props => props.header && css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        height: 85vh;
        
        @media (min-width: 992px) {
            height: auto;
        }
    `}
    
    ${props => props.top && css`
        margin-top: 64px;
    `}
    
    ${props => props.description && css`
        width: 90%;
    `}
`;

export const StyledTypography = styled(Typography)`
    margin-bottom: 16px;
    
    ${props => props.header && css`
        font-weight: bolder;
    `}
    
    ${props => props.spacing && css`
        margin: 0;
        padding-top: 32px;
    `}
    
    ${props => props.noMargin && css`
        margin: 0;
    `}
    
    ${props => props.title && css`
        text-transform: uppercase;
        margin: 16px 0;
    `}
`;

export const Image = styled.img`
    padding: .25rem;
    background-color: #fff;
    border: 1px solid #dee236;
    border-radius: 1rem;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    margin: 16px 0;
`;

export const StyledPaper = styled(Paper)`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonContainer = styled.div`
    margin: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    flex-direction: row;
  }
  ${props => props.form && css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `}
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 16px 0;
`;

export const StyledTextField = styled(TextField)`
    width: 100%;
    padding-right: 16px;
`;

export const StyledFooter = styled.footer`
    ${props => props.inverted && css`
        padding: 32px 0 0;
        background-color: #222222;
        color: #b48a66;
    `}
`;

export const StyledGrid = styled(Grid)`
    margin-bottom: 16px;
`;

export const StyledSpace = styled.div`
    margin: 16px 0;
`;