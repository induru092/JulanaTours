//package in.luckyseven.julanatoursapi.controller;
//
//import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
//import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;
//import in.luckyseven.julanatoursapi.service.PlaceBookingService;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.validation.annotation.Validated;
//import org.springframework.web.bind.annotation.*;
//
//import jakarta.validation.Valid;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/place-booking")
//@AllArgsConstructor
//@Slf4j
//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
//@Validated
//public class PlaceBookingController {
//
//    private final PlaceBookingService placeBookingService;
//
//    @PostMapping
//    public ResponseEntity<?> placeBooking(@Valid @RequestBody PlaceBookingRequest request,
//                                          Authentication authentication) {
//        try {
//            String userId = authentication.getName();
//            log.info("Processing booking placement for user: {}", userId);
//
//            // Validate request
//            if (request.getBookingItems() == null || request.getBookingItems().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "No vehicles selected for booking"));
//            }
//
//            // Validate dates
//            if (request.getPickupDate() != null && request.getDropDate() != null) {
//                if (request.getDropDate().isBefore(request.getPickupDate()) ||
//                        request.getDropDate().isEqual(request.getPickupDate())) {
//                    return ResponseEntity.badRequest()
//                            .body(Map.of("message", "Drop date must be after pickup date"));
//                }
//            }
//
//            // Process the booking
//            PlaceBookingResponse response = placeBookingService.placeBooking(request, userId);
//
//            log.info("Booking placed successfully with ID: {}", response.getBookingId());
//
//            return ResponseEntity.status(HttpStatus.CREATED).body(response);
//
//        } catch (RuntimeException e) {
//            log.error("Error placing booking: {}", e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(Map.of("message", e.getMessage()));
//        } catch (Exception e) {
//            log.error("Unexpected error placing booking", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to place booking: " + e.getMessage()));
//        }
//    }
//
//    @PostMapping("/calculate-extras")
//    public ResponseEntity<?> calculateExtraCharges(@RequestBody Map<String, Integer> request) {
//        try {
//            Integer expectedKm = request.get("expectedKilometers");
//
//            if (expectedKm == null || expectedKm <= 0) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "Expected kilometers is required and must be positive"));
//            }
//
//            // Constants matching your frontend
//            Integer baseAllowance = 800;
//            Double extraKmRate = 180.0;
//
//            Double extraKmCharge = placeBookingService.calculateExtraKmCharge(
//                    expectedKm, baseAllowance, extraKmRate
//            );
//
//            Integer extraKm = Math.max(0, expectedKm - baseAllowance);
//
//            Map<String, Object> response = Map.of(
//                    "expectedKm", expectedKm,
//                    "baseAllowance", baseAllowance,
//                    "extraKm", extraKm,
//                    "extraKmRate", extraKmRate,
//                    "extraKmCharge", extraKmCharge,
//                    "hasExtraCharge", extraKm > 0
//            );
//
//            return ResponseEntity.ok(response);
//
//        } catch (Exception e) {
//            log.error("Error calculating extra charges", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to calculate extra charges: " + e.getMessage()));
//        }
//    }
//
//    @PostMapping("/validate-payment")
//    public ResponseEntity<?> validatePaymentDetails(@RequestBody Map<String, String> paymentDetails) {
//        try {
//            String paymentMethod = paymentDetails.get("paymentMethod");
//            String cardNumber = paymentDetails.get("cardNumber");
//            String expiration = paymentDetails.get("expiration");
//            String cvv = paymentDetails.get("cvv");
//
//            if (paymentMethod == null) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "Payment method is required"));
//            }
//
//            // Basic validation for credit/debit cards
//            if ("credit".equals(paymentMethod) || "debit".equals(paymentMethod)) {
//                if (cardNumber == null || cardNumber.length() < 16) {
//                    return ResponseEntity.badRequest()
//                            .body(Map.of("message", "Valid card number is required"));
//                }
//
//                if (expiration == null || !expiration.matches("\\d{2}/\\d{2}")) {
//                    return ResponseEntity.badRequest()
//                            .body(Map.of("message", "Valid expiration date (MM/YY) is required"));
//                }
//
//                if (cvv == null || cvv.length() < 3 || cvv.length() > 4) {
//                    return ResponseEntity.badRequest()
//                            .body(Map.of("message", "Valid CVV is required"));
//                }
//            }
//
//            // Mock validation response
//            Map<String, Object> response = Map.of(
//                    "valid", true,
//                    "paymentMethod", paymentMethod,
//                    "message", "Payment details validated successfully"
//            );
//
//            return ResponseEntity.ok(response);
//
//        } catch (Exception e) {
//            log.error("Error validating payment details", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to validate payment details: " + e.getMessage()));
//        }
//    }
//
//    @GetMapping("/booking-number")
//    public ResponseEntity<?> generateBookingNumber() {
//        try {
//            String bookingNumber = placeBookingService.generateBookingNumber();
//
//            Map<String, String> response = Map.of(
//                    "bookingNumber", bookingNumber
//            );
//
//            return ResponseEntity.ok(response);
//
//        } catch (Exception e) {
//            log.error("Error generating booking number", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to generate booking number: " + e.getMessage()));
//        }
//    }
//}

// ===== UPDATED PLACE BOOKING CONTROLLER =====
package in.luckyseven.julanatoursapi.controller;

import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;
import in.luckyseven.julanatoursapi.service.PlaceBookingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.Map;

@RestController
@RequestMapping("/api/place-booking")
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
@Validated
public class PlaceBookingController {

    private final PlaceBookingService placeBookingService;

    @PostMapping
    public ResponseEntity<?> placeBooking(@Valid @RequestBody PlaceBookingRequest request,
                                          Authentication authentication) {
        try {
            String userId = authentication.getName();
            log.info("Processing booking placement for user: {}", userId);

            // This now saves to database and creates an order
            PlaceBookingResponse response = placeBookingService.placeBooking(request, userId);

            log.info("Booking placed successfully with ID: {} - Now available as an ORDER in admin panel",
                    response.getBookingId());

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (RuntimeException e) {
            log.error("Error placing booking: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Unexpected error placing booking", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to place booking: " + e.getMessage()));
        }
    }

    // Keep your existing endpoints for calculate-extras, validate-payment, and booking-number
    @PostMapping("/calculate-extras")
    public ResponseEntity<?> calculateExtraCharges(@RequestBody Map<String, Integer> request) {
        try {
            Integer expectedKm = request.get("expectedKilometers");

            if (expectedKm == null || expectedKm <= 0) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Expected kilometers is required and must be positive"));
            }

            Integer baseAllowance = 800;
            Double extraKmRate = 180.0;

            Double extraKmCharge = placeBookingService.calculateExtraKmCharge(
                    expectedKm, baseAllowance, extraKmRate
            );

            Integer extraKm = Math.max(0, expectedKm - baseAllowance);

            Map<String, Object> response = Map.of(
                    "expectedKm", expectedKm,
                    "baseAllowance", baseAllowance,
                    "extraKm", extraKm,
                    "extraKmRate", extraKmRate,
                    "extraKmCharge", extraKmCharge,
                    "hasExtraCharge", extraKm > 0
            );

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            log.error("Error calculating extra charges", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to calculate extra charges: " + e.getMessage()));
        }
    }

    @PostMapping("/validate-payment")
    public ResponseEntity<?> validatePaymentDetails(@RequestBody Map<String, String> paymentDetails) {
        try {
            String paymentMethod = paymentDetails.get("paymentMethod");
            String cardNumber = paymentDetails.get("cardNumber");
            String expiration = paymentDetails.get("expiration");
            String cvv = paymentDetails.get("cvv");

            if (paymentMethod == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Payment method is required"));
            }

            if ("credit".equals(paymentMethod) || "debit".equals(paymentMethod)) {
                if (cardNumber == null || cardNumber.length() < 16) {
                    return ResponseEntity.badRequest()
                            .body(Map.of("message", "Valid card number is required"));
                }

                if (expiration == null || !expiration.matches("\\d{2}/\\d{2}")) {
                    return ResponseEntity.badRequest()
                            .body(Map.of("message", "Valid expiration date (MM/YY) is required"));
                }

                if (cvv == null || cvv.length() < 3 || cvv.length() > 4) {
                    return ResponseEntity.badRequest()
                            .body(Map.of("message", "Valid CVV is required"));
                }
            }

            Map<String, Object> response = Map.of(
                    "valid", true,
                    "paymentMethod", paymentMethod,
                    "message", "Payment details validated successfully"
            );

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            log.error("Error validating payment details", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to validate payment details: " + e.getMessage()));
        }
    }

    @GetMapping("/booking-number")
    public ResponseEntity<?> generateBookingNumber() {
        try {
            String bookingNumber = placeBookingService.generateBookingNumber();

            Map<String, String> response = Map.of(
                    "bookingNumber", bookingNumber
            );

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            log.error("Error generating booking number", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to generate booking number: " + e.getMessage()));
        }
    }
}



