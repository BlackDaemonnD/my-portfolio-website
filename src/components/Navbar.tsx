import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-primary/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-accent">
          BD
        </div>
        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-slate-light">
          <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
          <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
        </ul>
        {/* Resume Button */}
        <a 
          href="/resume.pdf" // Link to your resume file
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:block border border-accent text-accent px-4 py-2 rounded hover:bg-accent/10 transition-colors"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;