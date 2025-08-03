'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
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
    primary: "bg-blue-100 text-blue-700 border-blue-200",
    secondary: "bg-purple-100 text-purple-700 border-purple-200",
    accent: "bg-cyan-100 text-cyan-700 border-cyan-200",
    success: "bg-emerald-100 text-emerald-700 border-emerald-200"
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