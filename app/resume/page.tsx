'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code, Server, Wrench } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import { main } from 'framer-motion/client';

const experiences = [
    {
        id: 1,
        role: "Flutter Mobile Engineer",
        company: "PT Proven Force Indonesia",
        period: "Mar 2024 - Present",
        description: "Developed high-performance Flutter-based cross-platform mobile applications, handling the entire development lifecycle from concept, API integration, and testing to deployment on the App Store and Play Store. Delivered solutions adopted by 5,000+ active employees across enterprise clients.",
        skills: ["Flutter", "Dart", "Firebase", "State Management", "GetX", "Rest API", "Github", "Agile/Scrum", "XCode", "Android Studio"]
    },
    {
        id: 2,
        role: "Freelance Flutter Developer",
        company: "PT Ayodya Dialog Semesta ",
        period: "Mar 2025 - Aug 2025",
        description: "Developed the Indonesia Military Learning System using Flutter, collaborating closely with backend engineers to integrate APIs and deliver production-ready features. Implemented GetX state management to improve code organization, scalability, and accelerate feature development.",
        skills: ["Flutter", "Dart", "Firebase", "State Management", "GetX", "Rest API", "Github"]
    },
    {
        id: 3,
        role: "Freelance Flutter Developer",
        company: "PT Squadra Pocket Rocket ",
        period: "Apr 2025 - Jun 2025",
        description: "Developed and delivered the Squadra People mobile application using Flutter, collaborating with backend engineers to integrate APIs and implementing GetX state management to ensure a clean, scalable, and maintainable architecture.",
        skills: ["Flutter", "Dart", "Firebase", "State Management", "GetX", "Rest API", "Github"]
    },
    {
        id: 4,
        role: "Freelance Flutter Developer",
        company: "PT Ahli Bangun Sistem ",
        period: "Feb 2025 - Aug 2025",
        description: "Successfully delivered the Oprtech mobile application from development to Google Play Store release using Flutter, implementing Provider state management and collaborating with backend teams to ensure reliable API integration and scalable architecture.",
        skills: ["Flutter", "Dart", "Firebase", "State Management", "Provider", "Rest API", "Github"]
    },
    {
        id: 5,
        role: "Flutter Mobile Engineer",
        company: "PT Quetra Asia Klandestin",
        period: "Apr 2023 - Jan 2024",
        description: "Built and launched four Flutter-based mobile applications across multiple domains, handling end-to-end development from UI implementation to production release. Actively maintained production apps by fixing bugs, optimizing performance, and delivering new features, including Joanne Studio, Captain Barbershop Member, and Ortuseight e-commerce.",
        skills: ["Flutter", "Dart", "Firebase", "State Management", "Provider", "Rest API", "Github"]
    },
    {
        id: 6,
        role: "Flutter Mobile Engineer",
        company: "PT Jaringan Komunikasi Bersama",
        period: "Sep 2023 - Jan 2024",
        description: "Developed Flutter mobile application features with a strong focus on UI implementation and core functionality. Translated Figma designs into responsive, pixel-accurate Flutter UI components, and contributed to the development of Indonesia Health Pass and Health Passport Worldwide by designing and implementing key user interfaces.",
        skills: ["Flutter", "Dart", "Firebase", "State Management", "Rest API", "Github"]
    },
];

const education = [
    {
        id: 1,
        degree: "Bachelor of Informatics",
        school: "University of Pamulang",
        period: "2019 - 2026",
        description: "Focused on Software Engineering."
    }
];

const skillCategories = [
    {
        title: "Languages",
        icon: Code,
        skills: ["Dart", "Kotlin", "Swift", "JavaScript", "MySQL", "PHP", "GO"]
    },
    {
        title: "Frameworks & Tech",
        icon: Server,
        skills: ["Flutter", "React", "Next.js", "Firebase", "Laravel"]
    },
    {
        title: "Tools & Others",
        icon: Wrench,
        skills: ["Git", "Figma", "Jira", "CI/CD", "Agile/Scrum", "XCode", "Android Studio", "Github", "Gitlab", "Postman"]
    }
];

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-[#121212] pt-32">
            <div className="container mx-auto px-6 lg:px-24 pb-20">

                {/* Header */}
                <section className="mb-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 border-b border-gray-800 pb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">Resume</h1>
                        <p className="text-xl text-gray-400">Harri Hidayat &mdash; Software Engineer</p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        href="/resume.pdf"
                        target="_blank"
                        className="px-8 py-4 bg-[#22c55e] text-white font-bold rounded hover:bg-[#16a34a] transition-all shadow-lg shadow-green-900/20 flex items-center gap-3"
                    >
                        <Download className="w-5 h-5" />
                        Download PDF
                    </motion.a>
                </section>

                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Main Content (Left Column - 2/3) */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Experience */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                            >
                                <Briefcase className="w-6 h-6 text-[#22c55e]" />
                                Experience
                            </motion.h2>

                            <div className="border-l-2 border-gray-800 ml-3 space-y-12">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="relative pl-12"
                                    >
                                        {/* Timeline Dot */}
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#22c55e] border-4 border-[#121212]" />

                                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                                        <div className="text-[#22c55e] font-medium mb-2">{exp.company}</div>
                                        <div className="text-sm text-gray-500 mb-4">{exp.period}</div>
                                        <p className="text-gray-400 leading-relaxed mb-4">
                                            {exp.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map(skill => (
                                                <span key={skill} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
                            >
                                <GraduationCap className="w-6 h-6 text-[#22c55e]" />
                                Education
                            </motion.h2>

                            <div className="border-l-2 border-gray-800 ml-3 space-y-12">
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={edu.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative pl-12"
                                    >
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-600 border-4 border-[#121212]" />

                                        <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                        <div className="text-gray-300 font-medium mb-2">{edu.school}</div>
                                        <div className="text-sm text-gray-500 mb-4">{edu.period}</div>
                                        <p className="text-gray-400">
                                            {edu.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                    </div>


                    {/* Sidebar Content (Right Column - 1/3) */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#1a1a1a] rounded-2xl p-8 sticky top-32 space-y-10 border border-gray-800"
                        >
                            <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-4">Skills</h3>

                            {skillCategories.map((cat, idx) => (
                                <div key={idx}>
                                    <h4 className="text-gray-300 font-medium mb-4 flex items-center gap-2">
                                        <cat.icon className="w-4 h-4 text-[#22c55e]" />
                                        {cat.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <ContactSection />
        </main>
    );
}
