'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { DivideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";
import { GlassCard } from "./glass-card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  delay?: number;
  onClick?: () => void;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  gradient,
  delay = 0,
  onClick,
  className
}: FeatureCardProps) {
  return (
    <GlassCard
      className={cn("p-4 sm:p-6 md:p-8 group cursor-pointer h-full", className)}
      animation={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: "easeOut" }
      }}
    >
      <motion.div
        className={cn(
          "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6",
          gradient
        )}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="text-white text-lg sm:text-xl md:text-2xl" size={20} />
      </motion.div>
      
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 md:mb-4">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
        {description}
      </p>
      
      <motion.div
        className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors cursor-pointer text-sm sm:text-base"
        onClick={onClick}
      >
        <span>Learn more</span>
        <motion.div
          className="ml-1 sm:ml-2"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight size={14} className="sm:w-4 sm:h-4" />
        </motion.div>
      </motion.div>
    </GlassCard>
  );
}