import React from "react";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />

      {/* <h1 className='text-amber-400 text-4xl font-bold mt-[19px]'>Our Content</h1> */}

      {/* <div className='flex justify-around'>
                <div className='p-12 bg-amber-400 text-center text-3xl font-bold'>1</div>
                <div className='p-12 bg-red-400 text-center text-3xl font-bold'>2</div>
                <div className='p-12 bg-green-400 text-center text-3xl font-bold'>3</div>
            </div> */}

      {/* <div className='grid grid-cols-3 gap-6'>
                <div className='p-12 bg-cyan-400 sm:bg-amber-400 md:bg-red-400 lg:bg-green-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold row-span-2'>1</div>
                <div className='p-12 bg-red-400 sm:bg-green-400 md:bg-amber-400 lg:bg-cyan-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold col-span-2'>2</div>
                <div className='p-12 bg-green-400 sm:bg-red-400 md:bg-cyan-400 lg:bg-amber-400 text-center text-3xl md:text-6xl lg:text-9xl font-bold col-span-2'>3</div>
            </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-12 bg-cyan-400 sm:bg-amber-400 md:bg-red-400 lg:bg-green-400 text-center text-3xl md:text-5xl lg:text-7xl font-bold">
          Nice
        </div>
        <div className="p-12 bg-red-400 sm:bg-green-400 md:bg-amber-400 lg:bg-cyan-400 text-center text-3xl md:text-5xl lg:text-7xl font-bold">
          To
        </div>
        <div className="p-12 bg-green-400 sm:bg-red-400 md:bg-cyan-400 lg:bg-amber-400 text-center text-3xl md:text-5xl lg:text-7xl font-bold">
          Meet
        </div>

        <div className="p-12 bg-amber-400 sm:bg-cyan-400 md:bg-green-400 lg:bg-red-400 text-center text-3xl md:text-5xl lg:text-7xl font-bold">
          You
        </div>
      </div>

      {/* <ul className='flex gap-3'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}


    <p className="text-5xl font-bold text-center mt-12 mb-2">Products</p>
    <p className="text-center mb-12">Find your perfect match</p>
      {/* cards */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 lg:px-16">
        {/* single card */}
        <div className="shadow-2xl rounded-2xl">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
          <div className="p-3">
            <p className="font-bold">T-Shirt</p>
            <p>Price: $120</p>
            <p>Stock: 12</p>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
          <div className="p-3">
            <p className="font-bold">T-Shirt</p>
            <p>Price: $120</p>
            <p>Stock: 12</p>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
          <div className="p-3">
            <p className="font-bold">T-Shirt</p>
            <p>Price: $120</p>
            <p>Stock: 12</p>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
          <div className="p-3">
            <p className="font-bold">T-Shirt</p>
            <p>Price: $120</p>
            <p>Stock: 12</p>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
          <div className="p-3">
            <p className="font-bold">T-Shirt</p>
            <p>Price: $120</p>
            <p>Stock: 12</p>
            <button>Buy Now</button>
          </div>
        </div>

        <div className="shadow-2xl rounded-2xl">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt=""
          />
          <div className="p-3">
            <p className="font-bold">T-Shirt</p>
            <p>Price: $120</p>
            <p>Stock: 12</p>
            <button>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
