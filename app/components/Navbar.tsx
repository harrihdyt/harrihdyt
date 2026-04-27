'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
    { name: 'Projects', href: '/projects' },
    { name: 'Talks', href: '/talks' },
    { name: 'Resume', href: '/resume' },
    { name: 'Contact', href: 'mailto:harrihidayat.dev@gmail.com' },
    // { name: 'Shop', href: '#' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    const backgroundColor = useTransform(
        scrollY,
        [0, 50],
        ['rgba(18, 18, 18, 0)', 'rgba(18, 18, 18, 0.8)']
    );

    const backdropBlur = useTransform(
        scrollY,
        [0, 50],
        ['blur(0px)', 'blur(12px)']
    );

    return (
        <motion.nav
            style={{ backgroundColor, backdropFilter: backdropBlur }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0"
        >
            <div className="w-full px-8 lg:px-12 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-transparent group-hover:border-[#22c55e] transition-colors">
                        <Image
                            src="/profile.png"
                            alt="Harri Hidayat"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Harri Hidayat</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-400 hover:text-white font-medium text-sm transition-colors hover:text-[#22c55e]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button (Simple Placeholder) */}
                <button className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
