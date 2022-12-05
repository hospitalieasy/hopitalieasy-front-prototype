import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/pages/About";
import Error from "./pages/pages/Error";
import Future from "./pages/pages/Future";
import Home from "./pages/pages/Home";
import PatientLogin from "./pages/pages/PatientLogin";
import PatientScreen from "./pages/pages/PatientScreen";
import PatientSignUp from "./pages/pages/PatientSignUp";

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
