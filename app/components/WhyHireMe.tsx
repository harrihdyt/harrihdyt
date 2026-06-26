'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Flutter",
    "Dart",
    "State Management (GetX, BLoC, Provider)",
    "RESTful APIs",
    "Firebase Integration",
    "Git / Version Control",
    "UI/UX Implementation",
    "Agile Methodologies",
    "Swift",
    "Kotlin",
    ".Net",
    "Laravel",
    "PHP",
    "Mysql",
    "Figma",
    "CI/CD",
    "Testing",
];

const CoreExpertise = () => {
    return (
        <section className="py-24 bg-transparent px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight text-center mb-16"
                >
                    Core Expertise
                </motion.h2>

                {/* Skills Container */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {skills.map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.03, duration: 0.4 }}
                            className="px-5 py-3 bg-white/70 backdrop-blur-xs border border-zinc-200/50 rounded-full text-sm font-semibold text-zinc-700 hover:border-[#00E5FF] hover:text-zinc-950 hover:bg-[#00E5FF]/5 transition-all duration-300 cursor-default shadow-xs hover:shadow-md"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CoreExpertise;
