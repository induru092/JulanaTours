import React from 'react';
import authService from '../../services/authService';

const Menubar = ({toggleSidebar}) => {
  const user = authService.getUser();

  const handleLogout = () => {
    authService.logout();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div className="container-fluid">
            <button className="btn btn-primary" id="sidebarToggle" onClick={toggleSidebar}>
                <i className='bi bi-list'></i>    
            </button>
            
            <div className="d-flex align-items-center">
              {user && (
                <span className="me-3">Welcome, {user.name}</span>
              )}
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                <i className='bi bi-box-arrow-right me-1'></i>
                Logout
              </button>
            </div>
        </div>
    </nav>
  )
}

export default Menubar;