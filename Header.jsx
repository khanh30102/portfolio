import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronLeft, ChevronRight, Home, Briefcase, FolderGit2, Wrench, Mail } from 'lucide-react';
import { navLinks, personalInfo } from '../data/data';

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const location = useLocation();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Mapping icon cho menu
  const getIcon = (path) => {
    switch (path) {
      case '/': return <Home size={20} />;
      case '/experience': return <Briefcase size={20} />;
      case '/projects': return <FolderGit2 size={20} />;
      case '/skills': return <Wrench size={20} />;
      case '/contact': return <Mail size={20} />;
      default: return <Home size={20} />;
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)} 
          className="p-2 bg-white dark:bg-gray-800 rounded-md shadow-md text-gray-700 dark:text-gray-200"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside 
        className={`
          fixed md:sticky top-0 left-0 z-40 h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-800 
          transition-all duration-300 ease-in-out flex flex-col shadow-lg md:shadow-none
          ${isCollapsed ? 'w-20' : 'w-72'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        {/* Toggle Button (Desktop only) */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex absolute -right-3 top-9 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1 text-gray-500 hover:text-primary shadow-sm z-50"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* User Info Section */}
        <div className={`flex flex-col items-center pt-8 pb-6 px-4 transition-all duration-300 ${isCollapsed ? 'px-2' : ''}`}>
          <div className={`relative rounded-full overflow-hidden border-2 border-primary transition-all duration-300 ${isCollapsed ? 'w-10 h-10 mb-2' : 'w-24 h-24 mb-4'}`}>
            <img src={personalInfo.avatar} alt="Avatar" className="w-full h-full object-cover" />
          </div>
          
          {!isCollapsed && (
            <div className="text-center overflow-hidden whitespace-nowrap">
              <h2 className="font-bold text-lg text-gray-800 dark:text-white">{personalInfo.name}</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{personalInfo.role}</p>
            </div>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 space-y-2 overflow-y-auto py-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileOpen(false)}
                className={`
                  flex items-center gap-4 px-3 py-3 rounded-lg transition-all duration-200 group
                  ${isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-primary font-medium' 
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary'
                  }
                  ${isCollapsed ? 'justify-center' : ''}
                }`}
                title={isCollapsed ? link.name : ''}
              >
                <span className="shrink-0">{getIcon(link.path)}</span>
                {!isCollapsed && <span className="whitespace-nowrap">{link.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle Footer */}
        <div className={`p-4 border-t dark:border-gray-800 flex ${isCollapsed ? 'justify-center' : 'justify-between items-center'}`}>
          {!isCollapsed && <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Giao diện</span>}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
            title="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Header;