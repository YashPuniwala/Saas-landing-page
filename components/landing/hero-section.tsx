'use client';

import { Play, Rocket, Sparkles } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { GradientButton } from "../reusable/gradient-button";
import { AnimatedBadge } from "../reusable/animated-badge";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-12 md:pb-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-xl md:blur-3xl"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 dark:from-purple-600/20 dark:to-cyan-600/20 rounded-full blur-xl md:blur-3xl"
          animate={{
            opacity: [1, 0.7, 1],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/2 w-40 h-40 md:w-80 md:h-80 bg-gradient-to-r from-purple-400/20 to-cyan-400/20 dark:from-purple-600/20 dark:to-cyan-600/20 rounded-full blur-xl md:blur-3xl"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <AnimatedBadge icon={Sparkles} variant="primary" className="mb-4 md:mb-6">
                Now with GPT-4 Integration
              </AnimatedBadge>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-slate-100 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Transform Your Marketing
              </span>
              <br />
              <span className="text-slate-800 dark:text-slate-200">with AI Intelligence</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              variants={fadeInUp}
            >
              Generate high-converting campaigns, analyze performance with precision, and scale your brand exponentially using our revolutionary AI-powered marketing suite.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <GradientButton
                variant="primary"
                size="lg"
                icon={Rocket}
                className="shadow-xl hover:shadow-2xl"
              >
                Start Free 14-Day Trial
              </GradientButton>

              <motion.button
                className="px-6 py-3 sm:px-8 sm:py-4 glass border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={18} />
                Watch Demo
              </motion.button>
            </motion.div>

            <motion.div className="mt-8 md:mt-12" variants={fadeInUp}>
              <p className="text-sm text-slate-500 dark:text-slate-500 mb-3 md:mb-4 font-medium">
                Trusted by 50,000+ marketing teams worldwide
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 lg:space-x-6 opacity-60">
                <div className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400">Microsoft</div>
                <div className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400">Shopify</div>
                <div className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400">Stripe</div>
                <div className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-400">Airbnb</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Only Image */}
          <motion.div
            className="relative mt-12 lg:mt-0"
            variants={slideInLeft}
            initial="initial"
            animate="animate"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden aspect-video shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="AI Marketing Dashboard"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-400/20 dark:to-purple-400/20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}