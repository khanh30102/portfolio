import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-6 mt-10 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;