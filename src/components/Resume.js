import React from 'react';
import '../styles/Resume.css'; // Import CSS for styling

const Resume = ({ education, experience }) => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      
      <div className="resume-content">
        <div className="resume-education">
          <h3>Education</h3>
          <ul>
            {education.map((item, index) => (
              <li key={index}>
                <h4>{item.degree}</h4>
                <p>{item.institution} | {item.year}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="resume-experience">
          <h3>Experience</h3>
          <ul>
            {experience.map((item, index) => (
              <li key={index}>
                <h4>{item.position}</h4>
                <p>{item.company} | {item.years}</p>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
