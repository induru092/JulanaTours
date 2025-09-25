package in.luckyseven.julanatoursapi.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlaceBookingResponse {

    private String bookingId;
    private String bookingNumber; // Human readable booking number
    private String status;
    private String paymentStatus;

    // Customer Information
    private String customerName;
    private String contactNumber;
    private String email;

    // Rental Details
    private LocalDate pickupDate;
    private LocalDate dropDate;
    private String pickupLocation;
    private String dropLocation;
    private Integer expectedKilometers;

    // Financial Summary
    private Double subtotal;
    private Double pickupFee;
    private Double tax;
    private Double extraKmCharge;
    private Double total;

    // Odometer Details
    private Integer baseKmAllowance;
    private Integer extraKm;
    private Double extraKmRate;

    // Booked Vehicles
    private List<BookedVehicleItem> vehicleItems;

    // Payment Information
    private String paymentMethod;
    private String paymentReference;

    // Timestamps
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Confirmation Details
    private String confirmationMessage;
    private String nextSteps;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookedVehicleItem {
        private String vehicleId;
        private String vehicleName;
        private String vehicleCategory;
        private String vehicleImageUrl;
        private Double pricePerDay;
        private Integer quantity;
        private Double itemTotal;
    }
}
