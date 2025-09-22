import React from 'react'
import Hero from '../Components/Hero' 
import { motion } from 'framer-motion'
import { HashRouter, Routes, Route } from "react-router-dom";

const About = () => {
  return (
    <motion.div
       initial={{ opacity: 0, y:100 }}
       transition={{ duration: 1.5 }}
       whileInView={{ opacity: 1, y:0 }}
       onViewportLeave={{ once:true }}
      className='mb-20'
    >
      <HashRouter>
      <Routes>
      <Route path="/" element={<Hero />} />
        </Routes>
    </HashRouter>
    </motion.div>
  )
}

export default About
