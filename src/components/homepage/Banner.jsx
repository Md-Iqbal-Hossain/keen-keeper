 
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-[#F8FAFC] text-center py-6 md:py-8 px-4'>

            <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-slate-800 leading-tight'>
                Friends to keep close in your life
            </h2>
            <p className='text-gray-600 w-full max-w-[90%] md:max-w-[70%] lg:max-w-[50%] mx-auto mb-8 text-sm md:text-base'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the 
                <span className="hidden md:inline"><br /></span> 
                relationships that matter most.
            </p>

            <button className='btn bg-green-800 hover:bg-green-900 border-none text-white px-8 py-3 h-auto min-h-0 flex items-center gap-2 mx-auto transition-all'>
                <FaPlus /> Add a Friend
            </button>

        </div>
    );
};

export default Banner;






