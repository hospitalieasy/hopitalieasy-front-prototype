import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, ContentWrapper, FormLabel, FormWrapper, InformationTabBase, SwitchWrapper, Title } from "./InformationTab.style"
import { INITIAL_STATE, SET_DATA_TO_USER, SET_USER, SET_VISIBLE, VALIDATION_FAIL, VALIDATION_PROCESS, VALIDATION_SUCCESS, informationTabReducer } from "../../Hooks/Reducer/informationTabReducer";
import { useEffect, useReducer } from "react";

import Loading from "../Loading/Loading";
import SnackBar from "../SnackBar/SnackBar";
import axios from "axios";
import { userSchema } from "../../FormValidation/UserValidation";

const InformationTab = (props) => {
    const { userIndex, role } = props;

    const [state, dispatch] = useReducer(informationTabReducer, INITIAL_STATE);

    let END_POINT;
    /* fetching API */
    useEffect(() => {
        if (role === "doctor") {
            END_POINT = process.env.REACT_APP_DOCTOR_URL;
        } else {
            END_POINT = process.env.REACT_APP_PATIENT_URL;
        }
        axios.get(END_POINT)
            .then((response) => {
                dispatch({
                    type: SET_DATA_TO_USER, payload: {
                        user: {
                            id: response.data[userIndex].id,
                            name: response.data[userIndex].name,
                            surname: response.data[userIndex].surname,
                            birthDate: response.data[userIndex].birthDate,
                            email: response.data[userIndex].email,
                            password: response.data[userIndex].password,
                            telno: response.data[userIndex].telno,
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
        const { name, surname, birthDate, email, password, telno } = state.user;

        let newData = {
            name: name,
            surname: surname,
            birthDate: birthDate,
            email: email,
            password: password,
            telno: telno,
        }

        const isValid = await userSchema.isValid(newData)
        if (isValid) {
            let END_POINT;
            if (role === "doctor") {
                END_POINT = process.env.REACT_APP_DOCTOR_URL;
            } else {
                END_POINT = process.env.REACT_APP_PATIENT_URL;
            }
            try {
                axios.put(`${END_POINT}/${state.user.id}`, newData)
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
            <SwitchWrapper>
                <Title>{state.user.name}'s Information</Title>
                {state.switcher ? (
                    <Switch onClick={visibleHandler} color="warning" />) :
                    (<Switch disabled onClick={visibleHandler} color="warning" />)
                }
            </SwitchWrapper>
            <FormWrapper>
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
                    <TextField name="birthDate" disabled={!state.visible} label={state.user.birthDate} variant="filled"
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
            </FormWrapper>
            {state.message && <SnackBar message={state.message} />}
            {state.loading && <Loading loading={state.loading} />}
        </InformationTabBase >
    );
}

export default InformationTab;