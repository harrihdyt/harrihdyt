'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Lorem Ipsum",
        role: "Tech Lead",
        quote: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "bg-gradient-to-br from-blue-400 to-indigo-500" // Placeholder
    },
    {
        id: 2,
        name: "Lorem Ipsum",
        role: "Project Manager",
        quote: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "bg-gradient-to-br from-green-400 to-teal-500"
    },
    {
        id: 3,
        name: "Lorem Ipsum",
        role: "Owner",
        quote: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
        image: "bg-gradient-to-br from-purple-400 to-pink-500"
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 bg-[#121212] relative overflow-hidden px-6 lg:px-24 flex items-center justify-center">
            {/* Background Text Watermark */}
            <div className="absolute bottom-10 right-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.02] select-none text-right">
                <span className="text-[15vw] font-bold text-white whitespace-nowrap">REVIEWS</span>
            </div>

            <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Image / Visual */}
                <div className="relative flex justify-center lg:justify-end">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className={`w-full max-w-md aspect-video rounded-2xl ${testimonials[currentIndex].image} shadow-2xl relative overflow-hidden`}
                        >
                            {/* Placeholder content/image for the person */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-white/20 blur-2xl" />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Pattern Overlay */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-20 transform -rotate-12">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="h-2 w-full bg-yellow-500 mb-2 rounded-full" />
                        ))}
                    </div>
                </div>

                {/* Quote Content */}
                <div className="relative">
                    <Quote className="w-16 h-16 text-gray-800 absolute -top-10 -left-6 z-0" />

                    <div className="relative z-10 space-y-8">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                                className="text-xl lg:text-2xl text-gray-300 leading-relaxed italic"
                            >
                                "{testimonials[currentIndex].quote}"
                            </motion.p>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h4>
                                <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="flex gap-4 pt-4">
                            <button
                                onClick={prevTestimonial}
                                className="p-3 rounded-full border border-gray-800 text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="p-3 rounded-full border border-gray-800 text-gray-400 hover:text-[#22c55e] hover:border-[#22c55e] transition-all"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Dots */}
                            <div className="flex items-center gap-2 ml-4">
                                {testimonials.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-white' : 'bg-gray-800'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;
