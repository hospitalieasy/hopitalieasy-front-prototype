import { AppScreenBase, ScreenWrapper } from "../Styles/AppScreen.style";
import { useContext, useState } from "react";

import Appointment from "../Pages/Appointment"
import Home from "./Home";
import { PatternLayout } from "../../../Components/DefaultLayout/DefaultLayout.style";
import Profile from "./Profile";
import TestResult from "../Pages/TestResult"
import { UserContext } from "..//..//..//UserContext";

const AppScreen = () => {
    const { log, setLog } = useContext(UserContext);

    const [menuIndex, setMenuIndex] = useState(null);
    const [profileIndex, setProfileIndex] = useState(false);
    const [profileIndexCloser, setProfileIndexCloser] = useState(false);

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
                                log={log}
                                setLog={setLog}
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
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}

                        {menuIndex === 2 && (profileIndexCloser) && (
                            <TestResult
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