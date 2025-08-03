'use client';

import { Star } from "lucide-react";
import React from "react";
import { GlassCard } from "./glass-card";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating?: number;
  delay?: number;
}

export function TestimonialCard({
  content,
  author,
  role,
  avatar,
  rating = 5,
  delay = 0
}: TestimonialCardProps) {
  return (
    <GlassCard
      className="p-8"
      animation={{
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay, ease: "easeOut" }
      }}
    >
      <div className="mb-6">
        <div className="flex text-yellow-400 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="fill-current" size={16} />
          ))}
        </div>
        <p className="text-slate-700 leading-relaxed italic">
          "{content}"
        </p>
      </div>
      
      <div className="flex items-center">
        <motion.div
          className="relative w-12 h-12 mr-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={avatar}
            alt={`${author} - ${role}`}
            fill
            className="rounded-full object-cover"
          />
        </motion.div>
        <div>
          <div className="font-semibold text-slate-900">{author}</div>
          <div className="text-sm text-slate-600">{role}</div>
        </div>
      </div>
    </GlassCard>
  );
}