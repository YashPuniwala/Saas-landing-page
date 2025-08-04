'use client';

import React from "react";
import { motion } from "framer-motion";
import { PricingCard } from "../reusable/pricing-card";
import { PricingCalculator } from "../reusable/pricing-calculator";
import { AnimatedBadge } from "../reusable/animated-badge";
import { GlassCard } from "../reusable/glass-card";
import { Check, X, Calculator } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function PricingSection() {
  const plans = [
    {
      title: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$29",
      features: [
        "Up to 5 AI-generated campaigns/month",
        "Basic analytics dashboard",
        "Email support",
        "1 team member",
        "Core integrations",
      ],
      buttonText: "Start Free Trial",
    },
    {
      title: "Professional",
      description: "For growing businesses scaling their marketing",
      price: "$99",
      features: [
        "Unlimited AI campaigns",
        "Advanced analytics & insights",
        "Priority support",
        "Up to 10 team members",
        "Custom integrations",
        "A/B testing automation",
      ],
      buttonText: "Start Free Trial",
      popular: true,
    },
    {
      title: "Enterprise",
      description: "For large organizations with custom needs",
      price: "Custom",
      features: [
        "Custom AI model training",
        "White-label solutions",
        "Dedicated account manager",
        "Unlimited team members",
        "Enterprise security & compliance",
        "Custom reporting & APIs",
      ],
      buttonText: "Contact Sales",
    },
  ];

  const comparisonFeatures = [
    {
      feature: "AI Campaign Generation",
      starter: true,
      pro: true,
      enterprise: true,
    },
    {
      feature: "Advanced Analytics",
      starter: false,
      pro: true,
      enterprise: true,
    },
    {
      feature: "Custom AI Training",
      starter: false,
      pro: false,
      enterprise: true,
    },
    {
      feature: "White-label Solution",
      starter: false,
      pro: false,
      enterprise: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp}>
            <AnimatedBadge
              icon={Calculator}
              variant="primary"
              className="mb-4 md:mb-6"
            >
              Simple Pricing
            </AnimatedBadge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              {" "}
              Growth Plan
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8"
            variants={fadeInUp}
          >
            Start free and scale as you grow. All plans include our core AI
            features with varying limits and advanced capabilities.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <PricingCalculator />
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.title}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              buttonText={plan.buttonText}
              popular={plan.popular}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Feature Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassCard className="overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 md:mb-6 text-center">
                Feature Comparison
              </h3>
              <div className="overflow-x-auto pb-2">
                <div className="min-w-full inline-block align-middle">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-3 md:py-4 pr-3 font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base w-1/2 sm:w-auto">
                          Features
                        </th>
                        <th className="text-center py-3 md:py-4 px-2 font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base min-w-[100px]">
                          Starter
                        </th>
                        <th className="text-center py-3 md:py-4 px-2 font-semibold text-blue-600 dark:text-blue-400 text-sm md:text-base min-w-[100px]">
                          Professional
                        </th>
                        <th className="text-center py-3 md:py-4 pl-2 font-semibold text-slate-900 dark:text-slate-100 text-sm md:text-base min-w-[100px]">
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((item, index) => (
                        <motion.tr
                          key={item.feature}
                          className="border-b border-slate-100 dark:border-slate-700"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                          <td className="py-3 md:py-4 pr-3 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                            {item.feature}
                          </td>
                          <td className="text-center py-3 md:py-4 px-2">
                            {item.starter ? (
                              <Check
                                className="text-green-600 dark:text-green-400 mx-auto"
                                size={14}
                              />
                            ) : (
                              <X className="text-slate-500 dark:text-slate-400 mx-auto" size={14} />
                            )}
                          </td>
                          <td className="text-center py-3 md:py-4 px-2">
                            {item.pro ? (
                              <Check
                                className="text-green-600 dark:text-green-400 mx-auto"
                                size={14}
                              />
                            ) : (
                              <X className="text-slate-500 dark:text-slate-400 mx-auto" size={14} />
                            )}
                          </td>
                          <td className="text-center py-3 md:py-4 pl-2">
                            {item.enterprise ? (
                              <Check
                                className="text-green-600 dark:text-green-400 mx-auto"
                                size={14}
                              />
                            ) : (
                              <X className="text-slate-500 dark:text-slate-400 mx-auto" size={14} />
                            )}
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}