'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SelectedProjects = () => {
    return (
        <section id="selected-works" className="py-24 px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight"
                    >
                        Selected Works
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#00E5FF] hover:text-[#00D4EC] transition-colors uppercase"
                        >
                            All Projects
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </motion.div>
                </div>

                {/* Asymmetrical Grid of 4 Cards */}
                <div className="grid grid-cols-12 gap-8">

                    {/* Card 1: Wide (Top-Left) - Smart HRM Proven */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="col-span-12 md:col-span-7"
                    >
                        <Link href="/projects/1" className="group block relative overflow-hidden rounded-3xl bg-zinc-900 aspect-16/10 md:aspect-auto md:h-[450px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-zinc-200/10">
                            {/* Background Image */}
                            <Image
                                src="/cover.jpg"
                                alt="Smart HRM Proven"
                                fill
                                className="object-cover group-hover:scale-103 transition-transform duration-700 opacity-85"
                            />
                            
                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

                            {/* Content overlay */}
                            <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                                <span className="inline-block px-3.5 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full mb-3 border border-white/15">
                                    Mobile App (HRIS)
                                </span>
                                <h3 className="text-white text-2xl lg:text-3xl font-extrabold tracking-tight">
                                    Smart HRM Proven
                                </h3>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Card 2: Narrow (Top-Right) - Milou Farm House */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="col-span-12 md:col-span-5"
                    >
                        <Link href="/projects/2" className="group block bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(180,140,220,0.12)] border border-white/60 md:h-[450px] flex flex-col justify-between hover:shadow-[0_16px_48px_rgba(180,140,220,0.20)] hover:bg-white/55 transition-all duration-300">
                            {/* Image Section */}
                            <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden border-b border-white/40">
                                <Image
                                    src="/milou_farm.jpg"
                                    alt="Milou Farm House"
                                    fill
                                    className="object-cover group-hover:scale-103 transition-transform duration-700"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="p-8 flex-1 flex flex-col justify-center text-left">
                                <span className="text-xs font-extrabold tracking-wider uppercase text-[#00D4EC] mb-2">
                                    Mobile App
                                </span>
                                <h3 className="text-xl font-extrabold text-zinc-900 mb-2.5 transition-colors group-hover:text-[#00D4EC]">
                                    Milou Farm House
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed font-normal line-clamp-3">
                                    A mobile loyalty and food ordering application that enables customers to place orders, earn loyalty points, and redeem rewards seamlessly.
                                </p>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Card 3: Narrow (Bottom-Left) - Mides */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="col-span-12 md:col-span-5"
                    >
                        <Link href="/projects/3" className="group block bg-white/40 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-[0_8px_32px_rgba(180,140,220,0.12)] border border-white/60 h-[320px] md:h-[400px] flex flex-col justify-center text-left hover:shadow-[0_16px_48px_rgba(180,140,220,0.20)] hover:bg-white/55 transition-all duration-300">
                            {/* Sparkle Icon */}
                            <div className="w-12 h-12 rounded-full bg-[#00E5FF]/10 flex items-center justify-center text-[#00D4EC] mb-8 transition-transform group-hover:scale-110">
                                <Sparkles className="w-5 h-5" />
                            </div>

                            {/* Text content */}
                            <span className="text-xs font-extrabold tracking-wider uppercase text-[#00D4EC] mb-2">
                                Mobile App
                            </span>
                            <h3 className="text-2xl font-extrabold text-zinc-900 mb-2.5 transition-colors group-hover:text-[#00D4EC]">
                                Mides
                            </h3>
                            <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-normal line-clamp-3">
                                A mobile learning application designed for military academy–style education, providing structured training modules and materials.
                            </p>
                        </Link>
                    </motion.div>

                    {/* Card 4: Wide (Bottom-Right) - LASHUP */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="col-span-12 md:col-span-7"
                    >
                        <Link href="/projects/4" className="group block bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(180,140,220,0.12)] border border-white/60 h-auto md:h-[400px] grid md:grid-cols-[1.1fr_0.9fr] hover:shadow-[0_16px_48px_rgba(180,140,220,0.20)] hover:bg-white/55 transition-all duration-300">
                            {/* Text Section */}
                            <div className="p-8 md:p-10 flex flex-col justify-center text-left">
                                <span className="text-xs font-extrabold tracking-wider uppercase text-[#00D4EC] mb-2">
                                    Mobile App Design
                                </span>
                                <h3 className="text-2xl font-extrabold text-zinc-900 mb-2.5 transition-colors group-hover:text-[#00D4EC]">
                                    LASHUP
                                </h3>
                                <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-normal mb-6 line-clamp-3">
                                    A beauty-focused loyalty and royalty mobile application designed to manage rewards and incentives within a digital ecosystem.
                                </p>
                                <span className="inline-flex items-center gap-1 text-sm font-bold text-zinc-900 group-hover:text-[#00D4EC] transition-colors">
                                    Read Case Study
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>

                            {/* Image Section */}
                            <div className="relative w-full h-[220px] md:h-full overflow-hidden border-t md:border-t-0 md:border-l border-white/40">
                                <Image
                                    src="/lashup.jpg"
                                    alt="LASHUP"
                                    fill
                                    className="object-cover group-hover:scale-103 transition-transform duration-700"
                                />
                            </div>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default SelectedProjects;
