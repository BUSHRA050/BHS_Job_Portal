import React, { createContext, useState, memo } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const AppProvider = (props) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [selectedTemplate, setSelectedTemplate] = useLocalStorage("selectedTemplate", null);
    const [selectedCoverLetter, setSelectedCoverLetter] = useLocalStorage("selectedCoverLetter", null);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        if (data.role === "Organization") {
            navigate("/dashboard", { replace: true });
        } else {
            navigate("/findAJob", { replace: true });
        }
    };

    const logout = () => {
        setUser(null);
        navigate("/login", { replace: true });
    };

    const handleSelecteTemplate=(data)=>{
        setSelectedTemplate(data)
    }

    const handleSelectCoverLetter=(data)=>{
        setSelectedCoverLetter(data)
    }


    return (
        <AppContext.Provider
            value={{
                user,
                login,
                logout,
                selectedTemplate,
                handleSelecteTemplate,
                selectedCoverLetter,
                handleSelectCoverLetter,

            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export default memo(AppProvider);
