import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Pages/Common/Pages/About";
import AppScreen from "./Pages/Patient/Pages/AppScreen";
import { AuthContext } from "./Utilities/Context/Auth/AuthContext";
import Contact from "./Pages/Common/Pages/Contact";
import { CurrentIndex } from "./Utilities/Context/CurrentIndex/CurrentIndex";
import Error from "./Utilities/Pages/Error";
import Future from "./Utilities/Pages/Future";
import Home from "./Pages/Common/Pages/Home";
import Logged from "./Utilities/Context/Logged/Logged";
import Login from "./Pages/Patient/Pages/Login";
import ProtectedRoutes from "./Utilities/Context/ProtectedRoutes/ProtectedRoutes";
import useLocalStorage from "./Hooks/LocalStorage/useLocalStorage";
import { useState } from "react";

function App() {
  const [menuIndex, setMenuIndex] = useLocalStorage("menu-index-num", null);
  const [profileIndex, setProfileIndex] = useLocalStorage(
    "profile-index-is",
    false
  );
  const [profileIndexCloser, setProfileIndexCloser] = useLocalStorage(
    "profile-index-closer-is",
    false
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useLocalStorage("is-user-exist", false);

  return (
    <BrowserRouter>
      <CurrentIndex.Provider
        value={{
          menuIndex,
          setMenuIndex,
          profileIndex,
          setProfileIndex,
          profileIndexCloser,
          setProfileIndexCloser,
        }}
      >
        <AuthContext.Provider
          value={{
            email,
            setEmail,
            password,
            setPassword,
            user,
            setUser,
          }}
        >
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/app-screen" element={<AppScreen />} />
            </Route>
            <Route element={<Logged />}>
              <Route path="/patient-login" element={<Login />} />
            </Route>
            <Route path="/future-content" element={<Future />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthContext.Provider>
      </CurrentIndex.Provider>
    </BrowserRouter>
  );
}

export default App;
