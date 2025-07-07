import React, { useState } from 'react';
import AddVehicle from "./pages/AddVehicle/AddVehicle";
import ListVehicle from './pages/ListVehicle/ListVehicle';
import Orders from './pages/Orders/Orders';
import Sidebar from './components/Sidebar/Sidebar';
import Menubar from './components/Menubar/Menubar';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarvisible);
  }
  return (
    <div className="d-flex" id="wrapper">
            
            <Sidebar sidebarVisible={sidebarVisible} />
            
            <div id="page-content-wrapper">
                
                <Menubar toggleSidebar={toggleSidebar} />
                <ToastContainer />
                
                <div className="container-fluid">
                    <Routes>
                      <Route path='/add' element={<AddVehicle />} />
                      <Route path='/list' element={<ListVehicle />} />
                      <Route path='/orders' element={<Orders />} />
                      <Route path='/' element={<ListVehicle />} />
                    </Routes>    
                </div>
            </div>
        </div>
  )
}

export default App;