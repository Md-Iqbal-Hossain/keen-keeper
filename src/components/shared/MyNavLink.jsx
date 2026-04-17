import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({ to, children, icon: Icon }) => {
    return (
        <NavLink to={to} className={({ isActive }) =>
                                `flex items-center gap-1 ${isActive ? "text-white bg-green-900 p-2 font-semibold rounded-lg" : "text-gray-500 p-2"
                                }`}><Icon /> <span>{children}</span></NavLink>
    );
};

export default MyNavLink;