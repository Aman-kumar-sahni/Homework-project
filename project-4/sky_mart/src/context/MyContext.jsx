import { createContext } from "react";
import { useState } from "react";
export const MyContext = createContext()



export const ContextProvider = ({ children }) => {
    const [error, setError] = useState("");
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("sm-user")) || []
    )
    return <MyContext.Provider value={{ user, setUser, error, setError }}>{children}</MyContext.Provider>

}