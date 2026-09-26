import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { skills } from "../../data/skills";
import HeaderSection from '../common/herder-section/HeaderSection';

const Skills = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderSection headerName="Technical Skills" icon={FaCode} /> 

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-indigo-500 mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-5">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-indigo-500 font-semibold">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 * skillIndex }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
