import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/general/About";
import Error from "./pages/general/Error";
import Future from "./pages/general/Future";
import Home from "./pages/general/Home";
import PatientLogin from "./pages/general/PatientLogin";
import PatientScreen from "./pages/general/PatientScreen";
import PatientSignUp from "./pages/general/PatientSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="patient-login" element={<PatientLogin />} />
        <Route path="patient-sign-up" element={<PatientSignUp />} />
        <Route path="patient-screen" element={<PatientScreen />} />
        <Route path="future-content" element={<Future />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
