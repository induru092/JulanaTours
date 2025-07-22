export const calculateCartTotals = (cartItems, quantities) => {
    const subtotal = cartItems.reduce((acc, vehicle) => acc + vehicle.price + quantities[vehicle.id], 0);
    const Shipping = subtotal === 0? 0.0: 10;
    const tax = subtotal * 0.1; //10%
    const total = subtotal + Shipping + tax;

    return{subtotal, shipping, tax,  total};
}