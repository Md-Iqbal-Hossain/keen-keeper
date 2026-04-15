import React from 'react';
import Banner from '../../components/homepage/Banner';
import Stats from '../../components/homepage/Stats';
import YourFriends from '../../components/homepage/YourFriends';

const Homepage = () => {
    return (
        <>
            <Banner />
            <Stats />
            <YourFriends />
        </>
    );
};

export default Homepage;