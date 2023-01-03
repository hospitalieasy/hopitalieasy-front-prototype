import "..//..//Utilities/Style/Button.css"

import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, ContentWrapper, DecisionMaker, FormLabel, FormWrapper, InformationTabBase, Label, Section, Title, TitleWrapper } from "./InformationTab.style"
import { INITIAL_STATE, apiPostReducer } from "../../Hooks/Reducer/postReducer";
import { useEffect, useReducer, useState } from "react";

import axios from "axios";
import { userSchema } from "../../FormValidation/UserValidation";

//TODO: replace the alert bars with notification bars

const InformationTab = (props) => {
    const { userIndex } = props;

    /* useReducer hook fetching the data states */
    const [state, dispatch] = useReducer(apiPostReducer, INITIAL_STATE);

    /* gets the new information from server */
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            ).then(response => {
                dispatch({ type: "FETCH_SUCCESS", payload: response.data[userIndex] })
            }).catch(error => {
                dispatch({ type: "FETCH_ERROR" })
            })
        }

        if (state.error) {
            console.log("Data fetch went wrong in InformationTab");
        }

        getData();
    }, [])

    /* switch switcher's the state */
    const [switcher, setSwitcher] = useState(true);

    /* sets values from texts inputs to put method*/
    const [inputData, setInputData] = useState({
        textName: state.apiPost.Name,
        textSurname: state.apiPost.Surname,
        textBirthdate: state.apiPost.Birthdate,
        textEmail: state.apiPost.Email,
        textPassword: state.apiPost.Password,
        textTelno: state.apiPost.Telno,
    });

    /* checks the inputs are valid */
    const checkInputs = async () => {
        /* checks the inputs are valid or not */
        let formData = {
            name: inputData.textName,
            surname: inputData.textSurname,
            birthdate: inputData.textBirthdate,
            email: inputData.textEmail,
            password: inputData.textPassword,
            telno: inputData.textTelno,
        }

        const isValid = await userSchema.isValid(formData);
        if (isValid) {
            /* sets the given data from user and sends to server */
            let newData = {
                Name: inputData.textName,
                Surname: inputData.textSurname,
                Birthdate: inputData.textBirthdate,
                Email: inputData.textEmail,
                Password: inputData.textPassword,
                Telno: inputData.textTelno,
            }
            const putData = async () => {
                const response = await axios.put(`https://hospitaleasyapi.azurewebsites.net/api/Patient/${state.apiPost.Id}`, newData).catch(error => (console.log("Put method went wrong in InformationTab: " + error)))

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
                <Title>{state.apiPost.Name}'s Information</Title>
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
                                <TextField id="filled-disabled-1" label={state.apiPost.Name} variant="filled" onChange={(e) => {
                                    setInputData({
                                        ...inputData,
                                        textName: e.target.value,
                                    })
                                }} />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Surname</FormLabel>
                                <TextField id="filled-disabled-2" label={state.apiPost.Surname} variant="filled" onChange={(e) => {
                                    setInputData({
                                        ...inputData,
                                        textSurname: e.target.value,
                                    })
                                }} />
                            </ContentWrapper>

                        </>
                    ) : (
                        <>

                            <ContentWrapper>
                                <FormLabel>Name</FormLabel>
                                <TextField disabled id="filled-disabled-1" label={state.apiPost.Name} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Surname</FormLabel>
                                <TextField disabled id="filled-disabled-2" label={state.apiPost.Surname} variant="filled" />
                            </ContentWrapper>

                        </>
                    )}
                </Section>

                <Section>
                    {visible ? (
                        <>
                            <ContentWrapper>
                                <FormLabel>Phone</FormLabel>
                                <TextField id="filled-disabled-3" label={state.apiPost.Telno} variant="filled" onChange={(e) => {
                                    setInputData({
                                        ...inputData,
                                        textTelno: e.target.value,
                                    })
                                }} />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Birthday</FormLabel>
                                <TextField id="filled-disabled-4" label={state.apiPost.Birthdate} variant="filled" onChange={(e) => {
                                    setInputData({
                                        ...inputData,
                                        textBirthdate: e.target.value,
                                    })
                                }} />
                            </ContentWrapper>
                        </>
                    ) : (
                        <>
                            <ContentWrapper>
                                <FormLabel>Phone</FormLabel>
                                <TextField disabled id="filled-disabled-3" label={state.apiPost.Telno} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Birthday</FormLabel>
                                <TextField disabled id="filled-disabled-4" label={state.apiPost.Birthdate} variant="filled" />
                            </ContentWrapper>
                        </>
                    )}

                </Section>

                <Section>
                    {visible ? (
                        <>
                            <ContentWrapper>
                                <FormLabel>Email</FormLabel>
                                <TextField disabled id="filled-disabled-5" label={state.apiPost.Email} onChange={(e) => {
                                    setInputData({
                                        ...inputData,
                                        textEmail: e.target.value,
                                    })
                                }} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Password</FormLabel>
                                <TextField id="filled-disabled-6" label={state.apiPost.Password} onChange={(e) => {
                                    setInputData({
                                        ...inputData,
                                        textPassword: e.target.value,
                                    })
                                }} variant="filled" />
                            </ContentWrapper>
                        </>

                    ) : (
                        <>
                            <ContentWrapper>
                                <FormLabel>Email</FormLabel>
                                <TextField disabled id="filled-disabled-5" label={state.apiPost.Email} variant="filled" />
                            </ContentWrapper>
                            <ContentWrapper>
                                <FormLabel>Password</FormLabel>
                                <TextField disabled id="filled-disabled-6" label={state.apiPost.Password} variant="filled" />
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