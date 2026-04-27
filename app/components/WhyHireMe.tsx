'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ThumbsUp, PieChart, Star } from 'lucide-react';

const reasons = [
    {
        title: "Communicative",
        description: "I communicate clearly and proactively, ensuring requirements, challenges, and progress are always well-aligned between stakeholders and the development team.",
        icon: MessageCircle,
        color: "text-green-500",
        delay: 0
    },
    {
        title: "Collaborative",
        description: "I work comfortably in cross-functional teams, collaborating closely with designers, backend engineers, and stakeholders to deliver high-quality products.",
        icon: ThumbsUp,
        color: "text-green-500",
        delay: 0.2
    },
    {
        title: "Management Freak",
        description: "I take full ownership of projects, handling the entire development lifecycle from planning and implementation to deployment and maintenance.",
        icon: PieChart,
        color: "text-green-500",
        delay: 0.4
    },
    {
        title: "Client’s Favourite",
        description: "I’ve worked with multiple clients across different industries, delivering reliable solutions and building long-term, trust-based relationships.",
        icon: Star,
        color: "text-green-500",
        delay: 0.6
    }
];

const WhyHireMe = () => {
    return (
        <section className="py-24 bg-[#121212] relative overflow-hidden px-6 lg:px-24">
            {/* Background Text Watermark */}
            <div className="absolute top-20 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.02] select-none text-left">
                <span className="text-[15vw] font-bold text-white whitespace-nowrap">HIRE ME</span>
            </div>

            <div className="container mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl lg:text-5xl font-bold mb-20 text-white"
                >
                    Why Hire Me?
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: item.delay }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="relative mb-6">
                                {/* Icon Circle */}
                                <div className="w-32 h-32 rounded-full bg-gray-800 flex items-center justify-center border-2 border-transparent hover:border-green-500 transition-colors group-hover:bg-gray-700">
                                    <item.icon className="w-12 h-12 text-white" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;
