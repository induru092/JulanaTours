

// import cart from './cart.png';
// import logo from './logo.png';

// import bus1 from './bus1.png';
// import bus2 from './bus2.png';
// import car from './car.png';
// import van from './van.png';

// export const assets = {
//     logo: '/logo.png',
//     cart: '/cart.png'
// };

// export const categories = [
//    {
//         category: " Bus1",
//         icon: bus1
//    },
//    {
//          category: "Bus2",
//          icon: bus2
//     },
//     {
//         category: "Van",
//         icon: van
//     },
//     {
//         category: "Car",
//         icon: car
//     },
    
// ];

import cart from './cart.png';
import logo from './logo.png';
import bus1 from './bus1.png';
import bus2 from './bus2.png';
import car from './car.png';
import van from './van.png';

export const assets = {
    logo: '/logo.png',
    cart: '/cart.png'
};

export const categories = [
    {
        category: "Sedan",
        icon: car, // Using your car image for sedan
        description: "Comfortable family cars"
    },
    {
        category: "SUV", 
        icon: van, // Using your van image for SUV
        description: "Sport utility vehicles"
    },
    {
        category: "Car",
        icon: car,
        description: "General passenger cars"
    },
    {
        category: "Bus",
        icon: bus1,
        description: "Group transportation"
    },
    {
        category: "Motorcycle",
        icon: car, // You'll need to add motorcycle image
        description: "Two-wheeled vehicles"
    },
    {
        category: "Van",
        icon: van,
        description: "Cargo and passenger vans"
    },
    {
        category: "Threewheel(Tuk-Tuk)",
        icon: bus2, // Using bus2 image for tuk-tuk temporarily
        description: "Three-wheeler transport"
    }
];