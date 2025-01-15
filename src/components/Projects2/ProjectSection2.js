import React from 'react';
import FullScreenProject from './ProjectCard2'; // Import the FullScreenProject component

function ProjectSection2() {
  const projectData = [
    {
      imgPath: 'ecommerce.jpg',
      title: 'E-Commerce Website',
      description: 'E-Commerce Website built using React, Redux, Node.js, and MongoDB.',
      techStack: [
        { name: 'React', icon: 'path-to-react-icon' },
        { name: 'Node.js', icon: 'path-to-node-icon' },
        { name: 'MongoDB', icon: 'path-to-mongo-icon' },
      ],
    },
    {
      imgPath: 'game.jpg',
      title: 'Jeopardy Fighter',
      description: 'A Fighting game with AI and a twist inspired by Jeopardy.',
      techStack: [
        { name: 'JavaScript', icon: 'path-to-js-icon' },
        { name: 'Canvas', icon: 'path-to-canvas-icon' },
      ],
    },
    // Add more projects...
  ];

  return (
    <div className="projects-section">
      {projectData.map((project, index) => (
        <FullScreenProject key={index} project={project} />
      ))}
    </div>
  );
}

export default ProjectSection2;
