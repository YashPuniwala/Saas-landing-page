'use client';

import { Calculator } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GlassCard } from "./glass-card";
import { motion } from "framer-motion";

export function PricingCalculator() {
  const [adSpend, setAdSpend] = useState(10000);
  const [currentROI, setCurrentROI] = useState(300);
  const [improvement, setImprovement] = useState(50);
  const [monthlyGain, setMonthlyGain] = useState(0);

  useEffect(() => {
    const currentRevenue = adSpend * (currentROI / 100);
    const newROI = currentROI * (1 + improvement / 100);
    const newRevenue = adSpend * (newROI / 100);
    const gain = newRevenue - currentRevenue;
    setMonthlyGain(gain);
  }, [adSpend, currentROI, improvement]);

  return (
    <GlassCard className="p-4 sm:p-6 max-w-2xl mx-auto mb-8 md:mb-12">
      <div className="flex items-center gap-2 mb-3 md:mb-4">
        <Calculator className="text-blue-600" size={18} />
        <h3 className="text-base md:text-lg font-semibold text-slate-900">Calculate Your ROI</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
        <div>
          <Label htmlFor="adSpend" className="text-xs md:text-sm font-medium text-slate-700">
            Monthly Ad Spend
          </Label>
          <Input
            id="adSpend"
            type="number"
            value={adSpend}
            onChange={(e) => setAdSpend(Number(e.target.value))}
            className="mt-1 h-9 md:h-10 text-sm"
          />
        </div>
        
        <div>
          <Label htmlFor="currentROI" className="text-xs md:text-sm font-medium text-slate-700">
            Current ROI (%)
          </Label>
          <Input
            id="currentROI"
            type="number"
            value={currentROI}
            onChange={(e) => setCurrentROI(Number(e.target.value))}
            className="mt-1 h-9 md:h-10 text-sm"
          />
        </div>
        
        <div>
          <Label htmlFor="improvement" className="text-xs md:text-sm font-medium text-slate-700">
            Improvement Goal
          </Label>
          <Select value={improvement.toString()} onValueChange={(value) => setImprovement(Number(value))}>
            <SelectTrigger className="mt-1 h-9 md:h-10 text-sm">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="25">25% increase</SelectItem>
              <SelectItem value="50">50% increase</SelectItem>
              <SelectItem value="75">75% increase</SelectItem>
              <SelectItem value="100">100% increase</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <motion.div
        className="p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl text-center"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-2xl md:text-3xl font-bold text-blue-600">
          ${monthlyGain.toLocaleString()}
        </div>
        <div className="text-xs md:text-sm text-slate-600">
          Potential Monthly Revenue Increase
        </div>
      </motion.div>
    </GlassCard>
  );
}