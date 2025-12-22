import React from 'react';
import './Recommendations.css';
import chrisProfilePic from '../images/chris.jpg'; // Adjust the path based on your directory structure

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img src={chrisProfilePic} alt="Chris Smith" className="profile-pic" />
          <div>
            <h3>x</h3>
            <p>y</p>
            <p className="date"></p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>NO Recommendations as for now</p>
          </div>
      </div>
    </div>
  );
};

export default Recommendations;
