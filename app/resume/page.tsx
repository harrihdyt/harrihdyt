'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code, Server, Wrench } from 'lucide-react';
import ContactSection from '../components/ContactSection';

const experiences = [
    {
        id: 1,
        role: "Flutter Mobile Engineer",
        company: "PT Proven Force Indonesia",
        period: "Mar 2024 - Present",
        description: "Developed high-performance Flutter-based cross-platform mobile applications, handling the entire development lifecycle from concept, API integration, and testing to deployment on the App Store and Play Store. Delivered solutions adopted by 5,000+ active employees across enterprise clients.",
        skills: ["Flutter", "Dart", "Firebase", "GetX", "Rest API", "Github", "Agile/Scrum", "XCode", "Android Studio"]
    },
    {
        id: 2,
        role: "Freelance Flutter Developer",
        company: "PT Ayodya Dialog Semesta",
        period: "Mar 2025 - Aug 2025",
        description: "Developed the Indonesia Military Learning System using Flutter, collaborating closely with backend engineers to integrate APIs and deliver production-ready features. Implemented GetX state management to improve code organization, scalability, and accelerate feature development.",
        skills: ["Flutter", "Dart", "Firebase", "GetX", "Rest API", "Github"]
    },
    {
        id: 3,
        role: "Freelance Flutter Developer",
        company: "PT Squadra Pocket Rocket",
        period: "Apr 2025 - Jun 2025",
        description: "Developed and delivered the Squadra People mobile application using Flutter, collaborating with backend engineers to integrate APIs and implementing GetX state management to ensure a clean, scalable, and maintainable architecture.",
        skills: ["Flutter", "Dart", "Firebase", "GetX", "Rest API", "Github"]
    },
    {
        id: 4,
        role: "Freelance Flutter Developer",
        company: "PT Ahli Bangun Sistem",
        period: "Feb 2025 - Aug 2025",
        description: "Successfully delivered the Oprtech mobile application from development to Google Play Store release using Flutter, implementing Provider state management and collaborating with backend teams to ensure reliable API integration and scalable architecture.",
        skills: ["Flutter", "Dart", "Firebase", "Provider", "Rest API", "Github"]
    },
    {
        id: 5,
        role: "Flutter Mobile Engineer",
        company: "PT Quetra Asia Klandestin",
        period: "Apr 2023 - Jan 2024",
        description: "Built and launched four Flutter-based mobile applications across multiple domains, handling end-to-end development from UI implementation to production release. Actively maintained production apps by fixing bugs, optimizing performance, and delivering new features.",
        skills: ["Flutter", "Dart", "Firebase", "Provider", "Rest API", "Github"]
    },
    {
        id: 6,
        role: "Flutter Mobile Engineer",
        company: "PT Jaringan Komunikasi Bersama",
        period: "Sep 2023 - Jan 2024",
        description: "Developed Flutter mobile application features with a strong focus on UI implementation and core functionality. Translated Figma designs into responsive, pixel-accurate Flutter UI components.",
        skills: ["Flutter", "Dart", "Firebase", "Rest API", "Github"]
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
        <main className="min-h-screen bg-white pt-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">

                {/* Header */}
                <section className="mb-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b border-gray-200 pb-8">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Resume</h1>
                        <p className="text-gray-500">Harri Hidayat &mdash; Software Engineer</p>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        href="/resume.pdf"
                        target="_blank"
                        className="px-6 py-3 bg-[#22c55e] text-white font-semibold rounded-lg hover:bg-[#16a34a] transition-colors flex items-center gap-2 text-sm shadow-sm"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </motion.a>
                </section>

                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-14">

                        {/* Experience */}
                        <section>
                            <motion.h2
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2"
                            >
                                <Briefcase className="w-5 h-5 text-[#22c55e]" />
                                Experience
                            </motion.h2>

                            <div className="border-l-2 border-gray-200 ml-3 space-y-10">
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="relative pl-10"
                                    >
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#22c55e] border-4 border-white" />

                                        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                                                <h3 className="text-base font-bold text-gray-900">{exp.role}</h3>
                                                <span className="text-xs text-gray-400 font-medium whitespace-nowrap">{exp.period}</span>
                                            </div>
                                            <p className="text-[#22c55e] font-medium text-sm mb-3">{exp.company}</p>
                                            <p className="text-gray-500 text-sm leading-relaxed mb-4">{exp.description}</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {exp.skills.map(skill => (
                                                    <span key={skill} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
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
                                className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2"
                            >
                                <GraduationCap className="w-5 h-5 text-[#22c55e]" />
                                Education
                            </motion.h2>

                            <div className="border-l-2 border-gray-200 ml-3 space-y-10">
                                {education.map((edu) => (
                                    <motion.div
                                        key={edu.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative pl-10"
                                    >
                                        <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-gray-300 border-4 border-white" />

                                        <div className="bg-white border border-gray-200 rounded-2xl p-6">
                                            <h3 className="text-base font-bold text-gray-900 mb-1">{edu.degree}</h3>
                                            <p className="text-gray-600 font-medium text-sm mb-1">{edu.school}</p>
                                            <p className="text-xs text-gray-400 mb-3">{edu.period}</p>
                                            <p className="text-gray-500 text-sm">{edu.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white border border-gray-200 rounded-2xl p-6 sticky top-24 space-y-8"
                        >
                            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Skills</h3>

                            {skillCategories.map((cat, idx) => (
                                <div key={idx}>
                                    <h4 className="text-gray-600 font-medium text-sm mb-3 flex items-center gap-2">
                                        <cat.icon className="w-4 h-4 text-[#22c55e]" />
                                        {cat.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cat.skills.map(skill => (
                                            <span key={skill} className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-100">
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

            <ContactSection />
        </main>
    );
}
