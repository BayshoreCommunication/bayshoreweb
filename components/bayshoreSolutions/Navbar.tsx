'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export const NAV_LINKS = [
    { name: 'Home', href: '/bayshoresolutions' },
    { name: 'About', href: '#about' },
    { name: 'Our Talents', href: '#talents' },
    { name: 'What People Say', href: '#testimonials' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = NAV_LINKS;

    // Track active section and sticky scroll state on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // When near the top, Home is active
            if (window.scrollY < 200) {
                setActiveSection('home');
                return;
            }

            const scrollPosition = window.scrollY + 140; // Offset for sticky navbar height

            for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
                if (NAV_LINKS[i].href.startsWith('#')) {
                    const id = NAV_LINKS[i].href.replace('#', '');
                    const section = document.getElementById(id);
                    if (section) {
                        const top = section.getBoundingClientRect().top + window.pageYOffset;
                        if (scrollPosition >= top) {
                            setActiveSection(id);
                            break;
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash on initial mount
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
            const hash = window.location.hash.replace('#', '');
            const targetElem = document.getElementById(hash);
            if (targetElem) {
                setTimeout(() => {
                    const navHeight = 90;
                    const elementPosition = targetElem.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth',
                    });
                    setActiveSection(hash);
                }, 150);
            }
        }
    }, []);

    // Smooth scroll navigation handler with exact navbar height offset
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === '/bayshoresolutions' || href === '#home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
            setActiveSection('home');
            if (typeof window !== 'undefined') {
                window.history.pushState(null, '', '/bayshoresolutions');
            }
            return;
        }

        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.replace('#', '');
            const targetElem = document.getElementById(targetId);
            if (targetElem) {
                const navHeight = 90; // Height of sticky navbar
                const elementPosition = targetElem.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
                setActiveSection(targetId);
                if (typeof window !== 'undefined') {
                    window.history.pushState(null, '', href);
                }
            }
        }
    };

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
        <header
            className={`w-full sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md ${
                isScrolled ? 'shadow-md border-b border-gray-200/80' : 'border-b border-gray-100'
            }`}
        >
            {/* Main Container with responsive padding and height for all devices */}
            <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-[72px] sm:h-[80px] lg:h-[90px] flex items-center justify-between gap-4">

                {/* Logo Section - Links to /bayshoresolutions */}
                <Link
                    href="/bayshoresolutions"
                    onClick={(e) => handleNavClick(e, '/bayshoresolutions')}
                    className="flex items-center gap-[12px] group shrink-0"
                >
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
                        const targetId = link.href.startsWith('#') ? link.href.replace('#', '') : 'home';
                        const isActive = activeSection === targetId;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`relative font-bold transition-all duration-300 py-2 group text-[15px] xl:text-[16px] whitespace-nowrap ${
                                    isActive ? 'text-primary' : 'text-[#0B192C] hover:text-primary'
                                }`}
                            >
                                <span>{link.name}</span>
                                <span
                                    className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${
                                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Side Actions (Find Talent Button & Mobile Menu Toggle) */}
                <div className="flex items-center gap-[8px] sm:gap-[14px] shrink-0">
                    {/* Find Talent Button - Fully rounded with responsive compact padding on mobile */}
                    <Link
                        href="https://calendly.com/bayshorec/new-meeting"
                        data-calendly="true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-[6px] sm:gap-[10px] border border-[#0B192C] rounded-full px-[14px] xs:px-[18px] sm:px-[24px] py-[9px] sm:py-[12px] text-[#0B192C] hover:bg-[#0B192C] hover:text-white transition-all duration-300 group shadow-sm hover:shadow-md whitespace-nowrap cursor-pointer"
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
                                    <Link
                                        href="/bayshoresolutions"
                                        onClick={(e) => {
                                            setIsMobileMenuOpen(false);
                                            handleNavClick(e, '/bayshoresolutions');
                                        }}
                                        className="relative w-[125px] sm:w-[145px] h-[34px] sm:h-[40px]"
                                    >
                                        <Image
                                            src="/assets/bayshoreSolutions/logo-light.png"
                                            alt="Bayshore Virtual Solutions"
                                            fill
                                            className="object-contain object-left"
                                        />
                                    </Link>
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
                                        const targetId = link.href.startsWith('#') ? link.href.replace('#', '') : 'home';
                                        const isActive = activeSection === targetId;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={(e) => {
                                                    setIsMobileMenuOpen(false);
                                                    handleNavClick(e, link.href);
                                                }}
                                                className={`flex items-center justify-between px-3.5 py-3 rounded-[8px] font-bold transition-all duration-200 ${
                                                    isActive
                                                        ? 'bg-primary/10 text-primary'
                                                        : 'text-[#0B192C] hover:bg-gray-50 hover:text-primary'
                                                }`}
                                                style={{ fontSize: '15px' }}
                                            >
                                                <span>{link.name}</span>
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-[8px] transition-all duration-200 ${
                                                        isActive ? 'bg-primary' : 'opacity-0'
                                                    }`}
                                                />
                                            </Link>
                                        );
                                    })}
                                </nav>

                                {/* Drawer Footer CTA */}
                                <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50/50">
                                    <Link
                                        href="https://calendly.com/bayshorec/new-meeting"
                                        data-calendly="true"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="w-full flex items-center justify-center gap-2 bg-[#0B192C] text-white hover:bg-primary rounded-[8px] py-3 px-4 font-bold tracking-wide transition-all duration-300 shadow-md text-xs sm:text-sm cursor-pointer"
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