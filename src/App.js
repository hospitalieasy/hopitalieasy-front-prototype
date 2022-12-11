import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Pages/Common/Pages/About";
import AppScreen from "./Pages/Patient/Pages/AppScreen";
import { AuthContext } from "./Utilities/Components/Auth/AuthContext";
import Contact from "./Pages/Common/Pages/Contact";
import Error from "./Utilities/Pages/Error";
import Future from "./Utilities/Pages/Future";
import Home from "./Pages/Common/Pages/Home";
import Login from "./Pages/Patient/Pages/Login";
import ProtectedRoutes from "./Utilities/Components/ProtectedRoutes/ProtectedRoutes";
import { UserContext } from "./Utilities/Components/UserContext/UserContext";
import useLocalStorage from "./Hooks/LocalStorage/useLocalStorage";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useLocalStorage("current-user", false);

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          email,
          setEmail,
          password,
          setPassword,
        }}
      >
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/patient-login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/app-screen" element={<AppScreen />} />
            </Route>
            <Route path="/future-content" element={<Future />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
