import { ContentWrapper, FutureBase } from "./Future.style"

import DefaultBox from "../../Components/DefaultBox/DefaultBox";
import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout"
import Loading from "..//..//Utilities/Components/Loading/Loading"
import React from "react";

const Future = () => {
    return (
        <DefaultLayout>
            <FutureBase>
                <ContentWrapper>
                    <DefaultBox width="50%" height="50%" border="3px #a768ff solid">
                        <Loading />
                    </DefaultBox>
                </ContentWrapper>
            </FutureBase>
        </DefaultLayout>
    );
}

export default Future;