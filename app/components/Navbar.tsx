'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Talks', href: '/talks' },
    { name: 'Contact', href: 'mailto:harrihidayat.dev@gmail.com' },
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Scroll detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white'
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group z-10">
                        <div className="w-8 h-8 rounded-full overflow-hidden relative border border-gray-200 group-hover:border-[#22c55e] transition-colors">
                            <Image
                                src="/profile.png"
                                alt="Harri Hidayat"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-base font-bold text-gray-900 tracking-tight">HARRI HIDAYAT</span>
                    </Link>

                    {/* Desktop Center Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${isActive(link.href)
                                    ? 'text-gray-900 underline underline-offset-4 decoration-2 decoration-[#22c55e]'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Resume Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/resume"
                            className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${isActive('/resume')
                                ? 'bg-[#16a34a] text-white shadow-md'
                                : 'bg-[#22c55e] text-white hover:bg-[#16a34a] shadow-sm hover:shadow-md'
                                }`}
                        >
                            Resume
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 z-10 relative w-10 h-10 flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <div className="w-5 h-4 relative flex flex-col justify-between">
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="block w-full h-0.5 bg-gray-900 origin-center"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
                                transition={{ duration: 0.2 }}
                                className="block w-full h-0.5 bg-gray-900"
                            />
                            <motion.span
                                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="block w-full h-0.5 bg-gray-900 origin-center"
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-2 pt-16">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: index * 0.08, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-2xl font-bold py-3 px-6 block transition-colors ${isActive(link.href) ? 'text-[#22c55e]' : 'text-gray-900 hover:text-[#22c55e]'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                                className="mt-4"
                            >
                                <Link
                                    href="/resume"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="px-8 py-3 bg-[#22c55e] text-white font-semibold rounded-lg text-lg hover:bg-[#16a34a] transition-colors"
                                >
                                    Resume
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 flex items-center gap-2"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                                <span className="text-gray-400 text-sm">Available for work</span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
