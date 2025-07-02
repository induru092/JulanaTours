// import React from 'react';
// import { categories } from '../../assets/assets';

// export const ExploreMenu = () => {
//   return (
//     <div className="explore-menu position-relative">
//       <h1 className="d-flex align-items-center justify-content-between">
//         Explore Our Vehicles
//         <div className="d-flex">
//           <i className="bi bi-arrow-left-circle scroll-icon"></i>
//           <i className="bi bi-arrow-right-circle scroll-icon"></i>
//         </div>
//       </h1>
//       <p>Explore curated lists of vehicles from top categories.</p>
//       <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-lists">
//         {categories.map((item, index) => (
//           <div key={index} className="category-card text-center">
//             <img
//               src={item.image}
//               alt={item.name}
//               className="img-fluid rounded"
//               style={{ width: '150px', height: '100px', objectFit: 'cover' }}
//             />
//             <p className="mt-2 fw-semibold">{item.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExploreMenu;


import React from 'react';
import { categories } from '../../assets/assets';

export const ExploreMenu = () => {
  return (
    <div className="explore-menu position-relative">
        <h1 className="d-flex align-items-center justify-content-between">
            Explore Our Vehicles
            <div className="d-flex">
            <i className='bi bi-arrow-left-circle scroll-icon'></i>
            <i className='bi bi-arrow-right-circle scroll-icon'></i>
        </div>
        </h1>
        <p>Explore curated lists of vehicles from top categories.</p>
        <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-lists">

        </div>
        
    </div>
  )
}

export default ExploreMenu;