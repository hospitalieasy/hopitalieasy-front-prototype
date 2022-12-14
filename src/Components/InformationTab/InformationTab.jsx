import "..//..//Utilities/Style/Button.css"

import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, DecisionMaker, FormWrapper, InformationTabBase, Label, Section, Title, TitleWrapper } from "./InformationTab.style"

import axios from "axios";
import { localResponse } from "../../Utilities/LocalData/LocalData.testprops";
import { useState } from "react";

// TODO: put method(to index), checks the inputs are valid and notification

const InformationTab = (props) => {
    const {
        userIndex,
    } = props;

    let response;
    try {
        response = axios.get(
            `https://hospitaleasyapi.azurewebsites.net/api/Patient`
        );
    } catch (error) {
        console.log(error.response + "get has a error on information tab")
    }



    let data = {

    }
    const putData = async (e) => {
        e.preventDefault();

        try {
            axios.put(`https://hospitaleasyapi.azurewebsites.net/api/Patient`, data);
        } catch (error) {
            console.log(error + "put has a error on information tab")
        }

    }

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
                <Title>{response[userIndex].Name}'s Information</Title>
            </TitleWrapper>
            <DecisionMaker>
                <Label>Edit Information</Label>
                <Switch onClick={visibleHandler} color="warning" />
            </DecisionMaker>
            <FormWrapper>
                <Section>
                    {visible ? (
                        <>
                            <TextField id="filled-disabled-1" label="Name" defaultValue={response[userIndex].Name} variant="filled" />
                            <TextField id="filled-disabled-2" label="Surname" defaultValue={response[userIndex].Surname} variant="filled" />
                        </>
                    ) : (
                        <>
                            <TextField disabled id="filled-disabled-1" label="Name" defaultValue={response[userIndex].Name} variant="filled" />
                            <TextField disabled id="filled-disabled-2" label="Surname" defaultValue={response[userIndex].Surname} variant="filled" />
                        </>
                    )}
                </Section>

                <Section>
                    {visible ? (
                        <>
                            <TextField id="filled-disabled-3" label="Birthday" defaultValue={response[userIndex].Birthday} variant="filled" />
                            <TextField id="filled-disabled-4" label="E-mail" defaultValue={response[userIndex].Email} variant="filled" />
                        </>
                    ) : (
                        <>
                            <TextField disabled id="filled-disabled-3" label="Birthday" defaultValue={response[userIndex].Birthday} variant="filled" />
                            <TextField disabled id="filled-disabled-4" label="E-mail" defaultValue={response[userIndex].Email} variant="filled" />
                        </>
                    )}

                </Section>

                <Section>
                    {visible ? (
                        <>
                            <TextField id="filled-disabled-5" label="Password" defaultValue={response[userIndex].Password} variant="filled" />
                            <TextField id="filled-disabled-6" label="Phone" defaultValue={response[userIndex].Telno} variant="filled" />
                        </>
                    ) : (
                        <>
                            <TextField disabled id="filled-disabled-5" label="Password" defaultValue={response[userIndex].Password} variant="filled" />
                            <TextField disabled id="filled-disabled-6" label="Phone" defaultValue={response[userIndex].Telno} variant="filled" />
                        </>
                    )}
                </Section>
            </FormWrapper>
            <ButtonWrapper>
                {visible ? (

                    <Button onClick={putData} variant="contained">SAVE</Button>

                ) : (

                    <Button disabled variant="contained">SAVE</Button>

                )}
            </ButtonWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;