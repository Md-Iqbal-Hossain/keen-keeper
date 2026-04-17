
import FriendCard from '../ui/FriendCard';
import { HashLoader } from 'react-spinners';
import useFriends from '../../hooks/useFriends';

const YourFriends = () => {

    const {friends, loading} = useFriends();

    return (
        <div className='bg-[#F8FAFC] py-6 min-h-screen flex justify-center'>

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

                            <FriendCard friend={friend} />
                        ))
                    }

                </div>}
            </div>
        </div>
    );
};

export default YourFriends;