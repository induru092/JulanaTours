import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [vehicleList, setVehicleList] = useState([]);

    const fetchVehicleList = async () => {
        const response = await axios.get('http://localhost:8080/api/vehicles');
        setVehicleList(response.data);
    }

    const contextValue ={
        vehicleList
    };

    useEffect(() => {
        async function loadData() {
            await fetchVehicleList();
        }
        loadData();
    }, []);

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}