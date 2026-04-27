'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ProjectCta = () => {
    return (
        <section className="py-24 px-6 lg:px-24 bg-[#121212]">
            <div className="container mx-auto relative">
                <div className="relative bg-[#1a1a1a] rounded-3xl p-12 lg:p-24 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <svg width="100%" height="100%">
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>

                    {/* Left Content: Text & Button */}
                    <div className="relative z-10 max-w-2xl space-y-8 text-center lg:text-left">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Interested working with me?
                        </h2>
                        <div className="flex justify-center lg:justify-start">
                            <button className="px-8 py-4 bg-[#22c55e] text-white font-bold rounded hover:bg-[#16a34a] transition-colors flex items-center gap-2 shadow-lg shadow-green-900/20 text-lg">
                                <Mail className="w-5 h-5" />
                                Email Me
                            </button>
                            {/* <button className="px-8 py-4 ml-4 border border-gray-600 text-white font-bold rounded hover:bg-white/5 transition-colors text-lg">
                                See More Projects
                            </button> */}
                        </div>
                    </div>

                    {/* Right Content: Image Cutout */}
                    <div className="relative z-10 w-full max-w-sm">
                        <div className="relative aspect-square">
                            {/* User Photo */}
                            <div className="absolute inset-0">
                                <Image
                                    src="/profile.png"
                                    alt="Harri Hidayat"
                                    fill
                                    className="object-cover grayscale"
                                    priority
                                />
                            </div>

                            {/* Floating Element */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#22c55e] rounded-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectCta;
