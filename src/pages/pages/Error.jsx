import { ErrorBase, Label } from "../pageStyles/Error.style";

import DefaultLayout from "..//..//Components//DefaultLayout/DefaultLayout"
import { Link } from "react-router-dom";
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