import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/data';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Học vấn</h2>
      <div className="max-w-3xl mx-auto relative border-l-2 border-gray-200 dark:border-gray-700 ml-4 md:ml-auto">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 ml-6"
          >
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <GraduationCap size={16} className="text-green-500" />
            </span>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-700">
              <span className="text-sm font-medium text-green-600 bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full">
                {edu.time}
              </span>
              <h3 className="text-xl font-bold mt-2">{edu.degree}</h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-2">{edu.school}</h4>
              <p className="text-gray-500 dark:text-gray-400">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;