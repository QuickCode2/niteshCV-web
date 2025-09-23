import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <motion.div
      className='w-full bg-white relative min-h-screen overflow-hidden'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      {/* Left background strip */}
      <div className='absolute top-0 left-0 h-full md:h-[110%] w-full md:w-[32%] bg-[#e6dace]'></div>

      {/* Main content container */}
      <div className='relative max-w-5xl mx-auto w-full px-4 py-20 md:py-32 pb-32'>
        <div className='flex flex-col md:flex-row gap-12'>

          {/* Left profile section */}
          <div className='w-full md:w-[40%] bg-[#e6dace] shadow-2xl shadow-blue-500'>
            <div className='flex flex-col items-center p-12'>
              <img className="w-40 h-40 object-cover rounded-full" src="/Nitesh.jpg" alt="profile" />
              <h1 className='text-2xl font-bold mt-6 mb-6 text-center'>Nitesh <br /> Prajapati</h1>
              <div className='border-t-2 border-blue-500 w-16 mb-6'></div>
              <p className='uppercase mb-6 font-serif text-red-900'>Project Manager</p>
            </div>

            {/* Social Icons */}
            <div className='bg-white w-full flex justify-center py-4 space-x-6'>
              <a href="https://www.instagram.com/nitesh_ahiniya2">
                <img className='w-6 hover:opacity-60 transition duration-300' src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/niteshahiniya">
                <img className='w-6 hover:opacity-60 transition duration-300' src="https://cdn-icons-png.flaticon.com/128/3128/3128208.png" alt="Facebook" />
              </a>
              <a href="https://www.linkedin.com/in/nitesh-ahiniya-6b745a2b7">
                <img className='w-6 hover:opacity-60 transition duration-300' src="https://cdn-icons-png.flaticon.com/128/2111/2111532.png" alt="LinkedIn" />
              </a>
              <a href="https://x.com/AhiniyaNitesh">
                <img className='w-6 hover:opacity-60 transition duration-300' src="https://cdn-icons-png.flaticon.com/128/11823/11823292.png" alt="Twitter" />
              </a>
            </div>
          </div>

          {/* Right content section */}
          <div className='w-full md:w-1/2 text-center md:text-left px-4 md:px-6 mt-16'>
            <h1 className='text-4xl lg:text-8xl font-bold mb-8'>Nitesh Prajapati</h1>
            <p className='text-xl mb-6 font-semibold motion-safe:animate-bounce'>Here's who I am & what I do</p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
              <Link to="/Resume">
                <button className="uppercase px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-gray-700">
                  Resume
                </button>
              </Link>
              <Link to="/Projects">
                <button className="uppercase px-8 py-2 bg-blue-500 text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-gray-700">
                  Projects
                </button>
              </Link>
            </div>

            <p className='text-md'>
              Hello I'M Nitesh Prajapati, a detail-oriented Project Manager who's passionate about turning ideas into action.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
