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
        const response = await axios.get('${API_URL}/${id}');
        return response.data;
    } catch (error) {
        console.log('Error fetching vehicle details:', error);
        throw error;
    }   
}