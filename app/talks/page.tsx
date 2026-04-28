'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Video } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import Image from 'next/image';

const talks = [
    {
        id: 1,
        title: "Super Full Stack Developer",
        event: "MeetAp Software Engineer",
        date: "Nov 2024",
        location: "Bogor, Indonesia",
        type: "Workshop",
        description: "Mentored members in Flutter development, focusing on state management, clean architecture, and mobile best practices. Delivered workshops and hands-on sessions to help participants build real-world portfolio projects.",
        link: "#",
        video: "#",
        image: "/talks.jpg"
    },
];

export default function TalksPage() {
    return (
        <main className="min-h-screen bg-white pt-24">
            <div className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">

                {/* Header */}
                <section className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">Talks</h1>
                        <p className="text-gray-500">Speaking & Workshops</p>
                    </motion.div>
                </section>

                {/* Talks Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {talks.map((talk, index) => (
                        <motion.div
                            key={talk.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-gray-300 group flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative h-100 w-full overflow-hidden">
                                <Image
                                    src={talk.image}
                                    alt={talk.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#22c55e] text-xs font-bold rounded-full uppercase tracking-wider border border-[#22c55e]/20">
                                        {talk.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" /> {talk.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#22c55e] transition-colors">
                                    {talk.title}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {talk.event} &bull; {talk.location}
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                                    {talk.description}
                                </p>

                                <div className="flex gap-4 pt-4 border-t border-gray-100">
                                    <a href={talk.link} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#22c55e] transition-colors">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        Slides
                                    </a>
                                    <a href={talk.video} className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#22c55e] transition-colors">
                                        <Video className="w-3.5 h-3.5" />
                                        Recording
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <ContactSection />
        </main>
    );
}
