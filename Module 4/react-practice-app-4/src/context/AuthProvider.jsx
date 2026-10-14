import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null);

    const login = (username, email, password)=>{
        setAuthUser({username, email, password})
    }

    return (
        <AuthContext.Provider value={{authUser, login}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;