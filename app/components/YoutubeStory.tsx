'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const YoutubeStory = () => {
    return (
        <section className="py-24 bg-[#121212] relative overflow-hidden px-6 lg:px-24 flex items-center">
            {/* Background Text Watermark */}
            <div className="absolute top-10 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.02] select-none text-center">
                <span className="text-[15vw] font-bold text-white whitespace-nowrap">YOUTUBE</span>
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Visual / Video Placeholder (Left) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Main Image Comp */}
                    <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10" />
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="w-20 h-20 rounded-full bg-[#22c55e]/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-green-500/20">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                        </div>
                        {/* Text Overlay */}
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-white font-bold text-xl">My Journey</h3>
                            <p className="text-gray-400 text-sm">Watch the full story</p>
                        </div>
                    </div>

                    {/* Decorative Floating Elements */}
                    <div className="absolute -z-10 top-[-20px] left-[-20px] text-gray-800 font-bold text-4xl opacity-50">Web Design</div>
                    <div className="absolute -z-10 bottom-[-20px] right-[-40px] text-gray-800 font-bold text-4xl opacity-50">Tutorials</div>
                </motion.div>

                {/* Text Content (Right) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl font-bold leading-tight">
                        Why I Started a <span className="text-[#22c55e]">Youtube Channel?</span>
                    </h2>

                    <div className="space-y-4 text-gray-400 leading-relaxed">
                        <p>
                            First, I want to educate this generation in my country about designs, because we don’t get that much in our formal education, especially the ones who can’t afford colleges. That’s why I use the Indonesian language in my videos.
                        </p>
                        <p>
                            Second, it helps me grow my brand, to get more exposure to potential clients so they know the way how I think and how I communicate my thoughts.
                        </p>
                    </div>

                    <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors mt-4">
                        <YoutubeIcon className="w-5 h-5 fill-white" />
                        Visit My Channel
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

// Simple Icon component helper
const YoutubeIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);

export default YoutubeStory;
