import React from 'react'
import Hero from '../Components/Hero'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='mb-20'
    >
      <Hero />
    </motion.div>
  )
}

export default About

