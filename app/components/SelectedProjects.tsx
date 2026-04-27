'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Globe, Smartphone, Monitor } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        id: 1,
        title: "Smart HRM Proven",
        category: "Mobile App",
        image: "/cover.jpg",
        type: "app",
        link: "#",
        studyCase: "#"
    },
    {
        id: 2,
        title: "Milou Farm House",
        category: "Mobile App",
        image: "/milou_farm.jpg",
        type: "app",
        link: "#",
        studyCase: "#"
    },
    {
        id: 3,
        title: "MIDES",
        category: "Mobile App",
        image: "/mides.jpg",
        type: "app",
        link: "#",
        studyCase: "#"
    },
    {
        id: 4,
        title: "Lash Up Studio",
        category: "Web",
        image: "/lashup.jpg",
        type: "website",
        link: "#",
        studyCase: "#"
    }
];

const SelectedProjects = () => {
    return (
        <section className="py-24 bg-[#121212] relative overflow-hidden px-6 lg:px-24">
            {/* Background Text Watermark */}
            <div className="absolute top-0 right-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.02] select-none text-right">
                <span className="text-[15vw] font-bold text-white whitespace-nowrap">PROJECTS</span>
            </div>

            <div className="container mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-16 text-white"
                >
                    Selected Projects
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            {/* Project Card Image */}
                            <div className="w-full aspect-video rounded-2xl mb-6 overflow-hidden relative shadow-lg bg-[#1a1a1a]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>

                            {/* Project Info */}
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#22c55e] transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mb-4">{project.category}</p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-6 text-sm font-medium text-gray-400">
                                <a href={project.studyCase} className="flex items-center gap-2 hover:text-white transition-colors">
                                    <span className="border-b border-gray-700 pb-0.5">View Study Case</span>
                                </a>
                                <a href={project.link} className="flex items-center gap-2 hover:text-white transition-colors">
                                    {project.type === 'app' ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                                    <span className="border-b border-gray-700 pb-0.5">
                                        {project.type === 'app' ? 'Visit AppStore' : 'Visit Website'}
                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SelectedProjects;
