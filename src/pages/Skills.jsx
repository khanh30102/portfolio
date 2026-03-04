import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';
import { Code2, Database, Wrench, Layers, Cpu, Globe, Terminal, PenTool, Server, FileCode } from 'lucide-react';

// Sử dụng Lucide Icons (Có sẵn) để thay thế nếu react-icons bị lỗi
const skillIcons = {
  'HTML5': { icon: <Globe />, color: 'text-orange-500' },
  'CSS3': { icon: <Layers />, color: 'text-blue-500' },
  'JavaScript (ES6+)': { icon: <Code2 />, color: 'text-yellow-400' },
  'React JS': { icon: <Cpu />, color: 'text-sky-400' },
  'Tailwind CSS': { icon: <FileCode />, color: 'text-cyan-400' },
  'Redux': { icon: <Layers />, color: 'text-purple-500' },
  'NodeJS (Basic)': { icon: <Server />, color: 'text-green-500' },
  'PHP': { icon: <Server />, color: 'text-indigo-400' },
  'MySQL': { icon: <Database />, color: 'text-blue-600' },
  'Git': { icon: <Terminal />, color: 'text-orange-600' },
  'VS Code': { icon: <Code2 />, color: 'text-blue-400' },
  'Figma': { icon: <PenTool />, color: 'text-pink-500' },
  'Postman': { icon: <Wrench />, color: 'text-orange-500' },
};

const SkillGroup = ({ title, items, colorClass }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700/50"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className={`text-2xl font-bold mb-6 ${colorClass}`}>{title}</h3>
    <div className="flex flex-wrap gap-4">
      {items.map((item) => {
        const skillData = skillIcons[item];
        return (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex items-center gap-3 px-4 py-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-lg font-medium text-gray-700 dark:text-gray-300 cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-md"
          >
            {skillData && <span className={`text-2xl ${skillData.color}`}>{skillData.icon}</span>}
            <span>{item}</span>
          </motion.div>
        );
      })}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-4">Kỹ năng & Chuyên môn</h2>
      <p className="text-md text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        Các công nghệ và công cụ tôi sử dụng để biến ý tưởng thành sản phẩm thực tế.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <SkillGroup title="Frontend Development" items={skills.frontend} colorClass="text-blue-500" />
        <SkillGroup title="Backend Development" items={skills.backend} colorClass="text-green-500" />
        <SkillGroup title="Tools & Others" items={skills.tools} colorClass="text-orange-500" />
      </div>
    </div>
  );
};

export default Skills;