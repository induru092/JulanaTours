import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3 mt-1">
        <div className="container-fluid py-5">
            <h1 className='display-5 fw-bold'>Rent Your Vehicle Here!</h1>
            <p className="col-md-8 fs-4">Welcome to our vehicle rental service! We offer a wide range of vehicles to suit your needs, whether you're looking for a car, van, or truck. Our easy-to-use platform allows you to browse and book vehicles quickly and conveniently.</p>
            <Link to="/explore" className="btn btn-primary">Explore</Link>
        </div>
    </div>
  )
}

export default Header;