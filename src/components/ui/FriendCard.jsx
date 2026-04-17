import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {

    // function for status color
    const getStatusColor = (status) => {
        if (status === 'overdue') return 'badge-error bg-red-500';      // red
        if (status === 'on-track') return 'badge-success bg-green-700';   // green
        if (status === 'almost due') return 'badge-warning'; // yellow
    };

    return (
        <Link to={`/friends/${friend.id}`}
            key={friend.id}
            className="card bg-base-100 w-76 shadow-md p-4 flex flex-col items-center text-center"
        >

            {/* Image */}
            <figure className='mb-3'>
                <img
                    src={friend.picture}
                    alt={friend.name}
                    className="w-24 h-24 rounded-full object-cover"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-0 items-center text-center">

                {/* Name */}
                <h2 className="card-title font-bold text-lg">
                    {friend.name}
                </h2>

                {/* Days since contact */}
                <p className='text-gray-500 text-sm'>
                    {friend.days_since_contact} days ago
                </p>

                {/* Tags */}
                <div className='flex flex-wrap justify-center gap-2 mt-2'>
                    {
                        friend.tags.map((tag, index) => (
                            <span
                                key={index}
                                className='badge bg-green-200 text-green-800 border-none rounded-xl'
                            >
                                {tag}
                            </span>
                        ))
                    }
                </div>

                {/* Status */}
                <div className='mt-3'>
                    <span className={`badge ${getStatusColor(friend.status)} text-white rounded-xl`}>
                        {friend.status}
                    </span>
                </div>

            </div>
        </Link>
    );
};

export default FriendCard;