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

import React, { useState } from 'react';
import { Header } from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisplay.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Menubar from '../../components/Menubar/Menubar.jsx';
import Status from '../Status/Status.jsx';
import './Home.css';


export const Home = () => {
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  
  return (
    <div className="app-container">
      {/* Navigation */}
      <Menubar />
      
      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-wrapper">
          <Header />
        </section>

        {/* Explore Menu Section */}
        <section className="explore-section">
          <div className="container">
            <div className="section-intro">
              <h2 className="explore-title">Choose Your Vehicle Type</h2>
              <p className="explore-subtitle">
                Select from our diverse fleet of premium vehicles
              </p>
            </div>
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
          <VehicleDisplay category={category} searchText={searchText} />
        </section>

        {/* Status Section */}
        <section className="status-section">
          <div className="container">
            <Status />
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
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
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

