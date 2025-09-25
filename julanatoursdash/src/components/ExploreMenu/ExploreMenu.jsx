// import React from 'react';
// import { categories } from '../../assets/assets.js';
// import './ExploreMenu.css';

// export const ExploreMenu = ({category , setCategory}) => {

//   const menuRef = React.useRef(null);
//   const scrollLeft = () => {
//     if (menuRef.current) {
//       menuRef.current.scrollBy({ left: -200, behavior: 'smooth' });
//     }
//   };
  
//   const scrollRight = () => {
//     if (menuRef.current) { 
//       menuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
//     }
//   };

//   return (
//     <div className="explore-menu position-relative">
//         <h1 className="d-flex align-items-center justify-content-between">
//             Explore Our Vehicles
//             <div className="d-flex">
//             <i className='bi bi-arrow-left-circle scroll-icon' onClick={scrollLeft}></i>
//             <i className='bi bi-arrow-right-circle scroll-icon' onClick={scrollRight}></i>
//         </div>
//         </h1>
//         <p>Explore curated lists of vehicles from top categories.</p>
//         <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-lists" ref={menuRef}>
//             {
//             categories.map((item, index) => {
//               return (
//                 <div key={index} className="text-center explore-menu-list-item" onClick={() => setCategory(prev => prev === item.category ? 'All' : item.category)}>
//                     <img
//                         src={item.icon}
//                         alt=""
//                         className={item.category == category ? 'rounded-circle active': 'rounded-circle'}
//                         style={{ width: '150px', height: '100px', objectFit: 'cover' }}
//                     />
//                     <p className="mt-2 fw-semibold">{item.category}</p>
//                 </div>
//               )
//             })
//           }
//         </div>
//         <hr />
//     </div>
//   )
// }

// export default ExploreMenu;

import React from 'react';
import './ExploreMenu.css';

// Vehicle categories with icons (you can replace these with your actual image paths)
const vehicleCategories = [
  {
    category: "Sedan",
    icon: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=300&h=200&fit=crop&crop=center",
    description: "Comfortable family cars"
  },
  {
    category: "SUV", 
    icon: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=300&h=200&fit=crop&crop=center",
    description: "Sport utility vehicles"
  },
  {
    category: "Car",
    icon: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300&h=200&fit=crop&crop=center",
    description: "General passenger cars"  
  },
  {
    category: "Bus",
    icon: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=300&h=200&fit=crop&crop=center",
    description: "Group transportation"
  },
  {
    category: "Motorcycle",
    icon: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center",
    description: "Two-wheeled vehicles"
  },
  {
    category: "Van",
    icon: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&crop=center",
    description: "Cargo and passenger vans"
  },
  {
    category: "Threewheel(Tuk-Tuk)",
    icon: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center",
    description: "Three-wheeler transport"
  }
];

export const ExploreMenu = ({category, setCategory}) => {
  const menuRef = React.useRef(null);
  
  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (menuRef.current) { 
      menuRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (selectedCategory) => {
    setCategory(prev => prev === selectedCategory ? 'All' : selectedCategory);
  };

  return (
    <div className="explore-menu">
      <div className="explore-header">
        <div className="header-content">
          <h1 className="explore-title">
            <i className="bi bi-car-front-fill me-2"></i>
            Explore Our Vehicles
          </h1>
          <p className="explore-subtitle">
            Discover the perfect vehicle for your journey from ours . . . . . .
          </p>
        </div>
        <div className="scroll-controls">
          <button className="scroll-btn" onClick={scrollLeft} aria-label="Scroll left">
            <i className='bi bi-chevron-left'></i>
          </button>
          <button className="scroll-btn" onClick={scrollRight} aria-label="Scroll right">
            <i className='bi bi-chevron-right'></i>
          </button>
        </div>
      </div>

      <div className="categories-container" ref={menuRef}>
        <div className="categories-grid">
          {vehicleCategories.map((item, index) => (
            <div 
              key={index} 
              className={`category-card ${item.category === category ? 'active' : ''}`}
              onClick={() => handleCategoryClick(item.category)}
            >
              <div className="category-image-wrapper">
                <img
                  src={item.icon}
                  alt={item.category}
                  className="category-image"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/300x200/4f46e5/white?text=${encodeURIComponent(item.category)}`;
                  }}
                />
                <div className="category-overlay">
                  <i className="bi bi-arrow-right-circle overlay-icon"></i>
                </div>
              </div>
              <div className="category-info">
                <h3 className="category-name">{item.category}</h3>
                <p className="category-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="current-filter">
        {category !== 'All' && (
          <div className="filter-badge">
            <span>Showing: {category}</span>
            <button 
              className="clear-filter" 
              onClick={() => setCategory('All')}
              aria-label="Clear filter"
            >
              <i className="bi bi-x"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExploreMenu;