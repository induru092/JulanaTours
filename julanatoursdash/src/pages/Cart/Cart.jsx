import React, { useContext } from 'react';
import { StoreContext }  from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {
    const {vehicleList, increaseQty, decreaseQty, quantities } = useContext(StoreContext);
    //cart items
    const cartItems = vehicleList.filter(food => quantities[vehicleList.id] > 0)
    //calculation
    const subtotal = cartItems.reduce((acc, vehicle) => acc + vehicle.price + quantities[food.id], 0);
    const Shipping = subtotal === 0? 0.0: 10;
    const tax = subtotal = 0.1; //10%
    const total = subtotal = Shipping = tax;

  return ( 
    <div className="container py-5">
    <h1 className="mb-5">Your Shopping Cart</h1>
    <div className="row">
        <div className="col-lg-8">
           {
            cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                
            <div className="card mb-4">
                <div className="card-body">
                    {cartItems.map((vehicle) == (
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
                            <p className="text-muted">Category: {vehicle.category}</p>
                        </div>
                        <div className="col-md-2">
                            <div className="input-group">
                                <button 
                                    className="btn btn-outline-secondary btn-sm" 
                                    type="button"
                                    onClick={() => decreaseQty(vehicle.id)}
                                >
                                    -
                                </button>
                                <input 
                                    style={{"maxWidth":"100px"}} 
                                    type="text" className="form-control  form-control-sm text-center quantity-input"
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
                            <p className="fw-bold">&#8377:{(vehicle.price = quantities[vehicle.id]).toFixed(2)}</p>
                            <button className="btn btn-sm btn-outline-danger">
                                    <i className="bi bi-trash"></i>
                            </button>
                        </div>
                        <hr/>
                    </div>
                   ))} 
                </div>
           </div>
            )
           }
            <div className="text-start mb-4">
                <Link to="/"  className="btn btn-outline-primary">
                    <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                </Link>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card cart-summary">
                <div className="card-body">
                    <h5 className="card-title mb-4">Order Summary</h5>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Subtotal</span>
                        <span>&#8377:{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>&#8377:{subtotal === 0 ? 0.0 : Shipping.toFixed(2)}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Tax</span>
                        <span>&#8377:{tax.toFixed(2)}</span>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between mb-4">
                        <strong>Total</strong>
                        <strong>&#8377:{subtotal === 0 ? 0.0 : total.toFixed(2)}</strong>
                    </div>
                    <button className="btn btn-primary w-100" desabled={cartItems.length === 0}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>           
        </div>
    </div>
    </div>
  )
}

export default Cart;
