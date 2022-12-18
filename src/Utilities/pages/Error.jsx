import { ContentWrapper, ErrorBase } from "./Error.style"

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "..//..//Components//DefaultLayout/DefaultLayout"
import React from "react";

const Error = () => {
    return (
        <DefaultLayout>
            <ErrorBase>
                <ContentWrapper>
                    <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                        <h1 style={{ fontSize: "45px", color: "#fff", display: "flex", marginTop: "140px", justifyContent: "center" }}>404 Page Is Not Exist</h1>
                    </DefaultBox>
                </ContentWrapper>
            </ErrorBase>
        </DefaultLayout>
    );
}

export default Error;