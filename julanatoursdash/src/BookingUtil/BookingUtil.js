export const calculateCartTotals = (BookingItems, quantities) => {
    const subtotal = BookingItems.reduce((acc, vehicle) => acc + vehicle.price + quantities[vehicle.id], 0);
    const PickUp = subtotal === 0? 0.0: 10;
    const tax = subtotal * 0.1; //10%
    const total = subtotal + PickUp + tax;

    return{subtotal, PickUp, tax,  total};
}