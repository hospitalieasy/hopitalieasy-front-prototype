import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, ContentWrapper, DecisionMaker, FormLabel, FormWrapper, InformationTabBase, Label, Section, Title, TitleWrapper } from "./InformationTab.style"
import { INITIAL_STATE, SET_DATA_TO_USER, SET_USER, SET_VISIBLE, VALIDATION_FAIL, VALIDATION_PROCESS, VALIDATION_SUCCESS, informationTabReducer } from "../../Hooks/Reducer/informationTabReducer";
import { useEffect, useReducer } from "react";

import Loading from "../Loading/Loading";
import SnackBar from "../SnackBar/SnackBar";
import axios from "axios";
import { userSchema } from "../../FormValidation/UserValidation";

const InformationTab = (props) => {
    const { userIndex } = props;

    const [state, dispatch] = useReducer(informationTabReducer, INITIAL_STATE);

    /* fetching API */
    useEffect(() => {
        axios.get(
            `http://localhost:3002/users`
        ).then((response) => {
            dispatch({
                type: SET_DATA_TO_USER, payload: {
                    user: {
                        id: response.data[userIndex].Id,
                        name: response.data[userIndex].Name,
                        surname: response.data[userIndex].Surname,
                        birthdate: response.data[userIndex].Birthdate,
                        email: response.data[userIndex].Email,
                        password: response.data[userIndex].Password,
                        telno: response.data[userIndex].Telno,
                    }
                }
            })
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    /* checks the inputs are valid */
    const inputValidator = async () => {
        dispatch({ type: VALIDATION_PROCESS })
        const { name, surname, birthdate, email, password, telno } = state.user;

        let newData = {
            Name: name,
            Surname: surname,
            Birthdate: birthdate,
            Email: email,
            Password: password,
            Telno: telno,
        }

        const isValid = await userSchema.isValid(newData)
        if (isValid) {
            try {
                axios.put(`http://localhost:3002/users/${state.user.id}`, newData)
                dispatch({ type: VALIDATION_SUCCESS })
            } catch (error) {
                console.log(error)
            }
        } else { dispatch({ type: VALIDATION_FAIL }) }
    }

    const visibleHandler = () => {
        if (state.visible) {
            dispatch({ type: SET_VISIBLE, payload: false })
        } else {
            dispatch({ type: SET_VISIBLE, payload: true })
        }
    }

    return (
        <InformationTabBase>
            <TitleWrapper>
                <Title>{state.user.name}'s Information</Title>
            </TitleWrapper>
            <DecisionMaker>
                <Label>Edit Information</Label>
                {state.switcher ? (
                    <Switch onClick={visibleHandler} color="warning" />) :
                    (<Switch disabled onClick={visibleHandler} color="warning" />)
                }
            </DecisionMaker>
            <FormWrapper>

                <Section>
                    <ContentWrapper>
                        <FormLabel>Name</FormLabel>
                        <TextField name="name" disabled={!state.visible} label={state.user.name} variant="filled"
                            onChange={(e) => {
                                dispatch({
                                    type: SET_USER,
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    }
                                })
                            }} />
                    </ContentWrapper>
                    <ContentWrapper>
                        <FormLabel>Surname</FormLabel>
                        <TextField name="surname" disabled={!state.visible} label={state.user.surname} variant="filled"
                            onChange={(e) => {
                                dispatch({
                                    type: SET_USER,
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    }
                                })
                            }} />
                    </ContentWrapper>
                </Section>

                <Section>
                    <ContentWrapper>
                        <FormLabel>Phone</FormLabel>
                        <TextField name="telno" disabled={!state.visible} label={state.user.telno} variant="filled"
                            onChange={(e) => {
                                dispatch({
                                    type: SET_USER,
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    }
                                })
                            }} />
                    </ContentWrapper>
                    <ContentWrapper>
                        <FormLabel>Birthday</FormLabel>
                        <TextField name="birthdate" disabled={!state.visible} label={state.user.birthdate} variant="filled"
                            onChange={(e) => {
                                dispatch({
                                    type: SET_USER,
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    }
                                })
                            }} />
                    </ContentWrapper>
                </Section>

                <Section>
                    <ContentWrapper>
                        <FormLabel>Email</FormLabel>
                        <TextField name="email" disabled={!state.visible} label={state.user.email}
                            onChange={(e) => {
                                dispatch({
                                    type: SET_USER,
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    }
                                })
                            }} variant="filled" />
                    </ContentWrapper>
                    <ContentWrapper>
                        <FormLabel>Password</FormLabel>
                        <TextField name="password" disabled={!state.visible} label={state.user.password}
                            onChange={(e) => {
                                dispatch({
                                    type: SET_USER,
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    }
                                })
                            }} variant="filled" />
                    </ContentWrapper>
                </Section>

            </FormWrapper>
            <ButtonWrapper>
                <Button
                    className="save"
                    disabled={!state.visible}
                    onClick={inputValidator}
                    variant="contained"
                >
                    SAVE
                </Button>
            </ButtonWrapper>
            {state.message && <SnackBar message={state.message} />}
            {state.loading && <Loading loading={state.loading} />}
        </InformationTabBase >
    );
}

export default InformationTab;