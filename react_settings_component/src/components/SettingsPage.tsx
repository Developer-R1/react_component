import React, { useState } from 'react';
import HomeIcon from '../assets/homeIcon.svg';
import EventsIcon from '../assets/eventsIcon.svg';
import Logo from '../assets/settings.svg';
import CrossIcon from '../assets/crossIcon.svg'; 
import SquareIcon from '../assets/squareIcon.svg'; 
import MinusIcon from '../assets/minusIcon.svg'; 

const SettingsComponent: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="container-fluid vh-100 d-flex flex-column overflow-hidden">
      {/* Navbar */}
      <nav className="navbar navbar-light bg-light border-bottom border-3 border-dark p-3">
        <div className="d-flex align-items-center w-100 justify-content-between">
          <div className="d-flex align-items-center">
            <img src={Logo} alt="Settings Logo" className="navbar-brand-logo" width="40" height="40" />
            <span className="navbar-brand mb-0 h1 ms-2">Settings</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={MinusIcon} alt="Minimize" className="icon ms-3" width="20" height="20" />
            <img src={SquareIcon} alt="Maximize" className="icon ms-3" width="20" height="20" />
            <img src={CrossIcon} alt="Close" className="icon ms-3" width="20" height="20" />
          </div>
        </div>
      </nav>

      <div className="row flex-grow-1 overflow-hidden">
        {/* Sidebar */}
        <div className="col-4 col-md-3 bg-white border-end border-3 border-dark p-0 vh-100">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link d-flex align-items-center p-3 text-dark ${activeLink === 'home' ? 'bg-primary text-white' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                <img src={HomeIcon} alt="Home" className="icon me-2" width="20" height="20" />
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#events"
                className={`nav-link d-flex align-items-center p-3 text-dark ${activeLink === 'events' ? 'bg-primary text-white' : ''}`}
                onClick={() => handleLinkClick('events')}
              >
                <img src={EventsIcon} alt="Events" className="icon me-2" width="20" height="20" />
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="col-8 col-md-9 bg-light d-flex justify-content-center align-items-center p-4 vh-100">
          {activeLink === 'home' && (
            <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-dark">
              <h4>QR Code</h4>
              <div
                className="bg-light w-75 p-4 mb-4 text-center rounded-3 shadow"
                style={{
                  width: '150px',
                  height: '150px',
                  backgroundColor: '#ccc',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <span>QR Code</span>
              </div>
              {/* Profile details below */}
              <div className="bg-light w-75 p-4 text-center rounded-3 shadow">
                <h4>Profile Details</h4>
                <p>Name: </p>
                <p>College: </p>
                <p>Email: </p>
              </div>
            </div>
          )}

          {activeLink === 'events' && (
            <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-dark">
              <div className="bg-light w-75 p-4 text-center rounded-3 shadow">
                <h4>Event Details</h4>
                <p>Event Name: </p>
                <p>Event Date: </p>
                <p>Event Time: </p>
                <p>Event Venue: </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;





