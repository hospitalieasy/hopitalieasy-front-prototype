import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout"
import { FutureBase } from "../pageStyles/Future.style";
import Loading from "../../Components/Loading/Loading"
import React from "react";

const Future = () => {
    return (
        <DefaultLayout>
            <FutureBase>
                <Loading />
            </FutureBase>
        </DefaultLayout>
    );
}

export default Future;