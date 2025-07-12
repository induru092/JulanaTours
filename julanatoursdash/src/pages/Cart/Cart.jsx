import React from 'react'

const Cart = () => {
  return (
   
<div className="container py-5">
    <h1 className="mb-5">Your Shopping Cart</h1>
    <div className="row">
        <div className="col-lg-8">
            <div className="card mb-4">
                <div className="card-body">
                    <div className="row cart-item mb-3">
                        <div className="col-md-3">
                            <img src="https://via.placeholder.com/100" alt="Product 1" className="img-fluid rounded"/>
                        </div>
                        <div className="col-md-5">
                            <h5 className="card-title">Product 1</h5>
                            <p className="text-muted">Category: Electronics</p>
                        </div>
                        <div className="col-md-2">
                            <div className="input-group">
                                <button className="btn btn-outline-secondary btn-sm" type="button">-</button>
                                <input style={{"maxWidth":"100px"}} type="text" className="form-control  form-control-sm text-center quantity-input"/>
                                <button className="btn btn-outline-secondary btn-sm" type="button">+</button>
                            </div>
                        </div>
                        <div className="col-md-2 text-end">
                            <p className="fw-bold">$99.99</p>
                            <button className="btn btn-sm btn-outline-danger">
                                    <i className="bi bi-trash"></i>
                                </button>
                        </div>
                    </div>
                    <hr/>
                    <div className="row cart-item">
                        <div className="col-md-3">
                            <img src="https://via.placeholder.com/100" alt="Product 2" className="img-fluid rounded"/>
                        </div>
                        <div className="col-md-5">
                            <h5 className="card-title">Product 2</h5>
                            <p className="text-muted">Category: Clothing</p>
                        </div>
                        <div className="col-md-2">
                            <div className="input-group">
                                <button className="btn btn-outline-secondary btn-sm" type="button">-</button>
                                <input style={{"maxWidth":"100px"}} type="text" className="form-control form-control-sm text-center quantity-input"/>
                                <button className="btn btn-outline-secondary btn-sm" type="button">+</button>
                            </div>
                        </div>
                        <div className="col-md-2 text-end">
                            <p className="fw-bold">$49.99</p>
                            <button className="btn btn-sm btn-outline-danger">
                                    <i className="bi bi-trash"></i>
                                </button>
                        </div>
                    </div>
                </div>
            </div>           
            <div className="text-start mb-4">
                <a href="#" className="btn btn-outline-primary">
                    <i className="bi bi-arrow-left me-2"></i>Continue Shopping
                </a>
            </div>
        </div>
        <div className="col-lg-4">
            <div className="card cart-summary">
                <div className="card-body">
                    <h5 className="card-title mb-4">Order Summary</h5>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Subtotal</span>
                        <span>$199.97</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Shipping</span>
                        <span>$10.00</span>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                        <span>Tax</span>
                        <span>$20.00</span>
                    </div>
                    <hr/>
                    <div className="d-flex justify-content-between mb-4">
                        <strong>Total</strong>
                        <strong>$229.97</strong>
                    </div>
                    <button className="btn btn-primary w-100">Proceed to Checkout</button>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-body">
                    <h5 className="card-title mb-3">Apply Promo Code</h5>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Enter promo code"/>
                        <button className="btn btn-outline-secondary" type="button">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Cart;
