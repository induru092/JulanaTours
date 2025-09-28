// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchVehicleDetails } from '../../service/vehicleService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const VehicleDetails = () => {
//     const {id} = useParams();
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
   
//     useEffect(() => {
//         const loadVehicleDetails = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
                
//                 // Debug log
//                 console.log('Loading vehicle details for ID:', id);
                
//                 const vehicleData = await fetchVehicleDetails(id);
//                 setData(vehicleData);
//             } catch (error) {
//                 console.error('Error loading vehicle details:', error);
//                 setError(error.message || 'Error displaying vehicle details');
//                 toast.error(error.message || 'Error displaying vehicle details');
//             } finally {
//                 setLoading(false);
//             }
//         }
        
//         if (id) {
//             loadVehicleDetails();
//         } else {
//             setError('No vehicle ID provided');
//             setLoading(false);
//         }
//     }, [id]);

//     if (loading) {
//         return (
//             <div className="container text-center py-5">
//                 <div className="spinner-border" role="status">
//                     <span className="visually-hidden">Loading...</span>
//                 </div>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="container text-center py-5">
//                 <div className="alert alert-danger" role="alert">
//                     {error}
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <section className="py-5">
//             <div className="container px-4 px-lg-5 my-5">
//                 <div className="row gx-4 gx-lg-5 align-items-center">
//                     <div className="col-md-6">
//                         <img 
//                             className="card-img-top mb-5 mb-md-0" 
//                             src={data.imageUrl || '/placeholder-image.jpg'} 
//                             alt={data.name || 'Vehicle'} 
//                             onError={(e) => {
//                                 e.target.src = '/placeholder-image.jpg';
//                             }}
//                         />
//                     </div>
//                     <div className="col-md-6">
//                         <div className="small mb-1">
//                             Category: <span className='badge text-bg-warning'>{data.category || 'N/A'}</span>
//                         </div>
//                         <h1 className="display-5 fw-bolder">{data.name || 'Vehicle Name'}</h1>
//                         <div className="fs-5 mb-5">
//                             <span>Rs.{data.price || '0'}</span>
//                         </div>
//                         <p className="lead">{data.description || 'No description available'}</p>
//                         <div className="d-flex">
//                             <button className="btn btn-outline-dark flex-shrink-0" type="button">
//                                 <i className="bi-cart-fill me-1"></i>
//                                 Add to cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default VehicleDetails;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchVehicleDetails } from '../../service/vehicleService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// export const VehicleDetails = () => {
//     const {id} = useParams();

//     const [data, setData] = useState({});
    

//     useEffect(() => {
//         const loadVehicleDetails = async () => {
//             try {
//                 const vehicleData = await fetchVehicleDetails(id);
//                 setData(vehicleData);
//             } catch (error) {
//                 toast.error('Error displaying vehicle details');
//             }
//         }
//         loadVehicleDetails();
//     }, [id]);
//   return (
//     <section className="py-5">
//     <div className="container px-4 px-lg-5 my-5">
//         <div className="row gx-4 gx-lg-5 align-items-center">
//             <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data.imageUrl} alt="..." /></div>
//             <div className="col-md-6">
//                 <div className="fs-5 mb-1">Category: <span className='badge text-bg-warning'>{data.category}</span></div>
//                 <h1 className="display-5 fw-bolder">{data.name}</h1>
//                 <div className="fs-5 mb-2">
//                     <span>Rs.{data.price}.00</span>
//                 </div>
//                 <p className="lead">{data.description}</p>
//                 <div className="d-flex">
//                     <button className="btn btn-outline-dark flex-shrink-0" type="button">
//                         <i className="bi-cart-fill me-1"></i>
//                         Add to cart
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
//   )
// }

// export default VehicleDetails;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { fetchVehicleDetails } from '../../service/vehicleService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const VehicleDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
    
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadVehicleDetails = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
                
//                 // Debug: Log the ID being fetched
//                 console.log('Fetching vehicle details for ID:', id);
                
//                 const vehicleData = await fetchVehicleDetails(id);
                
//                 // Debug: Log the response
//                 console.log('Received vehicle data:', vehicleData);
                
//                 // Check if we got valid data
//                 if (!vehicleData || Object.keys(vehicleData).length === 0) {
//                     throw new Error('No vehicle data received');
//                 }
                
//                 setData(vehicleData);
                
//             } catch (error) {
//                 console.error('Error in loadVehicleDetails:', error);
//                 setError(error.message);
//                 toast.error('Error displaying vehicle details: ' + error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (id) {
//             loadVehicleDetails();
//         } else {
//             setError('No vehicle ID provided');
//             setLoading(false);
//         }
//     }, [id]);

//     // Loading state
//     if (loading) {
//         return (
//             <section className="py-5">
//                 <div className="container px-4 px-lg-5 my-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8 text-center">
//                             <div className="spinner-border" role="status">
//                                 <span className="visually-hidden">Loading...</span>
//                             </div>
//                             <p className="mt-3">Loading vehicle details...</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     // Error state
//     if (error) {
//         return (
//             <section className="py-5">
//                 <div className="container px-4 px-lg-5 my-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8 text-center">
//                             <div className="alert alert-danger" role="alert">
//                                 <h4 className="alert-heading">Error</h4>
//                                 <p>{error}</p>
//                                 <button 
//                                     className="btn btn-primary"
//                                     onClick={() => navigate('/explore')}
//                                 >
//                                     Back to Vehicles
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     // Helper function to format price
//     const formatPrice = (price) => {
//         if (!price && price !== 0) return 'N/A';
//         return typeof price === 'number' ? price.toFixed(2) : price;
//     };

//     // Fallback image URL
//     const fallbackImageUrl = `data:image/svg+xml;base64,${btoa(`
//         <svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
//             <rect width="500" height="400" fill="#f8f9fa"/>
//             <text x="250" y="200" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">
//                 ${data.name || 'Vehicle Image'}
//             </text>
//         </svg>
//     `)}`;

//     return (
//         <section className="py-5">
//             <div className="container px-4 px-lg-5 my-5">
//                 {/* Back Button */}
//                 <div className="mb-4">
//                     <button 
//                         className="btn btn-outline-secondary"
//                         onClick={() => navigate('/explore')}
//                     >
//                         <i className="bi bi-arrow-left me-2"></i>
//                         Back to Vehicles
//                     </button>
//                 </div>

//                 <div className="row gx-4 gx-lg-5 align-items-center">
//                     {/* Vehicle Image */}
//                     <div className="col-md-6">
//                         <img 
//                             className="card-img-top mb-5 mb-md-0" 
//                             src={data.imageUrl || fallbackImageUrl}
//                             alt={data.name || 'Vehicle Image'}
//                             onError={(e) => {
//                                 e.target.src = fallbackImageUrl;
//                             }}
//                             style={{ 
//                                 width: '100%', 
//                                 height: '400px', 
//                                 objectFit: 'cover',
//                                 borderRadius: '8px'
//                             }}
//                         />
//                     </div>
                    
//                     {/* Vehicle Details */}
//                     <div className="col-md-6">
//                         {/* Category */}
//                         <div className="fs-5 mb-1">
//                             Category: 
//                             <span className="badge text-bg-warning ms-2">
//                                 {data.category || 'Uncategorized'}
//                             </span>
//                         </div>
                        
//                         {/* Vehicle Name */}
//                         <h1 className="display-5 fw-bolder">
//                             {data.name || 'Vehicle Name Not Available'}
//                         </h1>
                        
//                         {/* Price */}
//                         <div className="fs-5 mb-2">
//                             <span>Rs.{formatPrice(data.price)}</span>
//                             <span className="text-muted ms-2">/day</span>
//                         </div>
                        
//                         {/* Description */}
//                         <p className="lead">
//                             {data.description || 'No description available for this vehicle.'}
//                         </p>

//                         {/* Vehicle ID for debugging */}
//                         <small className="text-muted">Vehicle ID: {id}</small>
                        
//                         {/* Add to Cart Button */}
//                         <div className="d-flex mt-4">
//                             <button 
//                                 className="btn btn-outline-dark flex-shrink-0" 
//                                 type="button"
//                                 onClick={() => {
//                                     // You can implement add to cart logic here
//                                     toast.success('Vehicle added to cart!');
//                                 }}
//                             >
//                                 <i className="bi-cart-fill me-1"></i>
//                                 Add to cart
//                             </button>
//                         </div>

//                         {/* Debug Information (remove in production) */}
//                         {process.env.NODE_ENV === 'development' && (
//                             <div className="mt-4 p-3 bg-light rounded">
//                                 <h6>Debug Info:</h6>
//                                 <pre style={{ fontSize: '12px' }}>
//                                     {JSON.stringify(data, null, 2)}
//                                 </pre>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default VehicleDetails;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { fetchVehicleDetails } from '../../service/vehicleService';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const VehicleDetails = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
    
//     const [data, setData] = useState({});
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadVehicleDetails = async () => {
//             try {
//                 setLoading(true);
//                 setError(null);
                
//                 const vehicleData = await fetchVehicleDetails(id);
                
//                 if (!vehicleData || Object.keys(vehicleData).length === 0) {
//                     throw new Error('No vehicle data received');
//                 }
                
//                 setData(vehicleData);
                
//             } catch (error) {
//                 setError(error.message);
//                 toast.error('Error displaying vehicle details: ' + error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         if (id) {
//             loadVehicleDetails();
//         } else {
//             setError('No vehicle ID provided');
//             setLoading(false);
//         }
//     }, [id]);

//     // Loading state
//     if (loading) {
//         return (
//             <section className="py-5">
//                 <div className="container px-4 px-lg-5 my-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8 text-center">
//                             <div className="spinner-border" role="status">
//                                 <span className="visually-hidden">Loading...</span>
//                             </div>
//                             <p className="mt-3">Loading vehicle details...</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     // Error state
//     if (error) {
//         return (
//             <section className="py-5">
//                 <div className="container px-4 px-lg-5 my-5">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8 text-center">
//                             <div className="alert alert-danger" role="alert">
//                                 <h4 className="alert-heading">Error</h4>
//                                 <p>{error}</p>
//                                 <button 
//                                     className="btn btn-primary"
//                                     onClick={() => navigate('/explore')}
//                                 >
//                                     Back to Vehicles
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     // Helper function to format price
//     const formatPrice = (price) => {
//         if (!price && price !== 0) return 'N/A';
//         return typeof price === 'number' ? price.toFixed(2) : price;
//     };

//     // Fallback image URL
//     const fallbackImageUrl = `data:image/svg+xml;base64,${btoa(`
//         <svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
//             <rect width="500" height="400" fill="#f8f9fa"/>
//             <text x="250" y="200" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">
//                 ${data.name || 'Vehicle Image'}
//             </text>
//         </svg>
//     `)}`;

//     return (
//         <section className="py-5">
//             <div className="container px-4 px-lg-5 my-5">
//                 {/* Back Button */}
//                 <div className="mb-4">
//                     <button 
//                         className="btn btn-outline-secondary"
//                         onClick={() => navigate('/explore')}
//                     >
//                         <i className="bi bi-arrow-left me-2"></i>
//                         Back to Vehicles
//                     </button>
//                 </div>

//                 <div className="row gx-4 gx-lg-5 align-items-center">
//                     {/* Vehicle Image */}
//                     <div className="col-md-6">
//                         <img 
//                             className="card-img-top mb-5 mb-md-0" 
//                             src={data.imageUrl || fallbackImageUrl}
//                             alt={data.name || 'Vehicle Image'}
//                             onError={(e) => {
//                                 e.target.src = fallbackImageUrl;
//                             }}
//                             style={{ 
//                                 width: '100%', 
//                                 height: '400px', 
//                                 objectFit: 'cover',
//                                 borderRadius: '8px'
//                             }}
//                         />
//                     </div>
                    
//                     {/* Vehicle Details */}
//                     <div className="col-md-6">
//                         {/* Category */}
//                         <div className="fs-5 mb-1">
//                             Category: 
//                             <span className="badge text-bg-warning ms-2">
//                                 {data.category || 'Uncategorized'}
//                             </span>
//                         </div>
                        
//                         {/* Vehicle Name */}
//                         <h1 className="display-5 fw-bolder">
//                             {data.name || 'Vehicle Name Not Available'}
//                         </h1>
                        
//                         {/* Price */}
//                         <div className="fs-5 mb-2">
//                             <span>Rs.{formatPrice(data.price)}</span>
//                             <span className="text-muted ms-2">/day</span>
//                         </div>
                        
//                         {/* Description */}
//                         <p className="lead">
//                             {data.description || 'No description available for this vehicle.'}
//                         </p>
                        
//                         {/* Add to Cart Button */}
//                         <div className="d-flex mt-4">
//                             <button 
//                                 className="btn btn-outline-dark flex-shrink-0" 
//                                 type="button"
//                                 onClick={() => {
//                                     toast.success('Vehicle added to cart!');
//                                 }}
//                             >
//                                 <i className="bi-cart-fill me-1"></i>
//                                 Add to cart
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default VehicleDetails;

import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { fetchVehicleDetails } from '../../service/vehicleService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VehicleDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    // Get cart functionality from StoreContext
    const { increaseQty, decreaseQty, quantities } = useContext(StoreContext);
    
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Get current quantity for this vehicle
    const currentQuantity = quantities[id] || 0;

    useEffect(() => {
        const loadVehicleDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const vehicleData = await fetchVehicleDetails(id);
                
                if (!vehicleData || Object.keys(vehicleData).length === 0) {
                    throw new Error('No vehicle data received');
                }
                
                setData(vehicleData);
                
            } catch (error) {
                setError(error.message);
                toast.error('Error displaying vehicle details: ' + error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            loadVehicleDetails();
        } else {
            setError('No vehicle ID provided');
            setLoading(false);
        }
    }, [id]);

    // Handle add to cart
    const handleAddToCart = () => {
        try {
            increaseQty(id);
            toast.success(`${data.name || 'Vehicle'} added to cart!`);
        } catch (error) {
            toast.error('Failed to add to cart');
        }
    };

    // Handle quantity increase
    const handleIncreaseQuantity = () => {
        try {
            increaseQty(id);
            toast.success('Quantity increased');
        } catch (error) {
            toast.error('Failed to increase quantity');
        }
    };

    // Handle quantity decrease
    const handleDecreaseQuantity = () => {
        try {
            decreaseQty(id);
            if (currentQuantity === 1) {
                toast.info(`${data.name || 'Vehicle'} removed from cart`);
            } else {
                toast.success('Quantity decreased');
            }
        } catch (error) {
            toast.error('Failed to decrease quantity');
        }
    };

    // Loading state
    if (loading) {
        return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3">Loading vehicle details...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="alert alert-danger" role="alert">
                                <h4 className="alert-heading">Error</h4>
                                <p>{error}</p>
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => navigate('/explore')}
                                >
                                    Back to Vehicles
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // Helper function to format price
    const formatPrice = (price) => {
        if (!price && price !== 0) return 'N/A';
        return typeof price === 'number' ? price.toFixed(2) : price;
    };

    // Fallback image URL
    const fallbackImageUrl = `data:image/svg+xml;base64,${btoa(`
        <svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="400" fill="#f8f9fa"/>
            <text x="250" y="200" font-family="Arial, sans-serif" font-size="18" text-anchor="middle" fill="#6c757d">
                ${data.name || 'Vehicle Image'}
            </text>
        </svg>
    `)}`;

    // Check if vehicle is available
    const isAvailable = data.available !== false; // Default to true if not specified

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                {/* Back Button */}
                <div className="mb-4">
                    <button 
                        className="btn btn-outline-secondary"
                        onClick={() => navigate('/explore')}
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                        Back to Vehicles
                    </button>
                </div>

                <div className="row gx-4 gx-lg-5 align-items-center">
                    {/* Vehicle Image */}
                    <div className="col-md-6">
                        <div className="position-relative">
                            <img 
                                className="card-img-top mb-5 mb-md-0" 
                                src={data.imageUrl || fallbackImageUrl}
                                alt={data.name || 'Vehicle Image'}
                                onError={(e) => {
                                    e.target.src = fallbackImageUrl;
                                }}
                                style={{ 
                                    width: '100%', 
                                    height: '400px', 
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                    filter: !isAvailable ? 'grayscale(100%)' : 'none'
                                }}
                            />
                            
                            {/* Availability Badge */}
                            <div 
                                className={`position-absolute top-0 end-0 m-3 badge ${isAvailable ? 'bg-success' : 'bg-danger'}`}
                                style={{ fontSize: '0.9em' }}
                            >
                                {isAvailable ? 'Available' : 'Unavailable'}
                            </div>

                            {/* Quantity indicator if item is in cart */}
                            {currentQuantity > 0 && (
                                <div 
                                    className="position-absolute bottom-0 start-0 m-3 badge bg-primary"
                                    style={{ fontSize: '1em' }}
                                >
                                    In Cart: {currentQuantity}
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {/* Vehicle Details */}
                    <div className="col-md-6">
                        {/* Category */}
                        <div className="fs-5 mb-1">
                            Category: 
                            <span className="badge text-bg-warning ms-2">
                                {data.category || 'Uncategorized'}
                            </span>
                        </div>
                        
                        {/* Vehicle Name */}
                        <h1 className="display-5 fw-bolder">
                            {data.name || 'Vehicle Name Not Available'}
                        </h1>
                        
                        {/* Price */}
                        <div className="fs-5 mb-3">
                            <span className="fw-bold">Rs.{formatPrice(data.price)}</span>
                            <span className="text-muted ms-2">/day</span>
                        </div>
                        
                        {/* Description */}
                        <p className="lead mb-4">
                            {data.description || 'No description available for this vehicle.'}
                        </p>

                        {/* Features Section */}
                        <div className="mb-4">
                            <h5>Features:</h5>
                            <div className="d-flex gap-3 flex-wrap">
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-people me-2"></i>
                                    <span>4 Seats</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-gear me-2"></i>
                                    <span>Auto</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <i className="bi bi-shield-check me-2"></i>
                                    <span>Insured</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Cart Actions */}
                        <div className="d-flex align-items-center gap-3 mb-3">
                            {isAvailable ? (
                                currentQuantity > 0 ? (
                                    // Quantity Controls
                                    <div className="d-flex align-items-center">
                                        <button 
                                            className="btn btn-outline-secondary"
                                            onClick={handleDecreaseQuantity}
                                            aria-label="Decrease quantity"
                                        >
                                            <i className="bi bi-dash"></i>
                                        </button>
                                        
                                        <span className="mx-3 fs-5 fw-bold">
                                            {currentQuantity}
                                        </span>
                                        
                                        <button 
                                            className="btn btn-outline-secondary"
                                            onClick={handleIncreaseQuantity}
                                            aria-label="Increase quantity"
                                        >
                                            <i className="bi bi-plus"></i>
                                        </button>
                                        
                                        <span className="ms-3 text-muted">
                                            in days 
                                        </span>
                                    </div>
                                ) : (
                                    // Add to Cart Button
                                    <button 
                                        className="btn btn-primary btn-lg px-4"
                                        onClick={handleAddToCart}
                                    >
                                        <i className="bi bi-cart-plus me-2"></i>
                                        Booking Vehicle
                                    </button>
                                )
                            ) : (
                                // Unavailable Button
                                <button 
                                    className="btn btn-secondary btn-lg px-4"
                                    disabled
                                >
                                    <i className="bi bi-x-circle me-2"></i>
                                    Unavailable
                                </button>
                            )}
                        </div>

                        {/* Additional Info */}
                        <div className="row">
                            <div className="col-6">
                                <small className="text-muted">
                                    <i className="bi bi-calendar me-1"></i>
                                    Available for booking
                                </small>
                            </div>
                            <div className="col-6">
                                <small className="text-muted">
                                    <i className="bi bi-geo-alt me-1"></i>
                                    Pickup available
                                </small>
                            </div>
                        </div>

                        {/* Total Calculation */}
                        {currentQuantity > 0 && (
                            <div className="mt-4 p-3 bg-light rounded">
                                <div className="d-flex justify-content-between">
                                    <span>Subtotal ({currentQuantity} day{currentQuantity > 1 ? 's' : ''})</span>
                                    <span className="fw-bold">
                                        Rs.{formatPrice((data.price || 0) * currentQuantity)}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Additional Details Section */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="mb-0">Vehicle Information</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6>Specifications</h6>
                                        <ul className="list-unstyled">
                                            <li><strong>Category:</strong> {data.category || 'N/A'}</li>
                                            <li><strong>Transmission:</strong> Automatic</li>
                                            <li><strong>Fuel Type:</strong> Petrol</li>
                                            <li><strong>Seating:</strong> 4 Passengers</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Rental Terms</h6>
                                        <ul className="list-unstyled">
                                            <li><strong>Minimum Rental:</strong> 1 day</li>
                                            <li><strong>Insurance:</strong> Included</li>
                                            <li><strong>Mileage:</strong> 200km/day</li>
                                            <li><strong>Fuel Policy:</strong> Full to Full</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VehicleDetails;