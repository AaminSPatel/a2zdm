"use client";

import { motion } from "framer-motion";
import { FiStar, FiMail } from "react-icons/fi";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This SEO partnership catapulted us into search success, delivering quality leads month after month. Their data-driven approach and technical expertise transformed our online presence completely.",
      author: "Fiona Anchal",
      position: "Co-founder",
      company: "TechStart Solutions",
      rating: 5,
      results: "+240% organic traffic increase",
      avatar: "/user4.jpg",
    },
    {
      quote:
        "The analytics setup and performance marketing strategies delivered exceptional ROI. Their team's expertise in GA4 and BigQuery helped us make data-driven decisions that accelerated our growth.",
      author: "Rajesh Kumar",
      position: "Marketing Director",
      company: "E-Commerce Plus",
      rating: 5,
      results: "3.2× ROAS improvement",
      avatar: "/user3.jpeg",
    },
    {
      quote:
        "A2ZDM transformed our local business from invisible to market leader. We now dominate local search results and our revenue has tripled in just 6 months.",
      author: "Maria Rodriguez",
      position: "Owner",
      company: "Elite Home Services",
      rating: 5,
      results: "+290% revenue growth",
      avatar: "/user5.jpg",
    },
  ];

  return (
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
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-color-2 max-w-3xl mx-auto">
            Don't just take our word for it—hear from businesses that have transformed their growth with our strategies
          </p>
        </motion.div>

        {/* Swiper Container */}
        <div className="px-4 sm:px-0">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
              type: 'bullets',
              bulletClass: 'swiper-pagination-bullet bg-cyan-400',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-500'
            }}
            navigation={{
              nextEl: '.testimonial-next',
              prevEl: '.testimonial-prev',
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-primary-color border border-color p-6 m-4 sm:p-8 card-hover relative h-full"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-cyan-400/30">
                    <FiMail className="w-6 sm:w-8 h-6 sm:h-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-base sm:text-lg text-color-1 mb-4 sm:mb-6 leading-relaxed min-h-44 italic">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Results Badge */}
                  <div className="inline-block bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 px-3 sm:px-4 py-2 mb-4 sm:mb-6">
                    <span className="accent-cyan font-semibold text-xs sm:text-sm">{testimonial.results}</span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-10 sm:w-12 h-10 sm:h-12 rounded-full mr-3 sm:mr-4 border-2 border-cyan-400"
                    />
                    <div>
                      <div className="font-semibold text-color-1 text-sm sm:text-base">{testimonial.author}</div>
                      <div className="text-color-2 text-xs sm:text-sm">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination and Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="testimonial-prev p-2 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="testimonial-pagination flex gap-2"></div>
            
            <button className="testimonial-next p-2 rounded-full border border-cyan-400/30 hover:bg-cyan-400/10 transition-colors">
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold accent-cyan mb-2">100%</div>
              <div className="text-color-2 text-sm sm:text-base">Client Retention Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">4.9/5</div>
              <div className="text-color-2 text-sm sm:text-base">Average Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-color-2 text-sm sm:text-base">Success Stories</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;