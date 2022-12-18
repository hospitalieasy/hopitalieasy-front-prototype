import DefaultLayout from "../../Components/DefaultLayout/DefaultLayout"
import { FutureBase } from "./Future.style"
import Loading from "..//..//Utilities/Components/Loading/Loading"
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