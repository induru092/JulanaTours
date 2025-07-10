import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext';
import VehicleItem from '../VehicleItem/VehicleItem';

const VehicleDisply = ({category}) => {
    const {vehicleList} = useContext(StoreContext);
    const filteredVehicles = vehicleList.filter(vehicle => {
        category === 'All' || vehicle.category === category

    })
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

export default VehicleDisply;
