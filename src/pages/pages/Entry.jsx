import { RoleSection, RoleSelectWrapper } from "../pageStyles/Entry.style";

import DefaultLayoutFirst from "../../Components/DefaultLayoutFirst/DefaultLayoutFirst";
import React from "react";
import RoleSelector from "../../Components/RoleSelector/RoleSelector";

const Entry = () => {
    return (
        <DefaultLayoutFirst>
            <RoleSection>
                <RoleSelectWrapper>
                    <RoleSelector />
                </RoleSelectWrapper>
            </RoleSection>
        </DefaultLayoutFirst>
    );
}

export default Entry;