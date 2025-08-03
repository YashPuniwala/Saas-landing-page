import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  hover?: boolean;
  animation?: any;
}

export function GlassCard({ 
  children, 
  className, 
  variant = "light", 
  hover = true,
  animation
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl border",
        variant === "light" ? "glass border-white/30" : "glass-dark border-white/10",
        hover && "hover:shadow-2xl transition-all duration-500",
        className
      )}
      {...animation}
    >
      {children}
    </motion.div>
  );
}