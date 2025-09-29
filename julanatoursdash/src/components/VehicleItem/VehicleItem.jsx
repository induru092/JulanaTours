// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';

// export const VehicleItem = ({name, description, id , imageUrl, price}) => {
//     const { increaseQty, decreaseQty, quantities} = useContext(StoreContext);
//   return (
//     <div className="col-12 col-sm-6-md-4 col-lg-3 mb-4 d-flex justify-content-center">
//         <div to={`/vehicle/${id}`} className="card" style={{"maxwidth": "320px", "textDecoration": "none"}}>
//             <Link to={`/vehicle/${id}`}>
//                 <img src={imageUrl} className="card-img-top" alt="Product Image" height={300} width={60}/>
//             </Link>
//             <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 <p className="card-text">{description}</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                     <span className="h5 mb-0">Rs.{price}</span>
//                     <div>
//                         <i className="bi bi-star-fill text-warning"></i>
//                         <i className="bi bi-star-fill text-warning"></i>
//                         <i className="bi bi-star-fill text-warning"></i>
//                         <i className="bi bi-star-fill text-warning"></i>
//                         <i className="bi bi-star-half text-warning"></i>
//                         <small className="text-muted">(4.5)</small>
//                     </div>
//                 </div>
//             </div>
//             <div className="card-footer d-flex justify-content-between bg-light">
//                 <Link className="btn btn-primary btn-sm" to={`/vehicle/${id}`}>View Vehicle</Link>
//                 {/* <Link className="btn btn-primary btn-sm" to={'/vehicle/${id}'}>View Vehicle</Link> */}
//                 {quantities[id] > 0 ? (
//                     <div className="d-flex align-items-center gap-2">
//                         <button className="btn btn-danger btn-sm" onClick={() => decreaseQty(id)}>
//                             <i className="bi bi-dash-circle"></i>
//                         </button>
//                         <span className="fw-bold">{quantities[id]}</span>
//                         <button className="btn btn-success btn-sm" onClick={() => increaseQty(id)}>
//                             <i className="bi bi-plus-circle"></i>
//                         </button>
//                     </div>
//                 ) : (
//                     <button className="btn btn-primary btn-sm" onClick={() => increaseQty(id)}>
//                         <i className="bi bi-plus-circle"></i>
//                     </button>
//                 )}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default VehicleItem;

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import './VehicleItem.css';

// export const VehicleItem = ({name, description, id, imageUrl, price}) => {
//     const { increaseQty, decreaseQty, quantities} = useContext(StoreContext);
//     const [imageLoaded, setImageLoaded] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);
    
//     const currentQuantity = quantities[id] || 0;

//     return (
//         <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//             <div 
//                 className={`vehicle-card ${isHovered ? 'hovered' : ''}`}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//             >
//                 {/* Image Container */}
//                 <div className="vehicle-image-container">
//                     <Link to={`/vehicle/${id}`} className="image-link">
//                         <div className={`image-placeholder ${imageLoaded ? 'loaded' : ''}`}>
//                             {!imageLoaded && (
//                                 <div className="loading-skeleton">
//                                     <div className="skeleton-shimmer"></div>
//                                 </div>
//                             )}
//                             <img 
//                                 src={imageUrl} 
//                                 alt={name}
//                                 className="vehicle-image"
//                                 onLoad={() => setImageLoaded(true)}
//                                 loading="lazy"
//                             />
//                         </div>
//                         <div className="image-overlay">
//                             <div className="view-details-btn">
//                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                                     <circle cx="12" cy="12" r="3"/>
//                                 </svg>
//                                 View Details
//                             </div>
//                         </div>
//                     </Link>
                    
//                     {/* Quick Action Button */}
//                     <div className="quick-action">
//                         {currentQuantity > 0 ? (
//                             <div className="quantity-controls">
//                                 <button 
//                                     className="quantity-btn decrease"
//                                     onClick={() => decreaseQty(id)}
//                                     aria-label="Decrease quantity"
//                                 >
//                                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                         <line x1="5" y1="12" x2="19" y2="12"/>
//                                     </svg>
//                                 </button>
//                                 <span className="quantity-display">{currentQuantity}</span>
//                                 <button 
//                                     className="quantity-btn increase"
//                                     onClick={() => increaseQty(id)}
//                                     aria-label="Increase quantity"
//                                 >
//                                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                         <line x1="12" y1="5" x2="12" y2="19"/>
//                                         <line x1="5" y1="12" x2="19" y2="12"/>
//                                     </svg>
//                                 </button>
//                             </div>
//                         ) : (
//                             <button 
//                                 className="add-to-cart-btn"
//                                 onClick={() => increaseQty(id)}
//                                 aria-label="Add to cart"
//                             >
//                                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <circle cx="9" cy="21" r="1"/>
//                                     <circle cx="20" cy="21" r="1"/>
//                                     <path d="m1 1 4 4 14 0 -1 8 -13 0"/>
//                                 </svg>
//                             </button>
//                         )}
//                     </div>

//                     {/* Availability Badge */}
//                     <div className="availability-badge">
//                         <span className="status-dot"></span>
//                         Available
//                     </div>
//                 </div>

//                 {/* Card Content */}
//                 <div className="vehicle-content">
//                     <div className="vehicle-header">
//                         <h3 className="vehicle-name">{name}</h3>
//                         <div className="rating-section">
//                             <div className="stars">
//                                 {[...Array(5)].map((_, index) => (
//                                     <svg 
//                                         key={index} 
//                                         width="14" 
//                                         height="14" 
//                                         viewBox="0 0 24 24" 
//                                         fill={index < 4 ? "#ffd700" : index === 4 ? "url(#half-star)" : "none"}
//                                         stroke="#ffd700" 
//                                         strokeWidth="1"
//                                     >
//                                         <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
//                                         <defs>
//                                             <linearGradient id="half-star">
//                                                 <stop offset="50%" stopColor="#ffd700"/>
//                                                 <stop offset="50%" stopColor="transparent"/>
//                                             </linearGradient>
//                                         </defs>
//                                     </svg>
//                                 ))}
//                             </div>
//                             <span className="rating-text">(4.5)</span>
//                         </div>
//                     </div>

//                     <p className="vehicle-description">{description}</p>

//                     <div className="vehicle-features">
//                         <div className="feature-item">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//                                 <circle cx="9" cy="7" r="4"/>
//                             </svg>
//                             <span>4 Seats</span>
//                         </div>
//                         <div className="feature-item">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <circle cx="12" cy="12" r="3"/>
//                                 <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
//                             </svg>
//                             <span>Auto</span>
//                         </div>
//                         <div className="feature-item">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
//                                 <polyline points="14,2 14,8 20,8"/>
//                                 <line x1="16" y1="13" x2="8" y2="13"/>
//                                 <line x1="16" y1="17" x2="8" y2="17"/>
//                                 <polyline points="10,9 9,9 8,9"/>
//                             </svg>
//                             <span>Insured</span>
//                         </div>
//                     </div>

//                     <div className="vehicle-footer">
//                         <div className="price-section">
//                             <span className="price-amount">Rs.{price}</span>
//                             <span className="price-period">/day</span>
//                         </div>
//                         <Link to={`/vehicle/${id}`} className="details-btn">
//                             <span></span>
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M5 12h14M12 5l7 7-7 7"/>
//                             </svg>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VehicleItem;

// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import './VehicleItem.css';

// export const VehicleItem = ({ name, description, id, imageUrl, price, category, available = true }) => {
//     const { increaseQty, decreaseQty, quantities } = useContext(StoreContext);
//     const [imageLoaded, setImageLoaded] = useState(false);
//     const [imageError, setImageError] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);
    
//     const currentQuantity = quantities[id] || 0;

//     // Handle image error with fallback
//     const handleImageError = () => {
//         setImageError(true);
//         setImageLoaded(true);
//     };

//     // Format price properly
//     const formatPrice = (price) => {
//         if (!price && price !== 0) return 'N/A';
//         return typeof price === 'number' ? price.toFixed(2) : price;
//     };

//     // Create fallback image URL
//     const fallbackImageUrl = `data:image/svg+xml;base64,${btoa(`
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
//             <rect width="300" height="200" fill="#f0f0f0"/>
//             <text x="150" y="100" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#999">
//                 ${name || 'Vehicle Image'}
//             </text>
//         </svg>
//     `)}`;

//     return (
//         <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
//             <div 
//                 className={`vehicle-card ${isHovered ? 'hovered' : ''} ${!available ? 'unavailable' : ''}`}
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//             >
//                 {/* Image Container */}
//                 <div className="vehicle-image-container">
//                     <Link to={`/vehicle/${id}`} className="image-link">
//                         <div className={`image-placeholder ${imageLoaded ? 'loaded' : ''}`}>
//                             {!imageLoaded && !imageError && (
//                                 <div className="loading-skeleton">
//                                     <div className="skeleton-shimmer"></div>
//                                 </div>
//                             )}
//                             <img 
//                                 src={imageError ? fallbackImageUrl : (imageUrl || fallbackImageUrl)}
//                                 alt={name || 'Vehicle'}
//                                 className="vehicle-image"
//                                 onLoad={() => setImageLoaded(true)}
//                                 onError={handleImageError}
//                                 loading="lazy"
//                             />
//                         </div>
//                         <div className="image-overlay">
//                             <div className="view-details-btn">
//                                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                                     <circle cx="12" cy="12" r="3"/>
//                                 </svg>
//                                 View Details
//                             </div>
//                         </div>
//                     </Link>
                    
//                     {/* Quick Action Button - Only show if available */}
//                     {available && (
//                         <div className="quick-action">
//                             {currentQuantity > 0 ? (
//                                 <div className="quantity-controls">
//                                     <button 
//                                         className="quantity-btn decrease"
//                                         onClick={() => decreaseQty(id)}
//                                         aria-label="Decrease quantity"
//                                     >
//                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                             <line x1="5" y1="12" x2="19" y2="12"/>
//                                         </svg>
//                                     </button>
//                                     <span className="quantity-display">{currentQuantity}</span>
//                                     <button 
//                                         className="quantity-btn increase"
//                                         onClick={() => increaseQty(id)}
//                                         aria-label="Increase quantity"
//                                     >
//                                         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                             <line x1="12" y1="5" x2="12" y2="19"/>
//                                             <line x1="5" y1="12" x2="19" y2="12"/>
//                                         </svg>
//                                     </button>
//                                 </div>
//                             ) : (
//                                 <button 
//                                     className="add-to-cart-btn"
//                                     onClick={() => increaseQty(id)}
//                                     aria-label="Add to cart"
//                                     title="Add to booking"
//                                 >
//                                     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                         <circle cx="9" cy="21" r="1"/>
//                                         <circle cx="20" cy="21" r="1"/>
//                                         <path d="m1 1 4 4 14 0 -1 8 -13 0"/>
//                                     </svg>
//                                 </button>
//                             )}
//                         </div>
//                     )}

//                     {/* Availability Badge */}
//                     <div className={`availability-badge ${!available ? 'unavailable' : ''}`}>
//                         <span className={`status-dot ${!available ? 'unavailable' : ''}`}></span>
//                         {available ? 'Available' : 'Unavailable'}
//                     </div>

//                     {/* Category Badge */}
//                     {category && (
//                         <div className="category-badge">
//                             {category}
//                         </div>
//                     )}
//                 </div>

//                 {/* Card Content */}
//                 <div className="vehicle-content">
//                     <div className="vehicle-header">
//                         <h3 className="vehicle-name" title={name}>
//                             {name || 'Vehicle Name'}
//                         </h3>
//                         <div className="rating-section">
//                             <div className="stars">
//                                 {[...Array(5)].map((_, index) => (
//                                     <svg 
//                                         key={index} 
//                                         width="14" 
//                                         height="14" 
//                                         viewBox="0 0 24 24" 
//                                         fill={index < 4 ? "#ffd700" : index === 4 ? "url(#half-star)" : "none"}
//                                         stroke="#ffd700" 
//                                         strokeWidth="1"
//                                     >
//                                         <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
//                                         {index === 4 && (
//                                             <defs>
//                                                 <linearGradient id="half-star">
//                                                     <stop offset="50%" stopColor="#ffd700"/>
//                                                     <stop offset="50%" stopColor="transparent"/>
//                                                 </linearGradient>
//                                             </defs>
//                                         )}
//                                     </svg>
//                                 ))}
//                             </div>
//                             <span className="rating-text">(4.5)</span>
//                         </div>
//                     </div>

//                     <p className="vehicle-description" title={description}>
//                         {description || 'No description available'}
//                     </p>

//                     <div className="vehicle-features">
//                         <div className="feature-item">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//                                 <circle cx="9" cy="7" r="4"/>
//                             </svg>
//                             <span>4 Seats</span>
//                         </div>
//                         <div className="feature-item">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <circle cx="12" cy="12" r="3"/>
//                                 <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
//                             </svg>
//                             <span>Auto</span>
//                         </div>
//                         <div className="feature-item">
//                             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
//                                 <polyline points="14,2 14,8 20,8"/>
//                                 <line x1="16" y1="13" x2="8" y2="13"/>
//                                 <line x1="16" y1="17" x2="8" y2="17"/>
//                                 <polyline points="10,9 9,9 8,9"/>
//                             </svg>
//                             <span>Insured</span>
//                         </div>
//                     </div>

//                     <div className="vehicle-footer">
//                         <div className="price-section">
//                             <span className="price-amount">Rs.{formatPrice(price)}</span>
//                             <span className="price-period">/day</span>
//                         </div>
//                         <Link 
//                             to={`/vehicle/${id}`} 
//                             className={`details-btn ${!available ? 'disabled' : ''}`}
//                             onClick={(e) => {
//                                 if (!available) {
//                                     e.preventDefault();
//                                 }
//                             }}
//                         >
//                             <span>{available ? 'View Details' : 'Unavailable'}</span>
//                             {available && (
//                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                                     <path d="M5 12h14M12 5l7 7-7 7"/>
//                                 </svg>
//                             )}
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VehicleItem;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './VehicleItem.css';

export const VehicleItem = ({ name, description, id, imageUrl, price, category, available = true }) => {
    const { increaseQty, decreaseQty, quantities } = useContext(StoreContext);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    const currentQuantity = quantities[id] || 0;

    // Handle image error with fallback
    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    // Format price properly
    const formatPrice = (price) => {
        if (!price && price !== 0) return 'N/A';
        return typeof price === 'number' ? price.toFixed(2) : price;
    };

    // Create fallback image URL
    const fallbackImageUrl = `data:image/svg+xml;base64,${btoa(`
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="#f0f0f0"/>
            <text x="150" y="100" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#999">
                ${name || 'Vehicle Image'}
            </text>
        </svg>
    `)}`;

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div 
                className={`vehicle-card ${isHovered ? 'hovered' : ''} ${!available ? 'unavailable' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Container */}
                <div className="vehicle-image-container">
                    <Link to={`/vehicle/${id}`} className="image-link">
                        <div className={`image-placeholder ${imageLoaded ? 'loaded' : ''}`}>
                            {!imageLoaded && !imageError && (
                                <div className="loading-skeleton">
                                    <div className="skeleton-shimmer"></div>
                                </div>
                            )}
                            <img 
                                src={imageError ? fallbackImageUrl : (imageUrl || fallbackImageUrl)}
                                alt={name || 'Vehicle'}
                                className="vehicle-image"
                                onLoad={() => setImageLoaded(true)}
                                onError={handleImageError}
                                loading="lazy"
                            />
                        </div>
                        {available && (
                            <div className="image-overlay">
                                <div className="view-details-btn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                    View Details
                                </div>
                            </div>
                        )}
                        {/* Unavailable Overlay */}
                        {!available && (
                            <div className="unavailable-image-overlay">
                                <div className="unavailable-message">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                                    </svg>
                                    <span>Currently Unavailable</span>
                                </div>
                            </div>
                        )}
                    </Link>
                    
                    {/* Quick Action Button - Only show if available */}
                    {available && (
                        <div className="quick-action">
                            {currentQuantity > 0 ? (
                                <div className="quantity-controls">
                                    <button 
                                        className="quantity-btn decrease"
                                        onClick={() => decreaseQty(id)}
                                        aria-label="Decrease quantity"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12"/>
                                        </svg>
                                    </button>
                                    <span className="quantity-display">{currentQuantity}</span>
                                    <button 
                                        className="quantity-btn increase"
                                        onClick={() => increaseQty(id)}
                                        aria-label="Increase quantity"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="12" y1="5" x2="12" y2="19"/>
                                            <line x1="5" y1="12" x2="19" y2="12"/>
                                        </svg>
                                    </button>
                                </div>
                            ) : (
                                <button 
                                    className="add-to-cart-btn"
                                    onClick={() => increaseQty(id)}
                                    aria-label="Add to cart"
                                    title="Add to booking"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="9" cy="21" r="1"/>
                                        <circle cx="20" cy="21" r="1"/>
                                        <path d="m1 1 4 4 14 0 -1 8 -13 0"/>
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}

                    {/* Availability Badge */}
                    <div className={`availability-badge ${!available ? 'unavailable' : 'available'}`}>
                        <span className={`status-dot ${!available ? 'unavailable' : 'available'}`}></span>
                        {available ? 'Available' : 'Unavailable'}
                    </div>

                    {/* Category Badge */}
                    {category && (
                        <div className="category-badge">
                            {category}
                        </div>
                    )}
                </div>

                {/* Card Content */}
                <div className="vehicle-content">
                    <div className="vehicle-header">
                        <h3 className="vehicle-name" title={name}>
                            {name || 'Vehicle Name'}
                        </h3>
                        <div className="rating-section">
                            <div className="stars">
                                {[...Array(5)].map((_, index) => (
                                    <svg 
                                        key={index} 
                                        width="14" 
                                        height="14" 
                                        viewBox="0 0 24 24" 
                                        fill={index < 4 ? "#ffd700" : index === 4 ? "url(#half-star)" : "none"}
                                        stroke="#ffd700" 
                                        strokeWidth="1"
                                    >
                                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                                        {index === 4 && (
                                            <defs>
                                                <linearGradient id="half-star">
                                                    <stop offset="50%" stopColor="#ffd700"/>
                                                    <stop offset="50%" stopColor="transparent"/>
                                                </linearGradient>
                                            </defs>
                                        )}
                                    </svg>
                                ))}
                            </div>
                            <span className="rating-text">(4.5)</span>
                        </div>
                    </div>

                    <p className="vehicle-description" title={description}>
                        {description || 'No description available'}
                    </p>

                    <div className="vehicle-features">
                        <div className="feature-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                <circle cx="9" cy="7" r="4"/>
                            </svg>
                            <span>4 Seats</span>
                        </div>
                        <div className="feature-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                            </svg>
                            <span>Auto</span>
                        </div>
                        <div className="feature-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                <polyline points="14,2 14,8 20,8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <polyline points="10,9 9,9 8,9"/>
                            </svg>
                            <span>Insured</span>
                        </div>
                    </div>

                    <div className="vehicle-footer">
                        <div className="price-section">
                            <span className="price-amount">Rs.{formatPrice(price)}</span>
                            <span className="price-period">/day</span>
                        </div>
                        <Link 
                            to={available ? `/vehicle/${id}` : '#'} 
                            className={`details-btn ${!available ? 'disabled' : ''}`}
                            onClick={(e) => {
                                if (!available) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <span>{available ? 'View Details' : 'Unavailable'}</span>
                            {available && (
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleItem;