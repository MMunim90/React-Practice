// import React, { useContext } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import AuthButton from './AuthButton';
// import { AuthContext } from '../context/AuthProvider';

const Header = () => {
    // const {authUser} = useContext(AuthContext)
    return (
        <div className='flex justify-between bg-amber-500 p-5 mb-6'>
            {/* <p>User: {authUser?.name} |  Id : {authUser?.id}</p> */}
            <p>Our Web</p>

            <div className="hidden lg:block">
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>


            <div>
                <div className="hidden lg:block">
                    <AuthButton/>
                </div>
                <RxHamburgerMenu className='block lg:hidden'/>
            </div>
        </div>
    );
};

export default Header;