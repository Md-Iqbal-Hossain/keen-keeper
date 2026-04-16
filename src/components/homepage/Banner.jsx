// import React from 'react';
// import { FaPlus } from 'react-icons/fa';

// const Banner = () => {
//     return (
//         <div className='min-h-[40vh] bg-[#F8FAFC] text-center pt-[50px] border-t border-gray-200'>
//             <h2 className='font-bold text-5xl mb-6'>Friends to keep close in your life</h2>
//             <p className='text-gray-600 max-w-[50%] mx-auto mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
//                 relationships that matter most.</p>
//             <button className='btn bg-green-800 text-white rounded-lg'><FaPlus />Add a Friend</button>
//         </div>
//     );
// };

// export default Banner;


import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-[#F8FAFC] text-center py-10'>
            
            <h2 className='font-bold text-5xl mb-4'>
                Friends to keep close in your life
            </h2>

            <p className='text-gray-600 max-w-[50%] mx-auto mb-5'>
                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                relationships that matter most.
            </p>

            <button className='btn bg-green-800 text-white rounded-lg'>
                <FaPlus /> Add a Friend
            </button>

        </div>
    );
};

export default Banner;