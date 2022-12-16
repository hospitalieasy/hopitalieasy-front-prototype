import "..//..//Utilities/Style/Button.css"

import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, DecisionMaker, FormWrapper, InformationTabBase, Label, Section, Title, TitleWrapper } from "./InformationTab.style"
import { useEffect, useState } from "react";

import axios from "axios";
import { userSchema } from "../../Utilities/Validations/UserValidation";

// TODO: form validation and notification

const InformationTab = (props) => {
    const {
        userIndex,
    } = props;

    /* sets values from API to text label */
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [telno, setTelno] = useState();

    /* sets values from texts inputs to put method*/
    const [textName = name, setTextName] = useState();
    const [textSurname = surname, setTextSurname] = useState(surname);
    const [textBirthdate = birthdate, setTextBirthdate] = useState(birthdate);
    const [textEmail = email, setTextEmail] = useState(email);
    const [textPassword = password, setTextPassword] = useState(password);
    const [textTelno = telno, setTextTelno] = useState(telno);


    /* switcher state */
    const [switcher, setSwitcher] = useState(true);

    /* checks is there any current same email address */
    const [emailExist, setEmailExist] = useState();

    /* gets the new information from server */
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            );
            setId(response.data[userIndex].PatientId)
            setName(response.data[userIndex].Name)
            setSurname(response.data[userIndex].Surname)
            setBirthdate(response.data[userIndex].Birthdate)
            setEmail(response.data[userIndex].Email)
            setPassword(response.data[userIndex].Password)
            setTelno(response.data[userIndex].Telno)
        }
        getData();
    }, [])

    /* makes the texts are visible */

    const [visible, setVisible] = useState(false);

    const visibleHandler = () => {
        setTextEmail("")
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true);
        }
    }

    /* checks is the e-mail already exist  */

    useEffect(() => {
        const getData = async (e) => {
            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            );
            if (!(textEmail == "")) {
                let index = 0;
                while (index < response.data.length) {
                    if ((response.data[index].Email == textEmail)) {
                        setEmailExist(true)
                        break;
                    }

                    if ((response.data[index].Email !== textEmail)) {
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
    }, [textEmail])


    /* checks the inputs are valid */

    const checkInputs = async () => {
        let formData = {
            name: textName,
            surname: textSurname,
            birthdate: textBirthdate,
            email: textEmail,
            password: textPassword,
            telno: textTelno,
        }

        const isValid = await userSchema.isValid(formData);

        if (isValid && (!emailExist)) {
            let data = {
                Name: textName,
                Surname: textSurname,
                Birthdate: textBirthdate,
                Email: textEmail,
                Password: textPassword,
                Telno: textTelno,
            }
            const putData = async () => {
                const response = await axios.put(`https://hospitaleasyapi.azurewebsites.net/api/Patient/${id}`, data)
                setVisible(false)
                setSwitcher(false)
            }
            putData();
            alert("Information changed successfully")
        } else if (emailExist) {
            alert("This e-mail address is exist please enter another one")
        } else {
            alert("Inputs are not valid")
        }
    }

    return (
        <InformationTabBase>
            <TitleWrapper>
                <Title>{name}'s Information</Title>
            </TitleWrapper>
            <DecisionMaker>
                <Label>Edit Information</Label>
                {switcher ? (<Switch onClick={visibleHandler} color="warning" />) : (<Switch disabled onClick={visibleHandler} color="warning" />)}
            </DecisionMaker>
            <FormWrapper>
                <Section>
                    {visible ? (
                        <><TextField id="filled-disabled-1" label={name} variant="filled" onChange={(e) => { setTextName(e.target.value) }} />

                            <TextField id="filled-disabled-2" label={surname} variant="filled" onChange={(e) => { setTextSurname(e.target.value) }} /></>
                    ) : (
                        <><TextField disabled id="filled-disabled-1" label={name} variant="filled" /><TextField disabled id="filled-disabled-2" label={surname} variant="filled" /></>
                    )}
                </Section>

                <Section>
                    {visible ? (
                        <><TextField id="filled-disabled-3" label={telno} variant="filled" onChange={(e) => { setTextTelno(e.target.value) }} />

                            <TextField id="filled-disabled-4" label={birthdate} variant="filled" onChange={(e) => { setTextBirthdate(e.target.value) }} /></>
                    ) : (
                        <><TextField disabled id="filled-disabled-3" label={telno} variant="filled" /><TextField disabled id="filled-disabled-4" label={birthdate} variant="filled" /></>
                    )}

                </Section>

                <Section>
                    {visible ? (<>
                        <TextField id="filled-disabled-5" label={email} onChange={(e) => { setTextEmail(e.target.value); }} variant="filled" />

                        <TextField id="filled-disabled-6" label={password} onChange={(e) => { setTextPassword(e.target.value); }} variant="filled" /></>

                    ) : (<>

                        <TextField disabled id="filled-disabled-5" label={email} variant="filled" />

                        <TextField disabled id="filled-disabled-6" label={password} variant="filled" /></>)}
                </Section>
            </FormWrapper>
            <ButtonWrapper>
                {visible ? (
                    <Button onClick={checkInputs} variant="contained">SAVE</Button>
                ) : (
                    <Button disabled variant="contained">SAVE</Button>
                )}
            </ButtonWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;