import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container mx-auto py-8 px-4 text-slate-dark">
      {/* Social Icons */}
      <div className="mb-4 flex items-center justify-center space-x-6">
        <a href="https://github.com/BlackDaemonnD" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/kraftycoder" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
          <Linkedin size={24} />
        </a>
        <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
          <Twitter size={24} />
        </a>
      </div>
      {/* Copyright Notice */}
      <p className="text-center font-mono text-sm">
        &copy; {currentYear} Segun Adebayo. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;