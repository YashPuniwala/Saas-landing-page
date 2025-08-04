'use client';

import { Mail, Phone, MapPin, Clock, Rocket } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { GlassCard } from "../reusable/glass-card";
import { AnimatedBadge } from "../reusable/animated-badge";
import { GradientButton } from "../reusable/gradient-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { fadeInUp, slideInLeft, staggerContainer } from "@/lib/animations";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  companySize: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your goals"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      companySize: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submitted:", data);
      
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 24 hours to discuss your marketing goals.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call us",
      value: "+1 (555) 123-4567",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email us",
      value: "hello@admybrand.com",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-600",
    },
    {
      icon: MapPin,
      title: "Visit us",
      value: "123 Innovation Drive\nSan Francisco, CA 94105",
      gradient: "bg-gradient-to-r from-cyan-500 to-cyan-600",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" },
  ];

  const responseInfo = [
    { label: "Email: Within 2 hours", color: "bg-green-400" },
    { label: "Phone: Immediate", color: "bg-blue-400" },
    { label: "Demo Request: Same day", color: "bg-purple-400" },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl md:blur-3xl"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-56 h-56 md:w-80 md:h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl md:blur-3xl"
          animate={{
            opacity: [1, 0.5, 1],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 md:mb-12 lg:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp}>
            <AnimatedBadge icon={Mail} className="mb-4 md:mb-6 bg-white/10 border-white/20 text-white">
              Get in Touch
            </AnimatedBadge>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
            variants={fadeInUp}
          >
            Ready to Transform Your
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Marketing Results?
            </span>
          </motion.h2>
          
          <motion.p
            className="text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Get started with a free consultation and discover how ADMYBRAND AI Suite can accelerate your growth.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <GlassCard variant="dark" className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Start Your Free Trial</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">First Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John"
                              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 h-10 md:h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/80">Last Name *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Doe"
                              className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 h-10 md:h-12"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="john@company.com"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 h-10 md:h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Company Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Your Company"
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 h-10 md:h-12"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companySize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Company Size</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-white/5 border-white/20 text-white focus:border-blue-400 h-10 md:h-12">
                              <SelectValue placeholder="Select size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-800 border-slate-700">
                            <SelectItem value="1-10" className="hover:bg-slate-700">1-10 employees</SelectItem>
                            <SelectItem value="11-50" className="hover:bg-slate-700">11-50 employees</SelectItem>
                            <SelectItem value="51-200" className="hover:bg-slate-700">51-200 employees</SelectItem>
                            <SelectItem value="201-1000" className="hover:bg-slate-700">201-1,000 employees</SelectItem>
                            <SelectItem value="1000+" className="hover:bg-slate-700">1,000+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/80">Tell us about your marketing goals</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="What are your biggest marketing challenges? What results are you hoping to achieve?"
                            rows={4}
                            className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 resize-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <GradientButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={Rocket}
                    className="w-full shadow-xl text-sm md:text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Start Free Trial"}
                  </GradientButton>

                  <p className="text-xs text-white/60 text-center">
                    By submitting this form, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </Form>
            </GlassCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Contact Methods */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Get in Touch</h3>
              <div className="space-y-4 md:space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`w-10 h-10 md:w-12 md:h-12 ${method.gradient} rounded-lg md:rounded-xl flex items-center justify-center mr-3 md:mr-4 flex-shrink-0`}>
                      <method.icon className="text-white" size={18} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm md:text-base">{method.title}</div>
                      <div className="text-white/80 whitespace-pre-line text-sm md:text-base">{method.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <GlassCard variant="dark" className="p-4 md:p-6">
              <div className="flex items-center mb-3 md:mb-4">
                <Clock className="text-blue-400 mr-2" size={18} />
                <h4 className="text-base md:text-lg font-semibold">Office Hours</h4>
              </div>
              <div className="space-y-2 text-white/80 text-sm md:text-base">
                {officeHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Response Time */}
            <GlassCard variant="dark" className="p-4 md:p-6">
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Response Time</h4>
              <div className="space-y-2 md:space-y-3">
                {responseInfo.map((info, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2 h-2 md:w-3 md:h-3 ${info.color} rounded-full mr-2 md:mr-3`}></div>
                    <span className="text-white/80 text-sm md:text-base">{info.label}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}