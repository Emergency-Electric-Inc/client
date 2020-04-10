import React, {useState} from 'react';
import {useForm} from "../../hooks/useForm";
import {
    ButtonContainer,
    Form,
    LandingPageSection,
    StyledContainer,
    StyledPaper,
    StyledTextField,
    StyledTypography
} from "../../styles/landing-page/landingPageStyles";
import {Button, Grid, IconButton} from "@material-ui/core";
import Scrollchor from 'react-scrollchor'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'

const contactFields = [
    {
        name: 'firstName',
        label: 'First Name',
        sm: 4
    },
    {
        name: 'lastName',
        label: 'Last Name',
        sm: 4
    },
    {
        name: 'contact',
        label: 'Email or Phone Number',
        sm: 4,
    },
    {
        name: 'subject',
        label: 'Subject'
    },
    {
        name: 'message',
        label: 'Message',
        multiline: true
    }
]

function Contact() {
    const [fields] = useState(contactFields);
    const [values, handleChange, handleSubmit, handleReset] = useForm({
        firstName: '',
        lastName: '',
        contact: '',
        subject: '',
        message: ''
    }, formSubmit)

    function formSubmit() {
        console.log(values);
    }

    return (
        <>
            <LandingPageSection id='contact'>
                <StyledContainer maxWidth='lg' description>
                    <StyledPaper>
                        <StyledTypography variant='h4'>Contact Us</StyledTypography>
                        <StyledTypography variant='h2'>Send Us A Message!</StyledTypography>
                        <Form onSubmit={handleSubmit}>
                            <Grid container>
                                {fields.map(({name, label, sm, multiline}, id) => (
                                    <Grid item xs={12} sm={sm} key={id}>
                                        <StyledTextField
                                            name={name}
                                            label={label}
                                            multiline={multiline}
                                            required
                                            onChange={handleChange}
                                            value={values[name]}
                                            id={name}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            <ButtonContainer form>
                                <Button color='primary' onClick={handleReset}>Reset</Button>
                                <Button color='primary' type='submit'>Submit</Button>
                                <IconButton aria-label="Scroll To Top" color='primary' component={Scrollchor}
                                            to='#page-top'>
                                    <ArrowUpwardIcon/>
                                </IconButton>
                            </ButtonContainer>
                        </Form>
                    </StyledPaper>
                </StyledContainer>
            </LandingPageSection>
        </>
    )
}

export default Contact;
