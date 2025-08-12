'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Software Developer',
    date: 'Jan 2022 - Present',
    description: [
      'Developed and maintained full-stack web applications using React, Next.js, and TypeScript.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Analyzed and visualized user data to inform product decisions, increasing engagement by 15%.',
    ],
  },
  {
    company: 'Data Insights LLC',
    role: 'Data Analyst Intern',
    date: 'May 2021 - Aug 2021',
    description: [
      'Cleaned, processed, and analyzed large datasets using Python (Pandas, NumPy).',
      'Created interactive dashboards in Power BI to visualize key performance indicators.',
      'Presented findings and data-driven recommendations to senior management.',
    ],
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="container mx-auto max-w-3xl py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h2 className="mb-8 text-3xl font-bold text-slate-light">
          <span className="font-mono text-accent">02.</span> Where I've Worked
        </h2>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Tabs */}
          <div className="flex flex-row overflow-x-auto md:flex-col md:overflow-x-visible">
            {experienceData.map((exp, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full whitespace-nowrap border-b-2 p-3 text-left font-mono text-sm transition-all md:border-b-0 md:border-l-2 ${
                  activeTab === index
                    ? 'border-accent text-accent bg-secondary'
                    : 'border-slate-dark text-slate-dark hover:bg-secondary hover:text-accent'
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[300px]">
            <h3 className="text-xl font-bold text-slate-light">
              {experienceData[activeTab].role}{' '}
              <span className="text-accent">@ {experienceData[activeTab].company}</span>
            </h3>
            <p className="mb-4 font-mono text-sm text-slate-dark">
              {experienceData[activeTab].date}
            </p>
            <ul className="space-y-2">
              {experienceData[activeTab].description.map((item, i) => (
                <li key={i} className="relative pl-5 text-slate-dark before:absolute before:left-0 before:text-accent before:content-['▹']">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;