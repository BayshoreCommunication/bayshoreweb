'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Our Talents', href: '/talents' },
        { name: 'What People Say', href: '/testimonials' },
    ];

    // Prevent body scroll when mobile drawer is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* Main Container with responsive padding and height for all devices */}
            <div className="max-w-[1380px] mx-auto px-6 sm:px-6 lg:px-8 h-[72px] sm:h-[80px] lg:h-[90px] flex items-center justify-between">

                {/* Logo Section - Smaller on mobile as requested */}
                <Link href="/" className="flex items-center gap-[12px] group">
                    <div className="relative w-[130px] xs:w-[145px] sm:w-[165px] lg:w-[180px] h-[36px] xs:h-[40px] sm:h-[45px] lg:h-[50px] flex-shrink-0 transition-transform duration-300 group-hover:scale-[1.02]">
                        <Image
                            src="/assets/bayshoreSolutions/logo-light.png"
                            alt="Bayshore Virtual Solutions"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-[32px] xl:gap-[40px]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative font-bold transition-all duration-300 py-2 group text-[15px] xl:text-[16px] ${isActive ? 'text-primary' : 'text-[#0B192C] hover:text-primary'
                                    }`}
                            >
                                <span>{link.name}</span>
                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                        }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side Actions (Find Talent Button & Mobile Menu Toggle) */}
                <div className="flex items-center gap-[8px] sm:gap-[14px]">
                    {/* Find Talent Button - Fully rounded with responsive compact padding on mobile */}
                    <Link
                        href="/find-talent"
                        className="flex items-center gap-[6px] sm:gap-[10px] border border-[#0B192C] rounded-[8px] px-[14px] xs:px-[18px] sm:px-[26px] py-[10px] sm:py-[13px] text-[#0B192C] hover:bg-[#0B192C] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md whitespace-nowrap"
                    >
                        <span className="font-bold tracking-wide text-[11px] xs:text-[12px] sm:text-[13px]">FIND TALENT</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px] transform group-hover:translate-x-1 transition-transform duration-300 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2.5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>

                    {/* Mobile Menu Button - Fully rounded on mobile */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden flex items-center justify-center w-[38px] h-[38px] xs:w-[42px] xs:h-[42px] sm:w-[46px] sm:h-[46px] border border-[#0B192C] rounded-[8px] text-[#0B192C] hover:bg-[#0B192C] hover:text-white focus:outline-none transition-all duration-200 active:scale-95 shrink-0"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu with smooth animation */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <>
                            {/* Backdrop overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden"
                            />

                            {/* Slide-in Drawer */}
                            <motion.div
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 28, stiffness: 300 }}
                                className="fixed top-0 right-0 h-full w-[280px] xs:w-[310px] sm:w-[340px] max-w-[85vw] bg-white z-50 lg:hidden shadow-2xl flex flex-col justify-between"
                            >
                                {/* Drawer Header */}
                                <div className="p-4 sm:p-6 flex items-center justify-between border-b border-gray-100">
                                    <div className="relative w-[125px] sm:w-[145px] h-[34px] sm:h-[40px]">
                                        <Image
                                            src="/assets/bayshoreSolutions/logo-light.png"
                                            alt="Bayshore Virtual Solutions"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </div>
                                    <button
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] rounded-[8px] border border-gray-200 flex items-center justify-center text-[#0B192C] hover:bg-[#0B192C] hover:text-white transition-colors duration-200"
                                        aria-label="Close Menu"
                                    >
                                        <svg className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Drawer Nav Links */}
                                <nav className="flex-1 px-4 sm:px-6 py-6 flex flex-col gap-1.5 sm:gap-2 overflow-y-auto">
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`flex items-center justify-between px-3.5 py-3 rounded-[8px] font-bold transition-all duration-200 ${isActive
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'text-[#0B192C] hover:bg-gray-50 hover:text-primary'
                                                    }`}
                                                style={{ fontSize: '15px' }}
                                            >
                                                <span>{link.name}</span>
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-[8px] transition-all duration-200 ${isActive ? 'bg-primary' : 'opacity-0'
                                                        }`}
                                                />
                                            </Link>
                                        );
                                    })}
                                </nav>

                                {/* Drawer Footer CTA */}
                                <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50">
                                    <Link
                                        href="/find-talent"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center justify-center gap-2 bg-[#0B192C] text-white hover:bg-primary rounded-[8px] py-3 px-4 font-bold tracking-wide transition-all duration-300 shadow-md text-xs sm:text-sm"
                                    >
                                        <span>FIND TALENT</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </Link>
                                </div >
                            </motion.div>
                        </>
                    )}
            </AnimatePresence>
        </header>
    );
}