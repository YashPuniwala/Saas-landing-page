'use client';

import { Brain, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientButton } from "../reusable/gradient-button";
import { ThemeToggle } from "../ui/theme-toggle";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show nav at the very top
      if (currentScrollY < 10) {
        setShowNav(true);
        setIsScrolled(false);
        setLastScrollY(currentScrollY);
        return;
      }

      // Scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false);
      } 
      // Scrolling up
      else if (currentScrollY < lastScrollY) {
        setShowNav(true);
      }

      setIsScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#resources", label: "Resources" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-white dark:bg-slate-950 shadow-sm dark:shadow-slate-800/50' 
          : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm'
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ 
        y: showNav ? 0 : -100,
        transition: { type: 'spring', damping: 20, stiffness: 300 }
      }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2 md:space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Brain className="text-white" size={16} />
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              ADMYBRAND
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <ThemeToggle />
            <button className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 font-medium transition-colors">
              Sign In
            </button>
            <GradientButton variant="primary" className="text-sm lg:text-base">
              Start Free Trial
            </GradientButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="text-slate-700 dark:text-slate-300" size={24} />
            ) : (
              <Menu className="text-slate-700 dark:text-slate-300" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-slate-950 shadow-lg dark:shadow-slate-800/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="block py-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full text-left font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                  <button className="w-full px-4 py-3 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors font-medium">
                    Sign In
                  </button>
                  <GradientButton variant="primary" className="w-full py-3">
                    Start Free Trial
                  </GradientButton>
                  <div className="flex justify-center pt-2">
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}