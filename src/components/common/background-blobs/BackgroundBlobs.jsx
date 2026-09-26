import { useState, useEffect, useMemo } from "react";

const BackgroundBlobs = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleActiveSectionChange = (event) => {
      setActiveSection(event.detail);
    };

    window.addEventListener('activeSectionChange', handleActiveSectionChange);
    return () => window.removeEventListener('activeSectionChange', handleActiveSectionChange);
  }, []);

  const configs = useMemo(() => ({
    'home': {
      opacity: 'opacity-20',
      blur: 'blur-2xl',
      colors: ['from-indigo-400 to-purple-400', 'from-pink-400 to-violet-400', 'from-blue-400 to-teal-400']
    },
    'about': {
      opacity: 'opacity-15',
      blur: 'blur-xl',
      colors: ['from-blue-400 to-cyan-400', 'from-purple-400 to-pink-400', 'from-teal-400 to-green-400']
    },
    'projects': {
      opacity: 'opacity-15',
      blur: 'blur-xl',
      colors: ['from-violet-400 to-indigo-400', 'from-orange-400 to-red-400', 'from-emerald-400 to-teal-400']
    },
    'skills': {
      opacity: 'opacity-15',
      blur: 'blur-xl',
      colors: ['from-green-400 to-teal-400', 'from-blue-400 to-indigo-400', 'from-purple-400 to-pink-400']
    },
    'contact': {
      opacity: 'opacity-10',
      blur: 'blur-lg',
      colors: ['from-teal-400 to-cyan-400', 'from-indigo-400 to-purple-400', 'from-pink-400 to-rose-400']
    }
  }), []);

  const [config, setConfig] = useState(configs['home']);

  useEffect(() => {
    setConfig(configs[activeSection] || configs['home']);
  }, [activeSection, configs]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute w-full h-full ${config.opacity} dark:opacity-10 filter ${config.blur}`}>
        <div
          className={`absolute top-0 -left-1/4 w-[500px] h-[500px] bg-gradient-to-r ${config.colors[0]} 
                     rounded-full mix-blend-multiply`}
        />
        <div
          className={`absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-gradient-to-l ${config.colors[1]} 
                     rounded-full mix-blend-multiply`}
        />
        <div
          className={`absolute -bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr ${config.colors[2]} 
                     rounded-full mix-blend-multiply`}
        />
      </div>

      <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40 backdrop-blur-[2px]" />
    </div>
  );
};

export default BackgroundBlobs;


