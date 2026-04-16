import React, { useContext } from 'react';
import { CallFriendsContext } from '../../components/context/CallFriendsContext';

const Timeline = () => {
    const contextData = useContext(CallFriendsContext);
    console.log(contextData, 'context data');
     
    return (
        <div>
            Timeline
        </div>
    );
};

export default Timeline;