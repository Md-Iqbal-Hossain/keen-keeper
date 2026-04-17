import React, { useState } from 'react';
import logoImg from '../../assets/images/logo.png';
import { RiHome2Line, RiTimeLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { PiChartLineLight } from 'react-icons/pi';
import MyNavLink from './MyNavLink';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { path: '/', text: 'Home', icon: RiHome2Line },
        { path: '/timeline', text: 'Timeline', icon: RiTimeLine },
        { path: '/stats', text: 'Stats', icon: PiChartLineLight }
    ];

    return (
        <nav className='shadow border-b border-gray-200 bg-white sticky top-0 z-50'>
            <div className='flex justify-between items-center py-3 container mx-auto px-4'>
                {/* Logo */}
                <img src={logoImg} alt="Logo" className='w-[120px]' />

                {/* Mobile Menu Toggle Button */}
                <button 
                    className='md:hidden text-2xl text-gray-700' 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
                </button>

                {/* Navigation Links */}
                <ul className={`
                    flex flex-col md:flex-row items-center gap-2
                    absolute md:static top-[60px] left-0 w-full md:w-auto
                    bg-white md:bg-transparent shadow-md md:shadow-none
                    transition-all duration-300 ease-in-out p-5 md:p-0
                    ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 md:translate-y-0 md:opacity-100 hidden md:flex'}
                `}>
                    {navItems.map((item, index) => (
                        <li key={index} className="w-full md:w-auto" onClick={() => setIsOpen(false)}>
                            <MyNavLink to={item.path} icon={item.icon}>
                                {item.text}
                            </MyNavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;