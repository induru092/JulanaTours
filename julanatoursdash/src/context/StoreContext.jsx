import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchVehiclesList } from "../service/vehicleService";
import { addToCart } from "../service/cartService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [vehicleList, setVehicleList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [token,setToken] = useState("");

    const increaseQty = async (vehicleId) => {
        setQuantities((prew) => ({...prev , [vehicleId]: (prev[vehicleId] || 0)+1}));
        await addToCart(vehicleId, token);
    };

    const decreaseQty = async (vehicleId) => {
        setQuantities((prew) => ({...prev , [vehicleId]: prev[vehicleId] > 0 ? prev[vehicleId] - 1 : 0}));
        await removeQtyFromCart(vehicleId, token);
    };

    const removeFromCart = (vehicleId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = {...prevQuantities};
            delete updatedQuantities[vehicleId];
            return updatedQuantities;
        }
        )
    };
 
    const loadCartData = async (token) => {
        const items = getCartData(token);
        setQuantities(items);    }

    const contextValue ={
        vehicleList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart,
        token,
        setToken,
        setQuantities,
        loadCartData,
    };

    useEffect(() => {
        async function loadData() {
           const data = await fetchVehiclesList();
           setVehicleList(data);
           if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            await loadCartData(localStorage.getItem('token'));
           }
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}