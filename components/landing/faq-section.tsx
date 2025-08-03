'use client';

import { ChevronDown, HelpCircle } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "../reusable/glass-card";
import { AnimatedBadge } from "../reusable/animated-badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

   const faqs = [
    {
      question: "How does ADMYBRAND's AI differ from other marketing tools?",
      answer: "Our AI is trained on millions of high-performing campaigns across all industries and continuously learns from real-time performance data. Unlike generic tools, our AI understands context, brand voice, and audience psychology to create campaigns that truly resonate with your target market. Plus, our proprietary optimization algorithms adjust in real-time for maximum ROI."
    },
    {
      question: "Can I integrate ADMYBRAND with my existing marketing stack?",
      answer: "Absolutely! We offer seamless integrations with 150+ marketing platforms including Google Ads, Facebook Ads, Shopify, HubSpot, Salesforce, and more. Our API allows for custom integrations, and our team can help set up complex workflows. Most integrations take less than 5 minutes to configure."
    },
    {
      question: "What kind of results can I expect and how quickly?",
      answer: "Most customers see initial improvements within 7-14 days, with significant ROI increases typically achieved within 30-60 days. Our average customer experiences a 340% ROI increase, 50% reduction in cost-per-acquisition, and 80% time savings on campaign management. Results vary by industry and starting point, but we guarantee improvement or your money back."
    },
    {
      question: "Is my data secure and how do you protect privacy?",
      answer: "Security is our top priority. We're SOC 2 Type II certified, GDPR compliant, and use enterprise-grade encryption. Your data is never shared with third parties or used to train models for competitors. We offer on-premise deployment for enterprise customers and maintain 99.9% uptime with multiple security audits per year."
    },
    {
      question: "Do you offer training and support for my team?",
      answer: "Yes! We provide comprehensive onboarding, live training sessions, video tutorials, and 24/7 support. Professional and Enterprise customers get dedicated customer success managers. We also offer certification programs and regular workshops to help your team maximize the platform's potential."
    },
    {
      question: "Can I cancel anytime and what's your refund policy?",
      answer: "Absolutely. No long-term contracts required - cancel anytime with 30 days notice. We offer a 14-day free trial and 60-day money-back guarantee. If you're not satisfied with the results, we'll provide a full refund. Our goal is your success, not trapping you in contracts."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp}>
            <AnimatedBadge icon={HelpCircle} variant="secondary" className="mb-4 md:mb-6">
              FAQ
            </AnimatedBadge>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-slate-600 leading-relaxed"
            variants={fadeInUp}
          >
            Everything you need to know about ADMYBRAND AI Suite.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden">
                <button
                  className="w-full px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-left flex items-center justify-between hover:bg-white/20 transition-colors"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="text-base md:text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-slate-600 flex-shrink-0" size={18} />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6">
                        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}