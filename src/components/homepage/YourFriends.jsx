
import FriendCard from '../ui/FriendCard';
import { HashLoader } from 'react-spinners';
import useFriends from '../../hooks/useFriends';

const YourFriends = () => {

    const {friends, loading} = useFriends();

    return (
        <div className='bg-[#F8FAFC] py-10 min-h-screen flex justify-center'>

            {/* Main Container */}
            <div className='w-full max-w-7xl'>

                {/* Header */}
                <div className='mb-6'>
                    <h4 className='font-bold text-2xl'>Your Friends</h4>
                </div>

                {/* Cards Container */}
                {loading ? (
                    <div className='flex justify-center items-center'><HashLoader color='#244D3F'/></div>) : <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>

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
                            <FriendCard friend={friend} />
                        ))
                    }

                </div>}
            </div>
        </div>
    );
};

export default YourFriends;