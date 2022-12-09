import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Pages/Common/Pages/About";
import AppScreen from "./Pages/Patient/Pages/AppScreen";
import Contact from "./Pages/Common/Pages/Contact";
import Error from "./Utilities/Pages/Error";
import Future from "./Utilities/Pages/Future";
import Home from "./Pages/Common/Pages/Home";
import Login from "./Pages/Patient/Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/patient-login" element={<Login />} />
        <Route path="/app-screen" element={<AppScreen />} />
        <Route path="/future-content" element={<Future />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
