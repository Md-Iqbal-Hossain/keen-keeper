import React from 'react';
import fLogo from '../../assets/images/logo-xl.png'
import fbImg from '../../assets/images/facebook.png'
import iImg from '../../assets/images/instagram.png'
import tImg from '../../assets/images/twitter.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#1F4D3C] text-[#E0E0E0]/80 py-12 px-4 mt-auto font-sans">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                
                {/* TOP SECTION */}
                <div className="flex flex-col items-center gap-4 mb-8">
                    {/* 1. Large Logo Image */}
                    <img 
                        src={fLogo} 
                        alt="KeenKeeper Logo" 
                        className="h-16 md:h-14 w-auto object-contain" 
                    />

                    {/* 2. Tagline Text */}
                    <p className="text-sm md:text-base max-w-3xl leading-relaxed">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                    </p>

                    {/* 3. Social Links Title & Icons */}
                    <div className="flex flex-col items-center gap-4 mt-1">
                        <h4 className="font-semibold text-white text-lg tracking-wide">Social Links</h4>
                        
                        <div className="flex gap-5">

                            <a href="#" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src={iImg} />
                            </a>

                            <a href="#" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src={fbImg} />
                            </a>

                            <a href="#" target="_blank" className="hover:opacity-80 transition-opacity">
                                <img src={tImg} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="w-full border-t border-[#FFFFFF]/10 pt-6 mt-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-[#A0A0A0]">
                        
                        {/* 4. Copyright Text */}
                        <p>
                            &copy; {currentYear} KeenKeeper. All rights reserved.
                        </p>

                        {/* 5. Policy Links */}
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;