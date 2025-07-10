import React from 'react';
import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisply';

export const ExploreVehicle = () => {
  return (
    <>
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="input-group mb-3">
              <select className="form-select mt-2" style={{'maxWidth': '150px'}}>
                <option value="all">All Vehicles</option>
                <option value="cars">Cars</option>
                <option value="bikes">Bikes</option>
                <option value="trucks">Trucks</option>
              </select>
              <input type='text' className='form-control mt-2' placeholder='Search your favourite dish...'/>
              <button className='btn btn-primary mt-2' type='submit'>
                <i className='bi bi-search'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <VehicleDisplay /> 
    </>
  )
}

export default ExploreVehicle;