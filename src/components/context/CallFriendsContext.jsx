import React, { createContext } from 'react';

// 1. Create the Context
export const CallFriendsContext = createContext();

// 2. Create the Provider
const CallFriendsProvider = ({ children }) => {
    // You can put state here later!
    const data = {
        name: 'Iqbal',
        age: 30
    };
    console.log(data);
    

    return (
        <CallFriendsContext.Provider value={data}>
            {children}
        </CallFriendsContext.Provider>
    );
};

export default CallFriendsProvider;