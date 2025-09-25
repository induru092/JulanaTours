// import React, { useContext } from 'react'
// import { StoreContext } from '../../context/StoreContext';
// import VehicleItem from '../VehicleItem/VehicleItem';

// export const VehicleDisplay = ({category, serachText}) => {

//      const { vehicleList } = useContext(StoreContext);
    
//     // Safely handle undefined/null values
//     const filteredVehicles = (vehicleList || []).filter(vehicle => {
//         // Skip if vehicle is null/undefined
//         if (!vehicle) return false;
        
//         // Check category match (default to true if category is undefined)
//         const categoryMatch = !category || category === 'All' || vehicle.category === category;
        
//         // Safely check name match (empty string if searchText is undefined)
//         const searchTextLower = (serachText || '').toLowerCase();
//         const nameMatch = vehicle.name 
//             ? vehicle.name.toLowerCase().includes(searchTextLower)
//             : false;
            
//         return categoryMatch && nameMatch;
//     // const {vehicleList} = useContext(StoreContext);
//     // const filteredVehicles = vehicleList.filter(vehicle => (
//     //     (category === 'All' || vehicle.category === category) &&
//     //     vehicle.name.toLowerCase().includes(serachText.toLowerCase())
// });
//   return (
//     <div className="container">
//         <div className="row">
//             {filteredVehicles.length > 0 ? (
//                 filteredVehicles.map((vehicle, index) => (
//                     <VehicleItem key={index} 
//                     name={vehicle.name} 
//                     description={vehicle.description}
//                     id={vehicle.id}
//                     imageUrl={vehicle.imageUrl}
//                     price={vehicle.price} />
//                 ))
//             ) :(
//                 <div className="text-center mt-4">
//                     <h4>No vehicle found.</h4>
//                 </div>
//             )}

//         </div>
//     </div>
//   )
// }

// export default VehicleDisplay;

import React, { useContext, useState, useMemo } from 'react';
import { StoreContext } from '../../context/StoreContext';
import VehicleItem from '../VehicleItem/VehicleItem';
import './VehicleDisplay.css';

export const VehicleDisplay = ({category, searchText}) => {
    const { vehicleList } = useContext(StoreContext);
    const [viewMode, setViewMode] = useState('grid'); // grid or list
    const [sortBy, setSortBy] = useState('name'); // name, price, rating
    const [isLoading, setIsLoading] = useState(false);

    // Memoized filtered and sorted vehicles
    const processedVehicles = useMemo(() => {
        if (!vehicleList || vehicleList.length === 0) return [];

        let filtered = vehicleList.filter(vehicle => {
            if (!vehicle) return false;
            
            const categoryMatch = !category || category === 'All' || vehicle.category === category;
            const searchTextLower = (searchText || '').toLowerCase();
            const nameMatch = vehicle.name 
                ? vehicle.name.toLowerCase().includes(searchTextLower)
                : false;
                
            return categoryMatch && nameMatch;
        });

        // Sort vehicles
        filtered.sort((a, b) => {
            switch(sortBy) {
                case 'price':
                    return (a.price || 0) - (b.price || 0);
                case 'priceDesc':
                    return (b.price || 0) - (a.price || 0);
                case 'rating':
                    return (b.rating || 4.5) - (a.rating || 4.5);
                case 'name':
                default:
                    return (a.name || '').localeCompare(b.name || '');
            }
        });

        return filtered;
    }, [vehicleList, category, searchText, sortBy]);

    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
    };

    const LoadingSkeleton = () => (
        <div className="loading-grid">
            {[...Array(8)].map((_, index) => (
                <div key={index} className="skeleton-card">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-content">
                        <div className="skeleton-title"></div>
                        <div className="skeleton-description"></div>
                        <div className="skeleton-price"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    const EmptyState = () => (
        <div className="empty-state">
            <div className="empty-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v10l3-3m-6 0 3 3"/>
                    <circle cx="12" cy="12" r="10"/>
                </svg>
            </div>
            <h3 className="empty-title">No vehicles found</h3>
            <p className="empty-description">
                {searchText 
                    ? `No vehicles match your search "${searchText}"` 
                    : `No vehicles available in the "${category}" category`
                }
            </p>
            <button 
                className="reset-filters-btn"
                onClick={() => window.location.reload()}
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                    <path d="M21 3v5h-5"/>
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                    <path d="M3 21v-5h5"/>
                </svg>
                Reset Filters
            </button>
        </div>
    );

    return (
        <div className="vehicle-display-section">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="header-content">
                        <h2 className="section-title">
                            {category === 'All' ? 'All Vehicles' : `${category} Vehicles`}
                        </h2>
                        <p className="section-subtitle">
                            {processedVehicles.length} vehicle{processedVehicles.length !== 1 ? 's' : ''} available
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="display-controls">
                        {/* Sort Dropdown */}
                        <div className="sort-dropdown">
                            <select 
                                value={sortBy} 
                                onChange={(e) => handleSortChange(e.target.value)}
                                className="sort-select"
                            >
                                <option value="name">Sort by Name</option>
                                <option value="price">Price: Low to High</option>
                                <option value="priceDesc">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                            <svg className="sort-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6,9 12,15 18,9"/>
                            </svg>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="view-toggle">
                            <button 
                                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                                onClick={() => setViewMode('grid')}
                                aria-label="Grid view"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="7" height="7"/>
                                    <rect x="14" y="3" width="7" height="7"/>
                                    <rect x="14" y="14" width="7" height="7"/>
                                    <rect x="3" y="14" width="7" height="7"/>
                                </svg>
                            </button>
                            <button 
                                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                                onClick={() => setViewMode('list')}
                                aria-label="List view"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="8" y1="6" x2="21" y2="6"/>
                                    <line x1="8" y1="12" x2="21" y2="12"/>
                                    <line x1="8" y1="18" x2="21" y2="18"/>
                                    <line x1="3" y1="6" x2="3.01" y2="6"/>
                                    <line x1="3" y1="12" x2="3.01" y2="12"/>
                                    <line x1="3" y1="18" x2="3.01" y2="18"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Vehicle Grid/List */}
                {isLoading ? (
                    <LoadingSkeleton />
                ) : processedVehicles.length > 0 ? (
                    <div className={`vehicles-container ${viewMode}-view`}>
                        <div className="row">
                            {processedVehicles.map((vehicle, index) => (
                                <VehicleItem 
                                    key={vehicle.id || index} 
                                    name={vehicle.name} 
                                    description={vehicle.description}
                                    id={vehicle.id}
                                    imageUrl={vehicle.imageUrl}
                                    price={vehicle.price} 
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <EmptyState />
                )}

                {/* Load More Button (if needed) */}
                {processedVehicles.length > 0 && processedVehicles.length >= 12 && (
                    <div className="load-more-section">
                        <button className="load-more-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 5v14M5 12l7 7 7-7"/>
                            </svg>
                            Load More Vehicles
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VehicleDisplay;
