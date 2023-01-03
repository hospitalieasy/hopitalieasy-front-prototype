import "..//..//Utilities/Style/Button.css"

import { AppBarBase, ContentWrapper, LeftSide, NotificationWrapper, ProfileWrapper, RightSide, SpeedDialWrapper, Title } from "./AppBar.style"
import { INITIAL_STATE, apiPostReducer } from "../../Hooks/Reducer/postReducer";
import { useEffect, useReducer, useState } from "react";

import BasicSpeedDial from "..//SpeedDial/SpeedDial"
import NotificationPop from "../NotificationPop/NotificationPop"
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import axios from "axios";

const AppBar = (props) => {
    const { setUser, userIndex, setUserIndex } = props;

    /* sets the name  */
    const [apiName, apiSetName] = useState("");

    /* useReducer hook fetching the data states */
    const [state, dispatch] = useReducer(apiPostReducer, INITIAL_STATE);

    /* gets the data from server */
    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                `https://hospitaleasyapi.azurewebsites.net/api/Patient`
            ).then(response => {
                dispatch({ type: "FETCH_SUCCESS", payload: response.data[userIndex] })
                apiSetName(state.apiPost.Name)
            }).catch(error => {
                dispatch({ type: "FETCH_ERROR" })
            })
        }

        if (state.error) {
            console.log("Data fetch went wrong in AppBar");
        }

        getData();
    }, [])

    return (
        <AppBarBase>
            <LeftSide>
                <Title>Hi {apiName} Welcome</Title>
                <SpeedDialWrapper>
                    <BasicSpeedDial />
                </SpeedDialWrapper>
            </LeftSide>
            <RightSide>
                <ContentWrapper>
                    <NotificationWrapper>
                        <NotificationPop />
                    </NotificationWrapper>
                    <ProfileWrapper>
                        <ProfileMenu
                            setUser={setUser}
                            userIndex={userIndex}
                            setUserIndex={setUserIndex}
                        />
                    </ProfileWrapper>
                </ContentWrapper>
            </RightSide>
        </AppBarBase >
    )
}

export default AppBar;