import { Button, TextField } from '@mui/material'
import { ButtonWrapper, ContactBase, FromWrapper, InputWrapper, Title } from './Contact.style'
import React, { useState } from 'react'

import Loading from "..//Loading/Loading";
import SnackBar from '../SnackBar/SnackBar';
import axios from 'axios';

const Contact = () => {
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const [message, setMessage] = useState({
        color: "",
        text: "",
        icon: "",
    })

    const [loading, setLoading] = useState(false);

    const sendHandler = async (e) => {
        e.preventDefault();
        setLoading(true)

        const goingData = {
            email: email,
            comment: content
        }

        if (email !== "" && content !== "") {
            await axios.post(process.env.REACT_APP_CONTACT_URL, goingData).then(() => {
                setLoading(false)
                setMessage({
                    color: "green",
                    text: "Message send successfully",
                    icon: "success",
                })
            }).catch((error) => {
                setLoading(false)
                setMessage({
                    color: "red",
                    text: "Message is failed to send",
                    icon: "error",
                })
                console.log(error)
            })
        } else {
            setLoading(false)
            setMessage({
                color: "red",
                text: "Message is failed to send",
                icon: "error",
            })
        }

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
                        rows={5}
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }}
                    />
                </InputWrapper>
                <ButtonWrapper>
                    <Button onClick={sendHandler} className='contact-button' color={"secondary"} variant="contained">SEND</Button>
                </ButtonWrapper>
            </FromWrapper>
            {loading && <Loading loading={loading} />}
            {message && <SnackBar message={message} />}
        </ContactBase>
    )
}

export default Contact;