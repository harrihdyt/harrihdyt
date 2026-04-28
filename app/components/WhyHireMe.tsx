'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    "Flutter",
    "Dart",
    "State Management (BLoC, Provider)",
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
];

const CoreExpertise = () => {
    return (
        <section className="py-20 bg-white px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10"
                >
                    Core Expertise
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3"
                >
                    {skills.map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="px-5 py-2.5 border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-[#22c55e] hover:text-[#22c55e] transition-colors cursor-default"
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
