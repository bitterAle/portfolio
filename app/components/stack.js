import Image from 'next/image';

import React from 'react';

const Stack = () => {
    return (
        <div>
            <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold sm:text-3xl">My work </h2>

      <p className="mx-auto mt-4 max-w-md ">
        
        just a collection of some of my previous work.
      </p>
    </header>
        <div className=' mt-5 grid gap-2 grid-cols-1  md:grid-cols-2 lg:grid-cols-3'>
            <div className=' rounded-md overflow-hidden  bg-gradient-to-b from-sky-500 to-indigo-500   md:col-start-1 md:col-end-2 lg:col-start-1 lg:col-end-2 h-96 bg-black'>
                <h2 className=' p-4 text-2xl text-black font-semibold'>AI powered production</h2>
                <p className=' px-4'> I leverage the best AI in the business to ensure maximum support</p>
                <img
                src='/work.png'
                alt=' new image'
                className=' w-full h-auto'
                ></img>
            </div>
            <div className=' rounded-md  overflow-hidden bg-gradient-to-b from-violet-500 to-fuchsia-500   md:col-start-2 md:col-end-3  lg:col-start-2 lg:col-end-3  h-96 bg-black'>
            <h2 className=' p-4 text-2xl text-black font-semibold'>AI powered production</h2>
                <p className=' px-4'> I leverage the best AI in the business to ensure maximum support</p>
                <img
                src='/work1.png'
                alt=' new image'
                className=' w-full h-auto'
                ></img>
            </div>
            <div className=' rounded-md  overflow-hidden bg-gradient-to-b from-violet-500 to-fuchsia-500    md:col-start-1 md:col-end-3 lg:col-start-3 lg:col-end-4  h-96 bg-black'>
            <h2 className=' p-4 text-2xl text-black font-semibold'>AI powered production</h2>
                <p className=' px-4'> I leverage the best AI in the business to ensure maximum support</p>
                <img
                src='https://clickup.com/assets/home-test/teams-worldwide-planet.png'
                alt=' new image'
                className=' w-full h-auto'
                ></img>
            </div>
            <div className=' rounded-md  from-gray-700   md:col-start-1 md:col-end-2  lg:col-start-1 lg:col-end-3  h-96 bg-black'></div>
            <div className=' rounded-md  from-gray-700   md:col-start-2 md:col-end-3 lg:col-start-3 lg:col-end-4  h-96 bg-black'></div>
            <div className=' rounded-md  from-gray-700   md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-4  h-96 bg-black'></div>
            <div className=' rounded-md  from-gray-700    hidden    lg:col-start-1 lg:col-end-2 h-96 bg-black'></div>
           
        </div>
    
  </div>
</section>
        </div>
    );
}

export default Stack;
