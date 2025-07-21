import React from 'react';
import { categories } from '../../assets/assests.js';
import './ExploreMenu.css';

export const ExploreMenu = ({category , setCategory}) => {

  const menuRef = React.useRef(null);
  const scrollLeft = () => {
    if (menuRef.current) {
      menuRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (menuRef.current) { 
      menuRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="explore-menu position-relative">
        <h1 className="d-flex align-items-center justify-content-between">
            Explore Our Vehicles
            <div className="d-flex">
            <i className='bi bi-arrow-left-circle scroll-icon' onClick={scrollLeft}></i>
            <i className='bi bi-arrow-right-circle scroll-icon' onClick={scrollRight}></i>
        </div>
        </h1>
        <p>Explore curated lists of vehicles from top categories.</p>
        <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-lists" ref={menuRef}>
            {
            categories.map((item, index) => {
              return (
                <div key={index} className="text-center explore-menu-list-item" onClick={() => setCategory(prev => prev === item.category ? 'All' : item.category)}>
                    <img
                        src={item.icon}
                        alt=""
                        className={item.category == category ? 'rounded-circle active': 'rounded-circle'}
                        style={{ width: '150px', height: '100px', objectFit: 'cover' }}
                    />
                    <p className="mt-2 fw-semibold">{item.category}</p>
                </div>
              )
            })
          }
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu;