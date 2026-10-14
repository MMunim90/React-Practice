import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);

    const login = (username, email, password)=>{
        setAuthUser({username, email, password})
        localStorage.setItem('user', JSON.stringify({username, email, password}))
    }

    const logout = () => {
        setAuthUser(null)
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{authUser, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;