'use client';

import { HiMail, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowRight, HiDownload } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-40 pb-20 relative">
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Surya P
        </h1>

        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-200 font-semibold mb-8">
          MERN Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          Crafting exceptional web experiences with React, Next.js, and modern technologies.
        </p>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate about creating scalable, performant applications that users love.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/30"
          >
            View My Work
            <HiArrowRight size={20} />
          </a>

          <button className="bg-transparent border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:border-cyan-400 hover:text-cyan-400 transition-all">
            <HiDownload size={20} />
            Download CV
          </button>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:surya@example.com"
            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
          >
            <HiMail size={24} />
          </a>
          <a
            href="https://github.com/suryap60"
            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
          >
            <FaGithub size={24} />
          </a>

          {/* <a
            href="tel:+1234567890"
            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
          >
            <HiPhone size={24} />
          </a> */}

          {/* <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
          >
            <FaTwitter size={24} />
          </a> */}

          <a
            href="https://www.linkedin.com/in/surya-p-a690b32b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400 transition-all"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* <div className="mt-12 flex flex-col items-center gap-2 text-gray-500 text-sm">
          <span>Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full relative">
            <div className="w-1.5 h-2 bg-cyan-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-bounce"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
