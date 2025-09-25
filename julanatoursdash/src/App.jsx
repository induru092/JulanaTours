// 

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { StoreContextProvider } from './context/StoreContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Pages
import Home from './pages/Home/Home.jsx';
import ContactUs from './pages/Contact/ContactUs.jsx';
import ExploreVehicle from './pages/ExploreVehicle/ExploreVehicle.jsx';
import VehicleDetails from './pages/VehicleDetails/VehicleDetails.jsx';
import BookingVehicle from './pages/BookingVehicle/BookingVehicle.jsx';
import PlaceBooking from './pages/PlaceBooking/PlaceBooking.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';

// Components
import Menubar from './components/Menubar/Menubar.jsx';

const App = () => {
  return (
    <AuthProvider>
      <StoreContextProvider>
        <div className="app">
          <Routes>
            {/* Public Routes - No Authentication Required */}
            <Route 
              path="/login" 
              element={<Login />} 
            />
            <Route 
              path="/register" 
              element={<Register />} 
            />

            {/* HOME PAGE - PUBLIC ACCESS (No ProtectedRoute) */}
            <Route 
              path="/" 
              element={
                <div>
                  <Menubar />
                  <Home />
                </div>
              } 
            />

            {/* CONTACT PAGE - PUBLIC ACCESS */}
            <Route 
              path="/contact" 
              element={
                <div>
                  <Menubar />
                  <ContactUs />
                </div>
              } 
            />

            {/* EXPLORE PAGE - PUBLIC ACCESS (Browse without login) */}
            <Route 
              path="/explore" 
              element={
                <div>
                  <Menubar />
                  <ExploreVehicle />
                </div>
              } 
            />

            {/* VEHICLE DETAILS - PUBLIC ACCESS (View without login) */}
            <Route 
              path="/vehicle/:id" 
              element={
                <div>
                  <Menubar />
                  <VehicleDetails />
                </div>
              } 
            />

            {/* Protected Routes - Authentication Required for Booking */}
            <Route 
              path="/booking-vehicle" 
              element={
                <ProtectedRoute>
                  <div>
                    <Menubar />
                    <BookingVehicle />
                  </div>
                </ProtectedRoute>
              } 
            />

            <Route 
              path="/placebooking" 
              element={
                <ProtectedRoute>
                  <div>
                    <Menubar />
                    <PlaceBooking />
                  </div>
                </ProtectedRoute>
              } 
            />

            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </StoreContextProvider>
    </AuthProvider>
  );
};

export default App;