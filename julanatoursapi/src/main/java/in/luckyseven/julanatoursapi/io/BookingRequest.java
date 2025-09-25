//package in.luckyseven.julanatoursapi.io;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.NotNull;
//import javax.validation.constraints.Positive;
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class BookingRequest {
//
//    @NotEmpty(message = "Booking items cannot be empty")
//    private List<BookingItemRequest> items;
//
//    private String promoCode;
//
//    // Customer details
//    @NotNull(message = "Customer phone is required")
//    private String customerPhone;
//
//    @NotNull(message = "Customer address is required")
//    private String customerAddress;
//
//    @NotNull(message = "Pickup location is required")
//    private String pickupLocation;
//
//    @NotNull(message = "Drop-off location is required")
//    private String dropoffLocation;
//
//    @NotNull(message = "Pickup date and time is required")
//    private LocalDateTime pickupDateTime;
//
//    @NotNull(message = "Return date and time is required")
//    private LocalDateTime returnDateTime;
//
//    private String notes;
//
//    @Data
//    @Builder
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class BookingItemRequest {
//        @NotNull(message = "Vehicle ID is required")
//        private String vehicleId;
//
//        @NotNull(message = "Quantity is required")
//        @Positive(message = "Quantity must be positive")
//        private Integer quantity;
//    }
//}

//package in.luckyseven.julanatoursapi.io;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import jakarta.validation.constraints.NotEmpty;
//import jakarta.validation.constraints.NotNull;
//import jakarta.validation.constraints.Positive;
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class BookingRequest {
//
//    @NotEmpty(message = "Booking items cannot be empty")
//    private List<BookingItemRequest> items;
//
//    private String promoCode;
//
//    // Customer details
//    @NotNull(message = "Customer phone is required")
//    private String customerPhone;
//
//    @NotNull(message = "Customer address is required")
//    private String customerAddress;
//
//    @NotNull(message = "Pickup location is required")
//    private String pickupLocation;
//
//    @NotNull(message = "Drop-off location is required")
//    private String dropoffLocation;
//
//    @NotNull(message = "Pickup date and time is required")
//    private LocalDateTime pickupDateTime;
//
//    @NotNull(message = "Return date and time is required")
//    private LocalDateTime returnDateTime;
//
//    private String notes;
//
//    @Data
//    @Builder
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class BookingItemRequest {
//        @NotNull(message = "Vehicle ID is required")
//        private String vehicleId;
//
//        @NotNull(message = "Quantity is required")
//        @Positive(message = "Quantity must be positive")
//        private Integer quantity;
//    }
//}

package in.luckyseven.julanatoursapi.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequest {

    // Change this from 'items' to 'bookingItems' to match the getter method
    @NotEmpty(message = "Booking items cannot be empty")
    private List<BookingItemRequest> bookingItems;

    private String promoCode;

    // Customer details
    @NotNull(message = "Customer phone is required")
    private String customerPhone;

    @NotNull(message = "Customer address is required")
    private String customerAddress;

    @NotNull(message = "Pickup location is required")
    private String pickupLocation;

    @NotNull(message = "Drop-off location is required")
    private String dropoffLocation;

    @NotNull(message = "Pickup date and time is required")
    private LocalDateTime pickupDateTime;

    @NotNull(message = "Return date and time is required")
    private LocalDateTime returnDateTime;

    private String notes;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookingItemRequest {
        @NotNull(message = "Vehicle ID is required")
        private String vehicleId;

        @NotNull(message = "Quantity is required")
        @Positive(message = "Quantity must be positive")
        private Integer quantity;
    }
}