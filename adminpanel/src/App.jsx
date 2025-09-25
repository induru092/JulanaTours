import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import AddVehicle from "./pages/AddVehicle/AddVehicle";
import ListVehicle from './pages/ListVehicle/ListVehicle';
import Orders from './pages/Orders/Orders';
import Sidebar from './components/Sidebar/Sidebar';
import Menubar from './components/Menubar/Menubar';
import Login from "./components/Login/Login";
import Register from './components/Register/Register';
import ProtectedRoute from './components/ProtectedRoute';

// Services
import authService from './services/authService';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible); // Fixed typo here
  };

  // Check if user is authenticated
  const isAuthenticated = authService.isAuthenticated();

  return (
    <div>
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        {/* Public Routes */}
        <Route 
          path="/login" 
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login />
          } 
        />
        <Route 
          path="/register" 
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Register />
          } 
        />

        {/* Protected Routes */}
        <Route 
          path="/*" 
          element={
            <ProtectedRoute>
              <div className="d-flex" id="wrapper">
                <Sidebar sidebarVisible={sidebarVisible} />
                
                <div id="page-content-wrapper">
                  <Menubar toggleSidebar={toggleSidebar} />
                  
                  <div className="container-fluid">
                    <Routes>
                      <Route path='/add' element={<AddVehicle />} />
                      <Route path='/list' element={<ListVehicle />} />
                      <Route path='/orders' element={<Orders />} />
                      <Route path='/' element={<ListVehicle />} />
                      <Route path='*' element={<Navigate to="/" replace />} />
                    </Routes>    
                  </div>
                </div>
              </div>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </div>
  );
};

export default App;