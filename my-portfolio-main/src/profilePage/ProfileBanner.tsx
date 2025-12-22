import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import GithubButton from '../components/GithubButton';

const bannerData = {
  headline: "Diya Matani – Fullstack Developer | CSE @ VIT Bhopal",

  profileSummary: `CSE student at VIT Bhopal with strong skills in Python, Data Analytics, Machine Learning, and Web Development. 
Passionate about building real-world solutions using Flask, React (basics), Pandas, NumPy, and SQL. 
Completed a Software Development Internship at BLG Technologies, where I developed a complete Hostel Management Portal with analytics dashboards. 
Experienced in AI and analytics-based projects like Engine Rating Prediction, Voice Chatbot, and Marketing Campaign Performance Analysis. 
Motivated learner with a strong foundation in DSA and problem-solving (LeetCode, GFG).`,

  resumeLink: "https://drive.google.com/file/d/1297WKVZyD79oST2KLINwktz35__z0NuF/view?usp=sharing",
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
