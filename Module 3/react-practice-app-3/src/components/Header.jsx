import React, { useContext } from 'react';
import AuthButton from './AuthButton';
import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    const {authUser} = useContext(AuthContext)
    return (
        <div>
            <p>User: {authUser?.name} |  Id : {authUser?.id}</p>
            <AuthButton/>
        </div>
    );
};

export default Header;