import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <p>This is navbar</p>
            <Outlet/>
            <p>This is footer</p>
        </div>
    );
};

export default Root;