import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./pages/general/About";
import Contact from "./pages/general/Contact";
import Error from "./pages/general/Error";
import Future from "./utilities/pages/Future";
import Home from "./pages/general/Home";
import PatientLogin from "./pages/general/PatientLogin";
import PatientScreen from "./pages/general/PatientScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="patient-login" element={<PatientLogin />} />
        <Route path="patient-screen" element={<PatientScreen />} />
        <Route path="future-content" element={<Future />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
