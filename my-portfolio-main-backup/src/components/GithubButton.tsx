import React from 'react';
import './GithubButton.css';
import { FaGithub } from 'react-icons/fa';

interface GithubButtonProps {
  onClick: () => void;
  label?: string;
}

const GithubButton: React.FC<GithubButtonProps> = ({ onClick, label = "GitHub" }) => {
  return (
    <button className="github-button" onClick={onClick} type="button">
      <div className="icon-container">
        <FaGithub size={24} color="white" />
      </div>
      <div className="spacer"></div>
      <span className="label">{label}</span>
    </button>
  );
};

export default GithubButton;
