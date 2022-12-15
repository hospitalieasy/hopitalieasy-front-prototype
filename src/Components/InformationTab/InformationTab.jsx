import "..//..//Utilities/Style/Button.css"

import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, DecisionMaker, FormWrapper, InformationTabBase, Label, Section, Title, TitleWrapper } from "./InformationTab.style"
import { useEffect, useState } from "react";

import axios from "axios";

// TODO: put method(to index), checks the inputs are valid and after sends notification

const InformationTab = (props) => {
    const {
        userIndex,
    } = props;

    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [birthdate, setBirthdate] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [telno, setTelno] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            );
            setName(response.data[userIndex].Name)
            setSurname(response.data[userIndex].Surname)
            setBirthdate(response.data[userIndex].Birthdate)
            setEmail(response.data[userIndex].Email)
            setPassword(response.data[userIndex].Password)
            setTelno(response.data[userIndex].Telno)
        }
        getData();
    }, [])

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
                <Title>{name}'s Information</Title>
            </TitleWrapper>
            <DecisionMaker>
                <Label>Edit Information</Label>
                <Switch onClick={visibleHandler} color="warning" />
            </DecisionMaker>
            <FormWrapper>
                <Section>
                    {visible ? (
                        <><TextField id="filled-disabled-1" label={name} variant="filled" /><TextField id="filled-disabled-2" label={surname} variant="filled" /></>
                    ) : (
                        <><TextField disabled id="filled-disabled-1" label={name} variant="filled" /><TextField disabled id="filled-disabled-2" label={surname} variant="filled" /></>
                    )}
                </Section>

                <Section>
                    {visible ? (
                        <><TextField id="filled-disabled-3" label={telno} variant="filled" /><TextField id="filled-disabled-4" label={birthdate} variant="filled" /></>
                    ) : (
                        <><TextField disabled id="filled-disabled-3" label={telno} variant="filled" /><TextField disabled id="filled-disabled-4" label={birthdate} variant="filled" /></>
                    )}

                </Section>

                <Section>
                    <TextField disabled id="filled-disabled-5" label={email} variant="filled" />
                    <TextField disabled id="filled-disabled-6" label={password} variant="filled" />
                </Section>
            </FormWrapper>
            <ButtonWrapper>
                {visible ? (
                    <Button variant="contained">SAVE</Button>
                ) : (
                    <Button disabled variant="contained">SAVE</Button>
                )}
            </ButtonWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;