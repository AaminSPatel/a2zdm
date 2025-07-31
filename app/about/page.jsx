"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  FiArrowLeft,
  FiArrowRight,
  FiTarget,
  FiUsers,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";
import Link from "next/link";

const About = () => {
  const [currentTeamMember, setCurrentTeamMember] = useState(0);

  const teamMembers = [
    {
      name: "Ateeq Patel",
      position: "Founder & CEO",
      expertise: "Web Analytics and Digital Marketing",
      experience: "8+ years",
      description:
        "SEO, PPC, ASO and GA, GTM, GA4 at A2ZDM.com",
      initial: "AP",
    },
    {
      name: "Zeeshan Ahmed",
      position: "Head of Analytics",
      expertise: "GA4, BigQuery & Data Science",
      experience: "6+ years",
      description:
        "Data scientist specializing in advanced analytics and business intelligence solutions.",
      initial: "ZA",
    },
    /* {
      name: "Rohit Kumar",
      position: "Performance Marketing Lead",
      expertise: "PPC & Conversion Optimization",
      experience: "5+ years",
      description:
        "Performance marketing expert focused on ROI-driven campaigns and optimization.",
      initial: "RK",
    },
    {
      name: "Sneha Gupta",
      position: "Technical SEO Specialist",
      expertise: "Technical SEO & Site Optimization",
      experience: "4+ years",
      description:
        "Technical SEO specialist with deep expertise in site architecture and performance.",
      initial: "SG",
    }, */
  ];

  const values = [
    {
      icon: <FiTarget className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Results-Driven",
      description:
        "Every strategy is designed with measurable outcomes in mind. We don't just promise growth—we deliver it with data to prove it.",
    },
    {
      icon: <FiUsers className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Client-Centric",
      description:
        "Your success is our success. We build long-term partnerships based on trust, transparency, and consistent results.",
    },
    {
      icon: <FiTrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of industry trends and leverage cutting-edge tools to give our clients a competitive advantage.",
    },
    {
      icon: <FiAward className="w-6 sm:w-8 h-6 sm:h-8" />,
      title: "Excellence Always",
      description:
        "We maintain the highest standards in everything we do, from strategy development to execution and reporting.",
    },
  ];

  const nextMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentTeamMember(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <>
      <main className="min-h-screen bg-primary-color">
        {/* Hero Section */}

        <section className="relative min-h-[60vh] flex items-center bg-primary-color overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: `linear-gradient(rgba(8, 47, 73, 0.7), rgba(8, 47, 73, 0.7)), url('ga4.jpg')`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-blue-900/30"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="inline-flex items-center bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/30 px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm accent-cyan font-semibold">
                  Know More About Us!
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk leading-tight text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About <span className="gradient-text">A2ZDM</span>
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-cyan-100 mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We're a team of digital marketing experts passionate about
                helping businesses unlock their growth potential through
                data-driven strategies and cutting-edge technology.
              </motion.p>
            </motion.div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                  Our <span className="gradient-text">Mission</span>
                </h2>
                <p className="text-base sm:text-lg text-color-2 mb-4 sm:mb-6 leading-relaxed">
                  At A2ZDM, we believe that every business deserves to thrive in
                  the digital landscape. Our mission is to democratize access to
                  advanced digital marketing strategies by combining powerful
                  SEO, sophisticated analytics, and performance marketing
                  techniques.
                </p>
                <p className="text-base sm:text-lg text-color-2 leading-relaxed">
                  We don't just implement tactics—we build comprehensive growth
                  systems that scale with your business, ensuring sustainable
                  success in an ever-evolving digital world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 p-6 sm:p-8 h-64 sm:h-80">
                  <div className="h-full flex flex-col justify-between">
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-accent-cyan"></div>
                        <span className="text-color-1 text-sm sm:text-base">
                          Data-Driven Strategies
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-blue-400"></div>
                        <span className="text-color-1 text-sm sm:text-base">
                          Measurable Results
                        </span>
                      </div>
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-3 sm:w-4 h-3 sm:h-4 bg-purple-400"></div>
                        <span className="text-color-1 text-sm sm:text-base">
                          Sustainable Growth
                        </span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold accent-cyan mb-2">
                        15+
                      </div>
                      <div className="text-color-2 text-sm sm:text-base">
                        Years of Excellence
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                Meet Our <span className="gradient-text">Team</span>
              </h2>
              <p className="text-lg sm:text-xl text-color-2 max-w-3xl mx-auto">
                Our diverse team of experts brings together years of experience
                in SEO, analytics, and performance marketing
              </p>
            </motion.div>

            {/* Team Carousel */}
            <div className="relative max-w-4xl mx-auto">
              <motion.div
                key={currentTeamMember}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-accent-color border border-color p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
                  {/* Avatar */}
                  <div className="text-center">
                    <div className="w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <span className="text-black font-bold text-2xl sm:text-4xl">
                        {teamMembers[currentTeamMember].initial}
                      </span>
                    </div>
                    <div className="accent-cyan font-semibold text-sm sm:text-base">
                      {teamMembers[currentTeamMember].experience}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-color-1">
                      {teamMembers[currentTeamMember].name}
                    </h3>
                    <div className="accent-cyan font-semibold mb-2 text-sm sm:text-base">
                      {teamMembers[currentTeamMember].position}
                    </div>
                    <div className="text-color-2 mb-3 sm:mb-4 text-sm sm:text-base">
                      <strong>Expertise:</strong>{" "}
                      {teamMembers[currentTeamMember].expertise}
                    </div>
                    <p className="text-color-2 leading-relaxed text-sm sm:text-base">
                      {teamMembers[currentTeamMember].description}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6 sm:mt-8">
                <button
                  onClick={prevMember}
                  className="flex items-center space-x-2 accent-cyan hover:text-cyan-300 transition-colors text-sm sm:text-base"
                >
                  <FiArrowLeft className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-2">
                  {teamMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTeamMember(index)}
                      className={`w-2 sm:w-3 h-2 sm:h-3 transition-colors ${
                        index === currentTeamMember
                          ? "bg-accent-cyan"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextMember}
                  className="flex items-center space-x-2 accent-cyan hover:text-cyan-300 transition-colors text-sm sm:text-base"
                >
                  <span>Next</span>
                  <FiArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg sm:text-xl text-color-2 max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we
                work with our clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary-color border border-color p-6 sm:p-8 card-hover"
                >
                  <div className="accent-cyan mb-4">{value.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-color-1 font-space-grotesk">
                    {value.title}
                  </h3>
                  <p className="text-color-2 leading-relaxed text-sm sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-secondary-color">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 font-space-grotesk text-color-1">
                Ready to Work with Us?
              </h2>
              <p className="text-lg sm:text-xl text-color-2 mb-6 sm:mb-8">
                Let's discuss how our expertise can help accelerate your
                business growth through smarter digital marketing strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={'/contact'} className="btn-primary">Start a Conversation</Link>
                <Link href={'/case-studies'} className="btn-secondary">View Our Work</Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
