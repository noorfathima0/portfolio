import React from 'react';
import '../styles/About.css'; // Import CSS for styling

const About = ({ title, description, experienceYears, projectsCount, happyClients, followers }) => {
  return (
    <section id="about" className="about-section">
      <h2>{title}</h2>
      <p className="about-description">{description}</p>

    </section>
  );
};

export default About;
