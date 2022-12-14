import "..//..//Utilities/Style/Button.css"

import { FormWrapper, Label, SingUpFormBase, Text, Title, UserAcceptContent } from "./SignUpForm.style"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Switch, TextField } from "@mui/material";

import BasicDatePicker from "../BasicDatePicker/BasicDatePicker";
import { Button } from "@mui/material";
import Terms from "../Terms/Terms";
import axios from "axios";

// TODO: post the user, get the index of posted user and set it, notification after sign up reset texts (with set)

const SignUpForm = (props) => {

    const {
        user,
        setUser,
        setUserIndex,
    } = props;

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [birthday, setBirthday] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telno, setTelno] = useState("");

    const [loginNotification, setLoginNotification] = useState();

    const navigate = useNavigate();
    let response;
    let index = 0;
    const getData = async (e) => {
        e.preventDefault();

        try {
            response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            );
        } catch (error) {
            console.log(error.response + "get has a error on login page")
        }

        if (!((email == "") || (password == ""))) {
            while (index < response.length) {
                if ((response[index].Email == email) && (response[index].Password == password)) {
                    setUserIndex(index)
                    setLoginNotification(true);
                    setTimeout(() => {
                        setUser(true)
                        navigate("/app-screen")
                    }, 2000);
                    break;
                }
                if (index === (response.length - 1)) {
                    setLoginNotification(false);
                    break;
                }
                index++;
            }
        } else {
            setLoginNotification(false);
        }

    }

    useEffect(() => {
        if (!user) {
            setLoginNotification(false);
        }
    }, [])

    useEffect(() => {

        if (!((email == "") || (password == ""))) {
            while (index < response.length) {
                if ((response[index].Email == email)) {
                    setLoginNotification(false)
                    if ((response[index].Password == password)) {
                        setLoginNotification(true);
                    }
                }

                if ((response[index].Password == password)) {
                    setLoginNotification(false)
                    if ((response[index].email == email)) {
                        setLoginNotification(true);
                    }
                }
                index++;
            }

        } else {
            setLoginNotification(false);
        }

    }, [email, password])


    return (
        <SingUpFormBase>
            <FormWrapper>
                <Title>Sign Up</Title>

                <TextField id="outlined-basic-1" label="Name" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setName(e.target.value)} />

                <TextField id="outlined-basic-2" label="Surname" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setSurname(e.target.value)} />

                <BasicDatePicker onChange={(e) => setBirthday(e.target.value)} />

                <TextField id="outlined-basic-3" label="E-mail" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setEmail(e.target.value)} />

                <TextField id="outlined-password-input-4" label="Password" type={"password"} autoComplete={"current-password"} variant="standard" style={{ padding: "10px 0px" }}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <TextField id="outlined-basic-5" label="Tel-no" variant="standard" style={{ padding: "10px 0px" }} onChange={(e) => setTelno(e.target.value)} />

                <UserAcceptContent style={{ padding: "10px 0px" }}>
                    <Switch defaultChecked color="warning" />
                    <Label>
                        <Text>Accept Terms</Text>
                        <Terms />
                    </Label>
                </UserAcceptContent>

                <Button onClick={postData} className="sign" component={Link} to={'/app-screen'} variant="contained" color="success">Sign Up</Button>

            </FormWrapper>
        </SingUpFormBase>
    );
}

export default SignUpForm;