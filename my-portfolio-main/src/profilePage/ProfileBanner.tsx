import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import GithubButton from '../components/GithubButton';

const bannerData = {
  headline: "Diya Matani – AI/ML Engineer | Python Developer",

  profileSummary: `B.Tech CSE student at VIT Bhopal with strong expertise in Artificial Intelligence, Machine Learning, and Data Engineering. Interned at BLG Technologies, where I built automated ETL pipelines and backend services for financial data. Passionate about solving complex problems using Python, Generative AI (Gemini Pro), and SQL. Developed impactful projects in predictive modeling and energy optimization. Consistent high achiever with 500+ coding problems solved and national recognition in mental arithmetic.`,

  resumeLink: "https://github.com/diya-matani/Resume_Diya_Matani/blob/main/Diya_Matani_AI_Python_Intern_Resume.pdf",
  linkedinLink: "https://www.linkedin.com/in/diya-matani",
  githubLink: "https://github.com/diya-matani"
};

const ProfileBanner: React.FC = () => {
  const handlePlayClick = () => window.open(bannerData.resumeLink, '_blank');
  const handleLinkedinClick = () => window.open(bannerData.linkedinLink, '_blank');
  const handleGithubClick = () => window.open(bannerData.githubLink, '_blank');

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
          <GithubButton onClick={handleGithubClick} label="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
