'use client';

import { Check } from "lucide-react";
import React from "react";
import { GlassCard } from "./glass-card";
import { GradientButton } from "./gradient-button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  popular?: boolean;
  onSelect?: () => void;
  delay?: number;
}

export function PricingCard({
  title,
  description,
  price,
  period = "/month",
  features,
  buttonText,
  popular = false,
  onSelect,
  delay = 0
}: PricingCardProps) {
  return (
    <GlassCard
      className={cn(
        "p-6 md:p-8 relative",
        popular && "border-2 border-blue-200 dark:border-blue-400 md:scale-105"
      )}
      animation={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: "easeOut" }
      }}
    >
      {popular && (
        <motion.div
          className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-600 dark:to-purple-600 text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-semibold">
            Most Popular
          </div>
        </motion.div>
      )}

      <div className="text-center">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1 md:mb-2">{title}</h3>
        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4 md:mb-6">{description}</p>
        
        <div className="mb-6 md:mb-8">
          <span className={cn(
            "text-4xl md:text-5xl font-bold",
            popular 
              ? "bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent" 
              : "text-slate-900 dark:text-slate-100"
          )}>
            {price}
          </span>
          {period && <span className="text-sm md:text-base text-slate-600 dark:text-slate-400">{period}</span>}
        </div>
        
        <GradientButton
          variant={popular ? "primary" : "secondary"}
          className="w-full text-sm md:text-base"
          onClick={onSelect}
        >
          {buttonText}
        </GradientButton>
      </div>

      <div className="mt-6 md:mt-8">
        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base mb-3 md:mb-4">
          {popular ? "Everything in Starter, plus:" : "Features included:"}
        </h4>
        <ul className="space-y-2 md:space-y-3">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start text-slate-600 dark:text-slate-300 text-sm md:text-base"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + 0.1 * index }}
            >
              <Check className="text-green-500 dark:text-green-400 mr-2 md:mr-3 flex-shrink-0 mt-0.5" size={14} />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>
    </GlassCard>
  );
}