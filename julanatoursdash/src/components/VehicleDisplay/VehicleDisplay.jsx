import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import VehicleItem from '../VehicleItem/VehicleItem';

export const VehicleDisplay = () => {
    const {vehicleList} = useContext(StoreContext);
  return (
    <div className="container">
        <div className="row">
            {vehicleList.length > 0 ? (
                vehicleList.map((vehicle, index) => (
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
