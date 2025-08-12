'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto max-w-2xl py-24 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h2 className="mb-4 font-mono text-accent">03. What’s Next?</h2>
        <h3 className="mb-6 text-4xl font-bold text-slate-light md:text-5xl">
          Get In Touch
        </h3>
        <p className="mb-8 text-slate-dark">
          My inbox is always open. Whether you have a question, a project proposal, or just want to connect, feel free to reach out. I'll do my best to get back to you!
        </p>
        <a
          href="mailto:Emmanex1990@gmail.com" // <-- IMPORTANT: Replace this
          className="inline-block rounded border border-accent bg-transparent px-8 py-4 font-mono text-accent transition-colors hover:bg-accent/10"
        >
          Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;