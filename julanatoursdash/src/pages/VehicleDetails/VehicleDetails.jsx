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


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVehicleDetails } from '../../service/vehicleService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const VehicleDetails = () => {
    const {id} = useParams();

    const [data, setData] = useState({});
    

    useEffect(() => {
        const loadVehicleDetails = async () => {
            try {
                const vehicleData = await fetchVehicleDetails(id);
                setData(vehicleData);
            } catch (error) {
                toast.error('Error displaying vehicle details');
            }
        }
        loadVehicleDetails();
    }, [id]);
  return (
    <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={data.imageUrl} alt="..." /></div>
            <div className="col-md-6">
                <div className="fs-5 mb-1">Category: <span className='badge text-bg-warning'>{data.category}</span></div>
                <h1 className="display-5 fw-bolder">{data.name}</h1>
                <div className="fs-5 mb-2">
                    <span>Rs.{data.price}.00</span>
                </div>
                <p className="lead">{data.description}</p>
                <div className="d-flex">
                    <button className="btn btn-outline-dark flex-shrink-0" type="button">
                        <i className="bi-cart-fill me-1"></i>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default VehicleDetails;