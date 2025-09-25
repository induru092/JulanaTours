//package in.luckyseven.julanatoursapi.io;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class BookingResponse {
//
//    private String id;
//    private String userId;
//    private String userEmail;
//    private String userName;
//
//    private List<BookingItemResponse> items;
//
//    private Double subtotal;
//    private Double pickupFee;
//    private Double tax;
//    private Double discountAmount;
//    private Double total;
//
//    private String promoCode;
//    private Integer discountPercentage;
//
//    private String status;
//    private String paymentStatus;
//
//    private LocalDateTime createdAt;
//    private LocalDateTime updatedAt;
//
//    private String customerPhone;
//    private String customerAddress;
//    private String pickupLocation;
//    private String dropoffLocation;
//
//    private LocalDateTime pickupDateTime;
//    private LocalDateTime returnDateTime;
//
//    private String notes;
//
//    @Data
//    @Builder
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class BookingItemResponse {
//        private String vehicleId;
//        private String vehicleName;
//        private String vehicleCategory;
//        private String vehicleImageUrl;
//        private Double pricePerDay;
//        private Integer quantity;
//        private Double itemTotal;
//    }
//}

package in.luckyseven.julanatoursapi.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingResponse {

    private String id;
    private String bookingId; // Keep this for backward compatibility
    private String bookingNumber;
    private String userId;
    private String userEmail;
    private String userName;

    private List<BookingItemResponse> items;

    private Double subtotal;
    private Double pickupFee;
    private Double tax;
    private Double extraKmCharge; // Add this field
    private Double discountAmount;
    private Double total;

    private String promoCode;
    private Integer discountPercentage;

    private String status;
    private String paymentStatus;
    private String paymentMethod; // Add this field
    private String paymentReference; // Add this field

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    private String customerPhone;
    private String customerAddress;
    private String passportNumber; // Add this missing field

    private String pickupLocation;
    private String dropoffLocation;

    private LocalDateTime pickupDateTime;
    private LocalDateTime returnDateTime;

    private Integer expectedKilometers; // Add this field
    private Integer baseKmAllowance; // Add this field
    private Double extraKmRate; // Add this field

    private String notes;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookingItemResponse {
        private String vehicleId;
        private String vehicleName;
        private String vehicleCategory;
        private String vehicleImageUrl;
        private Double pricePerDay;
        private Integer quantity;
        private Double itemTotal;
    }
}