import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [registered, setRegisterUser] = useState(JSON.parse(localStorage.getItem("registerUser"))||[])
 


  return (
    <AuthContext.Provider
      value={{ registered,setRegisterUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;