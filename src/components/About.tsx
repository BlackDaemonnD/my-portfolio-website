'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // <-- 1. IMPORT THE IMAGE COMPONENT

const skills = {
  'Development': ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'],
  'Data & AI': ['Pandas & NumPy', 'Scikit-learn', 'TensorFlow / PyTorch', 'SQL', 'Power BI', 'Jupyter Notebooks'],
};

const About = () => {
  return (
    <section id="about" className="container mx-auto py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h2 className="mb-8 text-3xl font-bold text-slate-light">
          <span className="font-mono text-accent">01.</span> About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
          {/* Left Column: Text and Skills */}
          <div className="md:col-span-3 space-y-6">
            <div className="space-y-4 text-slate-dark">
              <p>
                Hello! I'm Segun Adebayo. My journey in technology has been a dual-pathed exploration of creating things and understanding them. On one hand, I love the art of software development—building robust, scalable applications from the ground up.
              </p>
              <p>
                On the other, I'm deeply fascinated by the stories that data can tell, which led me into the world of data analysis and machine learning. I thrive at the intersection of these fields, using code to not only build products but also to uncover insights and drive intelligent decisions.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-slate-light">Technologies I'm Comfortable With</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm font-mono">
                <div>
                  <h4 className="font-semibold text-slate-light mb-2">Development:</h4>
                  <ul className="space-y-2">
                    {skills.Development.map((skill) => (
                      <li key={skill} className="relative pl-5 text-slate-dark before:absolute before:left-0 before:text-accent before:content-['▹']">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-light mb-2">Data & AI:</h4>
                  <ul className="space-y-2">
                    {skills['Data & AI'].map((skill) => (
                      <li key={skill} className="relative pl-5 text-slate-dark before:absolute before:left-0 before:text-accent before:content-['▹']">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="md:col-span-2 flex items-center justify-center">
            <div className="group relative h-64 w-64">
              <div className="absolute -inset-1.5 rounded-lg bg-gradient-to-r from-accent to-slate-light opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
              <div className="relative flex h-full w-full items-center justify-center rounded-lg bg-secondary p-1 text-slate-light">
                {/* 2. REPLACE THE PLACEHOLDER WITH THE IMAGE COMPONENT */}
                <Image
                  src="/My passport pic.png" // Make sure this matches your image file name
                  alt="Segun Adebayo"
                  width={256}
                  height={256}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;