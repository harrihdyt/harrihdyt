'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="min-h-[85vh] flex items-center bg-white relative overflow-hidden px-6 lg:px-8 pt-16">
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-[#22c55e] font-semibold text-sm tracking-widest uppercase"
                    >
                        Mobile Software Engineer
                    </motion.p>

                    {/* Name */}
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                        Hi, I&apos;m Harri<br />Hidayat.
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-lg">
                        Mobile Engineer with 4 years of experience developing high-quality mobile applications across iOS and Android platforms, using both Flutter and native technologies (Kotlin and Swift). Skilled in building scalable and maintainable architectures, with strong expertise in state management (GetX, Provider, BLoC). Experienced in publishing and maintaining applications on the App Store and Google Play, reaching over 1,000+ users.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                            href="/projects"
                            className="px-6 py-3 bg-[#22c55e] text-white font-semibold rounded-lg hover:bg-[#16a34a] transition-colors text-sm shadow-sm"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="mailto:harrihidayat.dev@gmail.com"
                            className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all text-sm"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-8 pt-6"
                    >
                        <div>
                            <p className="text-3xl font-bold text-gray-900 italic">4+</p>
                            <p className="text-gray-500 text-sm">Years Experience</p>
                        </div>
                        <div className="w-px h-10 bg-gray-200" />
                        <div>
                            <p className="text-3xl font-bold text-gray-900 italic">9</p>
                            <p className="text-gray-500 text-sm">Apps Published</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                        {/* Circle border */}
                        <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
                        {/* Photo */}
                        <div className="absolute inset-2 rounded-full overflow-hidden bg-gray-100">
                            <Image
                                src="/profile.png"
                                alt="Harri Hidayat"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>
                        {/* Decorative dot */}
                        <div className="absolute -top-1 right-8 w-4 h-4 bg-[#22c55e] rounded-full" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
