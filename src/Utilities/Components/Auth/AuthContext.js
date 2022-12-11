import { createContext } from "react";

const currentUser = false;

export const AuthContext = createContext(currentUser);
