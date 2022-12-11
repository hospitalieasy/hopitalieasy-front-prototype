import { AppScreenBase, ScreenWrapper } from "../Styles/AppScreen.style";
import { useContext, useState } from "react";

import Appointment from "../Pages/Appointment"
import { AuthContext } from "../../../Utilities/Components/Auth/AuthContext";
import Home from "./Home";
import { PatternLayout } from "../../../Components/DefaultLayout/DefaultLayout.style";
import Profile from "./Profile";
import TestResult from "../Pages/TestResult"
import { UserContext } from "../../../Utilities/Components/UserContext/UserContext";

const AppScreen = () => {

    const { setCurrentUser } = useContext(AuthContext);
    const { menuIndex, setMenuIndex, profileIndex, setProfileIndex, profileIndexCloser, setProfileIndexCloser } = useContext(UserContext);

    const response = [
        {
            id: 1,
            Email: "altar@hotmail.com",
            Password: "123",
            Name: "Altar",
            Surname: "Ulaş",
            BirthDay: "04/07/2000",
            Phone: "0505-505-505",
        },
        {
            id: 2,
            Email: "beste@hotmail.com",
            Password: "1234",
        },
        {
            id: 3,
            Email: "ege@hotmail.com",
            Password: "12345",
        },
        {
            id: 4,
            Email: "test@hotmail.com",
            Password: "asd123",
        },
    ];

    const name = response[0].Name;
    const surname = response[0].Surname;
    const birthday = response[0].BirthDay;
    const email = response[0].Email;
    const password = response[0].Password;
    const phone = response[0].Phone;

    return (
        <AppScreenBase>
            <ScreenWrapper>
                <PatternLayout>
                    <>
                        {menuIndex === null && (!profileIndex) && (
                            <Home
                                setCurrentUser={setCurrentUser}
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                email={email}
                                password={password}
                                phone={phone}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}

                        {(profileIndex) && (!profileIndexCloser) && (
                            <Profile
                                setCurrentUser={setCurrentUser}
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                email={email}
                                password={password}
                                phone={phone}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setMenuIndex={setMenuIndex}
                                setProfileIndex={setProfileIndex}
                            />
                        )}

                        {menuIndex === 0 && (profileIndexCloser) && (
                            <Home
                                setCurrentUser={setCurrentUser}
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                email={email}
                                password={password}
                                phone={phone}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}

                        {menuIndex === 1 && (profileIndexCloser) && (
                            <Appointment
                                setCurrentUser={setCurrentUser}
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                email={email}
                                password={password}
                                phone={phone}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}

                        {menuIndex === 2 && (profileIndexCloser) && (
                            <TestResult
                                setCurrentUser={setCurrentUser}
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                email={email}
                                password={password}
                                phone={phone}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}
                    </>
                </PatternLayout>
            </ScreenWrapper>
        </AppScreenBase>
    );
}

export default AppScreen;