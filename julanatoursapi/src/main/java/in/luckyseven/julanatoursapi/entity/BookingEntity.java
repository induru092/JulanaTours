package in.luckyseven.julanatoursapi.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.Indexed;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "bookings")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookingEntity {

    @Id
    private String id;

    private String userId;

    @Indexed(unique = true)
    private String bookingNumber;

    private String userName;
    private String userEmail;
    private String customerPhone;
    private String customerAddress;
    private String passportNumber;

    private List<BookingItem> items;

    private Double subtotal;
    private Double pickupFee;
    private Double tax;
    private Double extraKmCharge;
    private Double discountAmount;
    private Double total;
    private String promoCode;
    private Integer discountPercentage;

    private BookingStatus status;
    private PaymentStatus paymentStatus;

    private String paymentMethod;
    private String paymentReference;

    private String pickupLocation;
    private String dropoffLocation;
    private LocalDateTime pickupDateTime;
    private LocalDateTime returnDateTime;

    private Integer expectedKilometers;
    private Integer baseKmAllowance;
    private Double extraKmRate;

    private String notes;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookingItem {
        private String vehicleId;
        private String vehicleName;
        private String vehicleCategory;
        private String vehicleImageUrl;
        private Double pricePerDay;
        private Integer quantity;

        public Double getItemTotal() {
            if (pricePerDay == null || quantity == null) {
                return 0.0;
            }
            return pricePerDay * quantity;
        }
    }

    public enum BookingStatus {
        PENDING,
        CONFIRMED,
        IN_PROGRESS,
        COMPLETED,
        CANCELLED
    }

    public enum PaymentStatus {
        PENDING,
        PAID,
        PARTIALLY_PAID,
        REFUNDED,
        FAILED
    }
}
