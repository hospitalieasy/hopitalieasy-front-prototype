import "..//..//Utilities/Style/Button.css"

import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, ContentWrapper, DecisionMaker, FormLabel, FormWrapper, InformationTabBase, Label, Section, Title, TitleWrapper } from "./InformationTab.style"
import { useEffect, useState } from "react";

import axios from "axios";
import { userSchema } from "../../FormValidation/UserValidation";

const InformationTab = (props) => {
    const { userIndex } = props;

    //TODO: change states with reducers
    //TODO: replace the alert bars with notification bars

    /* sets values from API to text labels */
    const [apiId, setApiId] = useState();
    const [apiName, setApiName] = useState();
    const [apiSurname, setApiSurname] = useState();
    const [apiBirthdate, setApiBirthdate] = useState();
    const [apiEmail, setApiEmail] = useState();
    const [apiPassword, setApiPassword] = useState();
    const [apiTelno, setApiTelno] = useState();

    /* gets the new information from server */
    useEffect(() => {
        const getData = async () => {

            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            ).catch(error => (console.log(error)))

            setApiId(response.data[userIndex].PatientId)
            setApiName(response.data[userIndex].Name)
            setApiSurname(response.data[userIndex].Surname)
            setApiBirthdate(response.data[userIndex].Birthdate)
            setApiEmail(response.data[userIndex].Email)
            setApiPassword(response.data[userIndex].Password)
            setApiTelno(response.data[userIndex].Telno)
        }
        getData();

    }, [])

    /* switchs the state */
    const [switcher, setSwitcher] = useState(true);

    /* sets values from texts inputs to put method*/
    const [textName = apiName, setTextName] = useState();
    const [textSurname = apiSurname, setTextSurname] = useState();
    const [textBirthdate = apiBirthdate, setTextBirthdate] = useState();
    const [textEmail = apiEmail, setTextEmail] = useState();
    const [textPassword = apiPassword, setTextPassword] = useState();
    const [textTelno = apiTelno, setTextTelno] = useState();

    /* checks the inputs are valid */
    const checkInputs = async () => {
        /* checks the inputs are valid or not */
        let formData = {
            name: textName,
            surname: textSurname,
            birthdate: textBirthdate,
            email: textEmail,
            password: textPassword,
            telno: textTelno,
        }

        const isValid = await userSchema.isValid(formData);
        if (isValid) {
            /* sets the given data from user and sends to server */
            let newData = {
                Name: textName,
                Surname: textSurname,
                Birthdate: textBirthdate,
                Email: textEmail,
                Password: textPassword,
                Telno: textTelno,
            }
            const putData = async () => {
                const response = await axios.put(`https://hospitaleasyapi.azurewebsites.net/api/Patient/${apiId}`, newData).catch(error => (console.log(error)))

                setVisible(false)
                setSwitcher(false)
            }
            putData();
            alert("Information changed successfully")
        } else {
            alert("Inputs are not valid")
        }
    }

    /* makes the texts are visible and not visible */
    const [visible, setVisible] = useState(false);
    const visibleHandler = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true);
        }
    }

    return (
        <InformationTabBase>
            <TitleWrapper>
                <Title>{apiName}'s Information</Title>
            </TitleWrapper>
            <DecisionMaker>
                <Label>Edit Information</Label>
                {switcher ? (
                    <Switch onClick={visibleHandler} color="warning" />) :
                    (<Switch disabled onClick={visibleHandler} color="warning" />)
                }
            </DecisionMaker>
            <FormWrapper>

                <Section>
                    {visible ? (
                        <>

                            <ContentWrapper>
                                <FormLabel>Name</FormLabel>
                                <TextField id="filled-disabled-1" label={apiName} variant="filled" onChange={(e) => { setTextName(e.target.value) }} />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Surname</FormLabel>
                                <TextField id="filled-disabled-2" label={apiSurname} variant="filled" onChange={(e) => { setTextSurname(e.target.value) }} />
                            </ContentWrapper>

                        </>
                    ) : (
                        <>

                            <ContentWrapper>
                                <FormLabel>Name</FormLabel>
                                <TextField disabled id="filled-disabled-1" label={apiName} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Surname</FormLabel>
                                <TextField disabled id="filled-disabled-2" label={apiSurname} variant="filled" />
                            </ContentWrapper>

                        </>
                    )}
                </Section>

                <Section>
                    {visible ? (
                        <>
                            <ContentWrapper>
                                <FormLabel>Phone</FormLabel>
                                <TextField id="filled-disabled-3" label={apiTelno} variant="filled" onChange={(e) => { setTextTelno(e.target.value) }} />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Birthday</FormLabel>
                                <TextField id="filled-disabled-4" label={apiBirthdate} variant="filled" onChange={(e) => { setTextBirthdate(e.target.value) }} />
                            </ContentWrapper>
                        </>
                    ) : (
                        <>
                            <ContentWrapper>
                                <FormLabel>Phone</FormLabel>
                                <TextField disabled id="filled-disabled-3" label={apiTelno} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Birthday</FormLabel>
                                <TextField disabled id="filled-disabled-4" label={apiBirthdate} variant="filled" />
                            </ContentWrapper>
                        </>
                    )}

                </Section>

                <Section>
                    {visible ? (
                        <>
                            <ContentWrapper>
                                <FormLabel>Email</FormLabel>
                                <TextField disabled id="filled-disabled-5" label={apiEmail} onChange={(e) => { setTextEmail(e.target.value); }} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Password</FormLabel>
                                <TextField id="filled-disabled-6" label={apiPassword} onChange={(e) => { setTextPassword(e.target.value); }} variant="filled" />
                            </ContentWrapper>
                        </>

                    ) : (
                        <>
                            <ContentWrapper>
                                <FormLabel>Email</FormLabel>
                                <TextField disabled id="filled-disabled-5" label={apiEmail} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Password</FormLabel>
                                <TextField disabled id="filled-disabled-6" label={apiPassword} variant="filled" />
                            </ContentWrapper>
                        </>
                    )}
                </Section>
            </FormWrapper>
            <ButtonWrapper>
                {visible ? (
                    <Button className="save" onClick={checkInputs} variant="contained">SAVE</Button>
                ) : (
                    <Button className="save" disabled variant="contained">SAVE</Button>
                )}
            </ButtonWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;