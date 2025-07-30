// import React, { useState, useEffect, useRef } from 'react';
// import './Menubar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { assets } from '../../assets/assests.js';
// import { Link, useLocation } from 'react-router-dom';

// export const Menubar = () => {
//   const location = useLocation();
//   const [activeItem, setActiveItem] = useState('/');
//   const selectorRef = useRef(null);
//   const navItemsRef = useRef([]);

//   useEffect(() => {
//     setActiveItem(location.pathname);
//     updateSelectorPosition();
//   }, [location]);

//   useEffect(() => {
//     window.addEventListener('resize', updateSelectorPosition);
//     return () => window.removeEventListener('resize', updateSelectorPosition);
//   }, []);

//   const updateSelectorPosition = () => {
//     const activeIndex = ['/', '/explore', '/contact'].indexOf(activeItem);
//     if (activeIndex >= 0 && navItemsRef.current[activeIndex] && selectorRef.current) {
//       const activeElement = navItemsRef.current[activeIndex];
//       const { offsetLeft, offsetWidth } = activeElement;
      
//       selectorRef.current.style.width = `${offsetWidth}px`;
//       selectorRef.current.style.left = `${offsetLeft}px`;
//     }
//   };

//   return (
//     <nav className="navbar navbar-expand-custom navbar-mainbg sticky-top">
//       <Link className="navbar-brand navbar-logo" to="/">Navbar</Link>
//       <button 
//         className="navbar-toggler" 
//         type="button" 
//         aria-controls="navbarSupportedContent" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars text-white"></i>
//       </button>
      
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav position-relative">
//           <div className="hori-selector" ref={selectorRef}>
//             <div className="left"></div>
//             <div className="right"></div>
//           </div>
          
//           <li 
//             className={`nav-item ${activeItem === '/' ? 'active' : ''}`}
//             ref={el => navItemsRef.current[0] = el}
//           >
//             <Link className="nav-link" to="/">Home</Link>
//           </li>
          
//           <li 
//             className={`nav-item ${activeItem === '/explore' ? 'active' : ''}`}
//             ref={el => navItemsRef.current[1] = el}
//           >
//             <Link className="nav-link" to="/explore">Explore</Link>
//           </li>
          
//           <li 
//             className={`nav-item ${activeItem === '/contact' ? 'active' : ''}`}
//             ref={el => navItemsRef.current[2] = el}
//           >
//             <Link className="nav-link" to="/contact">Contact Us</Link>
//           </li>
//         </ul>
        
//         <div className="ms-auto d-flex align-items-center gap-3">
//           <div className="position-relative">
//             <img src={assets.cart} alt="Cart" height={32} width={32} />
//             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">5</span>
//           </div>
//           <button className="btn btn-outline-primary">Login</button>
//           <button className="btn btn-outline-success">Register</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Menubar;

// import React, { useContext, useState } from 'react';
// import './Menubar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { assets } from '../../assets/assets.js';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext.jsx';

// export const Menubar = () => {
//   const [active, setActive] = useState("home")
//   const {quantities} = useContext(StoreContext);
//   const uniqueItemInBookingVehicle = Object.values(quantities).filter(qty => qty > 0).length; 
//   return (
//     <nav className="navbar navbar-expand-custom navbar-mainbg sticky-top">
//       <Link to="/"><img src={assets.logo} alt="" className='mx-2' height={48} width={48}/></Link>
//       <button 
//         className="navbar-toggler" 
//         type="button" 
//         aria-controls="navbarSupportedContent" 
//         aria-expanded="false" 
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars text-white"></i>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           <div className="hori-selector">
//             <div className="left"></div>
//             <div className="right"></div>
//           </div>
//           <li className="nav-item">
//             <Link className={active === "home" ? "nav-link fw-bold active": "nav-link"} to="/" onClick={() => setActive('home')}>Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className={active === "explore" ? "nav-link fw-bold active": "nav-link"} to="/explore" onClick={() => setActive('explore')}>Explore</Link>
//           </li>
//           <li className="nav-item">
//             <Link className={active === "contact-us" ? "nav-link fw-bold active": "nav-link"} to="/contact" onClick={() => setActive('contact-us')}>Contact Us</Link>
//           </li>
//         </ul>
//         <div className="ms-auto d-flex align-items-center gap-3">
//           <Link to={`/booking-vehicle`}>
//             <div className="position-relative">
//               <img src={assets.cart} alt="" height={32} width={32} className="position-relative"/>
//               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{uniqueItemInBookingVehicle}</span>
//             </div>
//           </Link>
//           <button className="btn btn-outline-primary">Login</button>
//           <button className="btn btn-outline-success">Register</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Menubar;

import React, { useContext, useState, useEffect } from 'react';
import './Menubar.css';
import { assets } from '../../assets/assets.js';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

export const Menubar = () => {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { quantities } = useContext(StoreContext);
  const location = useLocation();
  
  const uniqueItemInBookingVehicle = Object.values(quantities).filter(qty => qty > 0).length;

  // Update active state based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActive('home');
    else if (path === '/explore') setActive('explore');
    else if (path === '/contact') setActive('contact-us');
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src={assets.logo} alt="Logo" />
          <span className="logo-text">VehicleRent</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-menu">
          <Link 
            to="/" 
            className={`nav-item ${active === 'home' ? 'active' : ''}`}
            onClick={() => setActive('home')}
          >
            <span className="nav-icon">🏠</span>
            Home
          </Link>
          <Link 
            to="/explore" 
            className={`nav-item ${active === 'explore' ? 'active' : ''}`}
            onClick={() => setActive('explore')}
          >
            <span className="nav-icon">🔍</span>
            Explore
          </Link>
          <Link 
            to="/contact" 
            className={`nav-item ${active === 'contact-us' ? 'active' : ''}`}
            onClick={() => setActive('contact-us')}
          >
            <span className="nav-icon">📞</span>
            Contact Us
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="navbar-actions">
          {/* Cart */}
          <Link to="/booking-vehicle" className="cart-button">
            <div className="cart-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="m1 1 4 4 14 0 -1 8 -13 0"/>
              </svg>
              {uniqueItemInBookingVehicle > 0 && (
                <span className="cart-badge">{uniqueItemInBookingVehicle}</span>
              )}
            </div>
          </Link>

          {/* Auth Buttons */}
          <div className="auth-buttons">
            <button className="btn-login">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Login
            </button>
            <button className="btn-register">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="m22 11-3-3m0 0-3 3m3-3v12"/>
              </svg>
              Register
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link 
            to="/" 
            className={`mobile-nav-item ${active === 'home' ? 'active' : ''}`}
            onClick={() => {
              setActive('home');
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="nav-icon">🏠</span>
            Home
          </Link>
          <Link 
            to="/explore" 
            className={`mobile-nav-item ${active === 'explore' ? 'active' : ''}`}
            onClick={() => {
              setActive('explore');
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="nav-icon">🔍</span>
            Explore
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-nav-item ${active === 'contact-us' ? 'active' : ''}`}
            onClick={() => {
              setActive('contact-us');
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="nav-icon">📞</span>
            Contact Us
          </Link>
          
          <div className="mobile-auth-section">
            <button className="mobile-btn-login">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Login
            </button>
            <button className="mobile-btn-register">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="m22 11-3-3m0 0-3 3m3-3v12"/>
              </svg>
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Menubar;
