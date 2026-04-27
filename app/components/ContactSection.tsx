'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Youtube, Instagram, MessageCircle } from 'lucide-react';

const ContactSection = () => {
    return (
        <footer className="py-24 bg-[#0a0a0a] relative overflow-hidden px-6 lg:px-24">
            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-4xl font-bold text-white">Get in touch</h2>
                    <p className="text-gray-400 text-lg">
                        For business inquiry please send email to <a href="mailto:harrihidayat.dev@gmail.com" className="text-white underline decoration-[#22c55e] underline-offset-4 hover:text-[#22c55e] transition-colors">harrihidayat.dev@gmail.com</a>
                    </p>

                    <div className="flex gap-6 pt-4">
                        {[Youtube, Instagram, MessageCircle].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-[#22c55e] transition-colors">
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </motion.div>

                {/* Decorative Shapes (Right Side) */}
                <div className="relative h-40 hidden lg:block">
                    <motion.div
                        animate={{ rotate: 360, y: [0, -20, 0] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute top-0 right-20 w-16 h-16 border border-gray-700/50 rotate-12"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-0 right-40 w-20 h-20 rounded-full border border-gray-700/50"
                    />
                    <motion.div
                        className="absolute top-10 right-0 w-0 h-0 border-l-[10px] border-l-transparent border-b-[20px] border-b-gray-700/50 border-r-[10px] border-r-transparent transform rotate-45"
                    />
                </div>

            </div>

            {/* Decorative Background Lines */}
            <div className="absolute right-0 bottom-0 opacity-10">
                <svg width="300" height="300" viewBox="0 0 300 300">
                    {[...Array(20)].map((_, i) => (
                        <line key={i} x1="0" y1={i * 20} x2={300} y2={i * 20 - 300} stroke="white" strokeWidth="1" />
                    ))}
                </svg>
            </div>
        </footer>
    );
};

export default ContactSection;
