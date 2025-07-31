"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheck,
  FiArrowRight,
  FiUsers,
  FiTrendingUp,
  FiActivity,
} from "react-icons/fi";
import { useTech } from "@/components/TechContext";

const ServiceDetail = () => {
  const params = useParams();
  const { slug } = params;
  const { serviceData ,mobile_number} = useTech();

  // Find the service by slug from the nested structure
  const findServiceBySlug = (slug) => {
    for (const category of serviceData) {
      if (category.services && category.services[slug]) {
        return category.services[slug];
      }
    }
    // Fallback to a default service if not found
    return (
      serviceData[0]?.services?.["customer-segmentation"] || {
        title: "Service Not Found",
        description: "The requested service could not be located",
        features: [],
        benefits: [],
        process: [],
        pricing: {},
        caseStudy: {},
      }
    );
  };

  const service = findServiceBySlug(slug);

  // Helper to render icon components
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "<FiUsers className='w-8 h-8' />":
        return <FiUsers className="w-6 sm:w-8 h-6 sm:h-8" />;
      case "<FiTrendingUp className='w-8 h-8' />":
        return <FiTrendingUp className="w-6 sm:w-8 h-6 sm:h-8" />;
      case "<FiActivity className='w-8 h-8' />":
        return <FiActivity className="w-6 sm:w-8 h-6 sm:h-8" />;
      default:
        return <FiActivity className="w-6 sm:w-8 h-6 sm:h-8" />;
    }
  };

  return (
    <main className="min-h-screen bg-primary-color">
      {/* Back Navigation */}
      <section className="py-6 bg-secondary-color border-b border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 accent-cyan hover:text-cyan-300 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-secondary-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex items-center space-x-3 mb-6">
    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-black">
      {renderIcon(service.icon)}
    </div>
    <span className="text-cyan-400 font-semibold">
      {service.category}
    </span>
  </div>

  <h1 className="text-4xl md:text-5xl font-bold mb-6 font-space-grotesk text-color-1">
    {service.title}
  </h1>

  <p className="text-xl text-color-2 mb-8 leading-relaxed">
    {service.description}
  </p>

  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href={`https://wa.me/91${mobile_number}?text=${encodeURIComponent(
        `Hi A2ZDM Team, I'm interested in your ${service.title} service and would like to get started. Please provide more details.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary text-center"
    >
      Get Started Today
    </a>
    
    <a
      href={`https://wa.me/91${mobile_number}?text=${encodeURIComponent(
        `Hi A2ZDM Team, I'd like to schedule a consultation about your ${service.title} service. Please share available time slots.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-secondary text-center"
    >
      Schedule Consultation
    </a>
  </div>
</motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={service.heroImage || "/placeholder.svg"}
                alt={service.title}
                className="w-3/4 object-cover mx-auto border border-color shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-space-grotesk text-color-1">
                What's <span className="gradient-text">Included</span>
              </h2>
              <div className="space-y-4">
                {service.features?.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheck className="w-5 h-5 accent-cyan flex-shrink-0 mt-1" />
                    <span className="text-color-2">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8 font-space-grotesk text-color-1">
                Key <span className="gradient-text">Benefits</span>
              </h2>
              <div className="space-y-4">
                {service.benefits?.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiArrowRight className="w-5 h-5 accent-cyan flex-shrink-0 mt-1" />
                    <span className="text-color-2">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
<section className="relative">
  {/* Combined Container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
    <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
      {/* Process Section (Left) */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="lg:w-2/3 bg-secondary-color p-6 md:p-8 rounded-lg"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-space-grotesk text-color-1">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-color-2 md:text-xl max-w-3xl mx-auto">
            A proven methodology that delivers consistent results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.process?.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-4"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg md:text-xl">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-color-1">
                {step.title}
              </h3>
              <p className="text-color-2 text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Case Study Section (Right) */}
      {service.caseStudy && (
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/3 bg-secondary-color border border-color p-6 md:p-8 rounded-lg"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 font-space-grotesk">
              Success <span className="gradient-text">Story</span>
            </h2>
            <p className="text-color-2">Client project highlights</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3">{service.caseStudy.client}</h3>
              <div className="space-y-3 text-sm md:text-base">
                <div>
                  <h4 className="font-semibold text-color-3">Challenge:</h4>
                  <p className="text-color-2">{service.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-color-3">Solution:</h4>
                  <p className="text-color-2">{service.caseStudy.solution}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {service.caseStudy.results?.map((result, i) => (
                <div 
                  key={i} 
                  className="bg-secondary-color border border-color p-3 md:p-4 text-center"
                >
                  <div className="text-lg md:text-xl font-bold text-color-3">
                    {result.improvement}
                  </div>
                  <div className="text-xs md:text-sm text-color-2">
                    {result.metric}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  </div>
</section>

      {/* Pricing */}
      {/* {service.pricing && (
        <section className="py-20 bg-secondary-color">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 font-space-grotesk text-color-1">
                Choose Your <span className="gradient-text">Plan</span>
              </h2>
              <p className="text-xl text-color-2">
                Flexible pricing options to fit your needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(service.pricing).map(([plan, details], index) => {
                // WhatsApp message content
                const whatsappMessage = `Hello A2ZDM, I want to purchase,
Service: ${service.title}
Plan: ${plan}
Price: ${details.price}
Features: ${details.features.join(", ")}

Please contact me to proceed.`;
                const encodedMessage = encodeURIComponent(whatsappMessage);
                const whatsappUrl = `https://wa.me/91${mobile_number}?text=${encodedMessage}`;

                return (
                  <motion.div
                    key={plan}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-accent-color backdrop-opacity-60 backdrop-blur-lg border border-color p-8 text-center ${
                      plan === "professional" ? "border-cyan-400 relative" : ""
                    }`}
                  >
                    {plan === "professional" && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 text-sm font-semibold">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4 text-color-1 capitalize">
                      {plan}
                    </h3>
                    <div className="text-4xl font-bold text-color-3 mb-6 comforta">
                      {details.price}
                    </div>
                    <div className="space-y-3 mb-8 min-h-28">
                      {details.features?.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <FiCheck className="w-4 h-4 accent-cyan flex-shrink-0" />
                          <span className="text-color-3 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full px-4 py-3 rounded-lg ${
                        plan === "professional"
                          ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                          : "bg-transparent border border-cyan-400 text-cyan-400"
                      } hover:opacity-90 transition-opacity`}
                    >
                      Get Started
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )} */}

     {/* CTA */}
<section className="py-20 bg-primary-color">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 font-space-grotesk text-color-1">
        Ready to Get Started?
      </h2>
      <p className="text-xl text-color-2 mb-8">
        Let's discuss how {service.title?.toLowerCase()} can transform
        your business
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={`/contact`}
          
          className="btn-primary"
        >
          Schedule Free Consultation
        </Link>
        <Link href="/case-studies" className="btn-secondary">
          View More Case Studies
        </Link>
      </div>
    </motion.div>
  </div>
</section>
    </main>
  );
};

export default ServiceDetail;
