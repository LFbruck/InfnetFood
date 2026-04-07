import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (email, senha) => {
        if (email === "admin" && senha === "123") {
            setIsLoggedIn(true);
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}