'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    ArrowUpRight,
    Calendar,
    MapPin,
    Users,
    Clock,
    CheckCircle2,
    ExternalLink,
    Video,
    Tag,
    Mic,
    ChevronRight,
} from 'lucide-react';
import { talks, getTalkById } from '../../data/talks';
import ContactSection from '../../components/ContactSection';

function TalkNotFound() {
    return (
        <main className="min-h-screen pt-24 flex items-center justify-center">
            <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                    <Mic className="w-10 h-10 text-gray-400" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Talk not found</h1>
                <p className="text-gray-500">The talk you&apos;re looking for doesn&apos;t exist.</p>
                <Link
                    href="/talks"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#00E5FF] text-zinc-900 font-semibold rounded-lg hover:bg-[#00D4EC] transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Talks
                </Link>
            </div>
        </main>
    );
}

export default function TalksDetailEvent({ id }: { id: number }) {
    const talk = getTalkById(id);

    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    if (!talk) {
        return <TalkNotFound />;
    }

    const currentIndex = talks.findIndex(p => p.id === talk.id);
    const prevTalk = currentIndex > 0 ? talks[currentIndex - 1] : null;
    const nextTalk = currentIndex < talks.length - 1 ? talks[currentIndex + 1] : null;

    return (
        <main className="min-h-screen">

            {/* ── Hero ── */}
            <section ref={heroRef} className="relative h-[65vh] lg:h-[75vh] overflow-hidden">
                <motion.div style={{ scale: heroScale }} className="absolute inset-0">
                    <Image
                        src={talk.image}
                        alt={talk.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                </motion.div>

                <motion.div
                    style={{ opacity: heroOpacity }}
                    className="absolute inset-0 flex flex-col justify-end max-w-6xl mx-auto px-6 lg:px-8 pb-14 z-10"
                >
                    {/* Back */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-24 left-6 lg:left-8"
                    >
                        <Link
                            href="/talks"
                            className="group flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            <span className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 flex items-center justify-center group-hover:bg-white transition-colors shadow-sm">
                                <ArrowLeft className="w-4 h-4" />
                            </span>
                            <span className="text-sm font-medium">Back to Talks</span>
                        </Link>
                    </motion.div>

                    {/* Type badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00E5FF]/10 border border-[#00E5FF]/20 rounded-full text-[#00D4EC] text-xs font-semibold mb-4 uppercase tracking-wider">
                            <Mic className="w-3 h-3" />
                            {talk.type}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 max-w-3xl leading-tight"
                    >
                        {talk.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-600 max-w-2xl leading-relaxed"
                    >
                        {talk.description}
                    </motion.p>
                </motion.div>
            </section>

            {/* ── Quick Info Bar ── */}
            <motion.section
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="max-w-6xl mx-auto px-6 lg:px-8 -mt-8 relative z-20"
            >
                <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm">
                    {[
                        { icon: <Calendar className="w-4 h-4" />, label: 'Date', value: talk.date },
                        { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: talk.location },
                        { icon: <Users className="w-4 h-4" />, label: 'Audience', value: talk.audience },
                        { icon: <Clock className="w-4 h-4" />, label: 'Duration', value: talk.duration },
                    ].map(item => (
                        <div key={item.label} className="space-y-1">
                            <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-wide">
                                {item.icon}
                                <span>{item.label}</span>
                            </div>
                            <p className="text-gray-900 font-semibold text-sm">{item.value}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* ── Content ── */}
            <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">

                    {/* Main */}
                    <div className="lg:col-span-2 space-y-14">

                        {/* About */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold text-gray-900">About This Talk</h2>
                            <p className="text-gray-500 leading-relaxed text-[15px]">{talk.longDescription}</p>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-2xl font-bold text-gray-900">Key Highlights</h2>
                            <div className="grid sm:grid-cols-2 gap-3">
                                {talk.highlights.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.06 }}
                                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#22c55e]/30 transition-colors"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#22c55e] mt-0.5 shrink-0" />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Event Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-[#00E5FF]/5 to-transparent border border-[#00E5FF]/15 rounded-2xl p-6 space-y-3"
                        >
                            <h2 className="text-lg font-bold text-gray-900">Event</h2>
                            <div className="flex flex-col gap-2 text-sm text-gray-600">
                                <span className="flex items-center gap-2">
                                    <Mic className="w-4 h-4 text-[#22c55e]" />
                                    {talk.event}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-[#22c55e]" />
                                    {talk.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-[#22c55e]" />
                                    {talk.date}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 rounded-2xl p-6 space-y-6 sticky top-24"
                        >
                            {/* Tags */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                    <Tag className="w-4 h-4 text-[#22c55e]" /> Topics
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {talk.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-[#00E5FF]/5 border border-[#00E5FF]/20 rounded-full text-[#00D4EC] text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border-t border-gray-100" />

                            {/* Links */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-gray-900">Resources</h3>

                                {talk.link && talk.link !== '#' && (
                                    <a
                                        href={talk.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-[#22c55e]/30 transition-colors shrink-0">
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Slides</p>
                                            <p className="text-xs text-gray-400">View presentation</p>
                                        </div>
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                )}

                                {talk.video && talk.video !== '#' && (
                                    <a
                                        href={talk.video}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors group"
                                    >
                                        <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-[#22c55e]/30 transition-colors shrink-0">
                                            <Video className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">Recording</p>
                                            <p className="text-xs text-gray-400">Watch the session</p>
                                        </div>
                                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                )}

                                {(talk.link === '#' || !talk.link) && (talk.video === '#' || !talk.video) && (
                                    <p className="text-xs text-gray-400 italic">Resources coming soon.</p>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── Navigation ── */}
            {(prevTalk || nextTalk) && (
                <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-16">
                    <div className="border-t border-gray-200 pt-10">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                {prevTalk ? (
                                    <Link href={`/talks/${prevTalk.id}`} className="group block">
                                        <span className="text-gray-400 text-sm flex items-center gap-2 mb-3">
                                            <ArrowLeft className="w-3.5 h-3.5" />
                                            Previous
                                        </span>
                                        <div className="relative h-36 rounded-xl overflow-hidden border border-gray-200 group-hover:border-[#22c55e]/30 transition-colors">
                                            <Image
                                                src={prevTalk.image}
                                                alt={prevTalk.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-3 left-4 right-4">
                                                <h3 className="text-white font-bold text-sm">{prevTalk.title}</h3>
                                                <p className="text-white/70 text-xs">{prevTalk.type}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : <div />}
                            </div>

                            <div className="text-right">
                                {nextTalk ? (
                                    <Link href={`/talks/${nextTalk.id}`} className="group block">
                                        <span className="text-gray-400 text-sm flex items-center gap-2 justify-end mb-3">
                                            Next
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </span>
                                        <div className="relative h-36 rounded-xl overflow-hidden border border-gray-200 group-hover:border-[#22c55e]/30 transition-colors">
                                            <Image
                                                src={nextTalk.image}
                                                alt={nextTalk.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                            <div className="absolute bottom-3 left-4 right-4 text-left">
                                                <h3 className="text-white font-bold text-sm">{nextTalk.title}</h3>
                                                <p className="text-white/70 text-xs">{nextTalk.type}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ) : <div />}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <ContactSection />
        </main>
    );
}
