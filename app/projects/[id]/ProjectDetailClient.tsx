'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Monitor, Calendar, User, Smartphone, Layers, CheckCircle2, ExternalLink } from 'lucide-react';
import { allProjects, getProjectById } from '../../data/projects';
import ContactSection from '../../components/ContactSection';

function ProjectNotFound() {
    return (
        <main className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                    <Layers className="w-10 h-10 text-gray-400" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Project not found</h1>
                <p className="text-gray-500">The project you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#22c55e] text-white font-semibold rounded-lg hover:bg-[#16a34a] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Projects
                </Link>
            </div>
        </main>
    );
}

export default function ProjectDetailClient({ id }: { id: number }) {
    const project = getProjectById(id);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    if (!project) {
        return <ProjectNotFound />;
    }

    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
                <motion.div
                    style={{ scale: heroScale }}
                    className="absolute inset-0"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </motion.div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-6 lg:px-8 pb-12 z-10"
                >
                    {/* Back button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-24 left-6 lg:left-8"
                    >
                        <Link
                            href="/projects"
                            className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <span className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                                <ArrowLeft className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-medium">Back</span>
                        </Link>
                    </motion.div>

                    {/* Category */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-full text-[#22c55e] text-xs font-medium mb-3">
                            <Smartphone className="w-3 h-3" />
                            {project.category}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 max-w-3xl leading-tight"
                    >
                        {project.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-600 max-w-2xl leading-relaxed"
                    >
                        {project.description}
                    </motion.p>
                </motion.div>
            </section>

            {/* Quick Info Bar */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-6xl mx-auto px-6 lg:px-8 -mt-6 relative z-20"
            >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
                            <User className="w-3.5 h-3.5" />
                            <span>Role</span>
                        </div>
                        <p className="text-gray-900 font-semibold text-sm">{project.role}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Duration</span>
                        </div>
                        <p className="text-gray-900 font-semibold text-sm">{project.duration}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
                            <Monitor className="w-3.5 h-3.5" />
                            <span>Platform</span>
                        </div>
                        <p className="text-gray-900 font-semibold text-sm">{project.platform}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
                            <Layers className="w-3.5 h-3.5" />
                            <span>Category</span>
                        </div>
                        <p className="text-gray-900 font-semibold text-sm">{project.category}</p>
                    </div>
                </div>
            </motion.section>

            {/* Content Section */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-14">
                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold text-gray-900">About the Project</h2>
                            <p className="text-gray-500 leading-relaxed">{project.longDescription}</p>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#22c55e]/30 transition-colors"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Screenshots */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold text-gray-900">Screenshots</h2>
                            <div className="grid gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <div
                                        key={index}
                                        className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-200 group"
                                    >
                                        <Image
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5 sticky top-24"
                        >
                            <h3 className="text-lg font-bold text-gray-900">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1.5 bg-[#22c55e]/5 border border-[#22c55e]/20 rounded-full text-[#22c55e] text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 pt-5 space-y-3">
                                <h3 className="text-lg font-bold text-gray-900">Links</h3>
                                <a
                                    href={project.studyCase}
                                    className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-[#22c55e]/30 transition-colors">
                                        <Monitor className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Study Case</p>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                                <a
                                    href={project.link}
                                    className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors group"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-[#22c55e]/30 transition-colors">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Live Project</p>
                                    </div>
                                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Navigation */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-16">
                <div className="border-t border-gray-200 pt-10">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            {prevProject ? (
                                <Link href={`/projects/${prevProject.id}`} className="group block">
                                    <span className="text-gray-400 text-sm flex items-center gap-2 mb-3">
                                        <ArrowLeft className="w-3.5 h-3.5" />
                                        Previous
                                    </span>
                                    <div className="relative h-36 rounded-xl overflow-hidden border border-gray-200 group-hover:border-[#22c55e]/30 transition-colors">
                                        <Image src={prevProject.image} alt={prevProject.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-3 left-4 right-4">
                                            <h3 className="text-white font-bold">{prevProject.title}</h3>
                                            <p className="text-white/70 text-xs">{prevProject.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            ) : <div />}
                        </div>
                        <div className="text-right">
                            {nextProject ? (
                                <Link href={`/projects/${nextProject.id}`} className="group block">
                                    <span className="text-gray-400 text-sm flex items-center gap-2 justify-end mb-3">
                                        Next
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                    </span>
                                    <div className="relative h-36 rounded-xl overflow-hidden border border-gray-200 group-hover:border-[#22c55e]/30 transition-colors">
                                        <Image src={nextProject.image} alt={nextProject.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute bottom-3 left-4 right-4 text-left">
                                            <h3 className="text-white font-bold">{nextProject.title}</h3>
                                            <p className="text-white/70 text-xs">{nextProject.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            ) : <div />}
                        </div>
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
