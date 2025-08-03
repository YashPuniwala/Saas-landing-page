'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { DivideIcon as LucideIcon } from "lucide-react";
import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function GradientButton({
  children,
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  onClick,
  type = "button",
  disabled = false
}: GradientButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white",
    secondary: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white",
    accent: "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon size={size === "lg" ? 20 : size === "sm" ? 14 : 16} />}
        {children}
      </div>
    </motion.button>
  );
}