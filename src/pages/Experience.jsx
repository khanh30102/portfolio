import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Kinh nghiệm làm việc</h2>
      <div className="max-w-3xl mx-auto relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-auto">
        {experiences.map((exp, index) => (
          <motion.div 
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 ml-6"
          >
            <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <Briefcase size={16} className="text-primary" />
            </span>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <span className="text-sm font-medium text-primary bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                {exp.time}
              </span>
              <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-2">{exp.company}</h4>
              <p className="text-gray-500 dark:text-gray-400">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;