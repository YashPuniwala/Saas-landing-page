"use client";

import {
  Bot,
  ChartLine,
  Users,
  Palette,
  RotateCcw,
  Shield,
  Sparkles,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { FeatureCard } from "../reusable/feature-card";
import { AnimatedBadge } from "../reusable/animated-badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FeaturesSection() {
  const features = [
    {
      title: "AI Campaign Generator",
      description:
        "Create high-converting ad campaigns in seconds with our advanced AI that learns from millions of successful campaigns.",
      icon: Bot,
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      title: "Smart Analytics",
      description:
        "Get actionable insights with predictive analytics that identify opportunities and optimize performance automatically.",
      icon: ChartLine,
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    {
      title: "Audience Intelligence",
      description:
        "Discover and target your ideal customers with AI-powered audience segmentation and behavioral analysis.",
      icon: Users,
      gradient: "bg-gradient-to-r from-cyan-500 to-cyan-600",
    },
    {
      title: "Creative Studio",
      description:
        "Generate stunning visuals, copy, and video content with AI that understands your brand voice and style.",
      icon: Palette,
      gradient: "bg-gradient-to-r from-emerald-500 to-emerald-600",
    },
    {
      title: "Auto-Optimization",
      description:
        "Let AI continuously optimize your campaigns for maximum ROI with real-time bidding and budget allocation.",
      icon: RotateCcw,
      gradient: "bg-gradient-to-r from-pink-500 to-pink-600",
    },
    {
      title: "Brand Protection",
      description:
        "Monitor and protect your brand reputation across all channels with AI-powered sentiment analysis and alerts.",
      icon: Shield,
      gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp}>
            <AnimatedBadge
              icon={Sparkles}
              variant="primary"
              className="mb-4 md:mb-6"
            >
              Powerful Features
            </AnimatedBadge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Scale Your Marketing
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Our AI-powered suite combines cutting-edge technology with intuitive
            design to deliver unprecedented marketing results.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
