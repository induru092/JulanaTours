import React, { useState } from 'react';
import { VehicleDisplay } from '../../components/VehicleDisplay/VehicleDisplay';
import Footer from '../../components/Footer/Footer';

export const ExploreVehicle = () => {
  const [category, setCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  return (
    
   <> 
  
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group mb-3">
              <select className='form-select mt-2' style={{maxWidth: '150px'}} onChange={(e) => setCategory(e.target.value)}>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="Truck">Car</option>
                <option value="Bus">Bus</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Van">Van</option>
                <option value="Convertible">Threewheel(Tuk-Tuk)</option>
              </select>
              <input type="text" className="form-control mt-2" placeholder="Search vehicles..." 
                onChange={(e) => setSearchText(e.target.value)} value={searchText} />
              <button className="btn btn-primary mt-2" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>'
      </div>
    </div>
  
    <VehicleDisplay category={category} searchText={searchText}/>

    <Footer />

    </>
  
  )
}

export default ExploreVehicle;