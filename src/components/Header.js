import React from 'react';
import '../styles/Header.css'; // Import CSS for styling

const Header = ({ profileImage, title, subtitle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="header-right">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
