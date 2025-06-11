import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
// setLocalStorage()  
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  return (
    <AuthContext.Provider value={{userData,setUserData}}>{children} </AuthContext.Provider>
  );
}

export default AuthProvider;
