import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({ project, onSelect }) => {
  const descRef = useRef(null);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (descRef.current) {
        const el = descRef.current;
        setHasOverflow(el.scrollHeight > el.clientHeight + 1);
      }
    };
    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [project.description]);

  const ensureFullSizeSvg = (svg) => {
    if (!svg || typeof svg !== "string") return svg;
    // Remove existing width/height/preserveAspectRatio and inject ours
    const cleaned = svg.replace(/<svg([^>]*)>/i, (_, attrs) => {
      const withoutDims = attrs.replace(/\s(width|height|preserveAspectRatio)="[^"]*"/gi, "");
      return `<svg${withoutDims} preserveAspectRatio="xMidYMid slice" width="100%" height="100%">`;
    });
    return cleaned;
  };

  const svgMarkup = useMemo(() => ensureFullSizeSvg(project?.svgIcon), [project?.svgIcon]);

  return (
    <motion.div
      variants={projectVariants}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg
                 hover:shadow-2xl transition-all duration-300 flex flex-col group"
    >
    {/* Project Image with Overlay */}
    <div className="relative h-48 overflow-hidden rounded-t-xl">
      {svgMarkup ? (
        <div
          className="w-full h-full bg-white dark:bg-gray-900 [&>svg]:w-full [&>svg]:h-full"
          dangerouslySetInnerHTML={{ __html: svgMarkup }}
        />
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300
                   flex items-center justify-center"
      >
        <button
          onClick={() => onSelect(project)}
          className="px-6 py-2 bg-white text-gray-900 rounded-lg transform -translate-y-4
                     opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-300 flex items-center gap-2"
        >
          View Details <FaArrowRight />
        </button>
      </div>
    </div>

    {/* Project Content */}
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <div
        className="relative mb-4 flex-grow"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <p ref={descRef} className="text-gray-600 dark:text-gray-300 line-clamp-2">
          {project.description}
        </p>
        {hasOverflow && showTooltip && (
          <div className="pointer-events-none absolute left-0 top-full mt-1 z-20 w-full">
            <div className="inline-block max-w-full rounded-md bg-gray-900 text-white text-sm p-3 shadow-xl break-words">
              {project.description}
            </div>
          </div>
        )}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30
                     text-indigo-600 dark:text-indigo-400 rounded-full"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700
                         text-gray-600 dark:text-gray-400 rounded-full"
          >
            +{project.technologies.length - 4} more
          </span>
        )}
      </div>

      {/* Action Buttons */}
      {(project.githubLink || project.liveLink) && (
        <div className="flex gap-4">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                       bg-gray-900 dark:bg-gray-700 text-white rounded-lg
                       hover:bg-gray-800 dark:hover:bg-gray-600
                       transition-colors duration-300"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2
                       bg-indigo-600 text-white rounded-lg
                       hover:bg-indigo-700
                       transition-colors duration-300"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      )}
    </div>
  </motion.div>
);
};

export default ProjectCard;