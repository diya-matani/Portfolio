// src/pages/Certifications.tsx
import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
import { Certification } from '../types';

const iconData: { [key: string]: JSX.Element } = {
  udemy: <SiUdemy />,
  coursera: <SiCoursera />,
  ieee: <SiIeee />,
  university: <FaUniversity />
};

// Combined list: resume certs + the ones you already had
const staticCertifications: Certification[] = [
  // From your resume
  {
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    issuedDate: "Dec 2023",
    link: "#", // ← replace with your certificate URL if available
    iconName: "coursera"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    issuedDate: "Apr 2024",
    link: "#", // ← replace with NPTEL certificate URL if you have one
    iconName: "university"
  },

  // Existing items you had earlier (kept)
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
];

const Certifications: React.FC = () => {
  const certifications = staticCertifications;

  return (
    <div className="certifications-container" aria-live="polite">
      <h1 className="certifications-heading">Certifications</h1>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            style={{ ['--delay' as any]: `${index * 0.12}s` } as React.CSSProperties}
            aria-label={`Open certificate: ${cert.title} issued by ${cert.issuer}`}
          >
            <div className="certification-content">
              <div className="certification-icon" aria-hidden>
                {iconData[cert.iconName] || <FaUniversity />}
              </div>

              <div className="certification-meta">
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
              </div>
            </div>

            <div className="certification-link" aria-hidden>
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
