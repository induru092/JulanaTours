package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;

public interface PlaceBookingService {

    /**
     * Process and confirm a booking placement
     * @param request Booking placement details
     * @param userId User placing the booking
     * @return Confirmed booking response
     */
    PlaceBookingResponse placeBooking(PlaceBookingRequest request, String userId);

    /**
     * Calculate extra kilometer charges
     * @param expectedKm Expected kilometers
     * @param baseAllowance Base kilometer allowance
     * @param extraKmRate Rate per extra kilometer
     * @return Extra kilometer charge amount
     */
    Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate);

    /**
     * Generate a human-readable booking number
     * @return Unique booking number
     */
    String generateBookingNumber();

    /**
     * Process payment (mock implementation)
     * @param paymentMethod Payment method
     * @param amount Total amount
     * @param cardDetails Card details if applicable
     * @return Payment reference or transaction ID
     */
    String processPayment(String paymentMethod, Double amount, String cardDetails);
}
