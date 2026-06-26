'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Video } from 'lucide-react';
import Link from 'next/link';
import ContactSection from '../components/ContactSection';
import Image from 'next/image';
import { talks } from '../data/talks';

const TalksCard = ({ talks, index }: { talks: any; index: number }) => {
  return (
    <motion.div
      key={talks.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl overflow-hidden hover:shadow-[0_16px_48px_rgba(180,140,220,0.20)] hover:bg-white/55 transition-all duration-300 shadow-[0_8px_32px_rgba(180,140,220,0.10)] group flex flex-col relative"
    >
      <Link href={`/talks/${talks.id}`} className="absolute inset-0 z-0" aria-label={`View details for ${talks.title}`} />
      
      <div className="relative h-[400px] w-full overflow-hidden z-10 pointer-events-none">
        <Image
          src={talks.image}
          alt={talks.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#22c55e] text-xs font-bold rounded-full uppercase tracking-wider border border-[#22c55e]/20">
            {talks.type}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col z-10 pointer-events-none">
        <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {talks.date}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#22c55e] transition-colors">
          {talks.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>
            {talks.event} &bull; {talks.location}
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
          {talks.description}
        </p>

        {(talks.link || talks.video) && (
          <div className="flex gap-4 pt-4 border-t border-gray-100 pointer-events-auto">
            {talks.link && talks.link !== '#' && (
              <a
                href={talks.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#22c55e] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Slides
              </a>
            )}

            {talks.video && talks.video !== '#' && (
              <a
                href={talks.video}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#22c55e] transition-colors"
              >
                <Video className="w-3.5 h-3.5" />
                Recording
              </a>
            )}
          </div>
        )}
      </div> 
    </motion.div>
  );
};

export default function TalksPage() {
    return (
        <main className="min-h-screen pt-24">
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
                <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-20">
                    <div className="grid md:grid-cols-3 gap-8 mb-10">
                        {talks.map((talk, index) => (
                            <TalksCard talks={talk} index={index} />
                        ))}
                    </div>
                </section>
            </div>

            <ContactSection />
        </main>
    );
}
