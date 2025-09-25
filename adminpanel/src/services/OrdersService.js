// src/services/ordersService.js
import axios from "axios";

const API_URL = 'http://localhost:8080/api';

// Create axios instance with authentication
const api = axios.create({
    baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use(
    (config) => {
        let token = localStorage.getItem('authToken') || 
                   localStorage.getItem('token') ||
                   sessionStorage.getItem('authToken') ||
                   sessionStorage.getItem('token');
        
        if (token) {
            config.headers.Authorization = token.startsWith('Bearer ') 
                ? token 
                : `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Handle responses and redirect on auth errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem('authToken');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            sessionStorage.removeItem('authToken');
            sessionStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

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

import { 
  fetchOrders, 
  fetchOrdersWithFilter, 
  updateOrderStatus, 
  fetchOrderStats,
  deleteOrder 
} from '../../services/ordersService';

export default api;