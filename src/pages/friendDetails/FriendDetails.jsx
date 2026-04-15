import React from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';

const FriendDetails = () => {
    const {id} = useParams();
    console.log(id,'id');
    const {friends, loading} = useFriends();

    const expectedFriend = friends.find((friend) => String(friend.id) == id);

    console.log(friends, loading, 'loading', 'friends');
    console.log(expectedFriend,'expectedFriend');
    
    
    
    return (
        <div>
            Friend Details Page
        </div>
    );
};

export default FriendDetails;