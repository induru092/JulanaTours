// import { createContext, useEffect, useState, useContext } from "react";
// import { fetchVehiclesList } from "../service/vehicleService";
// import { useAuth } from "./AuthContext";

// export const StoreContext = createContext(null);

// export const StoreContextProvider = (props) => {
//     const [vehicleList, setVehicleList] = useState([]);
//     const [quantities, setQuantities] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
    
//     const { isAuthenticated, user } = useAuth();

//     const increaseQty = (vehicleId) => {
//         setQuantities((prev) => ({
//             ...prev, 
//             [vehicleId]: (prev[vehicleId] || 0) + 1 
//         }));
//     };

//     const decreaseQty = (vehicleId) => {
//         setQuantities((prev) => ({
//             ...prev, 
//             [vehicleId]: prev[vehicleId] > 0 ? prev[vehicleId] - 1 : 0 
//         }));
//     };

//     const removeFromBookingVehicle = (vehicleId) => {
//         setQuantities((prevQuantities) => {
//             const updatedQuantities = { ...prevQuantities };
//             delete updatedQuantities[vehicleId];
//             return updatedQuantities;
//         });
//     };

//     const loadVehicles = async () => {
//         if (!isAuthenticated) {
//             console.log('Not authenticated, skipping vehicle load');
//             return;
//         }

//         try {
//             setLoading(true);
//             setError(null);
//             console.log('Loading vehicles for authenticated user...');
            
//             const data = await fetchVehiclesList();
//             console.log('Vehicles loaded successfully:', data);
            
//             setVehicleList(Array.isArray(data) ? data : []);
//         } catch (error) {
//             console.error('Error loading vehicles:', error);
//             setError(error.message || 'Failed to load vehicles');
//             setVehicleList([]);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Load vehicles when authentication state changes
//     useEffect(() => {
//         if (isAuthenticated && user) {
//             loadVehicles();
//         } else {
//             // Clear data when not authenticated
//             setVehicleList([]);
//             setQuantities({});
//             setError(null);
//         }
//     }, [isAuthenticated, user]);

//     const contextValue = {
//         vehicleList,
//         quantities,
//         loading,
//         error,
//         increaseQty,
//         decreaseQty,
//         removeFromBookingVehicle,
//         refreshVehicles: loadVehicles
//     };

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

import { createContext, useEffect, useState } from "react";
import { fetchVehicles } from "../service/vehicleService"; // Fixed import name
import { useAuth } from "./AuthContext";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [vehicleList, setVehicleList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const { isAuthenticated, user } = useAuth();

    const increaseQty = (vehicleId) => {
        setQuantities((prev) => ({
            ...prev,
            [vehicleId]: (prev[vehicleId] || 0) + 1
        }));
    };

    const decreaseQty = (vehicleId) => {
        setQuantities((prev) => ({
            ...prev,
            [vehicleId]: prev[vehicleId] > 0 ? prev[vehicleId] - 1 : 0
        }));
    };

    const removeFromBookingVehicle = (vehicleId) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            delete updatedQuantities[vehicleId];
            return updatedQuantities;
        });
    };

    const loadVehicles = async () => {
        if (!isAuthenticated) {
            console.log('Not authenticated, skipping vehicle load');
            return;
        }
        
        try {
            setLoading(true);
            setError(null);
            console.log('Loading vehicles for authenticated user...');
           
            const data = await fetchVehicles(); // Fixed function name
            console.log('Vehicles loaded successfully:', data);
           
            setVehicleList(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error loading vehicles:', error);
            setError(error.message || 'Failed to load vehicles');
            setVehicleList([]);
        } finally {
            setLoading(false);
        }
    };

    // Load vehicles when authentication state changes
    useEffect(() => {
        if (isAuthenticated && user) {
            loadVehicles();
        } else {
            // Clear data when not authenticated
            setVehicleList([]);
            setQuantities({});
            setError(null);
        }
    }, [isAuthenticated, user]);

    const contextValue = {
        vehicleList,
        quantities,
        loading,
        error,
        increaseQty,
        decreaseQty,
        removeFromBookingVehicle,
        refreshVehicles: loadVehicles
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};