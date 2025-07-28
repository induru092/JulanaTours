import axios from "axios";

const API_URL = "http://localhost:8080/api/cart";

export const addToCart = async (vehicleId, token) => {
    try {
        await axios.post(API_URL,{vehicleId}, {headers: {"Authorization":`Bearer ${token}`}});
    }catch(error){
        console.error('Error while adding the cart data', error);
    }
}

export const removeQtyFromCart = async (vehicleId, token) => {
    try {
        axios.post(API_URL="/remove",{vehicleId}, {headers: {"Authorization":`Bearer ${token}`}});
    }catch(error){
        console.error('Error while removing qty from cart', error);        
    }
}

export const getCartData = async (token) => {
    try {
        const response = await axios.get(API_URL,{headers: {"Authorization":`Bearer ${token}`}});
        return response.data.items;
    }catch(error){
        console.error('Error while fetching the cart data', error);
    }
}