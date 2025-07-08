import React from 'react';
import { useParams } from 'react-router-dom';

export const VehicleDetails = () => {
    const {id} = useParams();
  return (
    <div>VehicleDetails</div>
  )
}

export default VehicleDetails;