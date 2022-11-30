import { BrowserRouter, Route, Routes } from "react-router-dom";

import DoctorLogin from "./pages/pages/DoctorLogin";
import Error from "./pages/pages/Error";
import Home from "./pages/pages/Home";
import PatientLogin from "./pages/pages/PatientLogin";
import PatientScreen from "./pages/pages/PatientScreen";
import PatientSignUp from "./pages/pages/PatientSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="patient-login" element={<PatientLogin />} />
        <Route path="patient-sign-up" element={<PatientSignUp />} />
        <Route path="doctor-login" element={<DoctorLogin />} />
        <Route path="patient-screen" element={<PatientScreen />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
