// import React, { useContext } from 'react';
// import { CallFriendsContext } from '../../components/context/CallFriendsContext';

// const Timeline = () => {
//     const {callFriends, setCallFriends} = useContext(CallFriendsContext);
//     console.log(callFriends, 'context data');
     
//     return (
//         <div>
//             Timeline
//         </div>
//     );
// };

// export default Timeline;






// another
// pages/timeline/Timeline.jsx
import React, { useContext, useState } from 'react';
import { CallFriendsContext } from '../../components/context/CallFriendsContext';
import { FiPhoneCall } from 'react-icons/fi';
import { PiChatDotsBold } from 'react-icons/pi';
import { BsCameraVideo, BsChatDots, BsFillCameraVideoFill } from 'react-icons/bs';
import { IoCall } from 'react-icons/io5';

const Timeline = () => {
    const { timelineEvents } = useContext(CallFriendsContext);
    const [filter, setFilter] = useState('All');

    const filteredEvents = filter === 'All' 
        ? timelineEvents 
        : timelineEvents.filter(e => e.type === filter);

    const getIcon = (type) => {
        switch (type) {
            case 'Call': return <IoCall className="text-xl"/>;
            case 'Text': return <BsChatDots className="text-xl"/>;
            case 'Video': return <BsFillCameraVideoFill className="text-xl"/>;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4">
            <div className="max-w-4xl mx-auto p-6">
                
                {/* Header & Filter */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800 mb-4">Timeline</h1>
                    <select 
                        className="select select-bordered w-full max-w-xs bg-slate-50"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="All">Filter timeline</option>
                        <option value="Call">Calls</option>
                        <option value="Text">Texts</option>
                        <option value="Video">Videos</option>
                    </select>
                </div>

                {/* Timeline List */}
                <div className="space-y-4">
                    {filteredEvents.length === 0 ? (
                        <p className="text-center py-10 text-slate-400">No interactions recorded yet.</p>
                    ) : (
                        filteredEvents.map((event) => (
                            <div 
                                key={event.eventId} 
                                className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
                            >
                                {/* Icon Circle */}
                                <div className="bg-white p-3  text-slate-600">
                                    {getIcon(event.type)}
                                </div>

                                {/* Text Content */}
                                <div>
                                    <h4 className="font-semibold text-slate-700">
                                        {event.type} <span className="font-normal text-slate-500">with {event.name}</span>
                                    </h4>
                                    <p className="text-sm text-slate-400">{event.date}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;