// import React, { use, useEffect, useState } from 'react';
// // import { useLoaderData } from 'react-router';

// // const friendsPromise = fetch('/friends.json')
// //     .then((res) => res.json());

// const YourFriends = () => {

//     // const friends = use(friendsPromise);
//     // console.log(friends, friends);

//     // const data = useLoaderData();
//     // console.log(data, 'data from homepage');

//     const [friends, setFriends] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch('/friends.json');
//             const data = await res.json();
//             console.log(data);
//             setFriends(data);
//         }
//         fetchData();
//     }, []);

//     console.log(friends, 'friends');


//     return (
//         <div className='bg-[#F8FAFC] py-8'>
//             <div className='w-9/12 mx-auto'>
//                 {/* section header  */}
//                 <div>
//                     <h4 className='font-bold text-2xl'>Your Friends</h4>
//                 </div>
//             </div>
//             Total friends: {friends.length}
//             {
//                 friends.map((friend, ind) => {
//                     return (
//                         <div key={ind} className="card bg-base-100 w-96 shadow-sm">
//                             <figure>
//                                 <img
//                                     src={friend.picture}
//                                     alt="Shoes" />
//                             </figure>
//                             <div className="card-body">
//                                 <h2 className="card-title">{friend.name}</h2>
//                                     <p>{friend.days_since_contact}</p>
//                                     <p className='bg-green-300'>{friend.tags}</p>
//                                     <p>{friend.status}</p>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// };

// export default YourFriends;






// another 

// import React, { useEffect, useState } from 'react';

// const YourFriends = () => {

//     const [friends, setFriends] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await fetch('/friends.json');
//             const data = await res.json();
//             setFriends(data);
//         }
//         fetchData();
//     }, []);

//     // function for status color
//     const getStatusColor = (status) => {
//         if (status === 'overdue') return 'badge-error';      // red
//         if (status === 'on-track') return 'badge-success';   // green
//         if (status === 'almost due') return 'badge-warning'; // yellow
//     };

//     return (
//         <div className='bg-[#F8FAFC] py-10 min-h-screen flex flex-col items-center justify-center'>

//             {/* Header */}
//             <div className='mb-6'>
//                 <h4 className='font-bold text-2xl'>Your Friends</h4>
//                 <p className='text-gray-500'>Total friends: {friends.length}</p>
//             </div>

//             {/* Cards Container */}
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

//                 {
//                     friends.map((friend) => (
//                         <div key={friend.id} className="card bg-base-100 w-80 shadow-md p-4 flex flex-col items-center text-center">

//                             {/* Image */}
//                             <figure className='mb-3'>
//                                 <img
//                                     src={friend.picture}
//                                     alt={friend.name}
//                                     className="w-24 h-24 rounded-full object-cover"
//                                 />
//                             </figure>

//                             {/* Card Body */}
//                             <div className="card-body p-0 items-center text-center">

//                                 {/* Name */}
//                                 <h2 className="card-title font-bold text-lg">
//                                     {friend.name}
//                                 </h2>

//                                 {/* Days since contact */}
//                                 <p className='text-gray-500 text-sm'>
//                                     {friend.days_since_contact} days ago
//                                 </p>

//                                 {/* Tags */}
//                                 <div className='flex flex-wrap justify-center gap-2 mt-2'>
//                                     {
//                                         friend.tags.map((tag, index) => (
//                                             <span key={index} className='badge bg-green-200 text-green-800 border-none'>
//                                                 {tag}
//                                             </span>
//                                         ))
//                                     }
//                                 </div>

//                                 {/* Status */}
//                                 <div className='mt-3'>
//                                     <span className={`badge ${getStatusColor(friend.status)} text-white`}>
//                                         {friend.status}
//                                     </span>
//                                 </div>

//                             </div>
//                         </div>
//                     ))
//                 }

//             </div>
//         </div>
//     );
// };

// export default YourFriends;



// another 
import React, { useEffect, useState } from 'react';
import FriendCard from '../ui/FriendCard';

const YourFriends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/friends.json');
            const data = await res.json();
            setFriends(data);
        }
        fetchData();
    }, []);

    return (
        <div className='bg-[#F8FAFC] py-10 min-h-screen flex justify-center'>

            {/* Main Container */}
            <div className='w-full max-w-7xl'>

                {/* Header */}
                <div className='mb-6'>
                    <h4 className='font-bold text-2xl'>Your Friends</h4>
                </div>

                {/* Cards Container */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

                    {
                        friends.map((friend) => (
                            // <div
                            //     key={friend.id}
                            //     className="card bg-base-100 w-80 shadow-md p-4 flex flex-col items-center text-center"
                            // >

                            //     {/* Image */}
                            //     <figure className='mb-3'>
                            //         <img
                            //             src={friend.picture}
                            //             alt={friend.name}
                            //             className="w-24 h-24 rounded-full object-cover"
                            //         />
                            //     </figure>

                            //     {/* Card Body */}
                            //     <div className="card-body p-0 items-center text-center">

                            //         {/* Name */}
                            //         <h2 className="card-title font-bold text-lg">
                            //             {friend.name}
                            //         </h2>

                            //         {/* Days since contact */}
                            //         <p className='text-gray-500 text-sm'>
                            //             {friend.days_since_contact} days ago
                            //         </p>

                            //         {/* Tags */}
                            //         <div className='flex flex-wrap justify-center gap-2 mt-2'>
                            //             {
                            //                 friend.tags.map((tag, index) => (
                            //                     <span
                            //                         key={index}
                            //                         className='badge bg-green-200 text-green-800 border-none rounded-xl'
                            //                     >
                            //                         {tag}
                            //                     </span>
                            //                 ))
                            //             }
                            //         </div>

                            //         {/* Status */}
                            //         <div className='mt-3'>
                            //             <span className={`badge ${getStatusColor(friend.status)} text-white rounded-xl`}>
                            //                 {friend.status}
                            //             </span>
                            //         </div>

                            //     </div>
                            // </div>
                            <FriendCard friend={friend}/>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default YourFriends;