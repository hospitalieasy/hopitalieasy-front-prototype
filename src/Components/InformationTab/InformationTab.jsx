import "..//..//Utilities/Style/Button.css"

import { Button, Switch, TextField } from "@mui/material";
import { ButtonWrapper, DecisionMaker, FormWrapper, InformationTabBase, Label, Section, Title, TitleWrapper } from "./InformationTab.style"

import { localResponse } from "../../Utilities/LocalData/LocalData.testprops";
import { useState } from "react";

const InformationTab = (props) => {
    const { userIndex } = props;
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
                <Title>{localResponse[userIndex].name}'s Information</Title>
            </TitleWrapper>
            <DecisionMaker>
                <Label>Edit Information</Label>
                <Switch onClick={visibleHandler} color="warning" />
            </DecisionMaker>
            <FormWrapper>
                <Section>
                    {visible ? (
                        <>
                            <TextField id="filled-disabled-1" label="Name" defaultValue={localResponse[userIndex].name} variant="filled" />
                            <TextField id="filled-disabled-2" label="Surname" defaultValue={localResponse[userIndex].surname} variant="filled" />
                        </>
                    ) : (
                        <>
                            <TextField disabled id="filled-disabled-1" label="Name" defaultValue={localResponse[userIndex].name} variant="filled" />
                            <TextField disabled id="filled-disabled-2" label="Surname" defaultValue={localResponse[userIndex].surname} variant="filled" />
                        </>
                    )}
                </Section>

                <Section>
                    {visible ? (
                        <>
                            <TextField id="filled-disabled-3" label="Birthday" defaultValue={localResponse[userIndex].birthday} variant="filled" />
                            <TextField id="filled-disabled-4" label="E-mail" defaultValue={localResponse[userIndex].email} variant="filled" />
                        </>
                    ) : (
                        <>
                            <TextField disabled id="filled-disabled-3" label="Birthday" defaultValue={localResponse[userIndex].birthday} variant="filled" />
                            <TextField disabled id="filled-disabled-4" label="E-mail" defaultValue={localResponse[userIndex].email} variant="filled" />
                        </>
                    )}

                </Section>

                <Section>
                    {visible ? (
                        <>
                            <TextField id="filled-disabled-5" label="Password" defaultValue={localResponse[userIndex].password} variant="filled" />
                            <TextField id="filled-disabled-6" label="Phone" defaultValue={localResponse[userIndex].phone} variant="filled" />
                        </>
                    ) : (
                        <>
                            <TextField disabled id="filled-disabled-5" label="Password" defaultValue={localResponse[userIndex].password} variant="filled" />
                            <TextField disabled id="filled-disabled-6" label="Phone" defaultValue={localResponse[userIndex].phone} variant="filled" />
                        </>
                    )}
                </Section>
            </FormWrapper>
            <ButtonWrapper>
                <Button variant="contained">SAVE</Button>
            </ButtonWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;