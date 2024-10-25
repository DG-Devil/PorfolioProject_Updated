import React from 'react';
import "../resources/css/constants.css";

function SocialProfiles() {
  return (
    <div className="user-profile-container">
      <img src="./images/defaultImage.JPG" alt="Profile" className="user-profile-photo" />
      
      <h2 className="user-profile-name">Divya Garg</h2>
      <p className="user-profile-username">@DG</p>
      <p className="user-profile-description">
        Sairam
      </p>

      <div className="user-profile-social-links">
        {/* Add your social icons here */}
        {/* Example: */}
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="button linkedin-btn">
          LinkedIn
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="button github-btn">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default SocialProfiles;
