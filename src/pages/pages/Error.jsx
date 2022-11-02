import { ErrorBase, Label } from "../pageStyles/Error.style";

import DefaultLayoutFirst from "../../Components/DefaultLayoutFirst/DefaultLayoutFirst";
import React from "react";

const Error = () => {
    return (
        <DefaultLayoutFirst>
            <ErrorBase>
                <Label>404 Error Page Not Found</Label>
            </ErrorBase>
        </DefaultLayoutFirst>
    );
}

export default Error;