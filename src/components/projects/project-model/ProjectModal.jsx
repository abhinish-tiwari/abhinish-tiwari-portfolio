import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { createPortal } from "react-dom";


const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  // Close on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);


  return createPortal(
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 4 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 4 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="relative z-10 bg-white dark:bg-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col"
        onClick={handleModalClick}
      >
        {/* Fixed Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-t-xl">
          <h2 id="project-modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700
                     dark:text-gray-400 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label="Close modal"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6">
          <div className="rounded-lg overflow-hidden mb-6 bg-white dark:bg-gray-900">
            {project?.svgIcon ? (
              <div
                className="h-64 w-full flex items-center justify-center [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:h-auto [&>svg]:block"
                dangerouslySetInnerHTML={{ __html: project.svgIcon }}
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
            )}
          </div>

          {typeof project.longDescription === 'string' ? (
            <div
              className="text-gray-600 dark:text-gray-300 mb-6"
              dangerouslySetInnerHTML={{ __html: project.longDescription }}
            />
          ) : (
            <p className="text-gray-600 dark:text-gray-300 mb-6">{project.longDescription}</p>
          )}

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Key Features
          </h3>
          <ul className="list-disc list-inside mb-6 text-gray-600 dark:text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30
                         text-indigo-600 dark:text-indigo-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.githubLink || project.liveLink) && (
            <div className="flex gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3
                           bg-gray-900 dark:bg-gray-700 text-white rounded-lg
                           hover:bg-gray-800 dark:hover:bg-gray-600
                           transition-colors duration-300"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3
                           bg-indigo-600 text-white rounded-lg
                           hover:bg-indigo-700
                           transition-colors duration-300"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  <span>Visit Live Site</span>
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default ProjectModal;