import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import VehicleItem from '../VehicleItem/VehicleItem';

export const VehicleDisplay = ({category, serachText}) => {

     const { vehicleList } = useContext(StoreContext);
    
    // Safely handle undefined/null values
    const filteredVehicles = (vehicleList || []).filter(vehicle => {
        // Skip if vehicle is null/undefined
        if (!vehicle) return false;
        
        // Check category match (default to true if category is undefined)
        const categoryMatch = !category || category === 'All' || vehicle.category === category;
        
        // Safely check name match (empty string if searchText is undefined)
        const searchTextLower = (serachText || '').toLowerCase();
        const nameMatch = vehicle.name 
            ? vehicle.name.toLowerCase().includes(searchTextLower)
            : false;
            
        return categoryMatch && nameMatch;
    // const {vehicleList} = useContext(StoreContext);
    // const filteredVehicles = vehicleList.filter(vehicle => (
    //     (category === 'All' || vehicle.category === category) &&
    //     vehicle.name.toLowerCase().includes(serachText.toLowerCase())
});
  return (
    <div className="container">
        <div className="row">
            {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle, index) => (
                    <VehicleItem key={index} 
                    name={vehicle.name} 
                    description={vehicle.description}
                    id={vehicle.id}
                    imageUrl={vehicle.imageUrl}
                    price={vehicle.price} />
                ))
            ) :(
                <div className="text-center mt-4">
                    <h4>No vehicle found.</h4>
                </div>
            )}

        </div>
    </div>
  )
}

export default VehicleDisplay;
