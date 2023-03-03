import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppScreen from "./Pages/Patient/Pages/AppScreen";
import Appointment from "./Pages/Patient/Pages/Appointment";
import { AuthContext } from "./Context/Auth/AuthContext";
import Error from "./Utilities/Pages/Error";
import Future from "./Utilities/Pages/Future";
import Home from "./Pages/Common/Home";
import Logged from "./Context/Logged/Logged";
import Login from "./Pages/Patient/Pages/Login";
import PatientHome from "./Pages/Patient/Pages/Home";
import Profile from "./Pages/Patient/Pages/Profile";
import ProtectedRoutes from "./Context/ProtectedRoutes/ProtectedRoutes";
import TestResult from "./Pages/Patient/Pages/TestResult";
import useLocalStorage from "./Hooks/LocalStorage/useLocalStorage";

function App() {
  /* sets the current user and index of that user and keeps it in local storage */
  const [user, setUser] = useLocalStorage("current-user", false);
  const [userIndex, setUserIndex] = useLocalStorage("user-index", null);

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
          <Route path="/" element={<Home />} />

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
