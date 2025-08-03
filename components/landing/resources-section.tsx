'use client';

import { BookOpen, Lightbulb, BarChart3, GraduationCap, Video, Flame } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../reusable/glass-card";
import { AnimatedBadge } from "../reusable/animated-badge";
import { GradientButton } from "../reusable/gradient-button";
import { Input } from "@/components/ui/input";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function ResourcesSection() {
  const categories = [
    {
      title: "Case Studies",
      description: "Real success stories from our customers",
      icon: Lightbulb,
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
      count: "12 Articles",
      color: "text-blue-600"
    },
    {
      title: "Industry Reports",
      description: "Data-driven insights and trends",
      icon: BarChart3,
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
      count: "8 Reports",
      color: "text-purple-600"
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides and tips",
      icon: GraduationCap,
      gradient: "bg-gradient-to-r from-green-500 to-green-600",
      count: "24 Guides",
      color: "text-green-600"
    },
    {
      title: "Webinars",
      description: "Live and recorded sessions",
      icon: Video,
      gradient: "bg-gradient-to-r from-orange-500 to-orange-600",
      count: "16 Videos",
      color: "text-orange-600"
    }
  ];

  const articles = [
    {
      title: "5 AI Marketing Trends That Will Define 2025",
      excerpt: "Explore the emerging AI technologies that forward-thinking marketers are already implementing...",
      category: "Strategy",
      categoryColor: "text-blue-600",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&w=600&h=300&fit=crop"
    },
    {
      title: "How StartupX Achieved 400% ROI Growth",
      excerpt: "A deep dive into the strategies and tactics that transformed this startup's marketing performance...",
      category: "Case Study",
      categoryColor: "text-purple-600",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=600&h=300&fit=crop"
    },
    {
      title: "Mastering AI-Powered Email Campaigns",
      excerpt: "Learn how to create personalized email campaigns that convert using advanced AI segmentation...",
      category: "Tutorial",
      categoryColor: "text-cyan-600",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&w=600&h=300&fit=crop"
    }
  ];

  return (
    <section id="resources" className="py-16 md:py-24 relative">
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
            <AnimatedBadge icon={BookOpen} variant="success" className="mb-4 md:mb-6">
              Resources
            </AnimatedBadge>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Marketing Insights &
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {" "}Best Practices
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Stay ahead of the curve with our latest research, case studies, and actionable marketing strategies.
          </motion.p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 h-48 md:h-64 lg:h-auto">
                <motion.div
                  className="h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center text-white">
                    <div className="text-5xl md:text-6xl mb-3 md:mb-4">🤖</div>
                    <p className="text-lg md:text-xl font-semibold">AI Marketing Guide</p>
                  </div>
                </motion.div>
              </div>
              <div className="lg:w-1/2 p-6 md:p-8 lg:p-10">
                <AnimatedBadge icon={Flame} variant="primary" className="mb-3 md:mb-4">
                  Featured
                </AnimatedBadge>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
                  The Complete Guide to AI-Powered Marketing in 2025
                </h3>
                <p className="text-base md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed">
                  Discover how leading brands are using artificial intelligence to revolutionize their marketing strategies.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3 md:mr-4">
                      <span className="text-white font-semibold text-sm md:text-base">AJ</span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm md:text-base">Alex Johnson</div>
                      <div className="text-xs md:text-sm text-slate-600">Head of Marketing Research</div>
                    </div>
                  </div>
                  <GradientButton variant="primary" className="text-sm md:text-base">
                    Read Article
                  </GradientButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Resource Categories */}
       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-3 sm:p-4 md:p-6 text-center group cursor-pointer hover:shadow-lg transition-all duration-300 h-full">
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ${category.gradient} rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <category.icon className="text-white text-lg sm:text-xl md:text-2xl" size={18} />
                </motion.div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{category.title}</h3>
                <p className="text-xs text-slate-600 mb-1 sm:mb-2 md:mb-3">{category.description}</p>
                <div className={`${category.color} font-medium text-xs sm:text-sm`}>{category.count}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Latest Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <motion.div
                    className="h-40 md:h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-5xl md:text-6xl">📊</div>
                  </motion.div>
                </div>
                <div className="p-4 md:p-6">
                  <div className={`${article.categoryColor} text-xs md:text-sm font-medium mb-1 md:mb-2`}>
                    {article.category}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 mb-2 md:mb-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{article.date}</span>
                    <span className="text-xs text-slate-500">{article.readTime}</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <GlassCard className="p-6 md:p-8 lg:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 md:mb-4">
              Stay Updated with Marketing Intelligence
            </h3>
            <p className="text-base md:text-lg text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto">
              Get weekly insights, case studies, and actionable strategies delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-10 md:h-12 text-sm md:text-base"
              />
              <GradientButton variant="primary" className="whitespace-nowrap h-10 md:h-12 text-sm md:text-base">
                Subscribe
              </GradientButton>
            </div>
            <p className="text-xs text-slate-500 mt-3 md:mt-4">No spam, unsubscribe anytime.</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}