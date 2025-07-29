import React, { useContext, useState } from 'react';
import './PlaceBooking.css';
import { StoreContext } from '../../context/StoreContext';
import { calculateCartTotals } from '../../BookingUtil/BookingUtil';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';


// export const PlaceBooking = () => {

//     const {vehicleList, quantities,setQuantities} = useContext(StoreContext);

//     const BookingItems = vehicleList.filter((vehicle) => quantities[vehicle.id] > 0)
    
//     const {subtotal, pickup, tax, total} = calculateCartTotals(BookingItems, quantities);

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     username: '',
//     email: 'you@example.com',
//     address: '1234 Main St',
//     address2: 'Apartment or suite',
//     country: '',
//     state: '',
//     zip: '',
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
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <main className='container'>
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
//       <h1 className="text-2xl font-bold mb-6">Billing address</h1>
      
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email (Optional)</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
//           <input
//             type="text"
//             id="address"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="address2" className="block text-sm font-medium text-gray-700">Address 2 (Optional)</label>
//           <input
//             type="text"
//             id="address2"
//             name="address2"
//             value={formData.address2}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//           <div>
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
//             <select
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             >
//               <option value="">Choose...</option>
//               <option value="US">United States</option>
//               <option value="CA">Canada</option>
//               <option value="UK">United Kingdom</option>
//               {/* Add more countries as needed */}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
//             <select
//               id="state"
//               name="state"
//               value={formData.state}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             >
//               <option value="">Choose...</option>
//               <option value="CA">California</option>
//               <option value="NY">New York</option>
//               <option value="TX">Texas</option>
//               {/* Add more states as needed */}
//             </select>
//           </div>
//           <div>
//             <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip</label>
//             <input
//               type="text"
//               id="zip"
//               name="zip"
//               value={formData.zip}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="mb-6 space-y-3">
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="shippingSameAsBilling"
//               name="shippingSameAsBilling"
//               checked={formData.shippingSameAsBilling}
//               onChange={handleChange}
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//             />
//             <label htmlFor="shippingSameAsBilling" className="ml-2 block text-sm text-gray-700">
//               Shipping address is the same as my billing address
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="saveInfo"
//               name="saveInfo"
//               checked={formData.saveInfo}
//               onChange={handleChange}
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//             />
//             <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
//               Save this information for next time
//             </label>
//           </div>
//         </div>

//         <h2 className="text-xl font-bold mb-4">Payment</h2>

//         <div className="mb-4 space-y-2">
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="credit"
//               name="paymentMethod"
//               value="credit"
//               checked={formData.paymentMethod === 'credit'}
//               onChange={handleChange}
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
//             />
//             <label htmlFor="credit" className="ml-2 block text-sm text-gray-700">
//               Credit card
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="debit"
//               name="paymentMethod"
//               value="debit"
//               checked={formData.paymentMethod === 'debit'}
//               onChange={handleChange}
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
//             />
//             <label htmlFor="debit" className="ml-2 block text-sm text-gray-700">
//               Debit card
//             </label>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="radio"
//               id="paypal"
//               name="paymentMethod"
//               value="paypal"
//               checked={formData.paymentMethod === 'paypal'}
//               onChange={handleChange}
//               className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
//             />
//             <label htmlFor="paypal" className="ml-2 block text-sm text-gray-700">
//               PayPal
//             </label>
//           </div>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="cardName" className="block text-sm font-medium text-gray-700">Name on card</label>
//           <input
//             type="text"
//             id="cardName"
//             name="cardName"
//             value={formData.cardName}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required={formData.paymentMethod !== 'paypal'}
//           />
//           <p className="mt-1 text-sm text-gray-500">Full name as displayed on card</p>
//         </div>

//         <div className="mb-4">
//           <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Credit card number</label>
//           <input
//             type="text"
//             id="cardNumber"
//             name="cardNumber"
//             value={formData.cardNumber}
//             onChange={handleChange}
//             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             required={formData.paymentMethod !== 'paypal'}
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <div>
//             <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">Expiration</label>
//             <input
//               type="text"
//               id="expiration"
//               name="expiration"
//               value={formData.expiration}
//               onChange={handleChange}
//               placeholder="MM/YY"
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required={formData.paymentMethod !== 'paypal'}
//             />
//           </div>
//           <div>
//             <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
//             <input
//               type="text"
//               id="cvv"
//               name="cvv"
//               value={formData.cvv}
//               onChange={handleChange}
//               className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//               required={formData.paymentMethod !== 'paypal'}
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Continue to checkout
//         </button>
//       </form>
//     </div>
//     </main>
//   );
// };

// export default PlaceBooking;



 export const PlaceBooking = () => {

    const {vehicleList, quantities,setQuantities} = useContext(StoreContext);

    const BookingItems = vehicleList.filter((vehicle) => quantities[vehicle.id] > 0)
    
    // const {subtotal, pickup, tax, total} = calculateCartTotals(BookingItems, quantities);
  // Mock data to replace context dependencies

  const bookingItems = vehicleList.filter(vehicle => quantities[vehicle.id] > 0);

    const subtotal = bookingItems.reduce((acc, vehicle) => acc + (vehicle.price * quantities[vehicle.id]), 0);
    const pickup = subtotal === 0 ? 0.0 : 10;
    const tax = subtotal * 0.1;
    const total = subtotal + pickup + tax;


  const [formData, setFormData] = useState({
    firstName: 'First',
    lastName: 'Last',
    username: '',
    ContactNumber: '+1 234 567 8901',
    email: 'you@example.com',
    passportno: '',
    pickupdate: '',
    dropdate: '',
    pickuplocation: '',
    droplocation: '',
    address: '1234 Main St',
    address2: 'Apartment or suite',
    country: '',
    state: '',
    zip: '',
    Kilometers: '',
    shippingSameAsBilling: true,
    saveInfo: false,
    paymentMethod: 'credit',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Booking submitted successfully!');
  };

  return (

    <>
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src={assets.logo} alt="Logo" width={120} height={120} className="mx-auto d-block mb-4" />
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Complete Your Booking</h1>
          <p className="mt-2 text-gray-600">Review your selection and enter your details</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-6">
            {/* Billing Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-semibold text-sm">1</span>
                </div>
                Billing Information
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.ContactNumber}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="passportno" className="block text-sm font-medium text-gray-700 mb-1">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    id="passportno"
                    name="passportno"
                    value={formData.passportno}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pickupdate" className="block text-sm font-medium text-gray-700 mb-1">
                      PickUP Date *
                    </label>
                    <input
                      type="date"
                      id="pickupdate"
                      name="pickupdate"
                      value={formData.pickupdate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="dropdate" className="block text-sm font-medium text-gray-700 mb-1">
                      Drop Date *
                    </label>
                    <input
                      type="date"
                      id="dropdate"
                      name="dropdate"
                      value={formData.dropdate}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="pickuplocation" className="block text-sm font-medium text-gray-700 mb-1">
                      PickUP Location *
                    </label>
                    <input
                      type="text"
                      id="pickuplocation"
                      name="pickuplocation"
                      value={formData.pickuplocation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="droplocation" className="block text-sm font-medium text-gray-700 mb-1">
                      Drop Location *
                    </label>
                    <input
                      type="text"
                      id="droplocation"
                      name="droplocation"
                      value={formData.droplocation}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address2" className="block text-sm font-medium text-gray-700 mb-1">
                    Apartment, suite, etc.
                  </label>
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    >
                      <option value="">Select country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="SL">Sri Lanka</option>
                      <option value="In">India</option>
                      <option value="JA">Japan</option>
                      <option value="RU">Rusia</option>
                      <option value="UAE">Dubai</option>
                      <option value="QA">Qatar</option>
                      <option value="BA">Bangaladesh</option>
                      <option value="CH">China</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State *
                    </label>
                    <select
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    >
                      <option value="">Select state</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>

                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP code *
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="Kilometers" className="block text-sm font-medium text-gray-700 mb-1">
                      How many extra kilometers do you require? *
                    </label>
                    <input
                      type="Kilometers"
                      id="Kilometers"
                      name="Kilometers"
                      value={formData.Kilometers}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-indigo-600 font-semibold text-sm">2</span>
                </div>
                Payment Method
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.paymentMethod === 'credit' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit"
                        checked={formData.paymentMethod === 'credit'}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-3 font-medium text-gray-900">Credit Card</span>
                      <div className="ml-auto flex space-x-2">
                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                        <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                      </div>
                    </label>
                  </div>

                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.paymentMethod === 'debit' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="debit"
                        checked={formData.paymentMethod === 'debit'}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-3 font-medium text-gray-900">Debit Card</span>
                    </label>
                  </div>

                  <div className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.paymentMethod === 'paypal' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                      />
                      <span className="ml-3 font-medium text-gray-900">PayPal</span>
                      <div className="ml-auto">
                        <div className="w-12 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">PayPal</div>
                      </div>
                    </label>
                  </div>
                </div>

                {formData.paymentMethod !== 'paypal' && (
                  <div className="mt-6 space-y-4 pt-4 border-t border-gray-200">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                        Cardholder name *
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        placeholder="Full name as shown on card"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required={formData.paymentMethod !== 'paypal'}
                      />
                    </div>

                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card number *
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        required={formData.paymentMethod !== 'paypal'}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiration" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry date *
                        </label>
                        <input
                          type="text"
                          id="expiration"
                          name="expiration"
                          value={formData.expiration}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          required={formData.paymentMethod !== 'paypal'}
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                          CVV *
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength="4"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          required={formData.paymentMethod !== 'paypal'}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 space-y-3 pt-4 border-t border-gray-200">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">Save payment information for next time</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Booking Summary</h3>
              
              <div className="space-y-4 mb-6">
                {bookingItems.map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{vehicle.name}</h4>
                      <small className="text-gray-600">Quantity: {quantities[vehicle.id]}</small>
                      {/* <p className="text-sm text-gray-600">{item.days} days rental</p> */}
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">Rs.{vehicle.price * quantities[vehicle.id]}</p>
                      {/* <p className="text-sm text-gray-600">${vehicle.price}/day</p> */}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-900">Rs.{subtotal === 0 ? 0.0 : pickup.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Pickup fee</span>
                    <span className="text-gray-900">Rs.{pickup.toFixed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax</span>
                    <span className="text-gray-900">Rs.{tax.toFixed}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between">
                      <span className="text-lg font-semibold text-gray-900">Total</span>
                      <span className="text-lg font-semibold text-gray-900">Rs.{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                Complete Booking
              </button>

              <p className="mt-4 text-xs text-gray-500 text-center">
                By completing this booking, you agree to our terms and conditions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PlaceBooking;