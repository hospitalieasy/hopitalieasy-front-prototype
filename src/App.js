import { BrowserRouter, Route, Routes } from "react-router-dom";

import DoctorLogin from "./pages/DoctorLogin";
import Entry from "./pages/Entry";
import Error from "./pages/Error";
import PatientLogin from "./pages/PatientLogin";
import PatientScreen from "./pages/PatientScreen";
import PatientSignUp from "./pages/PatientSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="patient-login" element={<PatientLogin />} />
        <Route path="patient-sign-up" element={<PatientSignUp/>}/>
        <Route path="doctor-login" element={<DoctorLogin />} />
        <Route path="patient-screen" element={<PatientScreen/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
