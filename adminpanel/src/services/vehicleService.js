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

import axios from "axios";

const API_URL = 'http://localhost:8080/api';

// Create axios instance with authentication
const api = axios.create({
    baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use(
    (config) => {
        // Try multiple token sources to ensure compatibility
        let token = localStorage.getItem('authToken') || 
                   localStorage.getItem('token') ||
                   sessionStorage.getItem('authToken') ||
                   sessionStorage.getItem('token');
        
        if (token) {
            // Ensure token has proper Bearer format
            config.headers.Authorization = token.startsWith('Bearer ') 
                ? token 
                : `Bearer ${token}`;
            
            console.log('Adding token to request:', token.substring(0, 20) + '...');
        } else {
            console.warn('No authentication token found');
        }
        
        return config;
    },
    (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
    }
);

// Handle responses and redirect on auth errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('API Error:', error.response?.status, error.message);
        
        // Handle both 401 (Unauthorized) and 403 (Forbidden) as auth errors
        if (error.response?.status === 401 || error.response?.status === 403) {
            console.warn('Authentication failed, clearing tokens and redirecting...');
            
            // Clear all possible token storage locations
            localStorage.removeItem('authToken');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            sessionStorage.removeItem('authToken');
            sessionStorage.removeItem('token');
            
            // Redirect to login page
            window.location.href = '/login';
        }
        
        return Promise.reject(error);
    }
);

// ========== VEHICLE FUNCTIONS ==========
export const addVehicle = async (vehicleData, image) => {
    const formData = new FormData();
    formData.append('vehicle', JSON.stringify(vehicleData));
    formData.append('file', image);

    try {
        const response = await api.post('/vehicles', formData, {
            headers: { "Content-Type": "multipart/form-data"}
        });
        return response.data;
    } catch (error) {
        console.error('Error adding vehicle:', error);
        throw error;
    }
}

export const getVehicleList = async () => {
    try {
        console.log('Fetching vehicle list...');
        const response = await api.get('/vehicles');
        console.log('Vehicle list response:', response.status, response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicle list:', error);
        throw error;
    }
}

export const fetchVehiclesList = async () => {
    try {
        console.log('Fetching vehicles list...');
        const response = await api.get('/vehicles');
        console.log('Vehicles list response:', response.status, response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching vehicles list:', error);
        throw error;
    }
}

export const deleteVehicle = async (vehicleId) => {
    try {
        const response = await api.delete(`/vehicles/${vehicleId}`);
        return response.status === 200 || response.status === 204;
    } catch (error) {
        console.error('Error deleting vehicle:', error);
        throw error;
    }
}

// ========== ORDERS FUNCTIONS ==========

// Fetch all orders
export const fetchOrders = async () => {
    try {
        console.log('Fetching orders...');
        const response = await api.get('/orders');
        console.log('Orders response:', response.status, response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders:', error);
        throw error;
    }
};

// Fetch orders with filters
export const fetchOrdersWithFilter = async (status = null, search = null) => {
    try {
        const params = {};
        if (status && status !== 'All') params.status = status;
        if (search) params.search = search;
        
        console.log('Fetching filtered orders with params:', params);
        const response = await api.get('/orders', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching filtered orders:', error);
        throw error;
    }
};

// Update order status
export const updateOrderStatus = async (orderId, status) => {
    try {
        console.log(`Updating order ${orderId} status to ${status}`);
        const response = await api.patch(`/orders/${orderId}/status`, { status });
        return response.data;
    } catch (error) {
        console.error('Error updating order status:', error);
        throw error;
    }
};

// Get order by ID
export const fetchOrderById = async (orderId) => {
    try {
        const response = await api.get(`/orders/${orderId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching order details:', error);
        throw error;
    }
};

// Delete order
export const deleteOrder = async (orderId) => {
    try {
        const response = await api.delete(`/orders/${orderId}`);
        return response.status === 200 || response.status === 204;
    } catch (error) {
        console.error('Error deleting order:', error);
        throw error;
    }
};

// Get order statistics
export const fetchOrderStats = async () => {
    try {
        const response = await api.get('/orders/stats');
        return response.data;
    } catch (error) {
        console.error('Error fetching order stats:', error);
        throw error;
    }
};

export const toggleVehicleAvailability = async (vehicleId, available) => {
    try {
        console.log(`Toggling vehicle ${vehicleId} availability to ${available}`);
        const response = await api.patch(`/vehicles/${vehicleId}/availability`, { available });
        return response.data;
    } catch (error) {
        console.error('Error toggling vehicle availability:', error);
        throw error;
    }
}

export default api;