import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const NAME = 'DIYA MATANI';

const NetflixTitle: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    if (!isClicked) {
      const audio = new Audio(netflixSound);
      audio.play().catch(err => console.warn('Audio play error:', err));
      setIsClicked(true);
    }
  };

  useEffect(() => {
    if (isClicked) {
      // Wait for the animation to finish, then navigate
      const timer = setTimeout(() => navigate('/browse'), 4200);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div
      className={`netflix-container ${isClicked ? 'clicked' : ''}`}
      onClick={handlePlaySound}
      role="button"
      aria-label="Play Netflix intro and continue"
    >
      <div className="netflix-title" aria-hidden={!isClicked}>
        {NAME.split('').map((ch, i) => (
          <span
            key={i}
            className="letter"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </div>
      {/* Small helper hint when not clicked */}
      {!isClicked && <div className="click-hint">Click to start</div>}
    </div>
  );
};

export default NetflixTitle;
