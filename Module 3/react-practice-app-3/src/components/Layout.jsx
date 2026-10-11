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
            
            {/* <div className='grid grid-cols-3 gap-6'>
                <div className='p-12 bg-cyan-400 sm:bg-amber-400 md:bg-red-400 lg:bg-green-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold row-span-2'>1</div>
                <div className='p-12 bg-red-400 sm:bg-green-400 md:bg-amber-400 lg:bg-cyan-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold col-span-2'>2</div>
                <div className='p-12 bg-green-400 sm:bg-red-400 md:bg-cyan-400 lg:bg-amber-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold col-span-2'>3</div>
            </div> */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='p-12 bg-cyan-400 sm:bg-amber-400 md:bg-red-400 lg:bg-green-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold'>1</div>
                <div className='p-12 bg-red-400 sm:bg-green-400 md:bg-amber-400 lg:bg-cyan-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold'>2</div>
                <div className='p-12 bg-green-400 sm:bg-red-400 md:bg-cyan-400 lg:bg-amber-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold'>3</div>
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