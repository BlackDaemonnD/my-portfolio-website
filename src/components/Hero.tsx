'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto flex h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="flex flex-col items-start space-y-4 px-4"
      >
        <p className="font-mono text-accent">Hi, my name is</p>
        <h1 className="text-4xl font-bold text-slate-light md:text-7xl">
          Segun Adebayo.
        </h1>
        <h2 className="text-3xl font-bold text-slate-dark md:text-6xl">
          I build intelligent digital solutions.
        </h2>
        <p className="max-w-xl text-slate-dark">
          I'm a Software Developer and Data Analyst with a passion for artificial intelligence. I specialize in turning complex problems into elegant, data-driven applications. From front-end development to machine learning models, my goal is to create impactful and intelligent technology.
        </p>
        <div>
          <a
            href="#projects"
            className="mt-4 inline-block rounded border border-accent px-6 py-3 text-accent transition-colors hover:bg-accent/10"
          >
            Explore my work
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;