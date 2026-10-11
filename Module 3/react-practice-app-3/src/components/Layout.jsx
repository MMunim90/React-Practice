import React from 'react';
// import Header from './Header';

const Layout = () => {
    return (
        <div>
            {/* <Header/>

            <h1 className='text-amber-400 text-4xl font-bold mt-[19px]'>Our Content</h1> */}

            {/* <div className='flex justify-around'>
                <div className='p-12 bg-amber-400 w-96 text-center text-3xl font-bold'>1</div>
                <div className='p-12 bg-red-400 w-96 text-center text-3xl font-bold'>2</div>
                <div className='p-12 bg-green-400 w-96 text-center text-3xl font-bold'>3</div>
            </div> */}
            
            <div className='grid grid-cols-3 grid-rows-2 gap-6'>
                <div className='p-12 bg-amber-400 text-center text-3xl font-bold row-span-2'>1</div>
                <div className='p-12 bg-red-400 text-center text-3xl font-bold col-span-2'>2</div>
                <div className='p-12 bg-green-400 text-center text-3xl font-bold col-span-2'>3</div>
            </div>

            {/* <ul className='flex gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
        </div>
    );
};

export default Layout;