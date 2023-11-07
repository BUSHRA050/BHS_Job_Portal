import React, { createContext, useState, memo } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppProvider = (props) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        if (data.role === "Organization") {
            navigate("/", { replace: true });
        } else {
            navigate("/", { replace: true });
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/login", { replace: true });
    };

    return (
        <AppContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default memo(AppProvider);
