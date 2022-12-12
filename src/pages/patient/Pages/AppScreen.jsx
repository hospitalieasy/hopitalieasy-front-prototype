import { AppScreenBase, ScreenWrapper } from "../Styles/AppScreen.style";

import Appointment from "../Pages/Appointment"
import { AuthContext } from "..//..//..//Utilities/Context/Auth/AuthContext";
import { CurrentIndex } from "../../../Utilities/Context/CurrentIndex/CurrentIndex";
import Home from "./Home";
import { PatternLayout } from "../../../Components/DefaultLayout/DefaultLayout.style";
import Profile from "./Profile";
import TestResult from "../Pages/TestResult"
import { useContext } from "react";

const AppScreen = () => {

    const { setEmail, email, setPassword, password, setCurrentUser } = useContext(AuthContext);

    const { menuIndex, setMenuIndex, profileIndex, setProfileIndex, profileIndexCloser, setProfileIndexCloser } = useContext(CurrentIndex);

    const response = [
        {
            id: 1,
            Email: "altar@hotmail.com",
            Password: "123",
            Name: "Altar",
            Surname: "Ulaş",
            BirthDay: "04/07/2000",
            Phone: "0501-501-501",
        },
        {
            id: 2,
            Email: "beste@hotmail.com",
            Password: "1234",
            Name: "Beste",
            Surname: "Sakar",
            BirthDay: "02/02/1999",
            Phone: "0502-502-502",
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
    const emailArray = response[0].Email;
    const passwordArray = response[0].Password;
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
                                emailArray={emailArray}
                                passwordArray={passwordArray}
                                phone={phone}
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setCurrentUser={setCurrentUser}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}

                        {(profileIndex) && (!profileIndexCloser) && (
                            <Profile
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                emailArray={emailArray}
                                passwordArray={passwordArray}
                                phone={phone}
                                email={email}
                                setEmail={setEmail}
                                password={password}
                                setPassword={setPassword}
                                setCurrentUser={setCurrentUser}
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
                                emailArray={emailArray}
                                passwordArray={passwordArray}
                                phone={phone}
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setCurrentUser={setCurrentUser}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}

                        {menuIndex === 1 && (profileIndexCloser) && (
                            <Appointment
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                emailArray={emailArray}
                                passwordArray={passwordArray}
                                phone={phone}
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setCurrentUser={setCurrentUser}
                                setProfileIndexCloser={setProfileIndexCloser}
                                setProfileIndex={setProfileIndex}
                                setMenuIndex={setMenuIndex}
                            />
                        )}

                        {menuIndex === 2 && (profileIndexCloser) && (
                            <TestResult
                                name={name}
                                surname={surname}
                                birthday={birthday}
                                emailArray={emailArray}
                                passwordArray={passwordArray}
                                phone={phone}
                                setEmail={setEmail}
                                setPassword={setPassword}
                                setCurrentUser={setCurrentUser}
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