import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './BookingVehicle.css';
import { StoreContext } from '../../context/StoreContext';
import PlaceBooking from '../PlaceBooking/PlaceBooking';

export const BookingVehicle = () => {
    const navigate = useNavigate();
    const { vehicleList, increaseQty, decreaseQty, quantities, removeFromBookingVehicle } = useContext(StoreContext);

    const bookingItems = vehicleList.filter(vehicle => quantities[vehicle.id] > 0);

    const subtotal = bookingItems.reduce((acc, vehicle) => acc + (vehicle.price * quantities[vehicle.id]), 0);
    const pickup = subtotal === 0 ? 0.0 : 10;
    const tax = subtotal * 0.1;
    const total = subtotal + pickup + tax;

    return (
        <div className="container py-5">
            <h1 className="mb-5">Your Booking Vehicle</h1>
            <div className="row">
                <div className="col-lg-8">
                    {bookingItems.length === 0 ? (
                        <p>Your Booking is empty.</p>
                    ) : (
                        <div className="card mb-4">
                            <div className="card-body">
                                {bookingItems.map((vehicle) => (
                                    <div key={vehicle.id} className="row cart-item mb-3">
                                        <div className="col-md-3">
                                            <img 
                                                src={vehicle.imageUrl} 
                                                alt={vehicle.name} 
                                                className="img-fluid rounded" 
                                                width={100}
                                            />
                                        </div>
                                        <div className="col-md-5">
                                            <h5 className="card-title">{vehicle.name}</h5>
                                            <p className="text-muted">Category: {vehicle.Category}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="input-group">
                                                <button 
                                                    className="btn btn-outline-secondary btn-sm" 
                                                    type="button"
                                                    onClick={() => decreaseQty(vehicle.id)}
                                                    disabled={quantities[vehicle.id] <= 1}
                                                >
                                                    -
                                                </button>
                                                <input 
                                                    style={{ maxWidth: "100px" }} 
                                                    type="text" 
                                                    className="form-control form-control-sm text-center quantity-input" 
                                                    value={quantities[vehicle.id]} 
                                                    readOnly 
                                                />
                                                <button 
                                                    className="btn btn-outline-secondary btn-sm" 
                                                    type="button"
                                                    onClick={() => increaseQty(vehicle.id)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-2 text-end">
                                            <p className="fw-bold">Rs.{(vehicle.price * quantities[vehicle.id]).toFixed(2)}</p>
                                            <button 
                                                className="btn btn-sm btn-outline-danger" 
                                                onClick={() => removeFromBookingVehicle(vehicle.id)}
                                            >
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <hr />
                            </div>
                        </div>
                    )}

                    <div className="text-start mb-4">
                        <Link to="/" className="btn btn-outline-primary">
                            <i className="bi bi-arrow-left me-2"></i>Continue Booking
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card cart-summary">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Order Summary</h5>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Subtotal</span>
                                <span>Rs.{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Pickup</span>
                                <span>Rs.{pickup.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span>Tax</span>
                                <span>Rs.{tax.toFixed(2)}</span>
                            </div>
                            <hr/>
                            <div className="d-flex justify-content-between mb-4">
                                <strong>Total</strong>
                                <strong>Rs.{total.toFixed(2)}</strong>
                            </div>
                            <button 
                                className="btn btn-primary w-100" 
                                disabled={bookingItems.length === 0} 
                                onClick={() => navigate("/PlaceBooking")}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                    
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title mb-3">Apply Promo Code</h5>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter promo code" />
                                <button className="btn btn-outline-secondary" type="button">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingVehicle;