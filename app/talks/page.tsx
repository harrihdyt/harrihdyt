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
        description: "Mentored members in Flutter development, focusing on state management, clean architecture, and mobile best practices. - Delivered workshops and hands-on sessions to help participants build real-world portfolio projects.",
        link: "#",
        video: "#",
        image: "/talks.jpg"
    },
    // {
    //     id: 2,
    //     title: "State Management: BLoC vs GetX",
    //     event: "Mobile Dev Meetup",
    //     date: "Aug 2024",
    //     location: "Online",
    //     type: "Workshop",
    //     description: "Comparing two popular Flutter state management solutions. exploring their pros, cons, and best use cases for different project sizes.",
    //     link: "#",
    //     video: "#",
    //     image: "https://placehold.co/800x450/1a1a1a/22c55e/png?text=BLoC+vs+GetX"
    // },
    // {
    //     id: 3,
    //     title: "Optimizing Web Performance with Next.js",
    //     event: "Tech Talk Series",
    //     date: "May 2024",
    //     location: "Bandung, Indonesia",
    //     type: "Guest Lecture",
    //     description: "Sharing techniques for achieving perfect Lighthouse scores using Next.js features like Image Optimization, Server Components, and Dynamic Imports.",
    //     link: "#",
    //     video: "#",
    //     image: "https://placehold.co/800x450/1a1a1a/22c55e/png?text=Next.js+Performance"
    // },
    // {
    //     id: 4,
    //     title: "From UI/UX to Software Engineering",
    //     event: "Career Switch Webinar",
    //     date: "Jan 2024",
    //     location: "Online",
    //     type: "Community Talk",
    //     description: "Sharing my personal journey of transitioning from design to engineering, and how design skills make me a better developer.",
    //     link: "#",
    //     video: "#",
    //     image: "https://placehold.co/800x450/1a1a1a/22c55e/png?text=Design+to+Engineering"
    // }
];

export default function TalksPage() {
    return (
        <main className="min-h-screen bg-[#121212] pt-32">
            <div className="container mx-auto px-6 lg:px-24 pb-20">

                {/* Header */}
                <section className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">Talks</h1>
                        <p className="text-xl text-gray-400">Speaking & Workshops</p>
                    </motion.div>
                </section>

                {/* Talks Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-32">
                    {talks.map((talk, index) => (
                        <motion.div
                            key={talk.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#22c55e] transition-colors group flex flex-col"
                        >
                            {/* Talk Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={talk.image}
                                    alt={talk.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-black/70 backdrop-blur-sm text-[#22c55e] text-xs font-bold rounded-full uppercase tracking-wider border border-[#22c55e]/30">
                                        {talk.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-gray-500 text-sm mb-3">
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {talk.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#22c55e] transition-colors">
                                    {talk.title}
                                </h3>

                                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                    <MapPin className="w-4 h-4" />
                                    {talk.event} &bull; {talk.location}
                                </div>

                                <p className="text-gray-400 leading-relaxed mb-6 flex-1">
                                    {talk.description}
                                </p>

                                <div className="flex gap-4 pt-4 border-t border-gray-800">
                                    <a href={talk.link} className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#22c55e] transition-colors">
                                        <ExternalLink className="w-4 h-4" />
                                        Slides
                                    </a>
                                    <a href={talk.video} className="flex items-center gap-2 text-sm font-medium text-white hover:text-[#22c55e] transition-colors">
                                        <Video className="w-4 h-4" />
                                        Recording
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Footer */}
            <ContactSection />
        </main>
    );
}
