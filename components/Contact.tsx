'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { fadeIn } from '../utils/motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      // In a real implementation, you would send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      
      // Reset form
      if (formRef.current) {
        formRef.current.reset()
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-[#080a15] isolate">
      {/* Grid Background */}
      <div className="absolute inset-0 contact-grid-bg opacity-40 z-0"></div>
      
      {/* Glowing orbs */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/3 right-1/4 w-64 h-64 contact-orb -z-10"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-1/3 left-1/4 w-80 h-80 contact-orb -z-10"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 contact-title">Get in Touch</h2>
          <p className="text-gray-300 text-lg text-center max-w-2xl">
            Interested in improving your product's quality? Let's discuss how I can help with your testing needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-[#0c101d] p-8 rounded-xl border border-[#08d9d6]/30 shadow-glow-green"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d1526] border border-[#08d9d6]/30 rounded-lg p-3 text-white focus:outline-none focus:border-[#08d9d6] transition-colors contact-form-glow"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0d1526] border border-[#08d9d6]/30 rounded-lg p-3 text-white focus:outline-none focus:border-[#08d9d6] transition-colors contact-form-glow"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0d1526] border border-[#08d9d6]/30 rounded-lg p-3 text-white focus:outline-none focus:border-[#08d9d6] transition-colors resize-none contact-form-glow"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#08d9d6] to-[#52ffcf] text-gray-900 font-bold py-3 px-6 rounded-lg
                  transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#08d9d6]/30
                  focus:outline-none focus:ring-2 focus:ring-[#08d9d6]/50 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                >
                  Your message has been sent successfully!
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-center"
                >
                  There was an error sending your message. Please try again.
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-[#0c101d] p-8 rounded-xl border border-[#08d9d6]/30 shadow-glow-green"
          >
            <h3 className="text-2xl font-bold mb-8 about-subtitle">Connect with me</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#08d9d6]/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#08d9d6] text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">Bhavnagar, Gujarat, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#08d9d6]/20 flex items-center justify-center">
                  <FaPhone className="text-[#08d9d6] text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">+91 8141322401</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#08d9d6]/20 flex items-center justify-center">
                  <FaEnvelope className="text-[#08d9d6] text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">aevanvaghani5291@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-white font-medium mb-4">Social profiles</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/avanvaghani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0d1526] border border-[#08d9d6]/30 flex items-center justify-center
                    hover:bg-[#08d9d6]/20 transition-colors duration-300 contact-social-icon"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
                <a 
                  href="https://linkedin.com/in/avanvaghani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0d1526] border border-[#08d9d6]/30 flex items-center justify-center
                    hover:bg-[#08d9d6]/20 transition-colors duration-300 contact-social-icon"
                >
                  <FaLinkedin className="text-white text-xl" />
                </a>
                <a 
                  href="mailto:aevanvaghani5291@gmail.com" 
                  className="w-12 h-12 rounded-full bg-[#0d1526] border border-[#08d9d6]/30 flex items-center justify-center
                    hover:bg-[#08d9d6]/20 transition-colors duration-300 contact-social-icon"
                >
                  <FaEnvelope className="text-white text-xl" />
                </a>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="mt-12 flex justify-center">
              <div className="w-full h-1 bg-gradient-to-r from-[#08d9d6]/5 via-[#08d9d6]/80 to-[#08d9d6]/5 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 