//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.io.BookingRequest;
//import in.luckyseven.julanatoursapi.io.BookingResponse;
//
//import java.util.List;
//
//public interface BookingService {
//
//    /**
//     * Create a new booking
//     * @param request Booking details
//     * @param userId User creating the booking
//     * @return Created booking response
//     */
//    BookingResponse createBooking(BookingRequest request, String userId);
//
//    /**
//     * Get all bookings for a user
//     * @param userId User ID
//     * @return List of user's bookings
//     */
//    List<BookingResponse> getUserBookings(String userId);
//
//    /**
//     * Get a specific booking by ID
//     * @param bookingId Booking ID
//     * @param userId User ID (for authorization)
//     * @return Booking details
//     */
//    BookingResponse getBookingById(String bookingId, String userId);
//
//    /**
//     * Update booking status
//     * @param bookingId Booking ID
//     * @param status New status
//     * @return Updated booking
//     */
//    BookingResponse updateBookingStatus(String bookingId, String status);
//
//    /**
//     * Cancel a booking
//     * @param bookingId Booking ID
//     * @param userId User ID (for authorization)
//     * @return Updated booking
//     */
//    BookingResponse cancelBooking(String bookingId, String userId);
//
//    /**
//     * Apply promo code to calculate discount
//     * @param promoCode Promo code
//     * @param subtotal Subtotal amount
//     * @return Discount percentage (0 if invalid)
//     */
//    Integer validatePromoCode(String promoCode, Double subtotal);
//
//    /**
//     * Get all bookings (admin only)
//     * @return List of all bookings
//     */
//    List<BookingResponse> getAllBookings();
//
//    /**
//     * Get bookings by status
//     * @param status Booking status
//     * @return List of bookings with the status
//     */
//    List<BookingResponse> getBookingsByStatus(String status);
//}

package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.BookingRequest;
import in.luckyseven.julanatoursapi.io.BookingResponse;
import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;

import java.util.List;

public interface BookingService {

    /**
     * Create a new booking from PlaceBookingRequest (main booking flow)
     * @param request PlaceBooking details
     * @param userId User creating the booking
     * @return Created booking response
     */
    PlaceBookingResponse createBookingFromPlaceBooking(PlaceBookingRequest request, String userId);

    /**
     * Create a new booking from BookingRequest (simplified flow)
     * @param request Booking details
     * @param userId User creating the booking
     * @return Created booking response
     */
    BookingResponse createBooking(BookingRequest request, String userId);

    /**
     * Get all bookings for a user
     * @param userId User ID
     * @return List of user's bookings
     */
    List<BookingResponse> getUserBookings(String userId);

    /**
     * Get all bookings by user ID (alias for consistency)
     */
    List<BookingResponse> getBookingsByUser(String userId);

    /**
     * Get a specific booking by ID
     * @param bookingId Booking ID
     * @param userId User ID (for authorization) - optional for admin
     * @return Booking details
     */
    BookingResponse getBookingById(String bookingId, String userId);

    /**
     * Get booking by ID (admin access - no user check)
     */
    BookingResponse getBookingById(String bookingId);

    /**
     * Update booking status
     * @param bookingId Booking ID
     * @param status New status
     * @return Updated booking
     */
    BookingResponse updateBookingStatus(String bookingId, String status);

    /**
     * Cancel a booking
     * @param bookingId Booking ID
     * @param userId User ID (for authorization)
     * @return Updated booking
     */
    BookingResponse cancelBooking(String bookingId, String userId);

    /**
     * Delete/Cancel booking (admin function)
     */
    boolean deleteBooking(String bookingId);

    /**
     * Apply promo code to calculate discount
     * @param promoCode Promo code
     * @param subtotal Subtotal amount
     * @return Discount percentage (0 if invalid)
     */
    Integer validatePromoCode(String promoCode, Double subtotal);

    /**
     * Get all bookings (admin only)
     * @return List of all bookings
     */
    List<BookingResponse> getAllBookings();

    /**
     * Get bookings by status
     * @param status Booking status
     * @return List of bookings with the status
     */
    List<BookingResponse> getBookingsByStatus(String status);

    /**
     * Calculate extra kilometer charges
     */
    Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate);

    /**
     * Generate booking number
     */
    String generateBookingNumber();
}

