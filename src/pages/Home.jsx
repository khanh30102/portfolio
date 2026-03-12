import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/data';
import { ArrowRight, Download } from 'lucide-react';

const Home = () => {
  const [text, setText] = useState('');
  const fullText = personalInfo.role;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100); // Tốc độ gõ
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-2">Xin chào, tôi là</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{personalInfo.name}</h1>
          <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
            {personalInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/contact" className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              Liên hệ ngay <ArrowRight size={20} />
            </Link>
            
            {/* Link CV đã được cập nhật ở đây */}
            <a 
              href="https://drive.google.com/file/d/13cvx-q7g5MNpmNSfmaYXuxTwhSKzcGY3/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              Xem CV <Download size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
            <img src={personalInfo.avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;