
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
//         // Add validation for ID
//         if (!id) {
//             throw new Error('Vehicle ID is required');
//         }
        
//         console.log(`Fetching vehicle details for ID: ${id}`); // Debug log
        
//         const response = await axios.get(`${API_URL}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.log('Error fetching vehicle details:', error);
        
//         // More specific error handling
//         if (error.response) {
//             // Server responded with error status
//             console.log('Error response:', error.response.data);
//             console.log('Error status:', error.response.status);
            
//             if (error.response.status === 400) {
//                 throw new Error('Invalid vehicle ID or request format');
//             } else if (error.response.status === 404) {
//                 throw new Error('Vehicle not found');
//             } else if (error.response.status === 500) {
//                 throw new Error('Server error occurred');
//             }
//         } else if (error.request) {
//             // Network error
//             throw new Error('Network error: Unable to connect to server');
//         }
        
//         throw error;
//     }  
// }



import axios from "axios";

const API_URL = 'http://localhost:8080/api/vehicles';

export const fetchVehiclesList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching vehicle list:', error);
        throw error;
    }
}

export const fetchVehicleDetails = async (id) => {
    try {
        // Use backticks for template literals, not single quotes
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.log('Error fetching vehicle details:', error);
        throw error;
    }   
}

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
//         const response = await axios.get(`${API_URL}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.log('Error fetching vehicle details:', error);
//         throw error;
//     }   
// }