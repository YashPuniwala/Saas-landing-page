'use client';

import { Heart } from "lucide-react";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { TestimonialCard } from "../reusable/testimonial-card";
import { AnimatedBadge } from "../reusable/animated-badge";
import { AnimatedCounter } from "../reusable/animated-counter";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function TestimonialsSection() {
  const testimonials = [
    {
      content: "ADMYBRAND increased our campaign ROI by 340% in just 3 months. The AI insights are incredibly accurate and the automation saves us 20+ hours per week.",
      author: "Sarah Chen",
      role: "Marketing Director, TechCorp",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    },
    {
      content: "The creative studio feature is a game-changer. We're producing 5x more content with better performance than our previous agency work.",
      author: "Michael Rodriguez",
      role: "Creative Director, BrandFlow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    },
    {
      content: "As a startup, ADMYBRAND gave us enterprise-level marketing capabilities from day one. We scaled from 0 to $1M ARR in 8 months.",
      author: "Emma Thompson",
      role: "Founder, GrowthLab",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    },
    {
      content: "The audience intelligence feature helped us discover new customer segments we never knew existed. Our conversion rates improved by 180%.",
      author: "Lisa Park",
      role: "Data Analyst, RetailPro",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    },
    {
      content: "ADMYBRAND's auto-optimization saved our struggling campaigns. What used to require constant manual tweaking now runs perfectly on autopilot.",
      author: "David Kim",
      role: "Performance Marketing Manager, E-commerce Plus",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    },
    {
      content: "The brand protection feature caught a negative sentiment trend early, allowing us to respond quickly and maintain our reputation.",
      author: "Rachel Green",
      role: "Brand Manager, FashionForward",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    },
  ];

  const stats = [
    { value: 50000, suffix: "+", label: "Happy Customers" },
    { value: 340, suffix: "%", label: "Average ROI Increase" },
    { value: 2.5, suffix: "B", label: "Ad Spend Optimized" },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  ];

  const duplicated = [...testimonials, ...testimonials]; // double for infinite loop illusion

  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp}>
            <AnimatedBadge icon={Heart} variant="accent" className="mb-4 md:mb-6">
              Customer Love
            </AnimatedBadge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Trusted by Marketing Teams
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"> Worldwide</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            See how ADMYBRAND AI Suite is transforming marketing results for companies of all sizes.
          </motion.p>
        </motion.div>

        {/* Infinite Scrolling Testimonials */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6 md:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {duplicated.map((testimonial, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[360px] lg:w-[400px] shrink-0"
              >
                <TestimonialCard
                  content={testimonial.content}
                  author={testimonial.author}
                  role={testimonial.role}
                  avatar={testimonial.avatar}
                  delay={0}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                {stat.suffix === "B" ? (
                  <span>$<AnimatedCounter value={stat.value} suffix={stat.suffix} /></span>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm md:text-base text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}