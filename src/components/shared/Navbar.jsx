import React from 'react';
import logoImg from '../../assets/images/logo.png';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { PiChartLineLight } from 'react-icons/pi';
import MyNavLink from './MyNavLink';

const Navbar = () => {

    const navItems = [
        {
            path: '/',
            text: 'Home',
            icon: RiHome2Line
        },
        {
            path: '/timeline',
            text: 'Timeline',
            icon: RiTimeLine
        },
        {
            path: '/stats',
            text: 'Stats',
            icon: PiChartLineLight
        }
    ]

    return (
        <nav className='shadow border-b border-gray-200'>
            <div className='flex justify-between gap-4 items-center  py-[8px] container mx-auto'>
                <img src={logoImg} alt="" className='w-[120px]' />
                <ul className='flex justify-between gap-2 items-center'>

                    {
                        navItems.map((item, index) => <MyNavLink key={index} to={item.path} icon={item.icon}>{item.text}</MyNavLink>)
                    }

                    {/* <li>
                        <MyNavLink to={'/'} icon={RiHome2Line}>Home</MyNavLink>
                    </li>

                    <li>
                        <MyNavLink to={'/friends'} icon={RiTimeLine}>Timeline</MyNavLink>
                    </li>

                    <li>
                        <MyNavLink to={'/timeline'} icon={PiChartLineLight}>Stats</MyNavLink>
                    </li> */}

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;