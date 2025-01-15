import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // To track when each project is in view
import { motion } from 'framer-motion'; // For animations

// Project component
function FullScreenProject({ project }) {
  const { imgPath, title, description, techStack } = project;
  const [showTech, setShowTech] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once when project is in view
    threshold: 0.5,     // 50% of the project section needs to be visible
  });

  // Update showTech when inView changes
  useEffect(() => {
    if (inView) {
      setShowTech(true);
    }
  }, [inView]); // Dependency on inView to trigger the update

  return (
    <motion.div
      ref={ref}
      className="full-screen-project"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="project-image">
        <img src={imgPath} alt={title} />
      </div>
      <div className="project-details">
        <h2>{title}</h2>
        <p>{description}</p>
        {showTech && (
          <div className="tech-stack">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="tech-icon"
              >
                <img src={tech.icon} alt={tech.name} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default FullScreenProject;
