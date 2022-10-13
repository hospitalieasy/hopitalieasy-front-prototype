import { DefaultLayout } from "./styles/Entry.style";
import React from "react";
import RoleSelector from "../Components/RoleSelector/RoleSelector";

const Entry = () => {
    return (
        <DefaultLayout>
            <RoleSelector />
        </DefaultLayout>
    );
}

export default Entry;