import React from 'react';
import Banner from '../../components/homepage/Banner';
import Stats from '../../components/homepage/Stats';
import YourFriends from '../../components/homepage/YourFriends';
import { useLoaderData } from 'react-router';

const Homepage = () => {
    
    
    const data = useLoaderData();
    console.log(data,'data from homepage');
    
    
    return (
        <>
            <Banner />
            <Stats />
            <YourFriends />
        </>
    );
};

export default Homepage;