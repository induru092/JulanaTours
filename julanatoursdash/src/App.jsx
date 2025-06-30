import React from 'react';
import Menubar from './components/Menubar/Menubar.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import ContactUs from './pages/Contact/ContactUs.jsx';
import ExploreVehicle from './pages/ExploreVehicle/ExploreVehicle.jsx';

const App = () => {
  return (
    <div>
      <Menubar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<ContactUs />}/>
        <Route path='/explore' element={<ExploreVehicle />}/>
      </Routes>
    </div>
  )
}

export default App;