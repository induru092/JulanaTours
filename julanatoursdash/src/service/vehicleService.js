import axios from "axios";

const API_URL = 'http://localhost:8080/api/vehicles';

export const fetchVehiclesList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Error'.error);
        throw error;
    }
}

export const fetchVehicleDetails = async (id) => {
      const response = await axios.get[API_URL+"/" + id];
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data);
      }
    }