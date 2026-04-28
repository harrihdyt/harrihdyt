'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const ProjectCta = () => {
    return (
        <section className="py-16 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <div className="max-w-xl space-y-4 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                            Interested working with me?
                        </h2>
                        <p className="text-gray-500">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <div className="flex justify-center lg:justify-start pt-2">
                            <a
                                href="mailto:harrihidayat.dev@gmail.com"
                                className="px-6 py-3 bg-[#22c55e] text-white font-semibold rounded-lg hover:bg-[#16a34a] transition-colors flex items-center gap-2 text-sm shadow-sm"
                            >
                                <Mail className="w-4 h-4" />
                                Email Me
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative w-48 h-48 lg:w-56 lg:h-56 shrink-0">
                        <div className="absolute inset-0 rounded-full overflow-hidden bg-gray-100">
                            <Image
                                src="/profile.png"
                                alt="Harri Hidayat"
                                fill
                                className="object-cover grayscale"
                                priority
                            />
                        </div>
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-[#22c55e] rounded-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectCta;
