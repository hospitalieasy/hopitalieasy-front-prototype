import { ErrorBase, Label } from "./Error.style"

import DefaultLayout from "..//..//Components//DefaultLayout/DefaultLayout"
import React from "react";

const Error = () => {
    return (
        <DefaultLayout>
            <ErrorBase>
                <Label>404 Error Page Not Found</Label>
            </ErrorBase>
        </DefaultLayout>
    );
}

export default Error;