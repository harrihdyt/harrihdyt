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
    },
    {
        id: 2,
        name: "Lorem Ipsum",
        role: "Project Manager",
        quote: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
    {
        id: 3,
        name: "Lorem Ipsum",
        role: "Owner",
        quote: "Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
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
        <section className="py-20 bg-gray-50 px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">

                <Quote className="w-10 h-10 text-gray-200 mx-auto mb-6" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                    >
                        <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed italic">
                            &ldquo;{testimonials[currentIndex].quote}&rdquo;
                        </p>
                        <div>
                            <h4 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                            <p className="text-gray-500 text-sm">{testimonials[currentIndex].role}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 pt-8">
                    <button
                        onClick={prevTestimonial}
                        className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2">
                        {testimonials.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-[#22c55e]' : 'bg-gray-200'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextTestimonial}
                        className="p-2.5 rounded-full border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-all"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
