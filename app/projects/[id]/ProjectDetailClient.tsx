'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Monitor, Calendar, User, Smartphone, Layers, CheckCircle2, ExternalLink } from 'lucide-react';
import { allProjects, getProjectById, type Project } from '../../data/projects';
import ContactSection from '../../components/ContactSection';

function ProjectNotFound() {
    return (
        <main className="min-h-screen bg-[#121212] flex items-center justify-center">
            <div className="text-center space-y-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-24 h-24 mx-auto rounded-full bg-[#1a1a1a] flex items-center justify-center"
                >
                    <Layers className="w-10 h-10 text-gray-600" />
                </motion.div>
                <h1 className="text-3xl font-bold text-white">Project not found</h1>
                <p className="text-gray-400">The project you&apos;re looking for doesn&apos;t exist.</p>
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
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    if (!project) {
        return <ProjectNotFound />;
    }

    // Find adjacent projects for navigation
    const currentIndex = allProjects.findIndex(p => p.id === project.id);
    const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
    const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

    return (
        <main className="min-h-screen bg-[#121212]">
            {/* Hero Section */}
            <section ref={heroRef} className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
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
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/40 to-transparent" />
                </motion.div>

                {/* Hero content */}
                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="absolute inset-0 flex flex-col justify-end px-6 lg:px-24 pb-16 z-10"
                >
                    {/* Back button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-28 left-6 lg:left-24"
                    >
                        <Link
                            href="/projects"
                            className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                        >
                            <span className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <ArrowLeft className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-medium">Back to Projects</span>
                        </Link>
                    </motion.div>

                    {/* Category badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#22c55e]/20 backdrop-blur-md border border-[#22c55e]/30 rounded-full text-[#22c55e] text-sm font-medium mb-4">
                            <Smartphone className="w-3.5 h-3.5" />
                            {project.category}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 max-w-3xl leading-tight"
                    >
                        {project.title}
                    </motion.h1>

                    {/* Short description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-gray-300 max-w-2xl leading-relaxed"
                    >
                        {project.description}
                    </motion.p>
                </motion.div>

                {/* Decorative floating elements */}
                <div className="absolute top-32 right-12 lg:right-24 pointer-events-none z-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 border border-[#22c55e]/20 rounded-lg"
                    />
                </div>
            </section>

            {/* Quick Info Bar */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="px-6 lg:px-24 -mt-8 relative z-20"
            >
                <div className="bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <User className="w-4 h-4" />
                            <span>Role</span>
                        </div>
                        <p className="text-white font-semibold">{project.role}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Duration</span>
                        </div>
                        <p className="text-white font-semibold">{project.duration}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Monitor className="w-4 h-4" />
                            <span>Platform</span>
                        </div>
                        <p className="text-white font-semibold">{project.platform}</p>
                    </div>
                    <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Layers className="w-4 h-4" />
                            <span>Category</span>
                        </div>
                        <p className="text-white font-semibold">{project.category}</p>
                    </div>
                </div>
            </motion.section>

            {/* Content Section */}
            <section className="px-6 lg:px-24 py-20">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-[#22c55e] rounded-full" />
                                <h2 className="text-2xl lg:text-3xl font-bold text-white">About the Project</h2>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                {project.longDescription}
                            </p>
                        </motion.div>

                        {/* Key Features */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-[#22c55e] rounded-full" />
                                <h2 className="text-2xl lg:text-3xl font-bold text-white">Key Features</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {project.features.map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 p-4 bg-[#1a1a1a] rounded-xl border border-white/5 hover:border-[#22c55e]/20 transition-colors group"
                                    >
                                        <div className="mt-0.5 w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center shrink-0 group-hover:bg-[#22c55e]/20 transition-colors">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e]" />
                                        </div>
                                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Project Screenshot / Gallery */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-[#22c55e] rounded-full" />
                                <h2 className="text-2xl lg:text-3xl font-bold text-white">Screenshots</h2>
                            </div>
                            <div className="grid gap-6">
                                {project.screenshots.map((screenshot, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/5 group"
                                    >
                                        <Image
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Tech Stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1a1a] rounded-2xl border border-white/5 p-6 space-y-4 sticky top-28"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-1 h-6 bg-[#22c55e] rounded-full" />
                                <h3 className="text-lg font-bold text-white">Tech Stack</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="px-3 py-1.5 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-lg text-[#22c55e] text-sm font-medium hover:bg-[#22c55e]/20 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-white/5 pt-4 space-y-4">
                                <h3 className="text-lg font-bold text-white">Project Links</h3>
                                <div className="space-y-3">
                                    <a
                                        href={project.studyCase}
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#22c55e]/10 transition-colors">
                                            <Monitor className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Study Case</p>
                                            <p className="text-xs text-gray-500">View the case study</p>
                                        </div>
                                        <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                    <a
                                        href={project.link}
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#22c55e]/10 transition-colors">
                                            <ArrowUpRight className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Live Project</p>
                                            <p className="text-xs text-gray-500">Visit the app</p>
                                        </div>
                                        <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Project Navigation */}
            <section className="px-6 lg:px-24 pb-20">
                <div className="border-t border-white/5 pt-12">
                    <div className="grid grid-cols-2 gap-6">
                        {/* Previous Project */}
                        <div>
                            {prevProject ? (
                                <Link href={`/projects/${prevProject.id}`} className="group block">
                                    <motion.div
                                        whileHover={{ x: -4 }}
                                        className="space-y-3"
                                    >
                                        <span className="text-gray-500 text-sm flex items-center gap-2">
                                            <ArrowLeft className="w-3.5 h-3.5" />
                                            Previous Project
                                        </span>
                                        <div className="relative h-40 rounded-xl overflow-hidden border border-white/5 group-hover:border-[#22c55e]/20 transition-colors">
                                            <Image
                                                src={prevProject.image}
                                                alt={prevProject.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-white font-bold text-lg">{prevProject.title}</h3>
                                                <p className="text-gray-300 text-sm">{prevProject.category}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>

                        {/* Next Project */}
                        <div className="text-right">
                            {nextProject ? (
                                <Link href={`/projects/${nextProject.id}`} className="group block">
                                    <motion.div
                                        whileHover={{ x: 4 }}
                                        className="space-y-3"
                                    >
                                        <span className="text-gray-500 text-sm flex items-center gap-2 justify-end">
                                            Next Project
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        </span>
                                        <div className="relative h-40 rounded-xl overflow-hidden border border-white/5 group-hover:border-[#22c55e]/20 transition-colors">
                                            <Image
                                                src={nextProject.image}
                                                alt={nextProject.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-4 left-4 right-4 text-left">
                                                <h3 className="text-white font-bold text-lg">{nextProject.title}</h3>
                                                <p className="text-gray-300 text-sm">{nextProject.category}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ) : (
                                <div />
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <ContactSection />
        </main>
    );
}
