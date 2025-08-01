"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { useState } from "react";
import { useTech } from "@/components/TechContext";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const {mobile_number} = useTech()
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const sendWhatsAppMessage = () => {
    const { name, email, subject, message } = formData;
    const whatsappMessage = `New Contact Inquiry from Website:
    
*Name:* ${name}
*Email:* ${email}
*Subject:* ${subject}
*Message:* ${message}

Please respond at your earliest convenience.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/91${mobile_number}?text=${encodedMessage}`, '_blank');
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  
  const { name, email, subject, message } = formData;
  
  // Create mailto link with form data
  const mailtoLink = `mailto:info@a2zdm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;
  
  // Open default email client
  window.location.href = mailtoLink;
  
  // Optional: Still keep the WhatsApp option as fallback
  sendWhatsAppMessage();
};

const contactDetails = {
  title: "Our Contact Details",
  items: [
    {
      id: 1,
      icon: <FiMail className="w-5 h-5" />,
      gradient: "from-cyan-400 to-blue-500",
      title: "Email Us",
      details: [
        {
          text: "info@a2zdm.com",
          link: "mailto:info@a2zdm.com.com"
        },
       /*  {
          text: "support@yourcompany.com",
          link: "mailto:support@yourcompany.com"
        } */
      ]
    },
    {
      id: 2,
      icon: <FiPhone className="w-5 h-5" />,
      gradient: "from-blue-500 to-purple-500",
      title: "Call Us",
      details: [
        {
          text: "+91 9826739671",
          link: "tel:+919826739671"
        },
        {
          text: "Mon-Fri: 9am-6pm",
          link: null
        }
      ]
    },
    {
      id: 3,
      icon: <FiMapPin className="w-5 h-5" />,
      gradient: "from-purple-500 to-pink-500",
      title: "Visit Us",
      details: [
        {
          text: "22 B Sher Shah Suri Nagar-B Khajrana",
          link: "https://maps.google.com?q=22+B+Sher+Shah+Suri+Nagar-B+Khajrana,Indore"
        },
        {
          text: "Indore, Madhya Pradesh, India",
          link: null
        }
      ]
    }
  ]
}
  return (
    <div className="bg-primary-color">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center bg-primary-color overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(8, 47, 73, 0.7), rgba(8, 47, 73, 0.7)), url('ecomseo.jpg')`
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
              <span className="text-sm accent-cyan font-semibold">Let's Build Something Great</span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-space-grotesk leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl text-cyan-100 mb-8 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Have a project in mind or want to discuss how we can help grow your business? Reach out to our team—we'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 sm:py-20 bg-secondary-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="space-y-8"
>
  <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-space-grotesk text-color-1">
    {contactDetails.title.split(' ')[0]} <span className="gradient-text">{contactDetails.title.split(' ')[1]}</span> {contactDetails.title.split(' ').slice(2).join(' ')}
  </h2>
  
  <div className="space-y-6">
    {contactDetails.items.map((item) => (
      <div key={item.id} className="flex items-start space-x-4">
        <div className={`bg-gradient-to-r ${item.gradient} p-3 rounded-full text-white`}>
          {item.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-color-1 mb-1">{item.title}</h3>
          {item.details.map((detail, index) => (
            detail.link ? (
              <a 
                key={index} 
                href={detail.link} 
                className="text-color-2 hover:text-cyan-400 transition-colors block"
              >
                {detail.text}
              </a>
            ) : (
              <p key={index} className="text-color-2">{detail.text}</p>
            )
          ))}
        </div>
      </div>
    ))}
  </div>
</motion.div>
            {/* Contact Form */}
           <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary-color border border-cyan-400/30 p-6 sm:p-8 rounded-lg shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 font-space-grotesk text-color-1">
                Send Us a <span className="gradient-text">Message</span>
              </h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-color-2 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-color border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-color-1 placeholder-color-2"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-color-2 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-secondary-color border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-color-1 placeholder-color-2"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-color-2 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-color border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-color-1 placeholder-color-2"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-color-2 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary-color border border-cyan-400/30 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-color-1 placeholder-color-2"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                 <button
  type="submit"
  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
>
  Send Message
  <FiSend className="ml-2 w-5 h-5" />
</button>
                  <a
                    href={`https://wa.me/91${mobile_number}?text=${encodeURIComponent(
                      "Hi A2ZDM Team, I'd like to discuss a potential project. Can we schedule a call?"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-colors"
                  >
                    Quick Chat
                  </a>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-96 bg-primary-color">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-blue-900/10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121597.05407424325!2d75.70795399783303!3d22.724055545545244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh%2C%20India!5e1!3m2!1sen!2sus!4v1753907735758!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="opacity-70 hover:opacity-100 transition-opacity"
        ></iframe>
        
      </section>
    </div>
  );
};

export default ContactPage;