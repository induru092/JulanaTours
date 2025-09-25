// import axios from "axios";

// const API_URL = 'http://localhost:8080/api/vehicles';

// export const fetchVehiclesList = async () => {
//     try {
//         const response = await axios.get(API_URL);
//         return response.data;
//     } catch (error) {
//         console.log('Error fetching vehicle list:', error);
//         throw error;
//     }
// }

// export const fetchVehicleDetails = async (id) => {
//     try {
//         // Use backticks for template literals, not single quotes
//         const response = await axios.get(`${API_URL}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.log('Error fetching vehicle details:', error);
//         throw error;
//     }   
// }

// import api from './authService';

// const API_URL = '/vehicles';

// export const vehicleService = {
//   getVehicleList: async () => {
//     try {
//       const response = await api.get(API_URL);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching vehicle list:', error);
//       throw error;
//     }
//   },

//   getVehicleById: async (id) => {
//     try {
//       const response = await api.get(`${API_URL}/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching vehicle:', error);
//       throw error;
//     }
//   },

//   bookVehicle: async (bookingData) => {
//     try {
//       const response = await api.post('/bookings', bookingData);
//       return response.data;
//     } catch (error) {
//       console.error('Error booking vehicle:', error);
//       throw error;
//     }
//   },

//   getUserBookings: async () => {
//     try {
//       const response = await api.get('/bookings/my-bookings');
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching user bookings:', error);
//       throw error;
//     }
//   }
// };

// export default vehicleService;

// import axios from "axios";

// const API_URL = 'http://localhost:8080/api';

// // Create axios instance with authentication
// const api = axios.create({
//     baseURL: API_URL,
// });

// // Add token to requests
// api.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Handle responses and redirect on auth errors
// api.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response?.status === 401) {
//             localStorage.removeItem('authToken');
//             localStorage.removeItem('user');
//             window.location.href = '/login';
//         }
//         return Promise.reject(error);
//     }
// );

// export const addVehicle = async (vehicleData, image) => {
//     const formData = new FormData();
//     formData.append('vehicle', JSON.stringify(vehicleData));
//     formData.append('file', image);

//     try {
//         const response = await api.post('/vehicles', formData, {
//             headers: { "Content-Type": "multipart/form-data"}
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error adding vehicle:', error);
//         throw error;
//     }
// }

// export const getVehicleList = async () => {
//     try {
//         const response = await api.get('/vehicles');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching vehicle list:', error);
//         throw error;
//     }
// }

// export const fetchVehicleDetails = async (id) => {
//     try {
//         console.log(`Fetching vehicle details for ID: ${id}`);
//         const response = await api.get(`/${id}`);
//         console.log('Vehicle details fetched successfully:', response.data);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching vehicle details:', error);
//         throw error;
//     }   
// }

// export const fetchVehiclesList = async () => {
//     try {
//         const response = await api.get('/vehicles');
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching vehicles list:', error);
//         throw error;
//     }
// }

// export const deleteVehicle = async (vehicleId) => {
//     try {
//         const response = await api.delete(`/vehicles/${vehicleId}`);
//         return response.status === 200 || response.status === 204;
//     } catch (error) {
//         console.error('Error deleting vehicle:', error);
//         throw error;
//     }
// }

// export default api;

import axios from 'axios';

// Helper function to get token from localStorage
const getToken = () => {
    // First try to get standalone token
    let token = localStorage.getItem('token');
    
    // If not found, try to get it from user object
    if (!token) {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                const user = JSON.parse(userData);
                token = user.token;
            } catch (error) {
                console.error('Error parsing user data from localStorage:', error);
            }
        }
    }
    
    return token;
};

// Create API client with base configuration
const api = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add request interceptor to include authentication token
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        console.log('Request interceptor - Token found:', token ? 'YES' : 'NO');
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        } else {
            console.warn('No token found for API request');
        }
        
        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// Add response interceptor for error handling
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('API Response Error:', {
            status: error.response?.status,
            data: error.response?.data,
            url: error.config?.url
        });
        
        if (error.response?.status === 401) {
            console.log('Unauthorized - clearing authentication data');
            // Handle unauthorized access
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Vehicle service functions
export const fetchVehicles = async () => {
    try {
        console.log('Fetching all vehicles...');
        const token = getToken();
        console.log('Token being used:', token ? 'exists' : 'missing');
        
        if (!token) {
            throw new Error('No authentication token available. Please login again.');
        }
        
        const response = await api.get('/vehicles');
        console.log('API Response status:', response.status);
        console.log('Vehicles fetched successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicles:', error);
        console.error('Error status:', error.response?.status);
        console.error('Error data:', error.response?.data);
        
        if (error.response?.status === 403) {
            throw new Error('Access denied. Please check your permissions or login again.');
        }
        throw new Error(error.response?.data?.message || error.message || 'Failed to fetch vehicles');
    }
};

export const fetchVehicleDetails = async (id) => {
    try {
        console.log('Fetching vehicle details for ID:', id);
        
        if (!id) {
            throw new Error('Vehicle ID is required');
        }
        
        const token = getToken();
        if (!token) {
            throw new Error('No authentication token available. Please login again.');
        }
        
        const response = await api.get(`/vehicles/${id}`);
        console.log('Vehicle details fetched successfully:', response.data);
        
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicle details:', error);
        if (error.response?.status === 404) {
            throw new Error('Vehicle not found');
        }
        if (error.response?.status === 403) {
            throw new Error('Access denied. Please check your permissions.');
        }
        throw new Error(error.response?.data?.message || 'Failed to fetch vehicle details');
    }
};

export const addVehicle = async (vehicleData, imageFile) => {
    try {
        console.log('Adding new vehicle:', vehicleData.name);
        
        const token = getToken();
        if (!token) {
            throw new Error('No authentication token available. Please login again.');
        }
        
        const formData = new FormData();
        formData.append('vehicle', JSON.stringify(vehicleData));
        formData.append('file', imageFile);
        
        const response = await api.post('/vehicles', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
        console.log('Vehicle added successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error adding vehicle:', error);
        throw new Error(error.response?.data?.message || 'Failed to add vehicle');
    }
};

export const updateVehicle = async (id, vehicleData, imageFile) => {
    try {
        console.log('Updating vehicle:', id);
        
        const token = getToken();
        if (!token) {
            throw new Error('No authentication token available. Please login again.');
        }
        
        const formData = new FormData();
        formData.append('vehicle', JSON.stringify(vehicleData));
        if (imageFile) {
            formData.append('file', imageFile);
        }
        
        const response = await api.put(`/vehicles/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        
        console.log('Vehicle updated successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating vehicle:', error);
        throw new Error(error.response?.data?.message || 'Failed to update vehicle');
    }
};

export const deleteVehicle = async (id) => {
    try {
        console.log('Deleting vehicle:', id);
        
        const token = getToken();
        if (!token) {
            throw new Error('No authentication token available. Please login again.');
        }
        
        await api.delete(`/vehicles/${id}`);
        console.log('Vehicle deleted successfully');
        
        return true;
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        throw new Error(error.response?.data?.message || 'Failed to delete vehicle');
    }
};

// Export the configured API client for use in other services
export default api;