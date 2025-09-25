// import React, { useContext, useState } from 'react';
// import './PlaceBooking.css';
// import { StoreContext } from '../../context/StoreContext';
// import { calculateCartTotals } from '../../BookingUtil/BookingUtil';
// import Footer from '../../components/Footer/Footer';
// import { Link } from 'react-router-dom';
// import { assets } from '../../assets/assets';


// // export const PlaceBooking = () => {

// //     const {vehicleList, quantities,setQuantities} = useContext(StoreContext);

// //     const BookingItems = vehicleList.filter((vehicle) => quantities[vehicle.id] > 0)
    
// //     const {subtotal, pickup, tax, total} = calculateCartTotals(BookingItems, quantities);

// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     username: '',
// //     email: 'you@example.com',
// //     address: '1234 Main St',
// //     address2: 'Apartment or suite',
// //     country: '',
// //     state: '',
// //     zip: '',
// //     shippingSameAsBilling: true,
// //     saveInfo: false,
// //     paymentMethod: 'credit',
// //     cardName: '',
// //     cardNumber: '',
// //     expiration: '',
// //     cvv: ''
// //   });

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: type === 'checkbox' ? checked : value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission logic here
// //     console.log('Form submitted:', formData);
// //   };

// //   return (
// //     <main className='container'>
// //     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
// //       <h1 className="text-2xl font-bold mb-6">Billing address</h1>
      
// //       <form onSubmit={handleSubmit}>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
// //           <div>
// //             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
// //             <input
// //               type="text"
// //               id="firstName"
// //               name="firstName"
// //               value={formData.firstName}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //               required
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
// //             <input
// //               type="text"
// //               id="lastName"
// //               name="lastName"
// //               value={formData.lastName}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
// //           <input
// //             type="text"
// //             id="username"
// //             name="username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Optional)</label>
// //           <input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
// //           <input
// //             type="text"
// //             id="address"
// //             name="address"
// //             value={formData.address}
// //             onChange={handleChange}
// //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address 2 (Optional)</label>
// //           <input
// //             type="text"
// //             id="address2"
// //             name="address2"
// //             value={formData.address2}
// //             onChange={handleChange}
// //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //           />
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
// //           <div>
// //             <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
// //             <select
// //               id="country"
// //               name="country"
// //               value={formData.country}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //               required
// //             >
// //               <option value="">Choose...</option>
// //               <option value="US">United States</option>
// //               <option value="CA">Canada</option>
// //               <option value="UK">United Kingdom</option>
// //               {/* Add more countries as needed */}
// //             </select>
// //           </div>
// //           <div>
// //             <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
// //             <select
// //               id="state"
// //               name="state"
// //               value={formData.state}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //               required
// //             >
// //               <option value="">Choose...</option>
// //               <option value="CA">California</option>
// //               <option value="NY">New York</option>
// //               <option value="TX">Texas</option>
// //               {/* Add more states as needed */}
// //             </select>
// //           </div>
// //           <div>
// //             <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip</label>
// //             <input
// //               type="text"
// //               id="zip"
// //               name="zip"
// //               value={formData.zip}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <div className="mb-6 space-y-3">
// //           <div className="flex items-center">
// //             <input
// //               type="checkbox"
// //               id="shippingSameAsBilling"
// //               name="shippingSameAsBilling"
// //               checked={formData.shippingSameAsBilling}
// //               onChange={handleChange}
// //               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //             />
// //             <label htmlFor="shippingSameAsBilling" className="ml-2 block text-sm text-gray-700">
// //               Shipping address is the same as my billing address
// //             </label>
// //           </div>
// //           <div className="flex items-center">
// //             <input
// //               type="checkbox"
// //               id="saveInfo"
// //               name="saveInfo"
// //               checked={formData.saveInfo}
// //               onChange={handleChange}
// //               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //             />
// //             <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
// //               Save this information for next time
// //             </label>
// //           </div>
// //         </div>

// //         <h2 className="text-xl font-bold mb-4">Payment</h2>

// //         <div className="mb-4 space-y-2">
// //           <div className="flex items-center">
// //             <input
// //               type="radio"
// //               id="credit"
// //               name="paymentMethod"
// //               value="credit"
// //               checked={formData.paymentMethod === 'credit'}
// //               onChange={handleChange}
// //               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
// //             />
// //             <label htmlFor="credit" className="ml-2 block text-sm text-gray-700">
// //               Credit card
// //             </label>
// //           </div>
// //           <div className="flex items-center">
// //             <input
// //               type="radio"
// //               id="debit"
// //               name="paymentMethod"
// //               value="debit"
// //               checked={formData.paymentMethod === 'debit'}
// //               onChange={handleChange}
// //               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
// //             />
// //             <label htmlFor="debit" className="ml-2 block text-sm text-gray-700">
// //               Debit card
// //             </label>
// //           </div>
// //           <div className="flex items-center">
// //             <input
// //               type="radio"
// //               id="paypal"
// //               name="paymentMethod"
// //               value="paypal"
// //               checked={formData.paymentMethod === 'paypal'}
// //               onChange={handleChange}
// //               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
// //             />
// //             <label htmlFor="paypal" className="ml-2 block text-sm text-gray-700">
// //               PayPal
// //             </label>
// //           </div>
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on card</label>
// //           <input
// //             type="text"
// //             id="cardName"
// //             name="cardName"
// //             value={formData.cardName}
// //             onChange={handleChange}
// //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required={formData.paymentMethod !== 'paypal'}
// //           />
// //           <p className="mt-1 text-sm text-gray-500">Full name as displayed on card</p>
// //         </div>

// //         <div className="mb-4">
// //           <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Credit card number</label>
// //           <input
// //             type="text"
// //             id="cardNumber"
// //             name="cardNumber"
// //             value={formData.cardNumber}
// //             onChange={handleChange}
// //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //             required={formData.paymentMethod !== 'paypal'}
// //           />
// //         </div>

// //         <div className="grid grid-cols-2 gap-4 mb-6">
// //           <div>
// //             <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">Expiration</label>
// //             <input
// //               type="text"
// //               id="expiration"
// //               name="expiration"
// //               value={formData.expiration}
// //               onChange={handleChange}
// //               placeholder="MM/YY"
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //               required={formData.paymentMethod !== 'paypal'}
// //             />
// //           </div>
// //           <div>
// //             <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
// //             <input
// //               type="text"
// //               id="cvv"
// //               name="cvv"
// //               value={formData.cvv}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
// //               required={formData.paymentMethod !== 'paypal'}
// //             />
// //           </div>
// //         </div>

// //         <button
// //           type="submit"
// //           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //         >
// //           Continue to checkout
// //         </button>
// //       </form>
// //     </div>
// //     </main>
// //   );
// // };

// // export default PlaceBooking;



//  export const PlaceBooking = () => {

//     const {vehicleList, quantities,setQuantities} = useContext(StoreContext);

//     const BookingItems = vehicleList.filter((vehicle) => quantities[vehicle.id] > 0)
    
//     // const {subtotal, pickup, tax, total} = calculateCartTotals(BookingItems, quantities);
//   // Mock data to replace context dependencies

//   const bookingItems = vehicleList.filter(vehicle => quantities[vehicle.id] > 0);

//     const subtotal = bookingItems.reduce((acc, vehicle) => acc + (vehicle.price * quantities[vehicle.id]), 0);
//     const pickup = subtotal === 0 ? 0.0 : 10;
//     const tax = subtotal * 0.1;
//     const total = subtotal + pickup + tax;


//   const [formData, setFormData] = useState({
//     firstName: 'First',
//     lastName: 'Last',
//     username: '',
//     ContactNumber: '+1 234 567 8901',
//     email: 'you@example.com',
//     passportno: '',
//     pickupdate: '',
//     dropdate: '',
//     pickuplocation: '',
//     droplocation: '',
//     address: '1234 Main St',
//     address2: 'Apartment or suite',
//     country: '',
//     state: '',
//     zip: '',
//     Kilometers: '',
//     shippingSameAsBilling: true,
//     saveInfo: false,
//     paymentMethod: 'credit',
//     cardName: '',
//     cardNumber: '',
//     expiration: '',
//     cvv: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Booking submitted successfully!');
//   };

//   return (

//     <>
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <img src={assets.logo} alt="Logo" width={120} height={120} className="mx-auto d-block mb-4" />
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">Complete Your Booking</h1>
//           <p className="mt-2 text-gray-600">Review your selection and enter your details</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column - Form */}
//           <div className="space-y-6">
//             {/* Billing Information */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
//                 <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
//                   <span className="text-indigo-600 font-semibold text-sm">1</span>
//                 </div>
//                 Billing Information
//               </h2>
              
//               <div className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//                       First name *
//                     </label>
//                     <input
//                       type="text"
//                       id="firstName"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//                       Last name *
//                     </label>
//                     <input
//                       type="text"
//                       id="lastName"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                       Contact Number *
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.ContactNumber}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                     Email address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="passportno" className="block text-sm font-medium text-gray-700 mb-1">
//                     Passport Number
//                   </label>
//                   <input
//                     type="text"
//                     id="passportno"
//                     name="passportno"
//                     value={formData.passportno}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="pickupdate" className="block text-sm font-medium text-gray-700 mb-1">
//                       PickUP Date *
//                     </label>
//                     <input
//                       type="date"
//                       id="pickupdate"
//                       name="pickupdate"
//                       value={formData.pickupdate}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="dropdate" className="block text-sm font-medium text-gray-700 mb-1">
//                       Drop Date *
//                     </label>
//                     <input
//                       type="date"
//                       id="dropdate"
//                       name="dropdate"
//                       value={formData.dropdate}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="pickuplocation" className="block text-sm font-medium text-gray-700 mb-1">
//                       PickUP Location *
//                     </label>
//                     <input
//                       type="text"
//                       id="pickuplocation"
//                       name="pickuplocation"
//                       value={formData.pickuplocation}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="droplocation" className="block text-sm font-medium text-gray-700 mb-1">
//                       Drop Location *
//                     </label>
//                     <input
//                       type="text"
//                       id="droplocation"
//                       name="droplocation"
//                       value={formData.droplocation}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
//                     Street address *
//                   </label>
//                   <input
//                     type="text"
//                     id="address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
//                     Apartment, suite, etc.
//                   </label>
//                   <input
//                     type="text"
//                     id="address2"
//                     name="address2"
//                     value={formData.address2}
//                     onChange={handleChange}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div>
//                     <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
//                       Country *
//                     </label>
//                     <select
//                       id="country"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     >
//                       <option value="">Select country</option>
//                       <option value="US">United States</option>
//                       <option value="CA">Canada</option>
//                       <option value="UK">United Kingdom</option>
//                       <option value="AU">Australia</option>
//                       <option value="SL">Sri Lanka</option>
//                       <option value="In">India</option>
//                       <option value="JA">Japan</option>
//                       <option value="RU">Rusia</option>
//                       <option value="UAE">Dubai</option>
//                       <option value="QA">Qatar</option>
//                       <option value="BA">Bangaladesh</option>
//                       <option value="CH">China</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
//                       State *
//                     </label>
//                     <select
//                       id="state"
//                       name="state"
//                       value={formData.state}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     >
//                       <option value="">Select state</option>
//                       <option value="CA">California</option>
//                       <option value="NY">New York</option>
//                       <option value="TX">Texas</option>
//                       <option value="FL">Florida</option>

//                     </select>
//                   </div>
//                   <div>
//                     <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
//                       ZIP code *
//                     </label>
//                     <input
//                       type="text"
//                       id="zip"
//                       name="zip"
//                       value={formData.zip}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="Kilometers" className="block text-sm font-medium text-gray-700 mb-1">
//                       How many extra kilometers do you require? *
//                     </label>
//                     <input
//                       type="Kilometers"
//                       id="Kilometers"
//                       name="Kilometers"
//                       value={formData.Kilometers}
//                       onChange={handleChange}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Payment Information */}
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
//                 <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
//                   <span className="text-indigo-600 font-semibold text-sm">2</span>
//                 </div>
//                 Payment Method
//               </h2>

//               <div className="space-y-4">
//                 <div className="grid grid-cols-1 gap-3">
//                   <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.paymentMethod === 'credit' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
//                     <label className="flex items-center cursor-pointer">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="credit"
//                         checked={formData.paymentMethod === 'credit'}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
//                       />
//                       <span className="ml-3 font-medium text-gray-900">Credit Card</span>
//                       <div className="ml-auto flex space-x-2">
//                         <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
//                         <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
//                       </div>
//                     </label>
//                   </div>

//                   <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.paymentMethod === 'debit' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
//                     <label className="flex items-center cursor-pointer">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="debit"
//                         checked={formData.paymentMethod === 'debit'}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
//                       />
//                       <span className="ml-3 font-medium text-gray-900">Debit Card</span>
//                     </label>
//                   </div>

//                   <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.paymentMethod === 'paypal' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
//                     <label className="flex items-center cursor-pointer">
//                       <input
//                         type="radio"
//                         name="paymentMethod"
//                         value="paypal"
//                         checked={formData.paymentMethod === 'paypal'}
//                         onChange={handleChange}
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
//                       />
//                       <span className="ml-3 font-medium text-gray-900">PayPal</span>
//                       <div className="ml-auto">
//                         <div className="w-12 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">PayPal</div>
//                       </div>
//                     </label>
//                   </div>
//                 </div>

//                 {formData.paymentMethod !== 'paypal' && (
//                   <div className="mt-6 space-y-4 pt-4 border-t border-gray-200">
//                     <div>
//                       <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
//                         Cardholder name *
//                       </label>
//                       <input
//                         type="text"
//                         id="cardName"
//                         name="cardName"
//                         value={formData.cardName}
//                         onChange={handleChange}
//                         placeholder="Full name as shown on card"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                         required={formData.paymentMethod !== 'paypal'}
//                       />
//                     </div>

//                     <div>
//                       <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
//                         Card number *
//                       </label>
//                       <input
//                         type="text"
//                         id="cardNumber"
//                         name="cardNumber"
//                         value={formData.cardNumber}
//                         onChange={handleChange}
//                         placeholder="1234 5678 9012 3456"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                         required={formData.paymentMethod !== 'paypal'}
//                       />
//                     </div>

//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
//                           Expiry date *
//                         </label>
//                         <input
//                           type="text"
//                           id="expiration"
//                           name="expiration"
//                           value={formData.expiration}
//                           onChange={handleChange}
//                           placeholder="MM/YY"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                           required={formData.paymentMethod !== 'paypal'}
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
//                           CVV *
//                         </label>
//                         <input
//                           type="text"
//                           id="cvv"
//                           name="cvv"
//                           value={formData.cvv}
//                           onChange={handleChange}
//                           placeholder="123"
//                           maxLength="4"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
//                           required={formData.paymentMethod !== 'paypal'}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 <div className="mt-6 space-y-3 pt-4 border-t border-gray-200">
//                   <label className="flex items-center">
//                     <input
//                       type="checkbox"
//                       name="saveInfo"
//                       checked={formData.saveInfo}
//                       onChange={handleChange}
//                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                     />
//                     <span className="ml-2 text-sm text-gray-700">Save payment information for next time</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:sticky lg:top-8 lg:h-fit">
//             <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h3>
              
//               <div className="space-y-4 mb-6">
//                 {bookingItems.map((vehicle) => (
//                   <div key={vehicle.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//                     <div className="flex-1">
//                       <h4 className="font-medium text-gray-900">{vehicle.name}</h4>
//                       <small className="text-gray-600">Quantity: {quantities[vehicle.id]}</small>
//                       {/* <p className="text-sm text-gray-600">{item.days} days rental</p> */}
//                     </div>
//                     <div className="text-right">
//                       <p className="font-medium text-gray-900">Rs.{vehicle.price * quantities[vehicle.id]}</p>
//                       {/* <p className="text-sm text-gray-600">${vehicle.price}/day</p> */}
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="border-t border-gray-200 pt-4">
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="text-gray-900">Rs.{subtotal === 0 ? 0.0 : pickup.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Pickup fee</span>
//                     <span className="text-gray-900">Rs.{pickup.toFixed}</span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-600">Tax</span>
//                     <span className="text-gray-900">Rs.{tax.toFixed}</span>
//                   </div>
//                   <div className="border-t border-gray-200 pt-2 mt-2">
//                     <div className="flex justify-between">
//                       <span className="text-lg font-semibold text-gray-900">Total</span>
//                       <span className="text-lg font-semibold text-gray-900">Rs.{total.toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <button
//                 onClick={handleSubmit}
//                 className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
//               >
//                 Complete Booking
//               </button>

//               <p className="mt-4 text-xs text-gray-500 text-center">
//                 By completing this booking, you agree to our terms and conditions
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>
//   );
// };

// export default PlaceBooking;


// import React, { useContext, useState, useEffect } from 'react';
// import './PlaceBooking.css';
// import { StoreContext } from '../../context/StoreContext';
// import Footer from '../../components/Footer/Footer';
// import { Link } from 'react-router-dom';
// import { assets } from '../../assets/assets';

// export const PlaceBooking = () => {
//   const { vehicleList, quantities, setQuantities } = useContext(StoreContext);
//   const bookingItems = vehicleList.filter(vehicle => quantities[vehicle.id] > 0);

//   // Constants for odometer calculation
//   const BASE_KM_ALLOWANCE = 800; // Free kilometers
//   const EXTRA_KM_RATE = 180; // Rs per extra kilometer

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     ContactNumber: '',
//     email: '',
//     passportno: '',
//     pickupdate: '',
//     dropdate: '',
//     pickuplocation: '',
//     droplocation: '',
//     address: '',
//     address2: '',
//     country: '',
//     state: '',
//     zip: '',
//     expectedKilometers: BASE_KM_ALLOWANCE,
//     shippingSameAsBilling: true,
//     saveInfo: false,
//     paymentMethod: 'credit',
//     cardName: '',
//     cardNumber: '',
//     expiration: '',
//     cvv: ''
//   });

//   const [currentStep, setCurrentStep] = useState(1);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Calculate totals with odometer integration
//   const subtotal = bookingItems.reduce((acc, vehicle) => acc + (vehicle.price * quantities[vehicle.id]), 0);
//   const pickup = subtotal === 0 ? 0.0 : 10;
//   const tax = subtotal * 0.1;
  
//   // Calculate extra kilometers charge
//   const extraKm = Math.max(0, parseInt(formData.expectedKilometers) - BASE_KM_ALLOWANCE);
//   const extraKmCharge = extraKm * EXTRA_KM_RATE;
  
//   const total = subtotal + pickup + tax + extraKmCharge;

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       alert('🎉 Booking submitted successfully! You will receive a confirmation email shortly.');
//       setIsSubmitting(false);
//     }, 2000);
//   };

//   const nextStep = () => {
//     if (currentStep < 3) setCurrentStep(currentStep + 1);
//   };

//   const prevStep = () => {
//     if (currentStep > 1) setCurrentStep(currentStep - 1);
//   };

//   return (
//     <>
//       <div className="booking-page">
//         <div className="booking-background">
//           <div className="background-shapes">
//             <div className="shape shape-1"></div>
//             <div className="shape shape-2"></div>
//             <div className="shape shape-3"></div>
//           </div>
//         </div>

//         <div className="booking-container">
//           {/* Header */}
//           <div className="booking-header">
//             <img src={assets.logo} alt="Logo" className="booking-logo" />
//             <div className="header-content">
//               <h1 className="booking-title">
//                 <span className="title-icon">🚗</span>
//                 Complete Your Booking
//               </h1>
//               <p className="booking-subtitle">Review your selection and enter your details</p>
//             </div>
//           </div>

//           {/* Progress Steps */}
//           <div className="progress-steps">
//             <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
//               <div className="step-number">1</div>
//               <span>Personal Info</span>
//             </div>
//             <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
//               <div className="step-number">2</div>
//               <span>Payment</span>
//             </div>
//             <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
//               <div className="step-number">3</div>
//               <span>Confirmation</span>
//             </div>
//           </div>

//           <div className="booking-content">
//             {/* Left Column - Form */}
//             <div className="booking-form-section">
//               <form onSubmit={handleSubmit} className="booking-form">
                
//                 {/* Step 1: Personal Information */}
//                 {currentStep === 1 && (
//                   <div className="form-step" key="step1">
//                     <div className="form-card">
//                       <div className="card-header">
//                         <h2>👤 Personal Information</h2>
//                         <p>Tell us about yourself</p>
//                       </div>
                      
//                       <div className="form-grid">
//                         <div className="form-group-row">
//                           <div className="form-group">
//                             <label htmlFor="firstName">First Name *</label>
//                             <input
//                               type="text"
//                               id="firstName"
//                               name="firstName"
//                               value={formData.firstName}
//                               onChange={handleChange}
//                               required
//                               placeholder="Enter your first name"
//                             />
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="lastName">Last Name *</label>
//                             <input
//                               type="text"
//                               id="lastName"
//                               name="lastName"
//                               value={formData.lastName}
//                               onChange={handleChange}
//                               required
//                               placeholder="Enter your last name"
//                             />
//                           </div>
//                         </div>

//                         <div className="form-group">
//                           <label htmlFor="ContactNumber">Contact Number *</label>
//                           <input
//                             type="tel"
//                             id="ContactNumber"
//                             name="ContactNumber"
//                             value={formData.ContactNumber}
//                             onChange={handleChange}
//                             required
//                             placeholder="+1 234 567 8901"
//                           />
//                         </div>

//                         <div className="form-group-row">
//                           <div className="form-group">
//                             <label htmlFor="email">Email Address</label>
//                             <input
//                               type="email"
//                               id="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleChange}
//                               placeholder="you@example.com"
//                             />
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="passportno">Passport Number</label>
//                             <input
//                               type="text"
//                               id="passportno"
//                               name="passportno"
//                               value={formData.passportno}
//                               onChange={handleChange}
//                               placeholder="A12345678"
//                             />
//                           </div>
//                         </div>

//                         <div className="form-group-row">
//                           <div className="form-group">
//                             <label htmlFor="pickupdate">Pickup Date *</label>
//                             <input
//                               type="date"
//                               id="pickupdate"
//                               name="pickupdate"
//                               value={formData.pickupdate}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="dropdate">Drop Date *</label>
//                             <input
//                               type="date"
//                               id="dropdate"
//                               name="dropdate"
//                               value={formData.dropdate}
//                               onChange={handleChange}
//                               required
//                             />
//                           </div>
//                         </div>

//                         <div className="form-group-row">
//                           <div className="form-group">
//                             <label htmlFor="pickuplocation">Pickup Location *</label>
//                             <input
//                               type="text"
//                               id="pickuplocation"
//                               name="pickuplocation"
//                               value={formData.pickuplocation}
//                               onChange={handleChange}
//                               required
//                               placeholder="Airport, Hotel, etc."
//                             />
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="droplocation">Drop Location *</label>
//                             <input
//                               type="text"
//                               id="droplocation"
//                               name="droplocation"
//                               value={formData.droplocation}
//                               onChange={handleChange}
//                               required
//                               placeholder="Airport, Hotel, etc."
//                             />
//                           </div>
//                         </div>

//                         {/* Odometer Section */}
//                         <div className="odometer-section">
//                           <div className="odometer-header">
//                             <span className="odometer-icon">🏁</span>
//                             <h3>Expected Mileage</h3>
//                           </div>
//                           <div className="odometer-info">
//                             <div className="base-allowance">
//                               <span className="allowance-label">Base Allowance</span>
//                               <span className="allowance-value">{BASE_KM_ALLOWANCE} KM</span>
//                               <small>Included in rental</small>
//                             </div>
//                             <div className="extra-rate">
//                               <span className="rate-label">Extra Rate</span>
//                               <span className="rate-value">Rs.{EXTRA_KM_RATE}/KM</span>
//                               <small>For additional kilometers</small>
//                             </div>
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="expectedKilometers">Expected Total Kilometers *</label>
//                             <input
//                               type="number"
//                               id="expectedKilometers"
//                               name="expectedKilometers"
//                               value={formData.expectedKilometers}
//                               onChange={handleChange}
//                               min={BASE_KM_ALLOWANCE}
//                               required
//                               placeholder={BASE_KM_ALLOWANCE.toString()}
//                             />
//                             {extraKm > 0 && (
//                               <div className="extra-km-alert">
//                                 <span className="alert-icon">⚠️</span>
//                                 <span>Extra {extraKm} KM will cost Rs.{extraKmCharge.toLocaleString()}</span>
//                               </div>
//                             )}
//                           </div>
//                         </div>

//                         <div className="form-group">
//                           <label htmlFor="address">Street Address *</label>
//                           <input
//                             type="text"
//                             id="address"
//                             name="address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             required
//                             placeholder="1234 Main St"
//                           />
//                         </div>

//                         <div className="form-group">
//                           <label htmlFor="address2">Apartment, Suite, etc.</label>
//                           <input
//                             type="text"
//                             id="address2"
//                             name="address2"
//                             value={formData.address2}
//                             onChange={handleChange}
//                             placeholder="Optional"
//                           />
//                         </div>

//                         <div className="form-group-row">
//                           <div className="form-group">
//                             <label htmlFor="country">Country *</label>
//                             <select
//                               id="country"
//                               name="country"
//                               value={formData.country}
//                               onChange={handleChange}
//                               required
//                             >
//                               <option value="">Select country</option>
//                               <option value="SL">Sri Lanka</option>
//                               <option value="US">United States</option>
//                               <option value="CA">Canada</option>
//                               <option value="UK">United Kingdom</option>
//                               <option value="AU">Australia</option>
//                               <option value="IN">India</option>
//                               <option value="JP">Japan</option>
//                               <option value="AE">UAE</option>
//                             </select>
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="state">State/Province *</label>
//                             <select
//                               id="state"
//                               name="state"
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                             >
//                               <option value="">Select state</option>
//                               <option value="WP">Western Province</option>
//                               <option value="CP">Central Province</option>
//                               <option value="SP">Southern Province</option>
//                               <option value="NP">Northern Province</option>
//                             </select>
//                           </div>
//                           <div className="form-group">
//                             <label htmlFor="zip">ZIP Code *</label>
//                             <input
//                               type="text"
//                               id="zip"
//                               name="zip"
//                               value={formData.zip}
//                               onChange={handleChange}
//                               required
//                               placeholder="10001"
//                             />
//                           </div>
//                         </div>
//                       </div>

//                       <div className="form-actions">
//                         <button type="button" onClick={nextStep} className="btn-next">
//                           Continue to Payment
//                           <span className="btn-icon">→</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Step 2: Payment Information */}
//                 {currentStep === 2 && (
//                   <div className="form-step" key="step2">
//                     <div className="form-card">
//                       <div className="card-header">
//                         <h2>💳 Payment Information</h2>
//                         <p>Choose your preferred payment method</p>
//                       </div>

//                       <div className="payment-methods">
//                         <div className={`payment-option ${formData.paymentMethod === 'credit' ? 'selected' : ''}`}>
//                           <label>
//                             <input
//                               type="radio"
//                               name="paymentMethod"
//                               value="credit"
//                               checked={formData.paymentMethod === 'credit'}
//                               onChange={handleChange}
//                             />
//                             <div className="payment-content">
//                               <span className="payment-title">Credit Card</span>
//                               <div className="payment-icons">
//                                 <span className="card-icon visa">VISA</span>
//                                 <span className="card-icon mastercard">MC</span>
//                               </div>
//                             </div>
//                           </label>
//                         </div>

//                         <div className={`payment-option ${formData.paymentMethod === 'debit' ? 'selected' : ''}`}>
//                           <label>
//                             <input
//                               type="radio"
//                               name="paymentMethod"
//                               value="debit"
//                               checked={formData.paymentMethod === 'debit'}
//                               onChange={handleChange}
//                             />
//                             <div className="payment-content">
//                               <span className="payment-title">Debit Card</span>
//                             </div>
//                           </label>
//                         </div>

//                         <div className={`payment-option ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}>
//                           <label>
//                             <input
//                               type="radio"
//                               name="paymentMethod"
//                               value="paypal"
//                               checked={formData.paymentMethod === 'paypal'}
//                               onChange={handleChange}
//                             />
//                             <div className="payment-content">
//                               <span className="payment-title">PayPal</span>
//                               <span className="paypal-icon">PayPal</span>
//                             </div>
//                           </label>
//                         </div>
//                       </div>

//                       {formData.paymentMethod !== 'paypal' && (
//                         <div className="card-details">
//                           <div className="form-group">
//                             <label htmlFor="cardName">Cardholder Name *</label>
//                             <input
//                               type="text"
//                               id="cardName"
//                               name="cardName"
//                               value={formData.cardName}
//                               onChange={handleChange}
//                               required={formData.paymentMethod !== 'paypal'}
//                               placeholder="Full name as shown on card"
//                             />
//                           </div>

//                           <div className="form-group">
//                             <label htmlFor="cardNumber">Card Number *</label>
//                             <input
//                               type="text"
//                               id="cardNumber"
//                               name="cardNumber"
//                               value={formData.cardNumber}
//                               onChange={handleChange}
//                               required={formData.paymentMethod !== 'paypal'}
//                               placeholder="1234 5678 9012 3456"
//                               maxLength="19"
//                             />
//                           </div>

//                           <div className="form-group-row">
//                             <div className="form-group">
//                               <label htmlFor="expiration">Expiry Date *</label>
//                               <input
//                                 type="text"
//                                 id="expiration"
//                                 name="expiration"
//                                 value={formData.expiration}
//                                 onChange={handleChange}
//                                 required={formData.paymentMethod !== 'paypal'}
//                                 placeholder="MM/YY"
//                                 maxLength="5"
//                               />
//                             </div>
//                             <div className="form-group">
//                               <label htmlFor="cvv">CVV *</label>
//                               <input
//                                 type="text"
//                                 id="cvv"
//                                 name="cvv"
//                                 value={formData.cvv}
//                                 onChange={handleChange}
//                                 required={formData.paymentMethod !== 'paypal'}
//                                 placeholder="123"
//                                 maxLength="4"
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       <div className="form-actions">
//                         <button type="button" onClick={prevStep} className="btn-back">
//                           <span className="btn-icon">←</span>
//                           Back
//                         </button>
//                         <button type="button" onClick={nextStep} className="btn-next">
//                           Review Booking
//                           <span className="btn-icon">→</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Step 3: Confirmation */}
//                 {currentStep === 3 && (
//                   <div className="form-step" key="step3">
//                     <div className="form-card">
//                       <div className="card-header">
//                         <h2>✅ Review & Confirm</h2>
//                         <p>Please review your booking details</p>
//                       </div>

//                       <div className="confirmation-details">
//                         <div className="detail-section">
//                           <h3>Personal Information</h3>
//                           <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
//                           <p><strong>Contact:</strong> {formData.ContactNumber}</p>
//                           <p><strong>Email:</strong> {formData.email}</p>
//                         </div>

//                         <div className="detail-section">
//                           <h3>Rental Details</h3>
//                           <p><strong>Pickup:</strong> {formData.pickupdate} at {formData.pickuplocation}</p>
//                           <p><strong>Drop:</strong> {formData.dropdate} at {formData.droplocation}</p>
//                           <p><strong>Expected KM:</strong> {formData.expectedKilometers} KM</p>
//                           {extraKm > 0 && (
//                             <p className="extra-km-note">
//                               <strong>Extra KM:</strong> {extraKm} KM (Rs.{extraKmCharge.toLocaleString()})
//                             </p>
//                           )}
//                         </div>

//                         <div className="detail-section">
//                           <h3>Payment Method</h3>
//                           <p><strong>Method:</strong> {formData.paymentMethod.charAt(0).toUpperCase() + formData.paymentMethod.slice(1)}</p>
//                         </div>
//                       </div>

//                       <div className="form-actions">
//                         <button type="button" onClick={prevStep} className="btn-back">
//                           <span className="btn-icon">←</span>
//                           Back
//                         </button>
//                         <button type="submit" className={`btn-submit ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
//                           {isSubmitting ? (
//                             <>
//                               <span className="spinner"></span>
//                               Processing...
//                             </>
//                           ) : (
//                             <>
//                               Complete Booking
//                               <span className="btn-icon">✓</span>
//                             </>
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </form>
//             </div>

//             {/* Right Column - Order Summary */}
//             <div className="booking-summary">
//               <div className="summary-card">
//                 <div className="summary-header">
//                   <h3>📋 Booking Summary</h3>
//                 </div>

//                 <div className="summary-items">
//                   {bookingItems.map((vehicle) => (
//                     <div key={vehicle.id} className="summary-item">
//                       <div className="item-info">
//                         <h4>{vehicle.name}</h4>
//                         <p>Quantity: {quantities[vehicle.id]} days</p>
//                       </div>
//                       <div className="item-price">
//                         Rs.{(vehicle.price * quantities[vehicle.id]).toLocaleString()}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="summary-breakdown">
//                   <div className="breakdown-row">
//                     <span>Subtotal</span>
//                     <span>Rs.{subtotal.toLocaleString()}</span>
//                   </div>
//                   <div className="breakdown-row">
//                     <span>Pickup Fee</span>
//                     <span>Rs.{pickup.toFixed(2)}</span>
//                   </div>
//                   <div className="breakdown-row">
//                     <span>Tax (10%)</span>
//                     <span>Rs.{tax.toLocaleString()}</span>
//                   </div>
//                   {extraKm > 0 && (
//                     <div className="breakdown-row extra-km-row">
//                       <span>Extra KM ({extraKm} × Rs.{EXTRA_KM_RATE})</span>
//                       <span>Rs.{extraKmCharge.toLocaleString()}</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="summary-total">
//                   <div className="total-row">
//                     <span>Total Amount</span>
//                     <span>Rs.{total.toLocaleString()}</span>
//                   </div>
//                 </div>

//                 <div className="summary-note">
//                   <p>💡 Base allowance includes {BASE_KM_ALLOWANCE} KM</p>
//                   <p>🔒 Secure payment with SSL encryption</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default PlaceBooking;

import React, { useContext, useState, useEffect } from 'react';
import './PlaceBooking.css';
import { StoreContext } from '../../context/StoreContext';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';

// API base URL - move this to environment variable in production
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export const PlaceBooking = () => {
  const { vehicleList, quantities, setQuantities } = useContext(StoreContext);
  const navigate = useNavigate();
  const bookingItems = vehicleList.filter(vehicle => quantities[vehicle.id] > 0);

  // Constants for odometer calculation
  const BASE_KM_ALLOWANCE = 800;
  const EXTRA_KM_RATE = 180;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    ContactNumber: '',
    email: '',
    passportno: '',
    pickupdate: '',
    dropdate: '',
    pickuplocation: '',
    droplocation: '',
    address: '',
    address2: '',
    country: '',
    state: '',
    zip: '',
    expectedKilometers: BASE_KM_ALLOWANCE,
    shippingSameAsBilling: true,
    saveInfo: false,
    paymentMethod: 'credit',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(null);

  // Calculate totals with odometer integration
  const subtotal = bookingItems.reduce((acc, vehicle) => acc + (vehicle.price * quantities[vehicle.id]), 0);
  const pickup = subtotal === 0 ? 0.0 : 10;
  const tax = subtotal * 0.1;
  const extraKm = Math.max(0, parseInt(formData.expectedKilometers) - BASE_KM_ALLOWANCE);
  const extraKmCharge = extraKm * EXTRA_KM_RATE;
  const total = subtotal + pickup + tax + extraKmCharge;

  // Get auth token from localStorage or context
  const getAuthToken = () => {
    // Try multiple possible storage locations
    return localStorage.getItem('authToken') || 
           localStorage.getItem('token') || 
           sessionStorage.getItem('authToken') ||
           sessionStorage.getItem('token');
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.ContactNumber.trim()) newErrors.ContactNumber = 'Contact number is required';
      if (!formData.pickupdate) newErrors.pickupdate = 'Pickup date is required';
      if (!formData.dropdate) newErrors.dropdate = 'Drop date is required';
      if (!formData.pickuplocation.trim()) newErrors.pickuplocation = 'Pickup location is required';
      if (!formData.droplocation.trim()) newErrors.droplocation = 'Drop location is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.country) newErrors.country = 'Country is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip.trim()) newErrors.zip = 'ZIP code is required';
      
      // Date validation
      if (formData.pickupdate && formData.dropdate) {
        const pickup = new Date(formData.pickupdate);
        const drop = new Date(formData.dropdate);
        if (drop <= pickup) {
          newErrors.dropdate = 'Drop date must be after pickup date';
        }
      }
      
      // Email validation
      if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email address';
      }
    }
    
    if (currentStep === 2 && formData.paymentMethod !== 'paypal') {
      if (!formData.cardName.trim()) newErrors.cardName = 'Cardholder name is required';
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiration.trim()) newErrors.expiration = 'Expiration date is required';
      if (!formData.cvv.trim()) newErrors.cvv = 'CVV is required';
      
      // Card number validation (basic)
      if (formData.cardNumber && !/^\d{13,19}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
        newErrors.cardNumber = 'Invalid card number';
      }
      
      // Expiration date validation
      if (formData.expiration && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiration)) {
        newErrors.expiration = 'Format must be MM/YY';
      }
      
      // CVV validation
      if (formData.cvv && !/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = 'CVV must be 3 or 4 digits';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    setApiError('');
  };

  // Format card number as user types
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    setFormData(prev => ({
      ...prev,
      cardNumber: formattedValue
    }));
  };

  // Format expiration date as user types
  const handleExpirationChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    setFormData(prev => ({
      ...prev,
      expiration: value
    }));
  };

  // API call to place booking
  const placeBooking = async () => {
    const token = getAuthToken();
    
    if (!token) {
      setApiError('Please login to place a booking');
      navigate('/login');
      return null;
    }

    const bookingData = {
      // Personal Information
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username || formData.email, // Fallback to email if no username
      contactNumber: formData.ContactNumber,
      email: formData.email || `${formData.firstName.toLowerCase()}.${formData.lastName.toLowerCase()}@example.com`, // Generate if not provided
      passportNo: formData.passportno,
      
      // Rental Details
      pickupDate: formData.pickupdate,
      dropDate: formData.dropdate,
      pickupLocation: formData.pickuplocation,
      dropLocation: formData.droplocation,
      
      // Address
      address: formData.address,
      address2: formData.address2 || '',
      country: formData.country,
      state: formData.state,
      zip: formData.zip,
      
      // Odometer
      expectedKilometers: parseInt(formData.expectedKilometers),
      
      // Preferences
      shippingSameAsBilling: formData.shippingSameAsBilling,
      saveInfo: formData.saveInfo,
      
      // Payment
      paymentMethod: formData.paymentMethod,
      cardName: formData.cardName || '',
      cardNumber: formData.cardNumber ? formData.cardNumber.replace(/\s/g, '') : '',
      expiration: formData.expiration || '',
      cvv: formData.cvv || '',
      
      // Booking Items
      bookingItems: bookingItems.map(vehicle => ({
        vehicleId: vehicle.id || vehicle._id, // Handle both id formats
        quantity: quantities[vehicle.id || vehicle._id]
      }))
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/place-booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bookingData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to place booking');
      }

      return result;
    } catch (error) {
      console.error('Booking error:', error);
      throw error;
    }
  };

  // Calculate extra charges API call
  const calculateExtraCharges = async (expectedKm) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/place-booking/calculate-extras`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          expectedKilometers: parseInt(expectedKm)
        })
      });
      
      if (!response.ok) {
        throw new Error('Failed to calculate charges');
      }
      
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Calculation error:', error);
      return null;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setApiError('');
    
    try {
      const result = await placeBooking();
      
      if (result) {
        setBookingSuccess(result);
        
        // Clear cart after successful booking
        bookingItems.forEach(vehicle => {
          setQuantities(prev => ({
            ...prev,
            [vehicle.id || vehicle._id]: 0
          }));
        });
        
        // Show success message
        setTimeout(() => {
          navigate(`/booking-confirmation/${result.bookingId}`, { 
            state: { bookingDetails: result } 
          });
        }, 2000);
      }
    } catch (error) {
      setApiError(error.message || 'Failed to place booking. Please try again.');
      console.error('Booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Navigation between steps
  const nextStep = () => {
    if (validateForm()) {
      if (currentStep < 3) setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    setErrors({});
    setApiError('');
  };

  // Update extra charges when kilometers change
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (formData.expectedKilometers && formData.expectedKilometers !== BASE_KM_ALLOWANCE) {
        calculateExtraCharges(formData.expectedKilometers);
      }
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [formData.expectedKilometers]);

  // Check if user is logged in on component mount
  useEffect(() => {
    const token = getAuthToken();
    if (!token) {
      alert('Please login to place a booking');
      navigate('/login');
    }
  }, [navigate]);

  // If no items in cart, redirect to vehicles page
  useEffect(() => {
    if (bookingItems.length === 0 && !bookingSuccess) {
      navigate('/vehicles');
    }
  }, [bookingItems, navigate, bookingSuccess]);

  // Success modal component
  const SuccessModal = () => (
    <div className="success-modal-overlay">
      <div className="success-modal">
        <div className="success-icon">✅</div>
        <h2>Booking Confirmed!</h2>
        <p>Booking Number: <strong>{bookingSuccess.bookingNumber}</strong></p>
        <p>Total Amount: <strong>Rs.{bookingSuccess.total?.toLocaleString()}</strong></p>
        <p>{bookingSuccess.confirmationMessage}</p>
        <div className="success-actions">
          <button onClick={() => navigate('/')}>Go to Home</button>
          <button onClick={() => navigate(`/booking-confirmation/${bookingSuccess.bookingId}`)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="booking-page">
        <div className="booking-background">
          <div className="background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>

        <div className="booking-container">
          {/* Header */}
          <div className="booking-header">
            <img src={assets.logo} alt="Logo" className="booking-logo" />
            <div className="header-content">
              <h1 className="booking-title">
                <span className="title-icon">🚗</span>
                Complete Your Booking
              </h1>
              <p className="booking-subtitle">Review your selection and enter your details</p>
            </div>
          </div>

          {/* Error Alert */}
          {apiError && (
            <div className="alert alert-error">
              <span className="alert-icon">⚠️</span>
              <span>{apiError}</span>
              <button onClick={() => setApiError('')} className="alert-close">×</button>
            </div>
          )}

          {/* Success Modal */}
          {bookingSuccess && <SuccessModal />}

          {/* Progress Steps */}
          <div className="progress-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-number">1</div>
              <span>Personal Info</span>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-number">2</div>
              <span>Payment</span>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <span>Confirmation</span>
            </div>
          </div>

          <div className="booking-content">
            {/* Left Column - Form */}
            <div className="booking-form-section">
              <form onSubmit={handleSubmit} className="booking-form">
                
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="form-step" key="step1">
                    <div className="form-card">
                      <div className="card-header">
                        <h2>👤 Personal Information</h2>
                        <p>Tell us about yourself</p>
                      </div>
                      
                      <div className="form-grid">
                        <div className="form-group-row">
                          <div className="form-group">
                            <label htmlFor="firstName">First Name *</label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              className={errors.firstName ? 'error' : ''}
                              required
                              placeholder="Enter your first name"
                            />
                            {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="lastName">Last Name *</label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className={errors.lastName ? 'error' : ''}
                              required
                              placeholder="Enter your last name"
                            />
                            {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="ContactNumber">Contact Number *</label>
                          <input
                            type="tel"
                            id="ContactNumber"
                            name="ContactNumber"
                            value={formData.ContactNumber}
                            onChange={handleChange}
                            className={errors.ContactNumber ? 'error' : ''}
                            required
                            placeholder="+94 77 123 4567"
                          />
                          {errors.ContactNumber && <span className="error-message">{errors.ContactNumber}</span>}
                        </div>

                        <div className="form-group-row">
                          <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className={errors.email ? 'error' : ''}
                              placeholder="you@example.com"
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="passportno">Passport Number</label>
                            <input
                              type="text"
                              id="passportno"
                              name="passportno"
                              value={formData.passportno}
                              onChange={handleChange}
                              placeholder="A12345678"
                            />
                          </div>
                        </div>

                        <div className="form-group-row">
                          <div className="form-group">
                            <label htmlFor="pickupdate">Pickup Date *</label>
                            <input
                              type="date"
                              id="pickupdate"
                              name="pickupdate"
                              value={formData.pickupdate}
                              onChange={handleChange}
                              className={errors.pickupdate ? 'error' : ''}
                              min={new Date().toISOString().split('T')[0]}
                              required
                            />
                            {errors.pickupdate && <span className="error-message">{errors.pickupdate}</span>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="dropdate">Drop Date *</label>
                            <input
                              type="date"
                              id="dropdate"
                              name="dropdate"
                              value={formData.dropdate}
                              onChange={handleChange}
                              className={errors.dropdate ? 'error' : ''}
                              min={formData.pickupdate || new Date().toISOString().split('T')[0]}
                              required
                            />
                            {errors.dropdate && <span className="error-message">{errors.dropdate}</span>}
                          </div>
                        </div>

                        <div className="form-group-row">
                          <div className="form-group">
                            <label htmlFor="pickuplocation">Pickup Location *</label>
                            <input
                              type="text"
                              id="pickuplocation"
                              name="pickuplocation"
                              value={formData.pickuplocation}
                              onChange={handleChange}
                              className={errors.pickuplocation ? 'error' : ''}
                              required
                              placeholder="Airport, Hotel, etc."
                            />
                            {errors.pickuplocation && <span className="error-message">{errors.pickuplocation}</span>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="droplocation">Drop Location *</label>
                            <input
                              type="text"
                              id="droplocation"
                              name="droplocation"
                              value={formData.droplocation}
                              onChange={handleChange}
                              className={errors.droplocation ? 'error' : ''}
                              required
                              placeholder="Airport, Hotel, etc."
                            />
                            {errors.droplocation && <span className="error-message">{errors.droplocation}</span>}
                          </div>
                        </div>

                        {/* Odometer Section */}
                        <div className="odometer-section">
                          <div className="odometer-header">
                            <span className="odometer-icon">🏁</span>
                            <h3>Expected Mileage</h3>
                          </div>
                          <div className="odometer-info">
                            <div className="base-allowance">
                              <span className="allowance-label">Base Allowance</span>
                              <span className="allowance-value">{BASE_KM_ALLOWANCE} KM</span>
                              <small>Included in rental</small>
                            </div>
                            <div className="extra-rate">
                              <span className="rate-label">Extra Rate</span>
                              <span className="rate-value">Rs.{EXTRA_KM_RATE}/KM</span>
                              <small>For additional kilometers</small>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="expectedKilometers">Expected Total Kilometers *</label>
                            <input
                              type="number"
                              id="expectedKilometers"
                              name="expectedKilometers"
                              value={formData.expectedKilometers}
                              onChange={handleChange}
                              min={BASE_KM_ALLOWANCE}
                              required
                              placeholder={BASE_KM_ALLOWANCE.toString()}
                            />
                            {extraKm > 0 && (
                              <div className="extra-km-alert">
                                <span className="alert-icon">⚠️</span>
                                <span>Extra {extraKm} KM will cost Rs.{extraKmCharge.toLocaleString()}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="address">Street Address *</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className={errors.address ? 'error' : ''}
                            required
                            placeholder="1234 Main St"
                          />
                          {errors.address && <span className="error-message">{errors.address}</span>}
                        </div>

                        <div className="form-group">
                          <label htmlFor="address2">Apartment, Suite, etc.</label>
                          <input
                            type="text"
                            id="address2"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            placeholder="Optional"
                          />
                        </div>

                        <div className="form-group-row">
                          <div className="form-group">
                            <label htmlFor="country">Country *</label>
                            <select
                              id="country"
                              name="country"
                              value={formData.country}
                              onChange={handleChange}
                              className={errors.country ? 'error' : ''}
                              required
                            >
                              <option value="">Select country</option>
                              <option value="SL">Sri Lanka</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="UK">United Kingdom</option>
                              <option value="AU">Australia</option>
                              <option value="IN">India</option>
                              <option value="JP">Japan</option>
                              <option value="AE">UAE</option>
                            </select>
                            {errors.country && <span className="error-message">{errors.country}</span>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="state">State/Province *</label>
                            <select
                              id="state"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              className={errors.state ? 'error' : ''}
                              required
                            >
                              <option value="">Select state</option>
                              <option value="WP">Western Province</option>
                              <option value="CP">Central Province</option>
                              <option value="SP">Southern Province</option>
                              <option value="NP">Northern Province</option>
                              <option value="EP">Eastern Province</option>
                              <option value="NWP">North Western Province</option>
                              <option value="NCP">North Central Province</option>
                              <option value="UP">Uva Province</option>
                              <option value="SAB">Sabaragamuwa Province</option>
                            </select>
                            {errors.state && <span className="error-message">{errors.state}</span>}
                          </div>
                          <div className="form-group">
                            <label htmlFor="zip">ZIP Code *</label>
                            <input
                              type="text"
                              id="zip"
                              name="zip"
                              value={formData.zip}
                              onChange={handleChange}
                              className={errors.zip ? 'error' : ''}
                              required
                              placeholder="10001"
                            />
                            {errors.zip && <span className="error-message">{errors.zip}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="form-actions">
                        <button type="button" onClick={nextStep} className="btn-next">
                          Continue to Payment
                          <span className="btn-icon">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Payment Information */}
                {currentStep === 2 && (
                  <div className="form-step" key="step2">
                    <div className="form-card">
                      <div className="card-header">
                        <h2>💳 Payment Information</h2>
                        <p>Choose your preferred payment method</p>
                      </div>

                      <div className="payment-methods">
                        <div className={`payment-option ${formData.paymentMethod === 'credit' ? 'selected' : ''}`}>
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="credit"
                              checked={formData.paymentMethod === 'credit'}
                              onChange={handleChange}
                            />
                            <div className="payment-content">
                              <span className="payment-title">Credit Card</span>
                              <div className="payment-icons">
                                <span className="card-icon visa">VISA</span>
                                <span className="card-icon mastercard">MC</span>
                              </div>
                            </div>
                          </label>
                        </div>

                        <div className={`payment-option ${formData.paymentMethod === 'debit' ? 'selected' : ''}`}>
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="debit"
                              checked={formData.paymentMethod === 'debit'}
                              onChange={handleChange}
                            />
                            <div className="payment-content">
                              <span className="payment-title">Debit Card</span>
                            </div>
                          </label>
                        </div>

                        <div className={`payment-option ${formData.paymentMethod === 'paypal' ? 'selected' : ''}`}>
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="paypal"
                              checked={formData.paymentMethod === 'paypal'}
                              onChange={handleChange}
                            />
                            <div className="payment-content">
                              <span className="payment-title">PayPal</span>
                              <span className="paypal-icon">PayPal</span>
                            </div>
                          </label>
                        </div>
                      </div>

                      {formData.paymentMethod !== 'paypal' && (
                        <div className="card-details">
                          <div className="form-group">
                            <label htmlFor="cardName">Cardholder Name *</label>
                            <input
                              type="text"
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              className={errors.cardName ? 'error' : ''}
                              required={formData.paymentMethod !== 'paypal'}
                              placeholder="Full name as shown on card"
                            />
                            {errors.cardName && <span className="error-message">{errors.cardName}</span>}
                          </div>

                          <div className="form-group">
                            <label htmlFor="cardNumber">Card Number *</label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleCardNumberChange}
                              className={errors.cardNumber ? 'error' : ''}
                              required={formData.paymentMethod !== 'paypal'}
                              placeholder="1234 5678 9012 3456"
                              maxLength="19"
                            />
                            {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
                          </div>

                          <div className="form-group-row">
                            <div className="form-group">
                              <label htmlFor="expiration">Expiry Date *</label>
                              <input
                                type="text"
                                id="expiration"
                                name="expiration"
                                value={formData.expiration}
                                onChange={handleExpirationChange}
                                className={errors.expiration ? 'error' : ''}
                                required={formData.paymentMethod !== 'paypal'}
                                placeholder="MM/YY"
                                maxLength="5"
                              />
                              {errors.expiration && <span className="error-message">{errors.expiration}</span>}
                            </div>
                            <div className="form-group">
                              <label htmlFor="cvv">CVV *</label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                className={errors.cvv ? 'error' : ''}
                                required={formData.paymentMethod !== 'paypal'}
                                placeholder="123"
                                maxLength="4"
                              />
                              {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="form-actions">
                        <button type="button" onClick={prevStep} className="btn-back">
                          <span className="btn-icon">←</span>
                          Back
                        </button>
                        <button type="button" onClick={nextStep} className="btn-next">
                          Review Booking
                          <span className="btn-icon">→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {currentStep === 3 && (
                  <div className="form-step" key="step3">
                    <div className="form-card">
                      <div className="card-header">
                        <h2>✅ Review & Confirm</h2>
                        <p>Please review your booking details</p>
                      </div>

                      <div className="confirmation-details">
                        <div className="detail-section">
                          <h3>Personal Information</h3>
                          <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                          <p><strong>Contact:</strong> {formData.ContactNumber}</p>
                          {formData.email && <p><strong>Email:</strong> {formData.email}</p>}
                          {formData.passportno && <p><strong>Passport:</strong> {formData.passportno}</p>}
                        </div>

                        <div className="detail-section">
                          <h3>Rental Details</h3>
                          <p><strong>Pickup:</strong> {formData.pickupdate} at {formData.pickuplocation}</p>
                          <p><strong>Drop:</strong> {formData.dropdate} at {formData.droplocation}</p>
                          <p><strong>Expected KM:</strong> {formData.expectedKilometers} KM</p>
                          {extraKm > 0 && (
                            <p className="extra-km-note">
                              <strong>Extra KM:</strong> {extraKm} KM (Rs.{extraKmCharge.toLocaleString()})
                            </p>
                          )}
                        </div>

                        <div className="detail-section">
                          <h3>Billing Address</h3>
                          <p>{formData.address}</p>
                          {formData.address2 && <p>{formData.address2}</p>}
                          <p>{formData.state}, {formData.zip}</p>
                          <p>{formData.country}</p>
                        </div>

                        <div className="detail-section">
                          <h3>Payment Method</h3>
                          <p><strong>Method:</strong> {formData.paymentMethod.charAt(0).toUpperCase() + formData.paymentMethod.slice(1)}</p>
                          {formData.paymentMethod !== 'paypal' && formData.cardNumber && (
                            <p><strong>Card:</strong> **** **** **** {formData.cardNumber.replace(/\s/g, '').slice(-4)}</p>
                          )}
                        </div>

                        <div className="detail-section">
                          <h3>Booking Items</h3>
                          {bookingItems.map((vehicle) => (
                            <div key={vehicle.id || vehicle._id} className="booking-item-review">
                              <p><strong>{vehicle.name}</strong> - {quantities[vehicle.id || vehicle._id]} days @ Rs.{vehicle.price}/day</p>
                              <p className="item-subtotal">Subtotal: Rs.{(vehicle.price * quantities[vehicle.id || vehicle._id]).toLocaleString()}</p>
                            </div>
                          ))}
                        </div>

                        <div className="detail-section total-section">
                          <h3>Total Summary</h3>
                          <div className="total-breakdown">
                            <div className="total-line">
                              <span>Subtotal:</span>
                              <span>Rs.{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="total-line">
                              <span>Pickup Fee:</span>
                              <span>Rs.{pickup.toFixed(2)}</span>
                            </div>
                            <div className="total-line">
                              <span>Tax (10%):</span>
                              <span>Rs.{tax.toLocaleString()}</span>
                            </div>
                            {extraKm > 0 && (
                              <div className="total-line extra-charge">
                                <span>Extra KM Charge:</span>
                                <span>Rs.{extraKmCharge.toLocaleString()}</span>
                              </div>
                            )}
                            <div className="total-line final-total">
                              <span><strong>Total Amount:</strong></span>
                              <span><strong>Rs.{total.toLocaleString()}</strong></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="terms-section">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            required
                            onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
                          />
                          <span>I agree to the terms and conditions and the privacy policy</span>
                        </label>
                      </div>

                      <div className="form-actions">
                        <button type="button" onClick={prevStep} className="btn-back">
                          <span className="btn-icon">←</span>
                          Back to Payment
                        </button>
                        <button 
                          type="submit" 
                          className={`btn-submit ${isSubmitting ? 'submitting' : ''}`} 
                          disabled={isSubmitting || !formData.agreeToTerms}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="spinner"></span>
                              Processing Payment...
                            </>
                          ) : (
                            <>
                              Confirm & Pay Rs.{total.toLocaleString()}
                              <span className="btn-icon">✓</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Right Column - Order Summary */}
            <div className="booking-summary">
              <div className="summary-card">
                <div className="summary-header">
                  <h3>📋 Booking Summary</h3>
                  <span className="items-count">{bookingItems.length} vehicle(s)</span>
                </div>

                <div className="summary-items">
                  {bookingItems.map((vehicle) => (
                    <div key={vehicle.id || vehicle._id} className="summary-item">
                      <div className="item-image">
                        <img src={vehicle.imageUrl || vehicle.image} alt={vehicle.name} />
                      </div>
                      <div className="item-details">
                        <div className="item-info">
                          <h4>{vehicle.name}</h4>
                          <p className="item-category">{vehicle.category}</p>
                          <p className="item-quantity">
                            <span className="quantity-badge">{quantities[vehicle.id || vehicle._id]}</span> 
                            {quantities[vehicle.id || vehicle._id] === 1 ? 'day' : 'days'}
                          </p>
                        </div>
                        <div className="item-price">
                          <p className="price-per-day">Rs.{vehicle.price}/day</p>
                          <p className="item-total">Rs.{(vehicle.price * quantities[vehicle.id || vehicle._id]).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="summary-breakdown">
                  <div className="breakdown-row">
                    <span>Subtotal</span>
                    <span>Rs.{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="breakdown-row">
                    <span>Pickup Fee</span>
                    <span>Rs.{pickup.toFixed(2)}</span>
                  </div>
                  <div className="breakdown-row">
                    <span>Tax (10%)</span>
                    <span>Rs.{tax.toLocaleString()}</span>
                  </div>
                  {extraKm > 0 && (
                    <div className="breakdown-row extra-km-row">
                      <span>
                        Extra KM 
                        <span className="extra-km-detail">({extraKm} × Rs.{EXTRA_KM_RATE})</span>
                      </span>
                      <span className="extra-charge">Rs.{extraKmCharge.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="promo-code-section">
                    <input 
                      type="text" 
                      placeholder="Promo code" 
                      className="promo-input"
                    />
                    <button type="button" className="promo-apply">Apply</button>
                  </div>
                </div>

                <div className="summary-total">
                  <div className="total-row">
                    <span>Total Amount</span>
                    <span className="total-amount">Rs.{total.toLocaleString()}</span>
                  </div>
                  {formData.pickupdate && formData.dropdate && (
                    <div className="rental-duration">
                      <span className="duration-icon">📅</span>
                      <span className="duration-text">
                        {Math.ceil((new Date(formData.dropdate) - new Date(formData.pickupdate)) / (1000 * 60 * 60 * 24))} days rental
                      </span>
                    </div>
                  )}
                </div>

                <div className="summary-features">
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Free cancellation up to 24h</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Base {BASE_KM_ALLOWANCE} KM included</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>24/7 Customer support</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">✓</span>
                    <span>Insurance included</span>
                  </div>
                </div>

                <div className="summary-note">
                  <p className="security-note">
                    <span className="lock-icon">🔒</span>
                    Secure payment with SSL encryption
                  </p>
                  <p className="help-text">
                    Need help? Call us at <strong>+94 77 123 4567</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional CSS for new elements */}
      <style jsx>{`
        .alert {
          padding: 12px 16px;
          margin: 16px 0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .alert-error {
          background: #fee;
          border: 1px solid #fcc;
          color: #c00;
        }
        
        .alert-close {
          margin-left: auto;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #c00;
        }
        
        .error-message {
          color: #d32f2f;
          font-size: 12px;
          margin-top: 4px;
          display: block;
        }
        
        input.error, select.error {
          border-color: #d32f2f;
        }
        
        .success-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        
        .success-modal {
          background: white;
          padding: 40px;
          border-radius: 12px;
          text-align: center;
          max-width: 500px;
          animation: slideIn 0.3s ease;
        }
        
        .success-icon {
          font-size: 64px;
          margin-bottom: 20px;
        }
        
        .success-modal h2 {
          margin-bottom: 16px;
          color: #333;
        }
        
        .success-modal p {
          margin-bottom: 12px;
          color: #666;
        }
        
        .success-actions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          justify-content: center;
        }
        
        .success-actions button {
          padding: 12px 24px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .success-actions button:first-child {
          background: #f5f5f5;
          color: #333;
        }
        
        .success-actions button:last-child {
          background: #4CAF50;
          color: white;
        }
        
        .spinner {
          display: inline-block;
          width: 16px;
          height: 16px;
          border: 2px solid #f3f3f3;
          border-top: 2px solid #333;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-right: 8px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          from {
            transform: translateY(-20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .terms-section {
          margin: 20px 0;
          padding: 16px;
          background: #f9f9f9;
          border-radius: 8px;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }
        
        .summary-item {
          display: flex;
          gap: 12px;
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }
        
        .item-image {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .item-details {
          flex: 1;
          display: flex;
          justify-content: space-between;
        }
        
        .quantity-badge {
          background: #4CAF50;
          color: white;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .promo-code-section {
          display: flex;
          gap: 8px;
          margin: 12px 0;
        }
        
        .promo-input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .promo-apply {
          padding: 8px 16px;
          background: #333;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .rental-duration {
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid #eee;
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 14px;
        }
        
        .summary-features {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
        }
        
        .feature {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
          font-size: 14px;
          color: #666;
        }
        
        .feature-icon {
          color: #4CAF50;
          font-weight: bold;
        }
        
        .btn-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .booking-item-review {
          padding: 8px 0;
          border-bottom: 1px solid #f0f0f0;
        }
        
        .item-subtotal {
          color: #666;
          font-size: 14px;
          margin-top: 4px;
        }
        
        .total-section {
          background: #f9f9f9;
          padding: 16px;
          border-radius: 8px;
          margin-top: 16px;
        }
        
        .total-breakdown {
          margin-top: 12px;
        }
        
        .total-line {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
        }
        
        .extra-charge {
          color: #ff6b00;
        }
        
        .final-total {
          margin-top: 8px;
          padding-top: 8px;
          border-top: 2px solid #333;
          font-size: 18px;
        }
        
        .extra-km-detail {
          font-size: 12px;
          color: #999;
          margin-left: 4px;
        }
      `}</style>
      
      <Footer />
    </>
  );
};

export default PlaceBooking;