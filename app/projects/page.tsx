'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { allProjects } from '../data/projects';
import ProjectCta from '../components/ProjectCta';
import ContactSection from '../components/ContactSection';

const ProjectCard = ({ project }: { project: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Link href={`/projects/${project.id}`} className="group block">
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
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
                            {project.techStack.slice(0, 3).map((tag: string) => (
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
    );
};

export default function ProjectsPage() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? allProjects
        : allProjects.filter(p => p.slug === filter);

    const tabs = [
        { label: 'All', value: 'all' },
        { label: 'Web', value: 'web-design' },
        { label: 'Mobile App', value: 'mobile-app' },
    ];

    return (
        <main className="min-h-screen bg-white pt-24">
            {/* Header */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                        Selected Work
                    </h1>
                    <p className="text-gray-500 max-w-lg">
                        A curated showcase of mobile applications engineered for high performance,
                        robust architecture, and seamless user experiences across iOS and Android platforms.
                    </p>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex gap-1 mt-8 border-b border-gray-200 pb-0">
                    {tabs.map(tab => (
                        <button
                            key={tab.value}
                            onClick={() => setFilter(tab.value)}
                            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${filter === tab.value
                                ? 'text-gray-900 border-[#22c55e]'
                                : 'text-gray-400 border-transparent hover:text-gray-600'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            {/* CTA */}
            <ProjectCta />

            {/* Footer */}
            <ContactSection />
        </main>
    );
}
