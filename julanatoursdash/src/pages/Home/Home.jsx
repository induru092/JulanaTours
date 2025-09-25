// import React, { useState } from 'react';
// import { Header } from '../../components/Header/Header.jsx';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
// import VehicleDisply from '../../components/VehicleDisplay/VehicleDisplay.jsx';
// import Footer from '../../components/Footer/Footer.jsx';
// import Menubar from '../../components/Menubar/Menubar.jsx';
// import Status from '../Status/Status.jsx';

// export const Home = () => {
//   const [category, setCategory] = useState('All');
//   return (
//     <main className='container'>
//       <Header />
//       <ExploreMenu category={category} setCategory={setCategory} />
//       <VehicleDisply Category={category} searchText={''}/>
//       <Status />
//       <Footer />
//     </main>
    
//   )
// }

// export default Home;


// import React, { useState } from 'react';
// import { Header } from '../../components/Header/Header.jsx';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
// import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay.jsx'; // Fixed typo
// import Footer from '../../components/Footer/Footer.jsx';
// import Menubar from '../../components/Menubar/Menubar.jsx';
// import Status from '../Status/Status.jsx';

// export const Home = () => {
//   const [category, setCategory] = useState('All');
  
//   return (
//     <div className="app-container"> {/* Added wrapper div */}
      
//       <main className='container'>
//         <Header />
//         <ExploreMenu category={category} setCategory={setCategory} />
//         <VehicleDisplay Category={category} searchText={''} /> {/* Fixed component name */}
//         <Status />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Home;

// import React, { useState } from 'react';
// import { Header } from '../../components/Header/Header.jsx';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
// import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay.jsx';
// import Footer from '../../components/Footer/Footer.jsx';
// import Menubar from '../../components/Menubar/Menubar.jsx';
// import Status from '../Status/Status.jsx';
// import './Home.css';


// export const Home = () => {
//   const [category, setCategory] = useState('All');
//   const [searchText, setSearchText] = useState('');
  
//   return (
//     <div className="app-container">
//       {/* Navigation */}
//       {/* <Menubar /> */}
      
//       {/* Main Content */}
//       <main className="main-content">
//         {/* Hero Section */}
//         <section className="hero-wrapper">
//           <Header />
//         </section>

//         {/* Explore Menu Section */}
//         <section className="explore-section">
//           <div className="container">
//             <div className="section-intro">
//               <h2 className="explore-title">Choose Your Vehicle Type</h2>
//               <p className="explore-subtitle">
//                 Select from our diverse fleet of premium vehicles
//               </p>
//             </div>
//             <ExploreMenu category={category} setCategory={setCategory} />
//           </div>
//         </section>

//         {/* Search Section */}
//         <section className="search-section">
//           <div className="container">
//             <div className="search-wrapper">
//               <div className="search-container">
//                 <div className="search-icon">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="11" cy="11" r="8"/>
//                     <path d="m21 21-4.35-4.35"/>
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search for vehicles by name..."
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                   className="search-input"
//                 />
//                 {searchText && (
//                   <button 
//                     className="clear-search"
//                     onClick={() => setSearchText('')}
//                     aria-label="Clear search"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <line x1="18" y1="6" x2="6" y2="18"/>
//                       <line x1="6" y1="6" x2="18" y2="18"/>
//                     </svg>
//                   </button>
//                 )}
//               </div>
//               <div className="search-suggestions">
//                 <span className="suggestion-label">Popular:</span>
//                 <button 
//                   className="suggestion-tag"
//                   onClick={() => setSearchText('sedan')}
//                 >
//                   Sedan
//                 </button>
//                 <button 
//                   className="suggestion-tag"
//                   onClick={() => setSearchText('SUV')}
//                 >
//                   SUV
//                 </button>
//                 <button 
//                   className="suggestion-tag"
//                   onClick={() => setSearchText('luxury')}
//                 >
//                   Luxury
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Vehicle Display Section */}
//         <section className="vehicles-section">
//           <VehicleDisplay category={category} searchText={searchText} />
//         </section>

//         {/* Status Section */}
//         <section className="status-section">
//           <div className="container">
//             <Status />
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="features-section">
//           <div className="container">
//             <div className="features-grid">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="12" cy="12" r="10"/>
//                     <polyline points="12,6 12,12 16,14"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">24/7 Service</h3>
//                 <p className="feature-description">
//                   Round-the-clock customer support and roadside assistance for your peace of mind.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M9 12l2 2 4-4"/>
//                     <circle cx="12" cy="12" r="10"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">Verified Vehicles</h3>
//                 <p className="feature-description">
//                   All our vehicles undergo thorough inspection and maintenance checks.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">Best Prices</h3>
//                 <p className="feature-description">
//                   Competitive pricing with no hidden fees. Get the best value for your money.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
//                     <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
//                     <line x1="12" y1="22.08" x2="12" y2="12"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">Easy Booking</h3>
//                 <p className="feature-description">
//                   Simple and quick booking process. Reserve your vehicle in just a few clicks.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../context/AuthContext';
// import { Header } from '../../components/Header/Header.jsx';
// import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
// import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay.jsx';
// import Footer from '../../components/Footer/Footer.jsx';
// import Status from '../Status/Status.jsx';
// import './Home.css';

// export const Home = () => {
//   const { user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const [category, setCategory] = useState('All');
//   const [searchText, setSearchText] = useState('');
  
//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   const handleRegisterClick = () => {
//     navigate('/register');
//   };

//   const handleLogout = async () => {
//     try {
//       await logout();
//       console.log('Logged out successfully');
//     } catch (error) {
//       console.error('Logout error:', error);
//     }
//   };

//   const handleBookingAttempt = () => {
//     if (!user) {
//       navigate('/login', { 
//         state: { 
//           from: '/', 
//           message: 'Please login to book a vehicle' 
//         } 
//       });
//     } else {
//       console.log('Proceeding with booking...');
//       // Add your booking logic here
//     }
//   };

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="app-container">
//         <div className="loading-container">
//           <div className="loading-spinner">
//             <div className="spinner"></div>
//             <p>Loading Julana Tours...</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="app-container">
//       {/* Navigation Menubar */}
//       <nav className="menubar">
//         <div className="container">
//           <div className="menubar-content">
//             {/* Logo */}
//             <div className="logo">
//               <h2>Julana Tours</h2>
//             </div>
            
//             {/* Navigation Links */}
//             <div className="nav-links">
//               <a href="#home" className="nav-link">Home</a>
//               <a href="#vehicles" className="nav-link">Vehicles</a>
//               <a href="#about" className="nav-link">About</a>
//               <a href="#contact" className="nav-link">Contact</a>
//             </div>

//             {/* Auth Buttons */}
//             <div className="auth-buttons">
//               {user ? (
//                 <>
//                   <div className="user-info">
//                     <span className="welcome-text">
//                       Welcome, {user.firstName || user.name || 'User'}!
//                     </span>
//                   </div>
//                   <button 
//                     className="auth-button logout"
//                     onClick={handleLogout}
//                   >
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button 
//                     className="auth-button login"
//                     onClick={handleLoginClick}
//                   >
//                     Login
//                   </button>
//                   <button 
//                     className="auth-button register"
//                     onClick={handleRegisterClick}
//                   >
//                     Register
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
      
//       {/* Main Content */}
//       <main className="main-content">
//         {/* Hero Section */}
//         <section className="hero-wrapper" id="home">
//           <Header />
//         </section>

//         {/* Welcome Message for Authenticated Users */}
//         {user && (
//           <section className="welcome-section">
//             <div className="container">
//               <div className="welcome-message">
//                 <h3>Welcome back, {user.firstName || user.name || 'User'}!</h3>
//                 <p>Ready to find your perfect vehicle?</p>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* Explore Menu Section */}
//         <section className="explore-section" id="vehicles">
//           <div className="container">
//             <div className="section-intro">
//               <h2 className="explore-title">Choose Your Vehicle Type</h2>
//               <p className="explore-subtitle">
//                 Select from our diverse fleet of premium vehicles
//               </p>
//             </div>
//             <ExploreMenu category={category} setCategory={setCategory} />
//           </div>
//         </section>

//         {/* Search Section */}
//         <section className="search-section">
//           <div className="container">
//             <div className="search-wrapper">
//               <div className="search-container">
//                 <div className="search-icon">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="11" cy="11" r="8"/>
//                     <path d="m21 21-4.35-4.35"/>
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search for vehicles by name..."
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                   className="search-input"
//                 />
//                 {searchText && (
//                   <button 
//                     className="clear-search"
//                     onClick={() => setSearchText('')}
//                     aria-label="Clear search"
//                   >
//                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <line x1="18" y1="6" x2="6" y2="18"/>
//                       <line x1="6" y1="6" x2="18" y2="18"/>
//                     </svg>
//                   </button>
//                 )}
//               </div>
//               <div className="search-suggestions">
//                 <span className="suggestion-label">Popular:</span>
//                 <button 
//                   className="suggestion-tag"
//                   onClick={() => setSearchText('sedan')}
//                 >
//                   Sedan
//                 </button>
//                 <button 
//                   className="suggestion-tag"
//                   onClick={() => setSearchText('SUV')}
//                 >
//                   SUV
//                 </button>
//                 <button 
//                   className="suggestion-tag"
//                   onClick={() => setSearchText('luxury')}
//                 >
//                   Luxury
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Vehicle Display Section */}
//         <section className="vehicles-section">
//           <VehicleDisplay 
//             category={category} 
//             searchText={searchText}
//             onBookingAttempt={handleBookingAttempt}
//             isAuthenticated={!!user}
//           />
//         </section>

//         {/* Status Section - Only show for authenticated users */}
//         {user && (
//           <section className="status-section">
//             <div className="container">
//               <Status />
//             </div>
//           </section>
//         )}

//         {/* Features Section */}
//         <section className="features-section" id="about">
//           <div className="container">
//             <div className="section-header">
//               <h2>Why Choose Julana Tours?</h2>
//               <p>Experience the best in vehicle rental services</p>
//             </div>
//             <div className="features-grid">
//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <circle cx="12" cy="12" r="10"/>
//                     <polyline points="12,6 12,12 16,14"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">24/7 Service</h3>
//                 <p className="feature-description">
//                   Round-the-clock customer support and roadside assistance for your peace of mind.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M9 12l2 2 4-4"/>
//                     <circle cx="12" cy="12" r="10"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">Verified Vehicles</h3>
//                 <p className="feature-description">
//                   All our vehicles undergo thorough inspection and maintenance checks.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">Best Prices</h3>
//                 <p className="feature-description">
//                   Competitive pricing with no hidden fees. Get the best value for your money.
//                 </p>
//               </div>

//               <div className="feature-card">
//                 <div className="feature-icon">
//                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
//                     <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
//                     <line x1="12" y1="22.08" x2="12" y2="12"/>
//                   </svg>
//                 </div>
//                 <h3 className="feature-title">Easy Booking</h3>
//                 <p className="feature-description">
//                   Simple and quick booking process. Reserve your vehicle in just a few clicks.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Call to Action for Non-Authenticated Users */}
//         {!user && (
//           <section className="cta-section">
//             <div className="container">
//               <div className="cta-content">
//                 <h2>Ready to Start Your Journey?</h2>
//                 <p>Join thousands of satisfied customers and book your perfect vehicle today!</p>
//                 <div className="cta-buttons">
//                   <button 
//                     className="cta-button primary"
//                     onClick={handleRegisterClick}
//                   >
//                     Get Started
//                   </button>
//                   <button 
//                     className="cta-button secondary"
//                     onClick={handleLoginClick}
//                   >
//                     Sign In
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Header } from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Status from '../Status/Status.jsx';
import './Home.css';

export const Home = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const handleBookingAttempt = () => {
    if (!user) {
      navigate('/login', { 
        state: { 
          from: '/', 
          message: 'Please login to book a vehicle' 
        } 
      });
    } else {
      console.log('Proceeding with booking...');
      navigate('/booking-vehicle');
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="app-container">
        <div className="loading-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading Julana Tours...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Main Content - Menubar is handled by App.jsx */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-wrapper" id="home">
          <Header />
        </section>

        {/* Explore Menu Section */}
        <section className="explore-section" id="vehicles">
          <div className="container">
            <ExploreMenu category={category} setCategory={setCategory} />
          </div>
        </section>

        {/* Search Section */}
        <section className="search-section">
          <div className="container">
            <div className="search-wrapper">
              <div className="search-container">
                <div className="search-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search for vehicles by name..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="search-input"
                />
                {searchText && (
                  <button 
                    className="clear-search"
                    onClick={() => setSearchText('')}
                    aria-label="Clear search"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"/>
                      <line x1="6" y1="6" x2="18" y2="18"/>
                    </svg>
                  </button>
                )}
              </div>
              <div className="search-suggestions">
                <span className="suggestion-label">Popular:</span>
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchText('sedan')}
                >
                  Sedan
                </button>
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchText('SUV')}
                >
                  SUV
                </button>
                <button 
                  className="suggestion-tag"
                  onClick={() => setSearchText('luxury')}
                >
                  Luxury
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Vehicle Display Section */}
        <section className="vehicles-section">
          <VehicleDisplay 
            category={category} 
            searchText={searchText}
            onBookingAttempt={handleBookingAttempt}
            isAuthenticated={!!user}
          />
        </section>

        {/* Status Section - Only show for authenticated users */}
        {user && (
          <section className="status-section">
            <div className="container">
              <Status />
            </div>
          </section>
        )}

        {/* Features Section */}
        <section className="features-section" id="about">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose Julana Tours?</h2>
              <p>Experience the best in vehicle rental services</p>
            </div>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12,6 12,12 16,14"/>
                  </svg>
                </div>
                <h3 className="feature-title">24/7 Service</h3>
                <p className="feature-description">
                  Round-the-clock customer support and roadside assistance for your peace of mind.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                </div>
                <h3 className="feature-title">Verified Vehicles</h3>
                <p className="feature-description">
                  All our vehicles undergo thorough inspection and maintenance checks.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="feature-title">Best Prices</h3>
                <p className="feature-description">
                  Competitive pricing with no hidden fees. Get the best value for your money.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <h3 className="feature-title">Easy Booking</h3>
                <p className="feature-description">
                  Simple and quick booking process. Reserve your vehicle in just a few clicks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action for Non-Authenticated Users */}
        {!user && (
          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Start Your Journey?</h2>
                <p>Join thousands of satisfied customers and book your perfect vehicle today!</p>
                <div className="cta-buttons">
                  <button 
                    className="cta-button primary"
                    onClick={() => navigate('/register')}
                  >
                    Get Started
                  </button>
                  <button 
                    className="cta-button secondary"
                    onClick={() => navigate('/login')}
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;