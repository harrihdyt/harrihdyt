'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        id: 1,
        role: "Flutter Mobile Engineer",
        company: "PT Proven Force Indonesia",
        period: "2024 — Present",
        description: "Spearheaded the development of core mobile applications using Flutter. Architected scalable state management solutions, integrated complex RESTful APIs, and collaborated closely with cross-functional teams to deliver high-fidelity UI/UX implementations. Improved app performance metrics by 30% through targeted refactoring and asset optimization.",
    },
    {
        id: 2,
        role: "Flutter Mobile Engineer",
        company: "PT Quetra Asia Klandestin",
        period: "2023 — 2024",
        description: "Played a pivotal role in translating complex business requirements into seamless mobile experiences. Implemented custom animations, managed local data persistence, and ensured cross-platform consistency between iOS and Android builds. Participated in rigorous code reviews and agile sprint planning.",
    },
];

const ResumeSection = () => {
    return (
        <section className="py-20 bg-white px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3"
                >
                    Professional Journey
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-gray-500 mb-12"
                >
                    A timeline of my professional growth and technical contributions.
                </motion.p>

                {/* Timeline */}
                <div className="border-l-2 border-gray-200 ml-3 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#22c55e] border-4 border-white" />

                            {/* Card */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                                        <p className="text-[#22c55e] font-medium text-sm">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
