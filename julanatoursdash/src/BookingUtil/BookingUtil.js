export const calculateBookingTotals = (bookingItems, quantities) => {
    const subtotal = bookingItems.reduce((acc, vehicle) => 
        acc + (vehicle.price * quantities[vehicle.id]), 0);
    
    const pickup = subtotal === 0 ? 0.0 : 10;
    const tax = subtotal * 0.1; // 10%
    const total = subtotal + pickup + tax;

    return {
        subtotal: parseFloat(subtotal.toFixed(2)),
        pickup: parseFloat(pickup.toFixed(2)),
        tax: parseFloat(tax.toFixed(2)),
        total: parseFloat(total.toFixed(2))
    };
};