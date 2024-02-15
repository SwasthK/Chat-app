import { createContext, useContext, useState } from "react";
// import { useOutletContext } from "react-router-dom";


export const Usercontext = createContext()

export const useauthcontext = () => {
    return useContext(Usercontext)
}

export const AuthcontextProvider = ({ children }) => {
    const [authstate, setauthstate] = useState(JSON.parse(localStorage.getItem("info")) || null)
    return <Usercontext.Provider value={{ authstate, setauthstate }}>{children}</Usercontext.Provider>
}