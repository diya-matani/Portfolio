import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}
const staticCertifications: Certification[] = [
  {
    title: "Learning AI Through Visualization",
    issuer: "Columbia+",
    issuedDate: "June 10, 2025",
    link: "https://badges.plus.columbia.edu/9ba19318-efe7-4e9c-9c47-69c63ce37cfe#acc.8QyDgfob",
    iconName: "university"
  },
  {
    title: "Data Structure And Algorithm",
    issuer: "Coding Club India",
    issuedDate: "May 2024",
    link: "https://drive.google.com/file/d/1rW0rMIWkmjHSHPpVDqqWhKavoyCLnK0b/view?usp=drive_link",
    iconName: "university"
  },
  {
    title: "English and Academic Preparation - Pre-Collegiate",
    issuer: "Rice University",
    issuedDate: "May 23, 2023",
    link: "https://coursera.org/share/6c5ff0f35554f915d48494048db16de0",
    iconName: "coursera"
  },
  {
    title: "Microeconomics Principles",
    issuer: "University of Illinois Urbana-Champaign",
    issuedDate: "May 13, 2023",
    link: "https://coursera.org/share/e7d43830f162082764620734a1b91bcb",
    iconName: "coursera"
  }
  
  // {
  //   title: "Hosting Websites with Amazon Lightsail",
  //   issuer: "Udemy",
  //   issuedDate: "Jan 2020",
  //   link: "https://example.com/lightsail-cert",
  //   iconName: "udemy"
  // },
  // {
  //   title: "Typescript: The Complete Developer's Guide",
  //   issuer: "Udemy",
  //   issuedDate: "Dec 2020",
  //   link: "https://example.com/typescript-cert",
  //   iconName: "udemy"
  // }
];

const Certifications: React.FC = () => {
  const certifications = staticCertifications;

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
