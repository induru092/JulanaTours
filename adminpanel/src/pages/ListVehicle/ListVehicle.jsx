// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import './ListVehicle.css';
// import { deleteVehicle, getVehicleList } from '../../services/vehicleService';

// const ListVehicle = () => {
//   const [list, setList] = useState([]);
//   const fetchList = async() => {
//     try {
//       const data = await getVehicleList();
//       setList(data);
//     } catch (error) {
//       toast.error('Error while reading the foods.');
//     }
//   }

//   const removeVehicle = async (vehicleId) => {
//     try {
//       const success = await deleteVehicle(vehicleId);
//       if (success) {
//         toast.success('Vehicle removed.');
//         await fetchList();
//       } else {
//         toast.error('Error occred while removing the vehicle.');
//       }
//     } catch (error) {
//       toast.error('Error occred while removing the vehicle.');
//     }
//     console.log(error,'remove vehicle error');
//   }

//   useEffect(() => {
//     fetchList();
//   }, []);
//   return (
//     <div className="py-5 row justify-content-center">
//       <div className="col-11 card">
//         <table className='table'>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               list.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>
//                       <img src={item.imageUrl} alt="" height={48} width={48} />
//                     </td>
//                     <td>{item.name}</td>
//                     <td>{item.category}</td>
//                     <td>Rs.{item.price}</td>
//                     <td className='text-danger'>
//                       <i className='bi bi-x-circle-fill' onClick={() => removeVehicle(item.id)}></i>
//                     </td>
//                   </tr>
//                 )
//               })
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }

// export default ListVehicle;

// import React, { useState, useEffect } from 'react';
// import { fetchVehiclesList } from '../../services/vehicleService';
// import authService from '../../services/authService';
// import './ListVehicle.css';

// const ListVehicle = () => {
//   const [vehicles, setVehicles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchList();
//   }, []);

//   const fetchList = async () => {
//     try {
//       setLoading(true);
//       setError('');
      
//       // Check if user is authenticated
//       if (!authService.isAuthenticated()) {
//         setError('You must be logged in to view vehicles');
//         return;
//       }
      
//       console.log('Fetching vehicles with token:', authService.getToken()?.substring(0, 20) + '...');
      
//       const data = await fetchVehiclesList();
//       console.log('Vehicles data received:', data);
      
//       setVehicles(Array.isArray(data) ? data : []);
//     } catch (error) {
//       console.error('Error fetching vehicles:', error);
      
//       if (error.response?.status === 401) {
//         setError('Session expired. Please login again.');
//         // Clear invalid token and redirect
//         authService.logout();
//       } else {
//         setError(error.message || 'Failed to fetch vehicles');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleRetry = () => {
//     fetchList();
//   };

//   if (loading) {
//     return (
//       <div className="vehicle-list-container">
//         <div className="loading-spinner">
//           <div className="spinner"></div>
//           <p>Loading vehicles...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="vehicle-list-container">
//         <div className="error-container">
//           <div className="error-icon">⚠️</div>
//           <h2>Error Loading Vehicles</h2>
//           <p>{error}</p>
//           <button onClick={handleRetry} className="retry-button">
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="vehicle-list-container">
//       <div className="vehicle-list-header">
//         <h1>Vehicle List</h1>
//         <p>Manage your fleet of vehicles</p>
//       </div>

//       {vehicles.length === 0 ? (
//         <div className="empty-state">
//           <div className="empty-icon">🚗</div>
//           <h2>No Vehicles Found</h2>
//           <p>No vehicles are currently available in the system.</p>
//         </div>
//       ) : (
//         <div className="vehicles-grid">
//           {vehicles.map((vehicle) => (
//             <div key={vehicle.id} className="vehicle-card">
//               <div className="vehicle-image">
//                 {vehicle.imageUrl ? (
//                   <img src={vehicle.imageUrl} alt={vehicle.name} />
//                 ) : (
//                   <div className="placeholder-image">🚗</div>
//                 )}
//               </div>
//               <div className="vehicle-info">
//                 <h3>{vehicle.name || 'Unknown Vehicle'}</h3>
//                 <p className="vehicle-type">{vehicle.type || 'N/A'}</p>
//                 <p className="vehicle-price">
//                   ${vehicle.pricePerDay || 0}/day
//                 </p>
//                 <div className="vehicle-actions">
//                   <button className="btn-view">View Details</button>
//                   <button className="btn-edit">Edit</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ListVehicle;

import React, { useState, useEffect } from 'react';
import { fetchVehiclesList, deleteVehicle } from '../../services/vehicleService';
import authService from '../../services/authService';
import { toast } from 'react-toastify';
import './ListVehicle.css';

const ListVehicle = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteModal, setDeleteModal] = useState({
    isOpen: false,
    vehicleId: null,
    vehicleName: '',
    isDeleting: false
  });

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Check if user is authenticated
      if (!authService.isAuthenticated()) {
        setError('You must be logged in to view vehicles');
        return;
      }
      
      console.log('Fetching vehicles with token:', authService.getToken()?.substring(0, 20) + '...');
      
      const data = await fetchVehiclesList();
      console.log('Vehicles data received:', data);
      
      setVehicles(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      
      if (error.response?.status === 401) {
        setError('Session expired. Please login again.');
        // Clear invalid token and redirect
        authService.logout();
      } else {
        setError(error.message || 'Failed to fetch vehicles');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    fetchList();
  };

  const openDeleteModal = (vehicleId, vehicleName) => {
    setDeleteModal({
      isOpen: true,
      vehicleId,
      vehicleName,
      isDeleting: false
    });
  };

  const closeDeleteModal = () => {
    if (deleteModal.isDeleting) return; // Prevent closing while deleting
    
    setDeleteModal({
      isOpen: false,
      vehicleId: null,
      vehicleName: '',
      isDeleting: false
    });
  };

  const handleDeleteVehicle = async () => {
    try {
      setDeleteModal(prev => ({ ...prev, isDeleting: true }));
      
      const success = await deleteVehicle(deleteModal.vehicleId);
      
      if (success) {
        // Remove the deleted vehicle from the local state
        setVehicles(prevVehicles => 
          prevVehicles.filter(vehicle => vehicle.id !== deleteModal.vehicleId)
        );
        
        toast.success(`Vehicle "${deleteModal.vehicleName}" deleted successfully`);
        closeDeleteModal();
      } else {
        toast.error('Failed to delete vehicle');
      }
    } catch (error) {
      console.error('Error deleting vehicle:', error);
      
      if (error.response?.status === 404) {
        toast.error('Vehicle not found');
        // Remove from local state if it doesn't exist on server
        setVehicles(prevVehicles => 
          prevVehicles.filter(vehicle => vehicle.id !== deleteModal.vehicleId)
        );
        closeDeleteModal();
      } else if (error.response?.status === 403) {
        toast.error('You do not have permission to delete this vehicle');
      } else if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.');
        authService.logout();
      } else {
        toast.error('Error deleting vehicle. Please try again.');
      }
    } finally {
      setDeleteModal(prev => ({ ...prev, isDeleting: false }));
    }
  };

  if (loading) {
    return (
      <div className="vehicle-list-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading vehicles...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="vehicle-list-container">
        <div className="error-container">
          <div className="error-icon">⚠️</div>
          <h2>Error Loading Vehicles</h2>
          <p>{error}</p>
          <button onClick={handleRetry} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="vehicle-list-container">
      <div className="vehicle-list-header">
        <h1>Vehicle List</h1>
        <p>Manage your fleet of vehicles</p>
      </div>

      {vehicles.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🚗</div>
          <h2>No Vehicles Found</h2>
          <p>No vehicles are currently available in the system.</p>
        </div>
      ) : (
        <div className="vehicles-grid">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">
                {vehicle.imageUrl ? (
                  <img 
                    src={vehicle.imageUrl} 
                    alt={vehicle.name}
                    className="vehicle-img"
                  />
                ) : (
                  <div className="placeholder-image">🚗</div>
                )}
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.name || 'Unknown Vehicle'}</h3>
                <p className="vehicle-type">{vehicle.category || vehicle.type || 'N/A'}</p>
                <p className="vehicle-price">
                  Rs.{vehicle.price || vehicle.pricePerDay || 0}/day
                </p>
                <div className="vehicle-actions">
                  <button className="btn-view">View Details</button>
                  <button className="btn-edit">Edit</button>
                  <button 
                    className="btn-delete"
                    onClick={() => openDeleteModal(vehicle.id, vehicle.name)}
                    title="Delete Vehicle"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteModal.isOpen && (
        <div className="modal-overlay" onClick={closeDeleteModal}>
          <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Confirm Delete</h2>
              <button 
                className="modal-close"
                onClick={closeDeleteModal}
                disabled={deleteModal.isDeleting}
              >
                ×
              </button>
            </div>
            <div className="modal-body">
              <div className="warning-icon">⚠️</div>
              <p>Are you sure you want to delete the vehicle:</p>
              <p className="vehicle-name-highlight">"{deleteModal.vehicleName}"</p>
              <p className="warning-text">This action cannot be undone.</p>
            </div>
            <div className="modal-footer">
              <button 
                className="btn-cancel"
                onClick={closeDeleteModal}
                disabled={deleteModal.isDeleting}
              >
                Cancel
              </button>
              <button 
                className="btn-confirm-delete"
                onClick={handleDeleteVehicle}
                disabled={deleteModal.isDeleting}
              >
                {deleteModal.isDeleting ? (
                  <>
                    <span className="delete-spinner"></span>
                    Deleting...
                  </>
                ) : (
                  'Delete Vehicle'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListVehicle;