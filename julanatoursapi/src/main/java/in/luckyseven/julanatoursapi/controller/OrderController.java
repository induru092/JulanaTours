//package in.luckyseven.julanatoursapi.controller;
//
//import in.luckyseven.julanatoursapi.io.BookingResponse;
//import in.luckyseven.julanatoursapi.service.BookingService;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/orders")
//@AllArgsConstructor
//@Slf4j
//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
//public class OrderController {
//
//    private final BookingService bookingService;
//
//    // Get all orders (admin only)
//    @GetMapping
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> getAllOrders(
//            @RequestParam(required = false) String status,
//            @RequestParam(required = false) String search) {
//        try {
//            log.info("Fetching all orders with filters - status: {}, search: {}", status, search);
//
//            List<BookingResponse> bookings;
//
//            if (status != null && !status.equalsIgnoreCase("All")) {
//                bookings = bookingService.getBookingsByStatus(status);
//            } else {
//                bookings = bookingService.getAllBookings();
//            }
//
//            // Apply search filter if provided
//            if (search != null && !search.trim().isEmpty()) {
//                String searchTerm = search.toLowerCase();
//                bookings = bookings.stream()
//                        .filter(booking ->
//                                (booking.getUserName() != null && booking.getUserName().toLowerCase().contains(searchTerm)) ||
//                                        (booking.getUserEmail() != null && booking.getUserEmail().toLowerCase().contains(searchTerm)) ||
//                                        (booking.getId() != null && booking.getId().toLowerCase().contains(searchTerm)) ||
//                                        (booking.getCustomerPhone() != null && booking.getCustomerPhone().toLowerCase().contains(searchTerm))
//                        )
//                        .toList();
//            }
//
//            log.info("Returning {} orders", bookings.size());
//            return ResponseEntity.ok(bookings);
//
//        } catch (Exception e) {
//            log.error("Error fetching orders", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to fetch orders: " + e.getMessage()));
//        }
//    }
//
//    // Get order by ID
//    @GetMapping("/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> getOrderById(@PathVariable String id) {
//        try {
//            log.info("Fetching order by ID: {}", id);
//
//            // For admin, we can get any booking without user restriction
//            List<BookingResponse> allBookings = bookingService.getAllBookings();
//            BookingResponse booking = allBookings.stream()
//                    .filter(b -> b.getId().equals(id))
//                    .findFirst()
//                    .orElse(null);
//
//            if (booking == null) {
//                return ResponseEntity.status(HttpStatus.NOT_FOUND)
//                        .body(Map.of("message", "Order not found"));
//            }
//
//            return ResponseEntity.ok(booking);
//
//        } catch (Exception e) {
//            log.error("Error fetching order by ID", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to fetch order: " + e.getMessage()));
//        }
//    }
//
//    // Update order status
//    @PatchMapping("/{id}/status")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> updateOrderStatus(
//            @PathVariable String id,
//            @RequestBody Map<String, String> statusUpdate) {
//        try {
//            String newStatus = statusUpdate.get("status");
//            if (newStatus == null || newStatus.trim().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "Status is required"));
//            }
//
//            log.info("Updating order {} status to: {}", id, newStatus);
//
//            BookingResponse updatedBooking = bookingService.updateBookingStatus(id, newStatus);
//
//            return ResponseEntity.ok(updatedBooking);
//
//        } catch (RuntimeException e) {
//            log.error("Error updating order status: {}", e.getMessage());
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
//                    .body(Map.of("message", e.getMessage()));
//        } catch (Exception e) {
//            log.error("Error updating order status", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to update order status: " + e.getMessage()));
//        }
//    }
//
//    // Delete order
//    @DeleteMapping("/{id}")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> deleteOrder(@PathVariable String id) {
//        try {
//            log.info("Deleting order: {}", id);
//
//            // You'll need to implement a delete method in BookingService
//            // For now, we'll return a method not implemented response
//            return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED)
//                    .body(Map.of("message", "Delete functionality not yet implemented"));
//
//        } catch (Exception e) {
//            log.error("Error deleting order", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to delete order: " + e.getMessage()));
//        }
//    }
//
//    // Get order statistics
//    @GetMapping("/stats")
//    @PreAuthorize("hasRole('ADMIN')")
//    public ResponseEntity<?> getOrderStats() {
//        try {
//            log.info("Fetching order statistics");
//
//            List<BookingResponse> allBookings = bookingService.getAllBookings();
//
//            Map<String, Object> stats = new HashMap<>();
//            stats.put("pending", allBookings.stream()
//                    .mapToLong(b -> "Pending".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
//                    .sum());
//
//            stats.put("confirmed", allBookings.stream()
//                    .mapToLong(b -> "Confirmed".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
//                    .sum());
//
//            stats.put("completed", allBookings.stream()
//                    .mapToLong(b -> "Completed".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
//                    .sum());
//
//            stats.put("cancelled", allBookings.stream()
//                    .mapToLong(b -> "Cancelled".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
//                    .sum());
//
//            double totalRevenue = allBookings.stream()
//                    .mapToDouble(b -> b.getTotal() != null ? b.getTotal() : 0.0)
//                    .sum();
//
//            stats.put("totalRevenue", totalRevenue);
//            stats.put("totalOrders", allBookings.size());
//
//            return ResponseEntity.ok(stats);
//
//        } catch (Exception e) {
//            log.error("Error fetching order statistics", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("message", "Failed to fetch statistics: " + e.getMessage()));
//        }
//    }
//}

package in.luckyseven.julanatoursapi.controller;

import in.luckyseven.julanatoursapi.io.BookingResponse;
import in.luckyseven.julanatoursapi.service.BookingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class OrderController {

    private final BookingService bookingService;

    // Get all orders (admin only) - These are the bookings from PlaceBooking
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getAllOrders(
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String search) {
        try {
            log.info("Admin fetching all orders with filters - status: {}, search: {}", status, search);

            List<BookingResponse> bookings;

            if (status != null && !status.equalsIgnoreCase("All")) {
                bookings = bookingService.getBookingsByStatus(status);
            } else {
                bookings = bookingService.getAllBookings();
            }

            // Apply search filter if provided
            if (search != null && !search.trim().isEmpty()) {
                String searchTerm = search.toLowerCase();
                bookings = bookings.stream()
                        .filter(booking ->
                                (booking.getUserName() != null && booking.getUserName().toLowerCase().contains(searchTerm)) ||
                                        (booking.getUserEmail() != null && booking.getUserEmail().toLowerCase().contains(searchTerm)) ||
                                        (booking.getId() != null && booking.getId().toLowerCase().contains(searchTerm)) ||
                                        (booking.getCustomerPhone() != null && booking.getCustomerPhone().toLowerCase().contains(searchTerm))
                        )
                        .toList();
            }

            log.info("Returning {} orders (from PlaceBooking system)", bookings.size());
            return ResponseEntity.ok(bookings);

        } catch (Exception e) {
            log.error("Error fetching orders", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch orders: " + e.getMessage()));
        }
    }

    // Get order by ID (admin only)
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getOrderById(@PathVariable String id) {
        try {
            log.info("Admin fetching order by ID: {}", id);

            BookingResponse booking = bookingService.getBookingById(id);
            return ResponseEntity.ok(booking);

        } catch (RuntimeException e) {
            log.error("Order not found: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Error fetching order by ID", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch order: " + e.getMessage()));
        }
    }

    // Update order status (admin only)
    @PatchMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> updateOrderStatus(
            @PathVariable String id,
            @RequestBody Map<String, String> statusUpdate) {
        try {
            String newStatus = statusUpdate.get("status");
            if (newStatus == null || newStatus.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Status is required"));
            }

            log.info("Admin updating order {} status to: {}", id, newStatus);

            BookingResponse updatedBooking = bookingService.updateBookingStatus(id, newStatus);
            return ResponseEntity.ok(updatedBooking);

        } catch (RuntimeException e) {
            log.error("Error updating order status: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Error updating order status", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to update order status: " + e.getMessage()));
        }
    }

    // Delete order (admin only)
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> deleteOrder(@PathVariable String id) {
        try {
            log.info("Admin cancelling order: {}", id);

            boolean success = bookingService.deleteBooking(id);

            if (success) {
                return ResponseEntity.ok()
                        .body(Map.of("message", "Order cancelled successfully"));
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(Map.of("message", "Failed to cancel order"));
            }

        } catch (RuntimeException e) {
            log.error("Error cancelling order: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(Map.of("message", e.getMessage()));
        } catch (Exception e) {
            log.error("Error cancelling order", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to cancel order: " + e.getMessage()));
        }
    }

    // Get order statistics (admin only)
    @GetMapping("/stats")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> getOrderStats() {
        try {
            log.info("Admin fetching order statistics");

            List<BookingResponse> allBookings = bookingService.getAllBookings();

            Map<String, Object> stats = new HashMap<>();
            stats.put("pending", allBookings.stream()
                    .mapToLong(b -> "PENDING".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
                    .sum());

            stats.put("confirmed", allBookings.stream()
                    .mapToLong(b -> "CONFIRMED".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
                    .sum());

            stats.put("completed", allBookings.stream()
                    .mapToLong(b -> "COMPLETED".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
                    .sum());

            stats.put("cancelled", allBookings.stream()
                    .mapToLong(b -> "CANCELLED".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
                    .sum());

            stats.put("inProgress", allBookings.stream()
                    .mapToLong(b -> "IN_PROGRESS".equalsIgnoreCase(b.getStatus()) ? 1 : 0)
                    .sum());

            double totalRevenue = allBookings.stream()
                    .filter(b -> !"CANCELLED".equalsIgnoreCase(b.getStatus()))
                    .mapToDouble(b -> b.getTotal() != null ? b.getTotal() : 0.0)
                    .sum();

            stats.put("totalRevenue", totalRevenue);
            stats.put("totalOrders", allBookings.size());

            return ResponseEntity.ok(stats);

        } catch (Exception e) {
            log.error("Error fetching order statistics", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch statistics: " + e.getMessage()));
        }
    }
}