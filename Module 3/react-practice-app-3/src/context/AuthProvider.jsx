import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const login = () => {
    setAuthUser({ name: "munim", id: 123 });
  };

  const logout = () => {
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
