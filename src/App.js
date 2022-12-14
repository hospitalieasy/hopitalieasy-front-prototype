import "./Utilities/Fonts/font.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Pages/Common/Pages/About";
import AppScreen from "./Pages/Patient/Pages/AppScreen";
import Appointment from "./Pages/Patient/Pages/Appointment";
import { AuthContext } from "./Utilities/Context/Auth/AuthContext";
import Contact from "./Pages/Common/Pages/Contact";
import Error from "./Utilities/Pages/Error";
import Future from "./Utilities/Pages/Future";
import Home from "./Pages/Common/Pages/Home";
import Logged from "./Utilities/Context/Logged/Logged";
import Login from "./Pages/Patient/Pages/Login";
import PatientHome from "./Pages/Patient/Pages/Home";
import Profile from "./Pages/Patient/Pages/Profile";
import ProtectedRoutes from "./Utilities/Context/ProtectedRoutes/ProtectedRoutes";
import TestResult from "./Pages/Patient/Pages/TestResult";
import useLocalStorage from "./Hooks/LocalStorage/useLocalStorage";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telno, setTelno] = useState("");
  const [user, setUser] = useLocalStorage("current-user", false);
  const [userIndex, setUserIndex] = useLocalStorage("user-index", null);

  /* BEFORE API TEST */

  return (
    <BrowserRouter>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          userIndex,
          setUserIndex,
        }}
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/app-screen" element={<AppScreen />}>
              <Route path="" element={<PatientHome />} />
              <Route path="profile" element={<Profile />} />
              <Route path="appointment" element={<Appointment />} />
              <Route path="test-result" element={<TestResult />} />
            </Route>
          </Route>

          <Route element={<Logged />}>
            <Route path="/patient-login" element={<Login />} />
          </Route>
          <Route path="/future-content" element={<Future />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
