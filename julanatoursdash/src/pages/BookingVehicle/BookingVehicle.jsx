// import React, { useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './BookingVehicle.css';
// import { StoreContext } from '../../context/StoreContext';
// import PlaceBooking from '../PlaceBooking/PlaceBooking';

// export const BookingVehicle = () => {
//     const navigate = useNavigate();
//     const { vehicleList, increaseQty, decreaseQty, quantities, removeFromBookingVehicle } = useContext(StoreContext);

//     const bookingItems = vehicleList.filter(vehicle => quantities[vehicle.id] > 0);

//     const subtotal = bookingItems.reduce((acc, vehicle) => acc + (vehicle.price * quantities[vehicle.id]), 0);
//     const pickup = subtotal === 0 ? 0.0 : 10;
//     const tax = subtotal * 0.1;
//     const total = subtotal + pickup + tax;

//     return (
//         <div className="container py-5">
//             <h1 className="mb-5">Your Booking Vehicle</h1>
//             <div className="row">
//                 <div className="col-lg-8">
//                     {bookingItems.length === 0 ? (
//                         <p>Your Booking is empty.</p>
//                     ) : (
//                         <div className="card mb-4">
//                             <div className="card-body">
//                                 {bookingItems.map((vehicle) => (
//                                     <div key={vehicle.id} className="row cart-item mb-3">
//                                         <div className="col-md-3">
//                                             <img 
//                                                 src={vehicle.imageUrl} 
//                                                 alt={vehicle.name} 
//                                                 className="img-fluid rounded" 
//                                                 width={100}
//                                             />
//                                         </div>
//                                         <div className="col-md-5">
//                                             <h5 className="card-title">{vehicle.name}</h5>
//                                             <p className="text-muted">Category: {vehicle.Category}</p>
//                                         </div>
//                                         <div className="col-md-2">
//                                             <div className="input-group">
//                                                 <button 
//                                                     className="btn btn-outline-secondary btn-sm" 
//                                                     type="button"
//                                                     onClick={() => decreaseQty(vehicle.id)}
//                                                     disabled={quantities[vehicle.id] <= 1}
//                                                 >
//                                                     -
//                                                 </button>
//                                                 <input 
//                                                     style={{ maxWidth: "100px" }} 
//                                                     type="text" 
//                                                     className="form-control form-control-sm text-center quantity-input" 
//                                                     value={quantities[vehicle.id]} 
//                                                     readOnly 
//                                                 />
//                                                 <button 
//                                                     className="btn btn-outline-secondary btn-sm" 
//                                                     type="button"
//                                                     onClick={() => increaseQty(vehicle.id)}
//                                                 >
//                                                     +
//                                                 </button>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-2 text-end">
//                                             <p className="fw-bold">Rs.{(vehicle.price * quantities[vehicle.id]).toFixed(2)}</p>
//                                             <button 
//                                                 className="btn btn-sm btn-outline-danger" 
//                                                 onClick={() => removeFromBookingVehicle(vehicle.id)}
//                                             >
//                                                 <i className="bi bi-trash"></i>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 ))}
//                                 <hr />
//                             </div>
//                         </div>
//                     )}

//                     <div className="text-start mb-4">
//                         <Link to="/" className="btn btn-outline-primary">
//                             <i className="bi bi-arrow-left me-2"></i>Continue Booking
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="col-lg-4">
//                     <div className="card cart-summary">
//                         <div className="card-body">
//                             <h5 className="card-title mb-4">Order Summary</h5>
//                             <div className="d-flex justify-content-between mb-3">
//                                 <span>Subtotal</span>
//                                 <span>Rs.{subtotal.toFixed(2)}</span>
//                             </div>
//                             <div className="d-flex justify-content-between mb-3">
//                                 <span>Pickup</span>
//                                 <span>Rs.{pickup.toFixed(2)}</span>
//                             </div>
//                             <div className="d-flex justify-content-between mb-3">
//                                 <span>Tax</span>
//                                 <span>Rs.{tax.toFixed(2)}</span>
//                             </div>
//                             <hr/>
//                             <div className="d-flex justify-content-between mb-4">
//                                 <strong>Total</strong>
//                                 <strong>Rs.{total.toFixed(2)}</strong>
//                             </div>
//                             <button 
//                                 className="btn btn-primary w-100" 
//                                 disabled={bookingItems.length === 0} 
//                                 onClick={() => navigate("/PlaceBooking")}
//                             >
//                                 Proceed to Checkout
//                             </button>
//                         </div>
//                     </div>
                    
//                     <div className="card mt-4">
//                         <div className="card-body">
//                             <h5 className="card-title mb-3">Apply Promo Code</h5>
//                             <div className="input-group mb-3">
//                                 <input type="text" className="form-control" placeholder="Enter promo code" />
//                                 <button className="btn btn-outline-secondary" type="button">Apply</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BookingVehicle;

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BookingVehicle.css';
import { StoreContext } from '../../context/StoreContext';

export const BookingVehicle = () => {
    const navigate = useNavigate();
    const { vehicleList, increaseQty, decreaseQty, quantities, removeFromBookingVehicle } = useContext(StoreContext);
    const [promoCode, setPromoCode] = useState('');
    const [promoApplied, setPromoApplied] = useState(false);
    const [discount, setDiscount] = useState(0);

    const bookingItems = vehicleList.filter(vehicle => quantities[vehicle.id] > 0);

    const subtotal = bookingItems.reduce((acc, vehicle) => acc + (vehicle.price * quantities[vehicle.id]), 0);
    const pickup = subtotal === 0 ? 0.0 : 10;
    const tax = subtotal * 0.1;
    const discountAmount = subtotal * (discount / 100);
    const total = subtotal + pickup + tax - discountAmount;

    const handlePromoCode = () => {
        if (promoCode.toUpperCase() === 'SAVE10') {
            setDiscount(10);
            setPromoApplied(true);
        } else if (promoCode.toUpperCase() === 'WELCOME20') {
            setDiscount(20);
            setPromoApplied(true);
        } else {
            setDiscount(0);
            setPromoApplied(false);
        }
    };

    const removePromo = () => {
        setPromoCode('');
        setDiscount(0);
        setPromoApplied(false);
    };

    return (
        <div className="booking-container">
            <div className="booking-header">
                <div className="header-content">
                    <h1 className="booking-title">
                        <span className="title-icon">🚗</span>
                        Your Vehicle Booking
                    </h1>
                    <p className="booking-subtitle">Review and manage your selected vehicles</p>
                </div>
            </div>

            <div className="booking-content">
                <div className="booking-main">
                    {bookingItems.length === 0 ? (
                        <div className="empty-booking">
                            <div className="empty-icon">🚫</div>
                            <h3>Your booking is empty</h3>
                            <p>Add some vehicles to get started with your booking</p>
                            <Link to="/" className="btn-primary-modern">
                                Browse Vehicles
                            </Link>
                        </div>
                    ) : (
                        <div className="booking-items">
                            <div className="items-header">
                                <h2>Selected Vehicles ({bookingItems.length})</h2>
                            </div>
                            
                            {bookingItems.map((vehicle, index) => (
                                <div key={vehicle.id} className="booking-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="item-image">
                                        <img 
                                            src={vehicle.imageUrl} 
                                            alt={vehicle.name}
                                            loading="lazy"
                                        />
                                        <div className="image-overlay"></div>
                                    </div>
                                    
                                    <div className="item-details">
                                        <h3 className="item-name">{vehicle.name}</h3>
                                        <p className="item-category">
                                            <span className="category-badge">{vehicle.Category}</span>
                                        </p>
                                        <p className="item-price">Rs.{vehicle.price.toFixed(2)} <span>per day</span></p>
                                    </div>
                                    
                                    <div className="item-controls">
                                        <div className="quantity-control">
                                            <button 
                                                className="qty-btn decrease" 
                                                onClick={() => decreaseQty(vehicle.id)}
                                                disabled={quantities[vehicle.id] <= 1}
                                            >
                                                <span>−</span>
                                            </button>
                                            <div className="quantity-display">
                                                <span>{quantities[vehicle.id]}</span>
                                                <small>days</small>
                                            </div>
                                            <button 
                                                className="qty-btn increase" 
                                                onClick={() => increaseQty(vehicle.id)}
                                            >
                                                <span>+</span>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="item-total">
                                        <div className="total-amount">
                                            Rs.{(vehicle.price * quantities[vehicle.id]).toFixed(2)}
                                        </div>
                                        <button 
                                            className="remove-btn" 
                                            onClick={() => removeFromBookingVehicle(vehicle.id)}
                                            title="Remove from booking"
                                        >
                                            <span>🗑️</span>
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="continue-booking">
                                <Link to="/" className="btn-secondary-modern">
                                    <span>←</span> Continue Booking
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                <div className="booking-sidebar">
                    <div className="summary-card">
                        <div className="card-header">
                            <h3>📋 Order Summary</h3>
                        </div>
                        
                        <div className="summary-details">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>Rs.{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Pickup Fee</span>
                                <span>Rs.{pickup.toFixed(2)}</span>
                            </div>
                            <div className="summary-row">
                                <span>Tax (10%)</span>
                                <span>Rs.{tax.toFixed(2)}</span>
                            </div>
                            {promoApplied && (
                                <div className="summary-row discount-row">
                                    <span>Discount ({discount}%)</span>
                                    <span>-Rs.{discountAmount.toFixed(2)}</span>
                                </div>
                            )}
                        </div>
                        
                        <div className="summary-total">
                            <div className="total-row">
                                <span>Total</span>
                                <span>Rs.{total.toFixed(2)}</span>
                            </div>
                        </div>
                        
                        <button 
                            className={`checkout-btn ${bookingItems.length === 0 ? 'disabled' : ''}`}
                            disabled={bookingItems.length === 0} 
                            onClick={() => navigate("/PlaceBooking")}
                        >
                            <span>Proceed to Checkout</span>
                            <span className="checkout-icon">→</span>
                        </button>
                    </div>
                    
                    <div className="promo-card">
                        <div className="card-header">
                            <h3>🎟️ Promo Code</h3>
                        </div>
                        
                        {!promoApplied ? (
                            <div className="promo-input-group">
                                <input 
                                    type="text" 
                                    className="promo-input" 
                                    placeholder="Enter promo code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                />
                                <button 
                                    className="apply-btn" 
                                    onClick={handlePromoCode}
                                    disabled={!promoCode.trim()}
                                >
                                    Apply
                                </button>
                            </div>
                        ) : (
                            <div className="promo-applied">
                                <div className="promo-success">
                                    <span className="success-icon">✅</span>
                                    <div>
                                        <strong>Promo Applied!</strong>
                                        <p>{discount}% discount active</p>
                                    </div>
                                </div>
                                <button className="remove-promo" onClick={removePromo}>
                                    Remove
                                </button>
                            </div>
                        )}
                        
                        <div className="promo-suggestions">
                            <p>Try these codes:</p>
                            <div className="suggestion-codes">
                                <span onClick={() => setPromoCode('SAVE10')}>SAVE10</span>
                                <span onClick={() => setPromoCode('WELCOME20')}>WELCOME20</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingVehicle;