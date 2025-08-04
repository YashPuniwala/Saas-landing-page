'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import React from "react";

interface AnimatedBadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "success";
  icon?: LucideIcon;
  className?: string;
  animate?: boolean;
}

export function AnimatedBadge({
  children,
  variant = "primary",
  icon: Icon,
  className,
  animate = true
}: AnimatedBadgeProps) {
  const variants = {
    primary: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
    secondary: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    accent: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
    success: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800"
  };

  return (
    <motion.div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border",
        variants[variant],
        className
      )}
      animate={animate ? {
        y: [0, -10, 0],
        transition: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      } : undefined}
    >
      {Icon && <Icon size={16} />}
      {children}
    </motion.div>
  );
}