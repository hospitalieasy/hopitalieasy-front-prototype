import "..//..//Utilities/Style/Button.css"

import { FormWrapper, InformationTabBase, Section, Title } from "./InformationTab.style"

import { TextField } from "@mui/material";

const InformationTab = (props) => {
    const {
        name,
        surname,
        birthday,
        emailArray,
        passwordArray,
        phone,
        title,
    } = props;

    return (
        <InformationTabBase>
            <Title>User Information</Title>
            <FormWrapper>
                <Title>{title}</Title>
                <Section>
                    <TextField disabled id="filled-disabled" label="Name" defaultValue={name} variant="filled" />
                    <TextField disabled id="filled-disabled" label="Surname" defaultValue={surname} variant="filled" />
                </Section>

                <Section>
                    <TextField disabled id="filled-disabled" label="Birthday" defaultValue={birthday} variant="filled" />
                    <TextField disabled id="filled-disabled" label="E-mail" defaultValue={emailArray} variant="filled" />
                </Section>

                <Section>
                    <TextField disabled id="filled-disabled" label="Password" defaultValue={passwordArray} variant="filled" />
                    <TextField disabled id="filled-disabled" label="Phone" defaultValue={phone} variant="filled" />
                </Section>
            </FormWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;