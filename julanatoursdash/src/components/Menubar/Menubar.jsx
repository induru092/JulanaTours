// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { assets } from '../../assets/assets.js';
// import { StoreContext } from "../../context/StoreContext";
// import { useAuth } from "../../context/AuthContext";
// import './Menubar.css';

// const Menubar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const { quantities } = useContext(StoreContext);
//   const { user, logout } = useAuth();

//   // Calculate total items in cart
//   const totalCartItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

//   const handleLogout = () => {
//     logout();
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//       <div className="container">
//         {/* Logo */}
//         <Link className="navbar-brand d-flex align-items-center" to="/">
//           <img src={assets.logo} alt="Julana Tours" height="40" className="me-2" />
//           <span className="fw-bold text-primary">Julana Tours</span>
//         </Link>

//         {/* Mobile toggle button */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           onClick={() => setShowMenu(!showMenu)}
//           aria-controls="navbarNav" 
//           aria-expanded={showMenu}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation items */}
//         <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`} id="navbarNav">
//           <ul className="navbar-nav mx-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/">
//                 <i className="bi bi-house me-1"></i>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/explore">
//                 <i className="bi bi-car-front me-1"></i>
//                 Explore Vehicles
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 <i className="bi bi-telephone me-1"></i>
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           {/* Right side items */}
//           <div className="d-flex align-items-center">
//             {/* Search icon */}
//             <button className="btn btn-outline-secondary me-2 d-none d-md-block">
//               <i className="bi bi-search"></i>
//             </button>

//             {/* Cart */}
//             <Link to="/booking-vehicle" className="btn btn-outline-primary me-2 position-relative">
//               <i className="bi bi-cart"></i>
//               {totalCartItems > 0 && (
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                   {totalCartItems}
//                   <span className="visually-hidden">items in cart</span>
//                 </span>
//               )}
//             </Link>

//             {/* User dropdown */}
//             <div className="dropdown">
//               <button 
//                 className="btn btn-outline-dark dropdown-toggle d-flex align-items-center" 
//                 type="button" 
//                 id="userDropdown" 
//                 data-bs-toggle="dropdown" 
//                 aria-expanded="false"
//               >
//                 <i className="bi bi-person-circle me-1"></i>
//                 <span className="d-none d-md-inline">
//                   {user?.email?.split('@')[0] || 'User'}
//                 </span>
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
//                 <li>
//                   <span className="dropdown-item-text">
//                     <strong>Welcome!</strong><br />
//                     <small className="text-muted">{user?.email}</small>
//                   </span>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <Link className="dropdown-item" to="/profile">
//                     <i className="bi bi-person me-2"></i>
//                     Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/booking-vehicle">
//                     <i className="bi bi-cart me-2"></i>
//                     My Bookings
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item" to="/orders">
//                     <i className="bi bi-clock-history me-2"></i>
//                     Order History
//                   </Link>
//                 </li>
//                 <li><hr className="dropdown-divider" /></li>
//                 <li>
//                   <button className="dropdown-item text-danger" onClick={handleLogout}>
//                     <i className="bi bi-box-arrow-right me-2"></i>
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Menubar;

// import React, { useContext, useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// im
// import { StoreContext } from "../../context/StoreContext";
// import { useAuth } from "../../context/AuthContext";
// import './Menubar.css';

// const Menubar = () => {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { quantities } = useContext(StoreContext);
//   const { user, logout } = useAuth();
//   const location = useLocation();

//   // Calculate total items in cart
//   const totalCartItems = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setShowMobileMenu(false);
//   }, [location]);

//   const handleLogout = () => {
//     logout();
//   };

//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);
//   };

//   // Check if nav item is active
//   const isActiveRoute = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <>
//       <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
//         <div className="navbar-container">
//           {/* Logo */}
//           <Link className="navbar-logo" to="/">
//             <img src={assets.logo} alt="Julana Tours" />
//             <span className="logo-text">Julana Tours</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="navbar-menu">
//             <Link 
//               className={`nav-item ${isActiveRoute('/') ? 'active' : ''}`} 
//               to="/"
//             >
//               <i className="bi bi-house nav-icon"></i>
//               Home
//             </Link>
//             <Link 
//               className={`nav-item ${isActiveRoute('/explore') ? 'active' : ''}`} 
//               to="/explore"
//             >
//               <i className="bi bi-car-front nav-icon"></i>
//               Explore Vehicles
//             </Link>
//             <Link 
//               className={`nav-item ${isActiveRoute('/contact') ? 'active' : ''}`} 
//               to="/contact"
//             >
//               <i className="bi bi-telephone nav-icon"></i>
//               Contact
//             </Link>
//           </div>

//           {/* Right Side Actions */}
//           <div className="navbar-actions">
//             {/* Cart */}
//             <Link to="/booking-vehicle" className="cart-button">
//               <div className="cart-icon-wrapper">
//                 <i className="bi bi-cart"></i>
//                 {totalCartItems > 0 && (
//                   <span className="cart-badge">{totalCartItems}</span>
//                 )}
//               </div>
//             </Link>

//             {/* User Info */}
//             {user && (
//               <div className="nav-item" style={{ cursor: 'default' }}>
//                 <i className="bi bi-person-circle nav-icon"></i>
//                 <span>{user?.email?.split('@')[0] || 'User'}</span>
//               </div>
//             )}

//             {/* Logout Button */}
//             {user && (
//               <button 
//                 className="btn-login" 
//                 onClick={handleLogout}
//                 style={{ background: 'transparent', border: '2px solid #ff6b6b', color: '#ff6b6b' }}
//               >
//                 <i className="bi bi-box-arrow-right"></i>
//                 Logout
//               </button>
//             )}

//             {/* Mobile Menu Toggle */}
//             <button 
//               className={`mobile-menu-toggle ${showMobileMenu ? 'open' : ''}`}
//               onClick={toggleMobileMenu}
//               aria-label="Toggle menu"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {showMobileMenu && (
//         <div 
//           className="mobile-menu-overlay"
//           onClick={() => setShowMobileMenu(false)}
//         />
//       )}

//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${showMobileMenu ? 'open' : ''}`}>
//         <div className="mobile-menu-content">
//           <Link 
//             className={`mobile-nav-item ${isActiveRoute('/') ? 'active' : ''}`} 
//             to="/"
//           >
//             <i className="bi bi-house"></i>
//             Home
//           </Link>
//           <Link 
//             className={`mobile-nav-item ${isActiveRoute('/explore') ? 'active' : ''}`} 
//             to="/explore"
//           >
//             <i className="bi bi-car-front"></i>
//             Explore Vehicles
//           </Link>
//           <Link 
//             className={`mobile-nav-item ${isActiveRoute('/contact') ? 'active' : ''}`} 
//             to="/contact"
//           >
//             <i className="bi bi-telephone"></i>
//             Contact
//           </Link>
//           <Link 
//             className={`mobile-nav-item ${isActiveRoute('/booking-vehicle') ? 'active' : ''}`} 
//             to="/booking-vehicle"
//           >
//             <i className="bi bi-cart"></i>
//             My Bookings {totalCartItems > 0 && `(${totalCartItems})`}
//           </Link>

//           {user && (
//             <div className="mobile-auth-section">
//               <div className="mobile-nav-item" style={{ cursor: 'default', background: 'rgba(102, 126, 234, 0.1)' }}>
//                 <i className="bi bi-person-circle"></i>
//                 {user?.email}
//               </div>
//               <button 
//                 className="mobile-btn-login" 
//                 onClick={handleLogout}
//                 style={{ background: 'transparent', border: '2px solid #ff6b6b', color: '#ff6b6b' }}
//               >
//                 <i className="bi bi-box-arrow-right"></i>
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menubar;

// import React, { useContext, useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { StoreContext } from "../../context/StoreContext";
// import { useAuth } from "../../context/AuthContext";
// import './Menubar.css';

// const Menubar = () => {
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { quantities } = useContext(StoreContext);
//   const { user, logout } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   // DEBUG: Let's see what user contains
//   console.log('USER STATE:', user);
//   console.log('USER TYPE:', typeof user);
//   console.log('USER IS NULL:', user === null);
//   console.log('USER IS UNDEFINED:', user === undefined);

//   // Calculate total items in cart
//   const totalCartItems = Object.values(quantities || {}).reduce((sum, qty) => sum + qty, 0);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setShowMobileMenu(false);
//   }, [location]);

//   const handleLogout = () => {
//     logout();
//     navigate('/');
//     setShowMobileMenu(false);
//   };

//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);
//   };

//   const isActiveRoute = (path) => {
//     return location.pathname === path;
//   };

//   // Temporary placeholder logo
//   const logoSrc = '/logo.png'; // Try this first
//   // If that doesn't work, use: 'https://via.placeholder.com/40x40/667eea/white?text=JT'

//   return (
//     <>
//       <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
//         <div className="navbar-container">
//           {/* Logo with placeholder */}
//           <Link className="navbar-logo" to="/">
//             <img 
//               src={logoSrc} 
//               alt="Julana Tours" 
//               onError={(e) => {
//                 console.log('Logo failed to load:', logoSrc);
//                 e.target.src = 'https://via.placeholder.com/40x40/667eea/white?text=JT';
//               }}
//             />
//             <span className="logo-text">Julana Tours</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="navbar-menu">
//             <Link 
//               className={`nav-item ${isActiveRoute('/') ? 'active' : ''}`} 
//               to="/"
//             >
//               <i className="bi bi-house nav-icon"></i>
//               Home
//             </Link>
//             <Link 
//               className={`nav-item ${isActiveRoute('/explore') ? 'active' : ''}`} 
//               to="/explore"
//             >
//               <i className="bi bi-car-front nav-icon"></i>
//               Explore Vehicles
//             </Link>
//             <Link 
//               className={`nav-item ${isActiveRoute('/contact') ? 'active' : ''}`} 
//               to="/contact"
//             >
//               <i className="bi bi-telephone nav-icon"></i>
//               Contact
//             </Link>
//           </div>

//           {/* Right Side Actions */}
//           <div className="navbar-actions">
//             {/* DEBUG: Show what we're rendering */}
//             <div style={{color: 'red', fontSize: '12px'}}>
//               DEBUG: {user ? 'LOGGED IN' : 'NOT LOGGED IN'}
//             </div>

//             {/* Cart - only show when logged in */}
//             {user && (
//               <Link to="/booking-vehicle" className="cart-button">
//                 <div className="cart-icon-wrapper">
//                   <i className="bi bi-cart"></i>
//                   {totalCartItems > 0 && (
//                     <span className="cart-badge">{totalCartItems}</span>
//                   )}
//                 </div>
//               </Link>
//             )}

//             {/* ALWAYS SHOW LOGIN/REGISTER FOR TESTING */}
//             <div className="auth-buttons">
//               <Link to="/login" className="btn-login">
//                 <i className="bi bi-box-arrow-in-right"></i>
//                 Login
//               </Link>
//               <Link to="/register" className="btn-register">
//                 <i className="bi bi-person-plus"></i>
//                 Register
//               </Link>
//             </div>

//             {/* User info when logged in */}
//             {user && (
//               <>
//                 <div className="nav-item" style={{ cursor: 'default' }}>
//                   <i className="bi bi-person-circle nav-icon"></i>
//                   <span>{user?.email?.split('@')[0] || 'User'}</span>
//                 </div>
//                 <button 
//                   className="btn-login" 
//                   onClick={handleLogout}
//                   style={{ background: 'transparent', border: '2px solid #ff6b6b', color: '#ff6b6b' }}
//                 >
//                   <i className="bi bi-box-arrow-right"></i>
//                   Logout
//                 </button>
//               </>
//             )}

//             {/* Mobile Menu Toggle */}
//             <button 
//               className={`mobile-menu-toggle ${showMobileMenu ? 'open' : ''}`}
//               onClick={toggleMobileMenu}
//               aria-label="Toggle menu"
//             >
//               <span></span>
//               <span></span>
//               <span></span>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {showMobileMenu && (
//         <div 
//           className="mobile-menu-overlay"
//           onClick={() => setShowMobileMenu(false)}
//         />
//       )}

//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${showMobileMenu ? 'open' : ''}`}>
//         <div className="mobile-menu-content">
//           <Link 
//             className={`mobile-nav-item ${isActiveRoute('/') ? 'active' : ''}`} 
//             to="/"
//           >
//             <i className="bi bi-house"></i>
//             Home
//           </Link>
//           <Link 
//             className={`mobile-nav-item ${isActiveRoute('/explore') ? 'active' : ''}`} 
//             to="/explore"
//           >
//             <i className="bi bi-car-front"></i>
//             Explore Vehicles
//           </Link>
//           <Link 
//             className={`mobile-nav-item ${isActiveRoute('/contact') ? 'active' : ''}`} 
//             to="/contact"
//           >
//             <i className="bi bi-telephone"></i>
//             Contact
//           </Link>
          
//           {/* Always show login/register in mobile for testing */}
//           <div className="mobile-auth-section">
//             <Link to="/login" className="mobile-btn-login">
//               <i className="bi bi-box-arrow-in-right"></i>
//               Login
//             </Link>
//             <Link to="/register" className="mobile-btn-register">
//               <i className="bi bi-person-plus"></i>
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Menubar;

import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { StoreContext } from "../../context/StoreContext";
import { useAuth } from "../../context/AuthContext";
import './Menubar.css';

const Menubar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { quantities } = useContext(StoreContext);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Calculate total items in cart
  const totalCartItems = Object.values(quantities || {}).reduce((sum, qty) => sum + qty, 0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setShowMobileMenu(false);
  }, [location]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowMobileMenu(false);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const logoSrc = '/logo.png';

  return (
    <>
      <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link className="navbar-logo" to="/">
            {!imageError ? (
              <img 
                src={logoSrc} 
                alt="Julana Tours" 
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="logo-fallback">JT</div>
            )}
            <span className="logo-text">Julana Tours</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            <Link 
              className={`nav-item ${isActiveRoute('/') ? 'active' : ''}`} 
              to="/"
            >
              <i className="bi bi-house nav-icon"></i>
              Home
            </Link>
            <Link 
              className={`nav-item ${isActiveRoute('/explore') ? 'active' : ''}`} 
              to="/explore"
            >
              <i className="bi bi-car-front nav-icon"></i>
              Explore Vehicles
            </Link>
            <Link 
              className={`nav-item ${isActiveRoute('/contact') ? 'active' : ''}`} 
              to="/contact"
            >
              <i className="bi bi-telephone nav-icon"></i>
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="navbar-actions">
            {/* Cart - only show when logged in */}
            {user && (
              <Link to="/booking-vehicle" className="cart-button">
                <div className="cart-icon-wrapper">
                  <i className="bi bi-cart"></i>
                  {totalCartItems > 0 && (
                    <span className="cart-badge">{totalCartItems}</span>
                  )}
                </div>
              </Link>
            )}

            {/* Auth buttons - show when not logged in */}
            {!user && (
              <div className="auth-buttons">
                <Link to="/login" className="btn-login">
                  <i className="bi bi-box-arrow-in-right"></i>
                  Login
                </Link>
                <Link to="/register" className="btn-register">
                  <i className="bi bi-person-plus"></i>
                  Register
                </Link>
              </div>
            )}

            {/* User info when logged in */}
            {user && (
              <>
                <div className="nav-item" style={{ cursor: 'default' }}>
                  <i className="bi bi-person-circle nav-icon"></i>
                  <span>{user?.email?.split('@')[0] || 'User'}</span>
                </div>
                <button 
                  className="btn-login" 
                  onClick={handleLogout}
                  style={{ background: 'transparent', border: '2px solid #ff6b6b', color: '#ff6b6b' }}
                >
                  <i className="bi bi-box-arrow-right"></i>
                  Logout
                </button>
              </>
            )}

            {/* Mobile Menu Toggle */}
            <button 
              className={`mobile-menu-toggle ${showMobileMenu ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${showMobileMenu ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <Link 
            className={`mobile-nav-item ${isActiveRoute('/') ? 'active' : ''}`} 
            to="/"
          >
            <i className="bi bi-house"></i>
            Home
          </Link>
          <Link 
            className={`mobile-nav-item ${isActiveRoute('/explore') ? 'active' : ''}`} 
            to="/explore"
          >
            <i className="bi bi-car-front"></i>
            Explore Vehicles
          </Link>
          <Link 
            className={`mobile-nav-item ${isActiveRoute('/contact') ? 'active' : ''}`} 
            to="/contact"
          >
            <i className="bi bi-telephone"></i>
            Contact
          </Link>
          
          {/* Mobile auth section */}
          {!user && (
            <div className="mobile-auth-section">
              <Link to="/login" className="mobile-btn-login">
                <i className="bi bi-box-arrow-in-right"></i>
                Login
              </Link>
              <Link to="/register" className="mobile-btn-register">
                <i className="bi bi-person-plus"></i>
                Register
              </Link>
            </div>
          )}

          {/* Mobile user info when logged in */}
          {user && (
            <div className="mobile-user-section">
              <div className="mobile-nav-item" style={{ cursor: 'default' }}>
                <i className="bi bi-person-circle"></i>
                <span>{user?.email?.split('@')[0] || 'User'}</span>
              </div>
              <button 
                className="mobile-btn-logout" 
                onClick={handleLogout}
              >
                <i className="bi bi-box-arrow-right"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Menubar;