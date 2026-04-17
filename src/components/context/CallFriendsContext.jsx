import React, { createContext, useState } from 'react';

export const CallFriendsContext = createContext();

const CallFriendsProvider = ({ children }) => {

    const [timelineEvents, setTimelineEvents] = useState([]);

    const addEvent = (friend, type) => {
        const newEvent = {
            eventId: Date.now(), // unique ID for the list
            name: friend.name,
            type: type, // 'Call', 'Text', or 'Video'
            date: new Date().toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
            })
        };
        setTimelineEvents(prev => [newEvent, ...prev]); // Newest first
    };

    const data = { timelineEvents, addEvent };

    return (
        <CallFriendsContext.Provider value={data}>
            {children}
        </CallFriendsContext.Provider>
    );
};

export default CallFriendsProvider;