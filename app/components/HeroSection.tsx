'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Rocket } from "lucide-react";

import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-6 lg:px-8 pt-20 pb-16">
            <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-16 items-center">

                {/* ── Left: Text Content ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 text-left order-2 lg:order-1"
                >
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-xs"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#BF40BF] animate-pulse" />
                        <span className="text-xs font-semibold text-zinc-600 tracking-wide uppercase">Software Engineer</span>
                    </motion.div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 leading-[1.05] tracking-tight">
                        Hi, I'm Harri Hidayat<br />
                        Software Engineer.
                    </h1>

                    {/* Subtitle / Bio */}
                    <p className="text-zinc-600 text-lg leading-relaxed max-w-xl font-normal">
                      Mobile Engineer with 4+ years of experience building scalable mobile apps for iOS and Android, from concept to deployment on the App Store and Play Store.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link
                            href="/projects"
                            className="
                                inline-flex items-center gap-2
                                px-7 py-4
                                rounded-full
                                bg-[#BF40BF]
                                backdrop-blur-xl
                                border border-violet-300/30
                                text-white
                                font-semibold
                                shadow-[0_8px_30px_rgba(168,85,247,0.18)]
                                hover:bg-violet-500/20
                                hover:border-violet-300/50
                                hover:shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                                transition-all duration-300
                                hover:scale-105
                                cursor-pointer
                                group
                                "
                        >
                            View My Work
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="mailto:harrihidayat.dev@gmail.com"
                            className="inline-flex items-center gap-2 bg-white/60 hover:bg-white/80 backdrop-blur-md text-zinc-700 font-semibold px-7 py-4 rounded-full border border-white/60 transition-all shadow-xs hover:shadow-md cursor-pointer"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex items-center gap-8 pt-2"
                    >
                        <div>
                            <p className="text-3xl font-extrabold text-zinc-900">4+</p>
                            <p className="text-zinc-500 text-sm">Years Experience</p>
                        </div>
                        <div className="w-px h-10 bg-zinc-200/60" />
                        <div>
                            <p className="text-3xl font-extrabold text-zinc-900">9</p>
                            <p className="text-zinc-500 text-sm">Apps Published</p>
                        </div>
                        <div className="w-px h-10 bg-zinc-200/60" />
                        {/* <div>
                            <p className="text-3xl font-extrabold text-zinc-900">5k+</p>
                            <p className="text-zinc-500 text-sm">Active Users</p>
                        </div> */}
                    </motion.div>
                </motion.div>

                {/* ── Right: Profile Photo with Premium Frame ── */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.88, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.25, type: "spring", stiffness: 55, damping: 15 }}
                    className="flex justify-center lg:justify-end order-1 lg:order-2"
                >
                    <div className="relative">
                        {/* Ambient glow blobs behind the card */}
                        <div className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-60 pointer-events-none"
                            style={{
                                background: 'radial-gradient(ellipse at 30% 40%, rgba(255,175,210,0.6) 0%, transparent 55%), radial-gradient(ellipse at 70% 60%, rgba(205,185,248,0.55) 0%, transparent 55%), radial-gradient(ellipse at 50% 80%, rgba(155,225,248,0.45) 0%, transparent 50%)'
                            }}
                        />

                        {/* Polaroid / Photo Card */}
                        <motion.div
    animate={{ rotate: [4, 5, 4] }}
    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    whileHover={{ scale: 1.03, rotate: 0 }}
    className="
    group
    relative
    bg-white/70
    backdrop-blur-md
    p-4
    pb-14
    rounded-[2rem]
    shadow-[0_25px_60px_rgba(180,140,220,0.20),0_8px_24px_rgba(0,229,255,0.08)]
    border
    border-white/70
    max-w-[320px]
    cursor-pointer
    overflow-visible
    "
>

    {/* ================= OUTER ORBIT ================= */}

    <motion.div
        className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ rotate: 360 }}
        transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
        }}
    >

        {/* Orbit Ring */}
        {/* <div className="absolute inset-0 rounded-xl border border-violet-300/40 shadow-[0_0_30px_rgba(168,85,247,.25)]" /> */}

        

        <div className="relative">
    <Rocket className="w-6 h-6 text-violet-500 fill-violet-500" />

    <motion.div
        animate={{
            scale: [1, 1.4, 1],
            opacity: [0.4, 1, 0.4],
        }}
        transition={{
            duration: 0.4,
            repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-full
        -translate-x-1/2
        h-3
        w-2
        rounded-xl
        bg-gradient-to-b
        from-yellow-300
        to-orange-500
        blur-[2px]
        "
    />
</div>

    </motion.div>

    {/* ================= INNER ORBIT ================= */}

    <motion.div
        className="pointer-events-none absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ rotate: -360 }}
        transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear",
        }}
    >

<motion.div
    className="absolute inset-0"
    animate={{ rotate: 360 }}
    transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
    }}
>
    <div className="absolute w-100 h-100 inset-0 rounded-full border border-dashed border-cyan-300" />
</motion.div>

<motion.div
    className="absolute inset-0"
    animate={{ rotate: -360 }}
    transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
    }}
>
    <div className="absolute w-100 h-100 inset-0 rounded-full border border-dashed border-orange-300" />
</motion.div>

        <Rocket
            className="absolute top-6 right-0 w-5 h-5 text-cyan-400 fill-cyan-400"
        />

        <Rocket
            className="absolute bottom-4 right-10 w-4 h-4 text-violet-400 fill-violet-400"
        />

    </motion.div>

    {/* ================= PHOTO ================= */}

    <div className="relative w-64 h-80 rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-cyan-100">

        <Image
            src="/profile.png"
            alt="Harri Hidayat"
            fill
            priority
            className="
            object-cover
            object-top
            transition-transform
            duration-700
            group-hover:scale-105
            "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />

    </div>

</motion.div>

                        {/* Floating badge: Available for work */}
                        <motion.div
                            initial={{ opacity: 0, x: 20, y: -10 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-md border border-white/60 shadow-lg rounded-full px-4 py-2 flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-semibold text-zinc-700 whitespace-nowrap">Available for work</span>
                        </motion.div>

                        {/* Floating badge: Flutter */}
                        <motion.div
                            initial={{ opacity: 0, x: -20, y: 10 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                            className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-md border border-white/60 shadow-lg rounded-full px-4 py-2 flex items-center gap-2"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-[#00D4EC]" />
                            <span className="text-xs font-semibold text-zinc-700">Flutter & Dart</span>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
