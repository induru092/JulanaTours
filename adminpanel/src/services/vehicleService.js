import axios from "axios";

const API_URL = 'http://localhost:8080/api/vehicles';

export const addVehicle = async (vehicleData, image) => {
    const formData = new FormData();
    formData.append('vehicle', JSON.stringify(vehicleData));
    formData.append('file', image);

    try {
        await axios.post(API_URL, formData, {headers: { "Content-Type": "multipart/form-data"}});
    } catch (error) {
        console.log('Error', error);
        throw error;
    }
}

export const getVehicleList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error fetching vehicle list', error);
        throw error;
        
    }
}

export const deleteVehicle = async (vehicleId) => {
    try {
        const response = await axios.delete(API_URL+'/'+vehicleId);
        return response.status === 204;
    } catch (error) {
        console.log('Error while deleting the food.', error);
        throw error;
    }
}