import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode } from "react-icons/fa";
import HeaderSection from "../common/herder-section/HeaderSection";
import ProjectCard from "./project-card/ProjectCard";
import ProjectModal from "./project-model/ProjectModal";
import projects from "../../data/projects";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="py-20 bg-white dark:bg-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <HeaderSection headerName="Featured Projects" icon={FaCode} />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;

