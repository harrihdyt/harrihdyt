'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Mail, Youtube, Instagram, AppWindow } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const ref = useRef(null);

  // Mouse position state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width - 0.5;
    const yPct = (clientY - top) / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-[#121212] text-white relative overflow-hidden px-6 lg:px-24 pt-20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Green Badge/Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-2xl font-bold text-[#22c55e]">
              Hi, i’m Harri Hidayat
            </h2>
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Mobile Software Engineer
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Mobile Engineer with 3+ years of experience building and publishing Flutter-based mobile applications for iOS and Android, with additional experience in native Android (Kotlin) and native iOS (Swift) development. Strong in end-to-end mobile development, API integration, and state management (GetX, Provider, BLoC). Experienced in delivering business and consumer applications, maintaining production apps, and collaborating with cross-functional teams.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <button onClick={() => window.location.href = "mailto:harrihidayat.dev@gmail.com"} className="px-8 py-3 bg-[#22c55e] text-white font-bold rounded hover:bg-[#16a34a] transition-colors flex items-center gap-2 shadow-lg shadow-green-900/20">
              <Mail className="w-5 h-5" />
              Email Me
            </button>

            <div className="flex gap-4">
              {[Youtube, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <AppWindow className="w-5 h-5" />
              </a>
            </div>

            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium ml-4">
              <span className="border-b border-gray-600 pb-0.5">Download CV</span>
            </button>
          </div>
        </motion.div>

        {/* Hero Image / Graphic (Right Side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[600px] flex items-center justify-center"
        >
          {/* Background Geometric Elements (Parallax) */}
          <motion.div
            style={{ x: useTransform(mouseX, [-0.5, 0.5], [30, -30]), y: useTransform(mouseY, [-0.5, 0.5], [30, -30]) }}
            className="absolute top-0 right-10 w-32 h-32 border-2 border-green-500/20 rounded-full"
          />
          <motion.div
            style={{ x: useTransform(mouseX, [-0.5, 0.5], [-40, 40]), y: useTransform(mouseY, [-0.5, 0.5], [-40, 40]) }}
            className="absolute bottom-20 left-10 w-40 h-40 border-2 border-yellow-500/20 rotate-45"
          />
          <motion.div
            style={{ x: useTransform(mouseX, [-0.5, 0.5], [20, -20]), y: useTransform(mouseY, [-0.5, 0.5], [20, -20]) }}
            className="absolute top-40 left-20 w-16 h-16 bg-green-500/10 rounded-full blur-xl"
          />

          {/* Main Photo Card */}
          <motion.div
            style={{
              rotateX: useTransform(mouseY, [-0.5, 0.5], [5, -5]),
              rotateY: useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
            }}
            className="relative w-full max-w-md aspect-[3/4] bg-[#1a1a1a] overflow-hidden shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-700"
          >
            {/* User Photo */}
            <div className="absolute inset-0">
              <Image
                src="/profile.png"
                alt="Harri Hidayat"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Overlay Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-8 top-20 opacity-50"
            >
              {/* Striped Pattern Mock */}
              <div className="w-32 h-32 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 h-full bg-yellow-500/50 rounded-full transform -rotate-12" />
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Floating "Square" border for depth */}
          <motion.div
            style={{ x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]), y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]) }}
            className="absolute w-full max-w-md aspect-[3/4] border-2 border-[#22c55e]/30 z-0 top-8 -left-8"
          />

        </motion.div>
      </div>

      {/* Background PROJECTS text watermark */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20vw] font-bold text-white whitespace-nowrap">PROJECTS</span>
      </div>
    </section>
  );
};

export default HeroSection;
