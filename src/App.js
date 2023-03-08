import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "./Context/AuthContext";
import DoctorAppScreen from "./Pages/Doctor/Pages/AppScreen";
import DoctorHome from "./Pages/Doctor/Pages/Home";
import DoctorLogin from "./Pages/Doctor/Pages/Login";
import DoctorProfile from "./Pages/Doctor/Pages/Profile";
import Error from "./Utilities/Pages/Error";
import Future from "./Utilities/Pages/Future";
import Home from "./Pages/Common/Home";
import Logged from "./Context/Logged";
import PatientAppScreen from "./Pages/Patient/Pages/AppScreen";
import PatientAppointment from "./Pages/Patient/Pages/Appointment";
import PatientHome from "./Pages/Patient/Pages/Home";
import PatientLogin from "./Pages/Patient/Pages/Login";
import PatientProfile from "./Pages/Patient/Pages/Profile";
import PatientTestResult from "./Pages/Patient/Pages/TestResult";
import ProtectedRoutes from "./Context/ProtectedRoutes";
import useLocalStorage from "./Hooks/LocalStorage/useLocalStorage";

const App = () => {
  /* sets the current user and index of that user and keeps it in local storage */
  const [role, setRole] = useLocalStorage("current-role", "");
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
          role,
          setRole,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<ProtectedRoutes />}>
            {/* if it is patient */}
            {role === "patient" && (
              <Route path="/app-screen" element={<PatientAppScreen />}>
                <Route path="" element={<PatientHome />} />
                <Route path="profile" element={<PatientProfile />} />
                <Route path="appointment" element={<PatientAppointment />} />
                <Route path="test-result" element={<PatientTestResult />} />
              </Route>
            )}

            {/* if it is doctor */}
            {role === "doctor" && (
              <Route path="/app-screen" element={<DoctorAppScreen />}>
                <Route path="" element={<DoctorHome />} />
                <Route path="profile" element={<DoctorProfile />} />
              </Route>
            )}
          </Route>

          <Route element={<Logged />}>
            <Route path="/patient-login" element={<PatientLogin />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
          </Route>

          <Route path="/future-content" element={<Future />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
