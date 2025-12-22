import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import GithubButton from '../components/GithubButton'; // ✅ New import
import { FaGithub } from 'react-icons/fa';
const bannerData = {
  headline: "Anupam Chittora – Aspiring Software Developer",
  profileSummary: `B.Tech ECE student at MNIT Jaipur with hands-on experience in full-stack development, machine learning, and cloud-based IoT systems. Interned at KPMG, building Azure-integrated ADX dashboards and voice-enabled data querying. Passionate about solving real-world problems through React, Node.js, C++, and Python. Led projects in real-time apps, image processing, and medical AI. Top 3.95% JEE Advanced ranker and student leader, actively seeking impactful internship opportunities.`,

  resumeLink: "https://drive.google.com/file/d/1EeZpeYFxsmSG4bygKij1cbLxcTbtbl2C/view?usp=drive_link",
  linkedinLink: "https://linkedin.com/in/anupamchittora",
  githubLink: "https://github.com/anupamchittora" 
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
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
          <GithubButton onClick={handleGithubClick} label="GitHub" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;