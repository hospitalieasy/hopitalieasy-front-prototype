import "..//..//Utilities/Style/Button.css"

import { FormWrapper, InformationTabBase, Section, Title } from "./InformationTab.style"

import { TextField } from "@mui/material";

const InformationTab = (props) => {
    const { title } = props;
    return (
        <InformationTabBase>
            <Title>User Information</Title>
            <FormWrapper>
                <Title>{title}</Title>
                <Section>
                    <TextField disabled id="filled-disabled" label="Name" defaultValue="Altar" variant="filled" />
                    <TextField disabled id="filled-disabled" label="Surname" defaultValue="Ulas" variant="filled" />
                </Section>

                <Section>
                    <TextField disabled id="filled-disabled" label="Birthday" defaultValue="04/07/2000" variant="filled" />
                    <TextField disabled id="filled-disabled" label="E-mail" defaultValue="altarulas@hotmail.com" variant="filled" />
                </Section>

                <Section>
                    <TextField disabled id="filled-disabled" label="Password" defaultValue="Password" variant="filled" />
                    <TextField disabled id="filled-disabled" label="Phone" defaultValue="505353535" variant="filled" />
                </Section>
            </FormWrapper>
        </InformationTabBase>
    );
}

export default InformationTab;