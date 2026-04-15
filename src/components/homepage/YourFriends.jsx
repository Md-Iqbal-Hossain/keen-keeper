import React from 'react';

// const friendsPromise = fetch('/data.json')
// .then((res) => res.json());

const YourFriends = () => {

    // const friends = friendsPromise

    return (
        <div className='bg-[#F8FAFC] py-8'>
            <div className='w-9/12 mx-auto'>
                {/* section header  */}
                <div>
                    <h4 className='font-bold text-2xl'>Your Friends</h4>
                </div>
            </div>

        </div>
    );
};

export default YourFriends;