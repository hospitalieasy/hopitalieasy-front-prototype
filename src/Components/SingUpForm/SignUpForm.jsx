import "..//..//Utilities/Style/Button.css"

import { FormWrapper, Label, SingUpFormBase, Text, Title, UserAcceptContent } from "./SignUpForm.style"
import React, { useEffect, useState } from "react";
import { Switch, TextField } from "@mui/material";

import { Button } from "@mui/material";
import Terms from "../Terms/Terms";
import axios from "axios";
import { userSchema } from "..//..//Utilities/Validations/UserValidation"

const SignUpForm = () => {

    /* sets the user inputs from texts */
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [telno, setTelno] = useState();

    /* sets the email true or false */
    const [emailExist, setEmailExist] = useState();

    /* checks is there are any exist email */
    useEffect(() => {
        const getData = async () => {

            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            ).catch(error => (console.log(error)))

            if (!(email == "")) {
                let index = 0;
                while (index < response.data.length) {
                    if ((response.data[index].Email == email)) {
                        setEmailExist(true)
                        break;
                    }

                    if ((response.data[index].Email !== email)) {
                        setEmailExist(false)
                    }

                    if (index === (response.data.length - 1)) {
                        break;
                    }
                    index++;
                }
            }
        }
        getData();

    }, [email])

    const checkInputs = async () => {
        /* form validation */
        let formData = {
            name: name,
            surname: surname,
            birthdate: birthdate,
            email: email,
            password: password,
            telno: telno,
        }

        const isValid = await userSchema.isValid(formData);

        if (isValid && !emailExist && terms) {
            /* sets the data from user */
            let goingData = {
                Name: name,
                Surname: surname,
                Birthdate: birthdate,
                Email: email,
                Password: password,
                Telno: telno,
            };
            const postData = async (e) => {
                const response = await axios.post(
                    `https://hospitaleasyapi.azurewebsites.net/api/Patient`, goingData
                ).catch(error => (console.log(error)))
            }
            postData();
            alert("Signed up successfully")
            setEmail("")
        } else if (!terms && !isValid) {
            alert("Inputs are not valid")
        } else if (!terms && isValid) {
            alert("Please accept the terms")
        } else if (emailExist) {
            alert("This e-mail address is exist please enter another one")
        } else {
            alert("Inputs are not valid")
        }
    }


    /* checks the terms condition */
    const [terms, setTerms] = useState();

    /* terms validation */
    const acceptHandler = () => {
        if (terms) {
            setTerms(false)
        } else {
            setTerms(true)
        }
    }

    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>Sign Up</Title>

                <TextField id="outlined-basic-1" label="Name" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setName(e.target.value)} />

                <TextField id="outlined-basic-2" label="Surname" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setSurname(e.target.value)} />

                <TextField id="outlined-basic-3" label="XX/XX/XXXX" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setBirthdate(e.target.value)} />

                <TextField id="outlined-basic-4" label="E-mail" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setEmail(e.target.value)} />

                <TextField id="outlined-password-input-5" label="Password (at least 5 character)" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField id="outlined-basic-6" label="Tel-no" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setTelno(e.target.value)} />

                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Switch onClick={acceptHandler} color="warning" />
                    <Label>
                        <Text>Accept Terms</Text>
                        <Terms />
                    </Label>
                </UserAcceptContent>

                <Button onClick={checkInputs} className="sign" variant="contained" color="success">
                    SIGN UP
                </Button>

            </FormWrapper>
        </SingUpFormBase >
    );
}

export default SignUpForm;