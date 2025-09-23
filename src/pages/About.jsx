import React from 'react'
import Hero from '../Components/Hero'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      >
      <Hero />
    </motion.div>
  )
}

export default About

