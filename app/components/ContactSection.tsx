'use client';

import React from 'react';

const ContactSection = () => {
    return (
        <footer className="border-t border-zinc-100 bg-transparent relative z-10">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Left */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-[10px] sm:text-xs text-zinc-400 tracking-widest uppercase font-medium">
                    <span className="font-extrabold text-zinc-900 text-sm tracking-tight normal-case">Harri Hidayat</span>
                    <span className="text-zinc-300">•</span>
                    <span>© {new Date().getFullYear()} Harri Hidayat.</span>
                </div>

                {/* Right */}
                <div className="flex items-center justify-center gap-6 text-[10px] sm:text-xs font-bold tracking-widest text-zinc-400 uppercase">
                    <a
                        href="https://linkedin.com/in/harrihidayat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 transition-colors"
                    >
                        Linkedin
                    </a>
                    <a
                        href="https://github.com/harrihdyt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 transition-colors"
                    >
                        Github
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-zinc-900 transition-colors"
                    >
                        Twitter
                    </a>
                    <a
                        href="mailto:harrihidayat.dev@gmail.com"
                        className="hover:text-zinc-900 transition-colors"
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
