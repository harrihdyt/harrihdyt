'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

import ProjectCta from '../components/ProjectCta';
import Image from 'next/image';
import Link from 'next/link';
import ContactSection from '../components/ContactSection';
import { ArrowUpRight, Monitor, Smartphone } from 'lucide-react';
import { allProjects } from '../data/projects';

// Navbar import fix: assuming Navbar is default export from components/Navbar


const ProjectCard = ({ project }: { project: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    // Parallax logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPct = (e.clientX - rect.left) / rect.width - 0.5;
        const yPct = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <div className="space-y-4">
            {/* Card Image with Parallax */}
            <Link href={`/projects/${project.id}`}>
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-full aspect-[16/10] rounded-lg overflow-hidden cursor-pointer perspective-1000 group"
                >
                    <motion.div
                        style={{
                            rotateX: useTransform(mouseY, [-0.5, 0.5], [5, -5]),
                            rotateY: useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
                            scale: useTransform(isActive ? new MotionValue(1.02) : new MotionValue(1), [1, 1], [1, 1.05])
                        }}
                        className="w-full h-full relative transition-transform duration-500 bg-[#1a1a1a]"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors z-10" />

                        {/* Mock UI Elements inside card - Removed as we have real images now, or purely stylistic overlay */}
                        <div className="absolute top-8 left-8 right-8 bottom-8 border border-white/20 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                            <span className="text-white font-bold tracking-widest uppercase text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">View Project</span>
                        </div>
                    </motion.div>
                </motion.div>
            </Link>

            {/* Info */}
            <div>
                <Link href={`/projects/${project.id}`}>
                    <h3
                        className={`text-xl font-bold mb-2 cursor-pointer transition-colors ${isActive ? 'text-[#22c55e]' : 'text-white hover:text-gray-300'}`}
                    >
                        {project.title}
                    </h3>
                </Link>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="flex gap-6 text-sm font-medium text-gray-400 mt-3">
                    <a href={project.studyCase} className="flex items-center gap-2 hover:text-white transition-colors">
                        <Monitor className="w-4 h-4" />
                        <span>View Study Case</span>
                    </a>
                    <Link href={`/projects/${project.id}`} className="flex items-center gap-2 hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                        <span>View Details</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default function ProjectsPage() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = filter === 'all'
        ? allProjects
        : allProjects.filter(p => p.slug === filter);

    return (
        <main className="min-h-screen bg-[#121212] pt-32">
            {/* Header */}
            <section className="px-6 lg:px-24 mb-16 relative">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-5xl lg:text-7xl font-bold text-white mb-12"
                >
                    Projects
                </motion.h1>

                {/* Floating Geometric Elements */}
                <div className="absolute top-0 right-20 pointer-events-none">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 border border-green-500/20 rotate-12"
                    />
                </div>

                {/* Tabs */}
                <div className="flex gap-8 border-b border-gray-800 pb-4">
                    <button
                        onClick={() => setFilter('all')}
                        className={`text-lg font-medium transition-colors ${filter === 'all' ? 'text-white border-b-2 border-[#22c55e] pb-4 -mb-4.5' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter('web-design')}
                        className={`text-lg font-medium transition-colors ${filter === 'web-design' ? 'text-white border-b-2 border-[#22c55e] pb-4 -mb-4.5' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Web
                    </button>
                    <button
                        onClick={() => setFilter('mobile-app')}
                        className={`text-lg font-medium transition-colors ${filter === 'mobile-app' ? 'text-white border-b-2 border-[#22c55e] pb-4 -mb-4.5' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        Mobile App
                    </button>
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 lg:px-24 pb-24">
                <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
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
