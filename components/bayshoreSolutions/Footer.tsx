'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full bg-[#F8FAFC] border-t border-gray-200 text-[#0B192C]">
      {/* Main Container: 1380px max-width with px-8 */}
      <div className="max-w-[1380px] mx-auto px-6 sm:px-8 pt-[50px] sm:pt-[60px] md:pt-[70px] pb-[32px] sm:pb-[40px]">

        {/* Top Grid Section: Centered on mobile, left-aligned on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[36px] sm:gap-[40px] lg:gap-[60px] pb-[40px] sm:pb-[60px]">

          {/* Column 1: Logo, Description & Orange Social Icons */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-[16px]">
            <Link href="/" className="relative w-[170px] sm:w-[180px] h-[46px] sm:h-[50px] flex-shrink-0">
              <Image
                src="/assets/bayshoreSolutions/logo-light.png"
                alt="Bayshore Virtual Solutions"
                fill
                className="object-contain object-center md:object-left"
              />
            </Link>
            <p className="text-[#475569] text-[14px] leading-relaxed max-w-[320px]">
              A sister company of Bayshore Communication, providing managed virtual staffing solutions for modern businesses.
            </p>
            {/* Social Icons matching image */}
            <div className="flex items-center justify-center md:justify-start gap-[10px] pt-[4px]">
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-[32px] h-[32px] bg-primary rounded-[6px] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-[32px] h-[32px] bg-primary rounded-[6px] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[32px] h-[32px] bg-primary rounded-[6px] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-[32px] h-[32px] bg-primary rounded-[6px] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <svg className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.376 14.5 5 15.5 5H18V0h-3.808C10.59 0 9 1.581 9 4.615V8z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-[12px]">
            <h3 className="font-bold text-primary text-[16px]">Solutions</h3>
            <ul className="flex flex-col items-center md:items-start gap-[10px]">
              {['Legal Support', 'Healthcare', 'Marketing', 'Real Estate', 'Finance & Admin', 'Technology'].map((item) => (
                <li key={item}>
                  <Link href="/solutions" className="text-[#334155] hover:text-primary text-[14px] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-[12px]">
            <h3 className="font-bold text-primary text-[16px]">Company</h3>
            <ul className="flex flex-col items-center md:items-start gap-[10px]">
              {[
                { name: 'Home', href: '/' },
                { name: 'Solutions Grid', href: '/solutions' },
                { name: 'How It Works', href: '/#how-it-works' },
                { name: 'Our Talent Showcase', href: '/talents' },
                { name: 'About Managed Staffing', href: '/about' },
                { name: 'Get Started', href: '/find-talent' },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-[#334155] hover:text-primary text-[14px] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect With Us */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-[12px]">
            <h3 className="font-bold text-primary text-[16px]">Connect With Us</h3>
            <div className="flex items-start justify-center md:justify-start gap-[10px] pt-[2px]">
              {/* Orange Mail Icon */}
              <div className="w-[30px] h-[30px] bg-primary rounded-[6px] flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                <svg className="w-[15px] h-[15px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col text-left leading-tight">
                <span className="text-[#334155] text-[14px]">Direct Inquiries</span>
                <Link
                  href="mailto:hello@bayshorevirtual.com"
                  className="text-[#0B192C] hover:text-primary text-[14px] font-medium transition-colors mt-[3px]"
                >
                  hello@bayshorevirtual.com
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Section */}
        <div className="border-t border-gray-200 pt-[24px] flex flex-col md:flex-row items-center justify-between gap-[16px] text-center md:text-left">
          <p className="text-[#64748B] text-[13px]">
            © 2026 Bayshore Virtual Solutions. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-[12px] sm:gap-[16px] text-[#475569] text-[13px] flex-wrap">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="text-primary font-semibold">|</span>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-primary font-semibold">|</span>
            <Link href="/faq" className="hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;