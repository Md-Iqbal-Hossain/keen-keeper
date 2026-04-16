import React, { useContext, useState } from 'react';
import { useParams } from 'react-router';
import useFriends from '../../hooks/useFriends';
import { FaArchive, FaTrash, FaBell } from 'react-icons/fa';
import { FiArchive, FiPhoneCall } from 'react-icons/fi';
import { PiBellSimpleZBold, PiChatDotsBold } from 'react-icons/pi';
import { BsCameraVideo } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HashLoader } from 'react-spinners';
import { CallFriendsContext } from '../../components/context/CallFriendsContext';
import { toast } from 'react-toastify';

const FriendDetails = () => {
    const { id } = useParams();
    const { friends, loading } = useFriends();

    const friend = friends.find((f) => String(f.id) === id);

    const getStatusBadgeClass = (status) => {
        if (status === 'overdue') return 'badge-error bg-red-500 text-white';
        if (status === 'on-track') return 'badge-success bg-green-700 text-white';
        if (status === 'almost due') return 'badge-warning text-white';
        return 'badge-ghost';
    };

    // const { callFriends, setCallFriends } = useContext(CallFriendsContext);
    // const [textFriends, setTextFriends] = useState([]);
    // const [videoFriends, setVideoFriends] = useState([]);

    if (loading) return <div className='h-[60vh] flex justify-center items-center'><HashLoader color='#244D3F' /></div>;
    if (!friend) return <div className="text-center mt-10">Friend not found.</div>;

    // const handleCallFriends = () => {
    //     setCallFriends([...callFriends, friend]);
    // }

    // console.log(callFriends, 'callfriends');

    const { addEvent } = useContext(CallFriendsContext);

    const handleCheckIn = (type) => {
        addEvent(friend, type);

        toast.success(`${type} with ${friend.name} recorded!`, {
            position: "top-center",
            autoClose: 3000,
            icon: true,
        });
    };


    return (

        <div className="w-full bg-slate-50 py-14 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Left Column: Profile & Sidebar Actions */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        {/* Profile Card */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="avatar mb-4">
                                <div className="w-24 rounded-full ring ring-offset-base-100 ring-offset-2 ring-slate-200">
                                    <img src={friend.picture} alt={friend.name} />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">{friend.name}</h2>

                            <div className="mt-2">
                                <span className={`badge border-none capitalize font-bold px-4 py-3 rounded-xl ${getStatusBadgeClass(friend.status)}`}>
                                    {friend.status}
                                </span>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2 mt-3 mb-4">
                                {friend.tags.map(tag => (
                                    <span key={tag} className="badge bg-green-100 text-green-700 border-none uppercase text-[10px] font-bold rounded-xl">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="italic text-slate-500 text-sm mb-2 px-4 leading-relaxed">
                                "{friend.bio}"
                            </p>
                            <p className="text-slate-400 text-xs mt-2">Preferred: {friend.email}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-2">
                            <button className="btn btn-ghost bg-white border border-gray-200 justify-center normal-case font-medium">
                                <PiBellSimpleZBold className="mr-2" /> Snooze 2 Weeks
                            </button>
                            <button className="btn btn-ghost bg-white border border-gray-200 justify-center normal-case font-medium">
                                <FiArchive className="mr-2" /> Archive
                            </button>
                            <button className="btn btn-ghost bg-white border border-gray-200 justify-center normal-case font-medium text-red-500 hover:bg-red-50">
                                <RiDeleteBinLine className="mr-2" /> Delete
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Stats, Goals & Quick Check In */}
                    <div className="md:col-span-8 flex flex-col gap-6">

                        {/* Upper Stats section */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-4xl font-bold text-slate-700">{friend.days_since_contact}</h3>
                                <p className="text-slate-400 text-sm mt-1">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-4xl font-bold text-slate-700">{friend.goal}</h3>
                                <p className="text-slate-400 text-sm mt-1">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-2xl font-bold text-emerald-800 pt-2">
                                    {new Date(friend.next_due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </h3>
                                <p className="text-slate-400 text-sm mt-1">Next Due</p>
                            </div>
                        </div>

                        {/* Relationship Goal Section */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-emerald-800 text-lg">Relationship Goal</h3>
                                <button className="btn btn-xs btn-outline border-gray-300 text-slate-500 normal-case">Edit</button>
                            </div>
                            <p className="text-slate-600">Connect every <span className="font-bold text-slate-800">{friend.goal} days</span></p>
                        </div>

                        {/* Quick Check-In Section */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-emerald-800 text-lg mb-6">Quick Check-In</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <button className="flex flex-col items-center justify-center py-8 border border-gray-100 rounded-xl hover:bg-slate-50 transition-colors shadow-sm" onClick={() => handleCheckIn('Call')}>
                                    <FiPhoneCall className="text-2xl mb-2 text-slate-600" />
                                    <span className="text-slate-600 font-medium">Call</span>
                                </button>
                                <button className="flex flex-col items-center justify-center py-8 border border-gray-100 rounded-xl hover:bg-slate-50 transition-colors shadow-sm" onClick={() => handleCheckIn('Text')}>
                                    <PiChatDotsBold className="text-2xl mb-2 text-slate-600" />
                                    <span className="text-slate-600 font-medium">Text</span>
                                </button>
                                <button className="flex flex-col items-center justify-center py-8 border border-gray-100 rounded-xl hover:bg-slate-50 transition-colors shadow-sm" onClick={() => handleCheckIn('Video')}>
                                    <BsCameraVideo className="text-2xl mb-2 text-slate-600" />
                                    <span className="text-slate-600 font-medium">Video</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;