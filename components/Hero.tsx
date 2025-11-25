'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
}

const cursorVariants = {
  blinking: {
    opacity: [0, 1, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "loop" as const
    }
  }
}

export default function Hero() {
  const [text, setText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = "QA Automation Engineer"

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [text])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white text-shadow-glow"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 shadow-text">Avan Vaghani</span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-200 flex justify-center items-center space-x-1"
          >
            <span className="text-shadow-sm">{text}</span>
            <motion.span
              variants={cursorVariants}
              animate="blinking"
              className={`inline-block w-1 h-8 bg-blue-500 ${isTypingComplete ? 'opacity-0' : ''}`}
            ></motion.span>
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-shadow-sm"
          >
            Passionate about building robust, scalable test frameworks and ensuring flawless user experiences
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all shadow-glow-blue"
              >
                View Projects
              </motion.button>
            </Link>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white dark:bg-gray-800/60 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700/60 backdrop-blur-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/80 transition-all shadow-glow-light"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="pt-8"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <Link href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 