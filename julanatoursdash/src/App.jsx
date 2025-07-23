import React from 'react';
import Menubar from './components/Menubar/Menubar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ContactUs from './pages/Contact/ContactUs.jsx';
import ExploreVehicle from './pages/ExploreVehicle/ExploreVehicle.jsx';
import VehicleDetails from './pages/VehicleDetails/VehicleDetails.jsx';
import ExploreMenu from './components/ExploreMenu/ExploreMenu.jsx';
import BookingVehicle from './pages/BookingVehicle/BookingVehicle.jsx';
import PlaceBooking from './pages/PlaceBooking/PlaceBooking.jsx';

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/explore' element={<ExploreVehicle />}/>
        {/* <Route path='/vehicle/:id' element={<VehicleDetails />}/> */}
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
        <Route path='/booking-vehicle' element={<BookingVehicle />}/>
        <Route path='/place-booking' element={<PlaceBooking />}/>
      </Routes>
    </div>
  )
}

export default App;