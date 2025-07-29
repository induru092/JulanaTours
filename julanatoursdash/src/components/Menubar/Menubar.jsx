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

import React, { useContext, useState } from 'react';
import './Menubar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { assets } from '../../assets/assets.js';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

export const Menubar = () => {
  const [active, setActive] = useState("home")
  const {quantities} = useContext(StoreContext);
  const uniqueItemInBookingVehicle = Object.values(quantities).filter(qty => qty > 0).length; 
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg sticky-top">
      <Link to="/"><img src={assets.logo} alt="" className='mx-2' height={48} width={48}/></Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item">
            <Link className={active === "home" ? "nav-link fw-bold active": "nav-link"} to="/" onClick={() => setActive('home')}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className={active === "explore" ? "nav-link fw-bold active": "nav-link"} to="/explore" onClick={() => setActive('explore')}>Explore</Link>
          </li>
          <li className="nav-item">
            <Link className={active === "contact-us" ? "nav-link fw-bold active": "nav-link"} to="/contact" onClick={() => setActive('contact-us')}>Contact Us</Link>
          </li>
        </ul>
        <div className="ms-auto d-flex align-items-center gap-3">
          <Link to={`/booking-vehicle`}>
            <div className="position-relative">
              <img src={assets.cart} alt="" height={32} width={32} className="position-relative"/>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{uniqueItemInBookingVehicle}</span>
            </div>
          </Link>
          <button className="btn btn-outline-primary">Login</button>
          <button className="btn btn-outline-success">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;

// import React from 'react';
// import './Menubar.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import {assets} from '../../assets/assests.js';
// import { Link } from 'react-router-dom';

// export const Menubar = () => {
//   return (
//     <nav className="navbar navbar-expand-custom navbar-mainbg sticky-top">
//         <a className="navbar-brand navbar-logo" href="#">Navbar</a>
//         <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <i className="fas fa-bars text-white"></i>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ml-auto">
//                 <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
//                 <li classNameName="nav-item">
//                   <Link classNameName="nav-link"  to="/">Home</Link>
//                 </li>
//                 <li classNameName="nav-item">
//                   <Link classNameName="nav-link" to="/explore">Explore</Link>
//                 </li>
//                 <li classNameName="nav-item">
//                   <Link classNameName="nav-link" to="/contact">Contact Us</Link>
//                 </li>
//             </ul>
//             <div classNameName="d-flex align-items-center gap-4">
//                 <div classNameName="position-relative">
//                     <img src={assets.cart} alt="" height={32} width={32} classNameName='position-relative'/>
//                     <span classNameName='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>5</span>
//                   </div>
//                   <button classNameName='btn btn-outline-primary'>Login</button>
//                   <button classNameName='btn btn-outline-success'>Register</button>
//                 </div>
//           </div>
//     </nav>

//       )
// }

// export default Menubar;

//     <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
//   <div classNameName="container">
//     <img src={assets.logo} alt="" classNameName='mx-2' height={48} width={48}/>
//     <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span classNameName="navbar-toggler-icon"></span>
//     </button>
//     <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
//         <li classNameName="nav-item">
//           <Link classNameName="nav-link"  to="/">Home</Link>
//         </li>
//         <li classNameName="nav-item">
//           <Link classNameName="nav-link" to="/explore">Explore</Link>
//         </li>
//         <li classNameName="nav-item">
//           <Link classNameName="nav-link" to="/contact">Contact Us</Link>
//         </li>
//       </ul>
//       <div classNameName="d-flex align-items-center gap-4">
//         <div classNameName="position-relative">
//           <img src={assets.cart} alt="" height={32} width={32} classNameName='position-relative'/>
//           <span classNameName='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning'>5</span>
//         </div>
//         <button classNameName='btn btn-outline-primary'>Login</button>
//         <button classNameName='btn btn-outline-success'>Register</button>
//       </div>
//     </div>
//   </div>
// </nav>
//   )
// }

// export default Menubar;