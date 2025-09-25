//package in.luckyseven.julanatoursapi.controller;
//
//import in.luckyseven.julanatoursapi.io.BookingRequest;
//import in.luckyseven.julanatoursapi.io.BookingResponse;
//import in.luckyseven.julanatoursapi.service.BookingService;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/bookings")
//@AllArgsConstructor
//@Slf4j
//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
//@Validated
//public class BookingController {
//
//    private final BookingService bookingService;
//
//    @PostMapping
//    public ResponseEntity<?> createBooking(@Valid @RequestBody BookingRequest request,
//                                           Authentication authentication) {
//        try {
//            String userId = authentication.getName();
//            log.info("Creating booking for user: {}", userId);
//
//            BookingResponse response = bookingService.createBooking(request, userId);
//
//            return ResponseEntity.status(HttpStatus.CREATED).body(response);
//
//        } catch (Exception e) {
//            log.error("Error creating booking", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to create booking: " + e.getMessage()));
//        }
//    }
//
//    @GetMapping
//    public ResponseEntity<?> getUserBookings(Authentication authentication) {
//        try {
//            String userId = authentication.getName();
//            log.info("Fetching bookings for user: {}", userId);
//
//            List<BookingResponse> bookings = bookingService.getUserBookings(userId);
//
//            return ResponseEntity.ok(bookings);
//
//        } catch (Exception e) {
//            log.error("Error fetching user bookings", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to fetch bookings: " + e.getMessage()));
//        }
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getBookingById(@PathVariable String id,
//                                            Authentication authentication) {
//        try {
//            String userId = authentication.getName();
//            log.info("Fetching booking {} for user: {}", id, userId);
//
//            BookingResponse booking = bookingService.getBookingById(id, userId);
//
//            return ResponseEntity.ok(booking);
//
//        } catch (RuntimeException e) {
//            log.error("Booking not found or access denied: {}", e.getMessage());
//            return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                    .body(Map.of("message", e.getMessage()));
//        } catch (Exception e) {
//            log.error("Error fetching booking", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to fetch booking: " + e.getMessage()));
//        }
//    }
//
//    @PutMapping("/{id}/status")
//    public ResponseEntity<?> updateBookingStatus(@PathVariable String id,
//                                                 @RequestBody Map<String, String> statusRequest,
//                                                 Authentication authentication) {
//        try {
//            String status = statusRequest.get("status");
//            if (status == null || status.trim().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "Status is required"));
//            }
//
//            log.info("Updating booking {} status to: {}", id, status);
//
//            BookingResponse booking = bookingService.updateBookingStatus(id, status);
//
//            return ResponseEntity.ok(booking);
//
//        } catch (RuntimeException e) {
//            log.error("Error updating booking status: {}", e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(Map.of("message", e.getMessage()));
//        } catch (Exception e) {
//            log.error("Error updating booking status", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to update booking status: " + e.getMessage()));
//        }
//    }
//
//    @PutMapping("/{id}/cancel")
//    public ResponseEntity<?> cancelBooking(@PathVariable String id,
//                                           Authentication authentication) {
//        try {
//            String userId = authentication.getName();
//            log.info("Cancelling booking {} for user: {}", id, userId);
//
//            BookingResponse booking = bookingService.cancelBooking(id, userId);
//
//            return ResponseEntity.ok(booking);
//
//        } catch (RuntimeException e) {
//            log.error("Error cancelling booking: {}", e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(Map.of("message", e.getMessage()));
//        } catch (Exception e) {
//            log.error("Error cancelling booking", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to cancel booking: " + e.getMessage()));
//        }
//    }
//
//    @PostMapping("/validate-promo")
//    public ResponseEntity<?> validatePromoCode(@RequestBody Map<String, Object> request) {
//        try {
//            String promoCode = (String) request.get("promoCode");
//            Double subtotal = ((Number) request.get("subtotal")).doubleValue();
//
//            if (promoCode == null || subtotal == null) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "Promo code and subtotal are required"));
//            }
//
//            Integer discountPercentage = bookingService.validatePromoCode(promoCode, subtotal);
//            Double discountAmount = subtotal * (discountPercentage / 100.0);
//
//            Map<String, Object> response = Map.of(
//                    "valid", discountPercentage > 0,
//                    "discountPercentage", discountPercentage,
//                    "discountAmount", discountAmount,
//                    "message", discountPercentage > 0 ?
//                            "Promo code applied successfully!" :
//                            "Invalid promo code"
//            );
//
//            return ResponseEntity.ok(response);
//
//        } catch (Exception e) {
//            log.error("Error validating promo code", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to validate promo code: " + e.getMessage()));
//        }
//    }
//
//    // Admin endpoints
//    @GetMapping("/admin/all")
//    public ResponseEntity<?> getAllBookings(Authentication authentication) {
//        try {
//            // Add admin role check here if needed
//            log.info("Admin fetching all bookings");
//
//            List<BookingResponse> bookings = bookingService.getAllBookings();
//
//            return ResponseEntity.ok(bookings);
//
//        } catch (Exception e) {
//            log.error("Error fetching all bookings", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to fetch all bookings: " + e.getMessage()));
//        }
//    }
//
//    @GetMapping("/admin/status/{status}")
//    public ResponseEntity<?> getBookingsByStatus(@PathVariable String status,
//                                                 Authentication authentication) {
//        try {
//            // Add admin role check here if needed
//            log.info("Admin fetching bookings with status: {}", status);
//
//            List<BookingResponse> bookings = bookingService.getBookingsByStatus(status);
//
//            return ResponseEntity.ok(bookings);
//
//        } catch (RuntimeException e) {
//            log.error("Error fetching bookings by status: {}", e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(Map.of("message", e.getMessage()));
//        } catch (Exception e) {
//            log.error("Error fetching bookings by status", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to fetch bookings: " + e.getMessage()));
//        }
//    }
//}

package in.luckyseven.julanatoursapi.controller;

import in.luckyseven.julanatoursapi.io.BookingRequest;
import in.luckyseven.julanatoursapi.io.BookingResponse;
import in.luckyseven.julanatoursapi.service.BookingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/bookings")
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
@Validated
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public ResponseEntity<?> createBooking(@Valid @RequestBody BookingRequest request,
                                           Authentication authentication) {
        try {
            String userId = authentication.getName();
            log.info("Creating booking for user: {}", userId);

            BookingResponse response = bookingService.createBooking(request, userId);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (Exception e) {
            log.error("Error creating booking", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to create booking: " + e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<?> getUserBookings(Authentication authentication) {
        try {
            String userId = authentication.getName();
            log.info("Fetching bookings for user: {}", userId);

            List<BookingResponse> bookings = bookingService.getUserBookings(userId);

            return ResponseEntity.ok(bookings);

        } catch (Exception e) {
            log.error("Error fetching user bookings", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch bookings: " + e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingById(@PathVariable String id,
                                            Authentication authentication) {
        try {
            String userId = authentication.getName();
            log.info("Fetching booking {} for user: {}", id, userId);

            BookingResponse booking = bookingService.getBookingById(id, userId);

            return ResponseEntity.ok(booking);

        } catch (RuntimeException e) {
            log.error("Booking not found or access denied: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Error fetching booking", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch booking: " + e.getMessage()));
        }
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<?> updateBookingStatus(@PathVariable String id,
                                                 @RequestBody Map<String, String> statusRequest,
                                                 Authentication authentication) {
        try {
            String status = statusRequest.get("status");
            if (status == null || status.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Status is required"));
            }

            log.info("Updating booking {} status to: {}", id, status);

            BookingResponse booking = bookingService.updateBookingStatus(id, status);

            return ResponseEntity.ok(booking);

        } catch (RuntimeException e) {
            log.error("Error updating booking status: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Error updating booking status", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to update booking status: " + e.getMessage()));
        }
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<?> cancelBooking(@PathVariable String id,
                                           Authentication authentication) {
        try {
            String userId = authentication.getName();
            log.info("Cancelling booking {} for user: {}", id, userId);

            BookingResponse booking = bookingService.cancelBooking(id, userId);

            return ResponseEntity.ok(booking);

        } catch (RuntimeException e) {
            log.error("Error cancelling booking: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Error cancelling booking", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to cancel booking: " + e.getMessage()));
        }
    }

    @PostMapping("/validate-promo")
    public ResponseEntity<?> validatePromoCode(@RequestBody Map<String, Object> request) {
        try {
            String promoCode = (String) request.get("promoCode");
            Double subtotal = ((Number) request.get("subtotal")).doubleValue();

            if (promoCode == null || subtotal == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Promo code and subtotal are required"));
            }

            Integer discountPercentage = bookingService.validatePromoCode(promoCode, subtotal);
            Double discountAmount = subtotal * (discountPercentage / 100.0);

            Map<String, Object> response = Map.of(
                    "valid", discountPercentage > 0,
                    "discountPercentage", discountPercentage,
                    "discountAmount", discountAmount,
                    "message", discountPercentage > 0 ?
                            "Promo code applied successfully!" :
                            "Invalid promo code"
            );

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            log.error("Error validating promo code", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to validate promo code: " + e.getMessage()));
        }
    }

    // Admin endpoints
    @GetMapping("/admin/all")
    public ResponseEntity<?> getAllBookings(Authentication authentication) {
        try {
            // Add admin role check here if needed
            log.info("Admin fetching all bookings");

            List<BookingResponse> bookings = bookingService.getAllBookings();

            return ResponseEntity.ok(bookings);

        } catch (Exception e) {
            log.error("Error fetching all bookings", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch all bookings: " + e.getMessage()));
        }
    }

    @GetMapping("/admin/status/{status}")
    public ResponseEntity<?> getBookingsByStatus(@PathVariable String status,
                                                 Authentication authentication) {
        try {
            // Add admin role check here if needed
            log.info("Admin fetching bookings with status: {}", status);

            List<BookingResponse> bookings = bookingService.getBookingsByStatus(status);

            return ResponseEntity.ok(bookings);

        } catch (RuntimeException e) {
            log.error("Error fetching bookings by status: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Error fetching bookings by status", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch bookings: " + e.getMessage()));
        }
    }
}