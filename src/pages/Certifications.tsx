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
// Certifications List
const staticCertifications: Certification[] = [
  {
    title: "Applied Machine Learning in Python",
    issuer: "Coursera",
    issuedDate: "2024",
    link: "https://drive.google.com/file/d/1p04og76YTWOLe2eAWU1ESSaiAELld1mI/view?usp=sharing",
    iconName: "coursera"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    issuedDate: "2024",
    link: "https://drive.google.com/file/d/1AueDBdizoypsvSwyM2H-HP15Fa43qswr/view?usp=sharing",
    iconName: "university"
  },
  {
    title: "Limca Book of Records",
    issuer: "Trendz Abacus",
    issuedDate: "Awarded",
    link: "https://drive.google.com/file/d/1zWHmqGsA9EFi0Y9VTrtmddcuT4j28tUa/view?usp=sharing",
    iconName: "university"
  },
  {
    title: "Indian Book of Records",
    issuer: "Trendz Abacus",
    issuedDate: "Awarded",
    link: "https://drive.google.com/file/d/1DLwBv7MrzCKcE1hVvaWqAmj84YKhZXsG/view?usp=sharing",
    iconName: "university"
  },
  {
    title: "Runner Up - Project Expo",
    issuer: "Industry Conclave VITB",
    issuedDate: "2024",
    link: "https://drive.google.com/file/d/1f_-f4QeOgFDcGkl-lifzhxGxjN3-DJjT/view?usp=sharing",
    iconName: "university"
  }
];

const Certifications: React.FC = () => {
  const certifications = staticCertifications;

  return (
    <div className="certifications-container" aria-live="polite">
      <h1 className="certifications-heading">Certifications & Achievements</h1>

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
