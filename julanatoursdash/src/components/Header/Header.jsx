// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// export const Header = () => {
//   return (
//     <div className="p-5 mb-4 bg-light rounded-3 mt-1 header">
//         <div className="container-fluid py-5">
//             <h1 className='display-5 fw-bold'>Rent Your Vehicle Here!</h1>
//             <p className="col-md-8 fs-4">Welcome to our vehicle rental service! We offer a wide range of vehicles to suit your needs, whether you're looking for a car, van, or truck. Our easy-to-use platform allows you to browse and book vehicles quickly and conveniently.</p>
//             <Link to="/explore" className="btn btn-primary">Explore</Link>
//         </div>
//     </div>
//   )
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  return (
    <div className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Find Your Perfect
              <span className="gradient-text"> Tour</span>
            </h1>
            <p className="hero-description">
              Discover premium vehicles for every journey. From luxury vehicles, 
              we've got the perfect vehicle waiting for you.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Vehicles</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Locations</span>
              </div>
            </div>
            <div className="hero-actions">
              <Link to="/explore" className="btn-primary-modern">
                <span>Explore Vehicles</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <button className="btn-secondary-modern">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"/>
                  <polygon points="1 5 1 19 15 12 1 5"/>
                </svg>
                <span>Book Your Vehicle!</span>
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1">
              <div className="card-icon">🚗</div>
              <div className="card-text">
                <div className="card-title">Premium Cars</div>
                <div className="card-subtitle">Starting from Rs.2000/day</div>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🚐</div>
              <div className="card-text">
                <div className="card-title">Spacious Vans</div>
                <div className="card-subtitle">Perfect for groups</div>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🏆</div>
              <div className="card-text">
                <div className="card-title">Top Rated</div>
                <div className="card-subtitle">4.9/5 Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;