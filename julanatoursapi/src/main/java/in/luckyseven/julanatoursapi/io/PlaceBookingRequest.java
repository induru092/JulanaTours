//package in.luckyseven.julanatoursapi.io;
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.NotNull;
//import javax.validation.constraints.Email;
//import javax.validation.constraints.Positive;
//import java.time.LocalDate;
//import java.util.List;
//
//@Data
//@Builder
//@NoArgsConstructor
//@AllArgsConstructor
//public class PlaceBookingRequest {
//
//    // Personal Information
//    @NotNull(message = "First name is required")
//    @NotEmpty(message = "First name cannot be empty")
//    private String firstName;
//
//    @NotNull(message = "Last name is required")
//    @NotEmpty(message = "Last name cannot be empty")
//    private String lastName;
//
//    private String username;
//
//    @NotNull(message = "Contact number is required")
//    @NotEmpty(message = "Contact number cannot be empty")
//    private String contactNumber;
//
//    @Email(message = "Valid email is required")
//    private String email;
//
//    private String passportNo;
//
//    // Rental Details
//    @NotNull(message = "Pickup date is required")
//    private LocalDate pickupDate;
//
//    @NotNull(message = "Drop date is required")
//    private LocalDate dropDate;
//
//    @NotNull(message = "Pickup location is required")
//    @NotEmpty(message = "Pickup location cannot be empty")
//    private String pickupLocation;
//
//    @NotNull(message = "Drop location is required")
//    @NotEmpty(message = "Drop location cannot be empty")
//    private String dropLocation;
//
//    // Address Information
//    @NotNull(message = "Address is required")
//    @NotEmpty(message = "Address cannot be empty")
//    private String address;
//
//    private String address2;
//
//    @NotNull(message = "Country is required")
//    private String country;
//
//    @NotNull(message = "State is required")
//    private String state;
//
//    @NotNull(message = "ZIP code is required")
//    private String zip;
//
//    // Odometer/Mileage
//    @NotNull(message = "Expected kilometers is required")
//    @Positive(message = "Expected kilometers must be positive")
//    private Integer expectedKilometers;
//
//    // Preferences
//    private Boolean shippingSameAsBilling;
//    private Boolean saveInfo;
//
//    // Payment Information
//    @NotNull(message = "Payment method is required")
//    private String paymentMethod; // credit, debit, paypal
//
//    private String cardName;
//    private String cardNumber;
//    private String expiration;
//    private String cvv;
//
//    // Booking Items (from cart)
//    @NotEmpty(message = "Booking items cannot be empty")
//    private List<BookingVehicleItem> bookingItems;
//
//    @Data
//    @Builder
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class BookingVehicleItem {
//        @NotNull(message = "Vehicle ID is required")
//        private String vehicleId;
//
//        @NotNull(message = "Quantity is required")
//        @Positive(message = "Quantity must be positive")
//        private Integer quantity; // number of days
//    }
//}

package in.luckyseven.julanatoursapi.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Positive;
import java.time.LocalDate;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PlaceBookingRequest {

    // Personal Information
    @NotNull(message = "First name is required")
    @NotEmpty(message = "First name cannot be empty")
    private String firstName;

    @NotNull(message = "Last name is required")
    @NotEmpty(message = "Last name cannot be empty")
    private String lastName;

    private String username;

    @NotNull(message = "Contact number is required")
    @NotEmpty(message = "Contact number cannot be empty")
    private String contactNumber;

    @Email(message = "Valid email is required")
    private String email;

    private String passportNo;

    // Rental Details
    @NotNull(message = "Pickup date is required")
    private LocalDate pickupDate;

    @NotNull(message = "Drop date is required")
    private LocalDate dropDate;

    @NotNull(message = "Pickup location is required")
    @NotEmpty(message = "Pickup location cannot be empty")
    private String pickupLocation;

    @NotNull(message = "Drop location is required")
    @NotEmpty(message = "Drop location cannot be empty")
    private String dropLocation;

    // Address Information
    @NotNull(message = "Address is required")
    @NotEmpty(message = "Address cannot be empty")
    private String address;

    private String address2;

    @NotNull(message = "Country is required")
    private String country;

    @NotNull(message = "State is required")
    private String state;

    @NotNull(message = "ZIP code is required")
    private String zip;

    // Odometer/Mileage
    @NotNull(message = "Expected kilometers is required")
    @Positive(message = "Expected kilometers must be positive")
    private Integer expectedKilometers;

    // Preferences
    private Boolean shippingSameAsBilling;
    private Boolean saveInfo;

    // Payment Information
    @NotNull(message = "Payment method is required")
    private String paymentMethod; // credit, debit, paypal

    private String cardName;
    private String cardNumber;
    private String expiration;
    private String cvv;

    // Booking Items (from cart)
    @NotEmpty(message = "Booking items cannot be empty")
    private List<BookingVehicleItem> bookingItems;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookingVehicleItem {
        @NotNull(message = "Vehicle ID is required")
        private String vehicleId;

        @NotNull(message = "Quantity is required")
        @Positive(message = "Quantity must be positive")
        private Integer quantity; // number of days
    }
}