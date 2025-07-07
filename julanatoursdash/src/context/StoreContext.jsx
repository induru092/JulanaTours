import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchVehiclesList } from "../service/vehicleService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

    const [vehicleList, setVehicleList] = useState([]);

    const contextValue ={
        vehicleList
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