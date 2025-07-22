import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchVehiclesList } from "../service/vehicleService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [vehicleList, setVehicleList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [token,setToken] = useState("");

    const increaseQty = (vehicleId) => {
        setQuantities((prew) => ({...prev , [vehicleId]: (prev[vehicleId] || 0)+1}));
    }

    const decreaseQty = (vehicleId) => {
        setQuantities((prew) => ({...prev , [vehicleId]: prev[vehicleId] > 0 ? prev[vehicleId] - 1 : 0}));
    }

    const removeFromCart = (vehicleId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = {...prevQuantities};
            delete updatedQuantities[vehicleId];
            return updatedQuantities;
        }
        )
    }
 
    const contextValue ={
        vehicleList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart,
        token,
        setToken,
    };

    useEffect(() => {
        async function loadData() {
           const data = await fetchVehiclesList();
           setVehicleList(data);
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}