'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Download, Calendar } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Flutter Mobile Engineer",
        company: "PT Proven Force Indonesia",
        period: "2024 - Present",
        description: "Building and publishing Flutter-based mobile applications for iOS and Android.",
        skills: ["Flutter", "Dart", "iOS", "Android", "Firebase", "Git", "Agile", "Scrum", "Getx", "Rest API"]
    },
    {
        id: 2,
        role: "Flutter Mobile Engineer",
        company: "PT Quetra Asia Klandestin",
        period: "2023 - 2024",
        description: "Building and maintenance existing mobile applications for iOS and Android.",
        skills: ["Flutter", "Dart", "iOS", "Android", "Firebase", "Git", "Scrum", "Provider", "Rest API"]
    },
    // Add more based on real data later
];

const ResumeSection = () => {
    return (
        <section className="py-24 bg-[#121212] relative overflow-hidden px-6 lg:px-24">
            {/* Background Text Watermark */}
            <div className="absolute top-10 right-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.02] select-none text-center">
                <span className="text-[15vw] font-bold text-white whitespace-nowrap">RESUME</span>
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start relative z-10">

                {/* Left: Heading & Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                        My <span className="text-[#22c55e]">Professional Journey.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                        Experienced Mobile Engineer with a strong background in native and cross-platform development. I enjoy building scalable applications and solving complex problems.
                    </p>

                    <a href="/resume.pdf" className="inline-flex items-center gap-3 px-8 py-4 bg-[#22c55e] text-white font-bold rounded hover:bg-[#16a34a] transition-all shadow-lg shadow-green-900/20 group">
                        <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        Download Resume
                    </a>
                </motion.div>

                {/* Right: Timeline/Experience List */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/30 border border-gray-700/50 p-8 rounded-2xl hover:bg-gray-800/50 transition-colors group"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#22c55e] transition-colors">{exp.role}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-900/50 px-3 py-1 rounded-full w-fit">
                                    <Calendar className="w-3 h-3" />
                                    {exp.period}
                                </div>
                            </div>

                            <p className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-gray-500" />
                                {exp.company}
                            </p>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="text-xs font-semibold bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ResumeSection;
