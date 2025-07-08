import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContent = createContext(null);

export const StoreContextProvider = (props) => {
    const {vehicleList, setVehicleList} = useState([]);

    const fetchVehicleList = async () => {
        const response = await axios.get('http://localhost:8080/api/vehicles');
        setVehicleList(response.data);
        console.log(response.data);
    }

    const contextValue = {
            vehicleList
    };

    useEffect(() => {
            async function useLoaderData() {
               await fetchVehicleList();

            }
            useLoaderData();
    }, []);
    return(
        <StoreContext.provider value={contextValue}>
            {props.children}
        </StoreContext.provider>
    )
}