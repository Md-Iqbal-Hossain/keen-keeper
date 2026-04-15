// // import React from 'react';

// // const Stats = () => {
// //     return (
// //         <div className='bg-[#F8FAFC]'>
// //             <div className='border-b border-gray-300 min-h-[20vh] w-9/12 mx-auto'>
// //             <div className='flex justify-evenly items-center'>
// //                 {/* card 1 */}
// //                 <div className='bg-white px-15 py-6 rounded-lg space-y-2 w-40 md:w-48'>
// //                     <h4 className='text-[#244D3F] font-bold text-3xl text-center'>10</h4>
// //                     <p className='text-[#64748B] text-center'>Total Friends</p>
// //                 </div>
// //                 {/* card 2 */}
// //                 <div className='bg-white px-15 py-6 rounded-lg space-y-2 w-40 md:w-48'>
// //                     <h4 className='text-[#244D3F] font-bold text-3xl text-center'>3</h4>
// //                     <p className='text-[#64748B] text-center'>On Track</p>
// //                 </div>
// //                 {/* card 3 */}
// //                 <div className='bg-white px-15 py-6 rounded-lg space-y-2 w-40 md:w-48'>
// //                     <h4 className='text-[#244D3F] font-bold text-3xl text-center'>6</h4>
// //                     <p className='text-[#64748B] text-center'>Need Attention </p>
// //                 </div>
// //                 {/* card 4 */}
// //                 <div className='bg-white px-15 py-6 rounded-lg space-y-2 w-40 md:w-48'>
// //                     <h4 className='text-[#244D3F] font-bold text-3xl text-center'>12</h4>
// //                     <p className='text-[#64748B] text-center'>Interactions This Month</p>
// //                 </div>
// //             </div>
// //         </div>
// //         </div>
        
// //     );
// // };

// // export default Stats;


// // 


// import React from 'react';

// const Stats = () => {
//     return (
//         <div className='bg-[#F8FAFC] border border-red-200'>
//             <div className='border-b border-gray-300 min-h-[20vh] w-9/12 mx-auto py-6'>

//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>

//                     {/* card 1 */}
//                     <div className='bg-white py-6 rounded-lg space-y-2 text-center shadow-sm hover:shadow-md transition'>
//                         <h4 className='text-[#244D3F] font-bold text-3xl'>10</h4>
//                         <p className='text-[#64748B]'>Total Friends</p>
//                     </div>

//                     {/* card 2 */}
//                     <div className='bg-white py-6 rounded-lg space-y-2 text-center shadow-sm hover:shadow-md transition'>
//                         <h4 className='text-[#244D3F] font-bold text-3xl'>3</h4>
//                         <p className='text-[#64748B]'>On Track</p>
//                     </div>

//                     {/* card 3 */}
//                     <div className='bg-white py-6 rounded-lg space-y-2 text-center shadow-sm hover:shadow-md transition'>
//                         <h4 className='text-[#244D3F] font-bold text-3xl'>6</h4>
//                         <p className='text-[#64748B]'>Need Attention</p>
//                     </div>

//                     {/* card 4 */}
//                     <div className='bg-white py-6 rounded-lg space-y-2 text-center shadow-sm hover:shadow-md transition'>
//                         <h4 className='text-[#244D3F] font-bold text-3xl'>12</h4>
//                         <p className='text-[#64748B]'>Interactions This Month</p>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Stats;


const Stats = () => {
    return (
        <div className='bg-[#F8FAFC]'>
            <div className='border-b border-gray-300 w-full max-w-7xl mx-auto py-4 pb-8'>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>

                    <div className='bg-white py-6 rounded-lg text-center shadow-sm hover:shadow-md transition'>
                        <h4 className='text-[#244D3F] font-bold text-3xl'>10</h4>
                        <p className='text-[#64748B]'>Total Friends</p>
                    </div>

                    <div className='bg-white py-6 rounded-lg text-center shadow-sm hover:shadow-md transition'>
                        <h4 className='text-[#244D3F] font-bold text-3xl'>3</h4>
                        <p className='text-[#64748B]'>On Track</p>
                    </div>

                    <div className='bg-white py-6 rounded-lg text-center shadow-sm hover:shadow-md transition'>
                        <h4 className='text-[#244D3F] font-bold text-3xl'>6</h4>
                        <p className='text-[#64748B]'>Need Attention</p>
                    </div>

                    <div className='bg-white py-6 rounded-lg text-center shadow-sm hover:shadow-md transition'>
                        <h4 className='text-[#244D3F] font-bold text-3xl'>12</h4>
                        <p className='text-[#64748B]'>Interactions This Month</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Stats;