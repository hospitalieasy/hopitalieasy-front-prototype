import { Button, TextField } from '@mui/material'
import { ButtonWrapper, ContactBase, FromWrapper, InputWrapper, Title } from './Contact.style'
import React, { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const sendHandler = (e) => {
        e.preventDefault();

        // post method

        // snackbar

        setContent("")
        setEmail("");
    }

    return (
        <ContactBase>
            <FromWrapper>
                <Title>Hospitaleasy | Contact Us</Title>
                <InputWrapper>
                    <>
                        <TextField
                            color='secondary'
                            className='contact-input'
                            sx={{ marginBottom: "20px", borderColor: '1px solid green', width: "280px" }}
                            id="outlined-basic-1"
                            label="E-mail"
                            variant="outlined"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </>
                    <TextField
                        color='secondary'
                        className='contact-input'
                        sx={{ marginBottom: "20px", width: "100%", minWidth: "280px" }}
                        id="outlined-multiline-flexible"
                        label="Content"
                        multiline
                        maxRows={4}
                        rows={5}
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }}
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <Button onClick={sendHandler} className='contact-button' color={"secondary"} variant="contained">SEND</Button>
                </ButtonWrapper>
            </FromWrapper>
        </ContactBase>
    )
}

export default Contact;