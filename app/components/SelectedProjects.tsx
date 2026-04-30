'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "Smart HRM Proven",
        category: "Mobile App",
        description: "A comprehensive enterprise mobile solution streamlining employee onboarding, real-time attendance tracking, and secure payroll processing with 5,000+ active employees.",
        image: "/cover.jpg",
        tags: ["Flutter", "Dart", "Firebase"],
    },
    {
        id: 2,
        title: "Milou Farm House",
        category: "Mobile App",
        description: "A bespoke e-commerce and booking application designed to connect users with authentic agricultural experiences, featuring complex calendar integrations and secure payment gateways.",
        image: "/milou_farm.jpg",
        tags: ["Flutter", "Dart", "Provider"],
    },
    {
        id: 3,
        title: "M-IDES",
        category: "Mobile App",
        description: "A highly secure identity and data exchange system for mobile devices, utilizing advanced encryption protocols to ensure safe and rapid information transfer in critical environments.",
        image: "/mides.jpg",
        tags: ["Flutter", "Dart", "GetX"],
    },
    {
        id: 4,
        title: "LASHUP",
        category: "Mobile App",
        description: "A modern beauty loyalty application focused on user autonomy, featuring real-time reward tracking, intuitive membership management, and seamless engagement.",
        image: "/lashup.jpg",
        tags: ["Flutter", "Dart", "Provider"],
    }
];

const SelectedProjects = () => {
    return (
        <section className="py-20 bg-white px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-bold text-gray-900"
                    >
                        Selected Projects
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/projects"
                            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            View All Work
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.id}`} className="group block">
                                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300">
                                    {/* Image */}
                                    <div className="relative aspect overflow-hidden bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#22c55e] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 border border-gray-200 rounded-full text-xs font-medium text-gray-600"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedProjects;
