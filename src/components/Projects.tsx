'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData, Project } from '@/lib/projectsData';
import { Github, ExternalLink } from 'lucide-react';

// A reusable card component for a single project
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col justify-between rounded-md bg-secondary p-6 transition-transform hover:-translate-y-2"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-light">{project.title}</h3>
          <div className="flex items-center space-x-4">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-dark hover:text-accent">
              <Github size={20} />
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-dark hover:text-accent">
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <p className="mb-4 text-slate-dark">{project.description}</p>
      </div>
      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full bg-primary px-3 py-1 text-xs font-mono text-accent">
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};


// The main Projects section component
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Data Analytics', 'AI/ML'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="container mx-auto py-24 px-4">
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h2 className="mb-8 text-3xl font-bold text-slate-light">
          <span className="font-mono text-accent">02.</span> My Projects
        </h2>

        {/* Filter Buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-md px-4 py-2 font-mono text-sm transition-colors
                ${activeFilter === category ? 'bg-accent text-primary' : 'bg-secondary text-accent hover:bg-accent/10'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;