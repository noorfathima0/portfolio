import React from 'react';
import '../styles/Projects.css'; // Import CSS for styling

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} className="project-image" />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
