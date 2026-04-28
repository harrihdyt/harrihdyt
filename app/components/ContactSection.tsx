'use client';

import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left */}
                <p className="text-gray-400 text-xs tracking-wide uppercase">
                    © {new Date().getFullYear()} Harri Hidayat. All rights reserved.
                </p>

                {/* Right */}
                <div className="flex items-center gap-6 text-xs font-medium tracking-wide uppercase">
                    <a
                        href="https://github.com/harrihdyt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        Source Code
                    </a>
                    <a
                        href="https://linkedin.com/in/harrihidayat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        Linkedin Profile
                    </a>
                    <a
                        href="mailto:harrihidayat.dev@gmail.com"
                        className="text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        Email Me
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
