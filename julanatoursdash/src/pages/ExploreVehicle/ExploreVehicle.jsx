import React, { useState } from 'react';
import VehicleDisplay from '../../components/VehicleDisplay/VehicleDisply';

const ExploreVehicle = () => { 
  const [category, setCategory] = useState('All') ;
  const [searchText, setSearchText] = useState('') ;
  return (
    <>
     <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group mb-3">
              <select className="form-select mt-2" style={{'maxWidth': '150px'}} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                <option value="cars">Cars</option>
                <option value="bikes">Bikes</option>
                <option value="trucks">Trucks</option>
              </select>
              <input type='text' className='form-control mt-2' placeholder='Search your favourite dish...'
                onChange={(e) => setSearchText(e.target.value)} value={searchText}/>
              <button className='btn btn-primary mt-2' type='submit'>
                <i className='bi bi-search'></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <VehicleDisplay category={category} searchText={searchText}/> 
    </>
  )
}

export default ExploreVehicle;