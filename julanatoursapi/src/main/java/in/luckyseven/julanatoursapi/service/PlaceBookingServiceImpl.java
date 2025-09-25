////package in.luckyseven.julanatoursapi.service;
////
////import in.luckyseven.julanatoursapi.entity.BookingEntity;
////import in.luckyseven.julanatoursapi.entity.VehicleEntity;
////import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
////import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;
////import in.luckyseven.julanatoursapi.repository.BookingRepository;
////import in.luckyseven.julanatoursapi.repository.VehicleRepository;
////import lombok.AllArgsConstructor;
////import lombok.extern.slf4j.Slf4j;
////import org.springframework.stereotype.Service;
////
////import java.time.LocalDateTime;
////import java.time.format.DateTimeFormatter;
////import java.util.ArrayList;
////import java.util.List;
////import java.util.UUID;
////
////@Service
////@AllArgsConstructor
////@Slf4j
////public class PlaceBookingServiceImpl implements PlaceBookingService {
////
////    private final BookingRepository bookingRepository;
////    private final VehicleRepository vehicleRepository;
////
////    // Constants matching your frontend
////    private static final Integer BASE_KM_ALLOWANCE = 800;
////    private static final Double EXTRA_KM_RATE = 180.0;
////    private static final Double PICKUP_FEE = 10.0;
////    private static final Double TAX_RATE = 0.1;
////
////    @Override
////    public PlaceBookingResponse placeBooking(PlaceBookingRequest request, String userId) {
////        log.info("Processing booking placement for user: {}", userId);
////
////        try {
////            // Build booking items with vehicle details
////            List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
////            double subtotal = 0.0;
////
////            for (PlaceBookingRequest.BookingVehicleItem itemRequest : request.getBookingItems()) {
////                VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
////                        .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));
////
////                double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
////                subtotal += itemTotal;
////
////                BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
////                        .vehicleId(vehicle.getId())
////                        .vehicleName(vehicle.getName())
////                        .vehicleCategory(vehicle.getCategory())
////                        .vehicleImageUrl(vehicle.getImageUrl())
////                        .pricePerDay(vehicle.getPrice())
////                        .quantity(itemRequest.getQuantity())
////                        .itemTotal(itemTotal)
////                        .build();
////
////                bookingItems.add(bookingItem);
////            }
////
////            // Calculate fees and charges
////            double pickupFee = subtotal > 0 ? PICKUP_FEE : 0.0;
////            double tax = subtotal * TAX_RATE;
////
////            // Calculate extra kilometer charge
////            double extraKmCharge = calculateExtraKmCharge(
////                    request.getExpectedKilometers(),
////                    BASE_KM_ALLOWANCE,
////                    EXTRA_KM_RATE
////            );
////
////            double total = subtotal + pickupFee + tax + extraKmCharge;
////
////            // Generate booking number
////            String bookingNumber = generateBookingNumber();
////
////            // Process payment
////            String paymentReference = processPayment(
////                    request.getPaymentMethod(),
////                    total,
////                    request.getCardNumber()
////            );
////
////            // Create booking entity
////            BookingEntity booking = BookingEntity.builder()
////                    .userId(userId)
////                    .userEmail(request.getEmail())
////                    .userName(request.getFirstName() + " " + request.getLastName())
////                    .items(bookingItems)
////                    .subtotal(subtotal)
////                    .pickupFee(pickupFee)
////                    .tax(tax)
////                    .discountAmount(extraKmCharge) // Using this field for extra KM charge
////                    .total(total)
////                    .status(BookingEntity.BookingStatus.CONFIRMED)
////                    .paymentStatus(BookingEntity.PaymentStatus.PAID)
////                    .customerPhone(request.getContactNumber())
////                    .customerAddress(request.getAddress() +
////                            (request.getAddress2() != null ? ", " + request.getAddress2() : "") +
////                            ", " + request.getState() + " " + request.getZip() + ", " + request.getCountry())
////                    .pickupLocation(request.getPickupLocation())
////                    .dropoffLocation(request.getDropLocation())
////                    .pickupDateTime(request.getPickupDate().atTime(9, 0)) // Default 9 AM
////                    .returnDateTime(request.getDropDate().atTime(18, 0)) // Default 6 PM
////                    .createdAt(LocalDateTime.now())
////                    .updatedAt(LocalDateTime.now())
////                    .build();
////
////            booking = bookingRepository.save(booking);
////            log.info("Booking confirmed successfully with ID: {} and number: {}", booking.getId(), bookingNumber);
////
////            // Build response
////            List<PlaceBookingResponse.BookedVehicleItem> responseItems = new ArrayList<>();
////            for (BookingEntity.BookingItem item : bookingItems) {
////                PlaceBookingResponse.BookedVehicleItem responseItem = PlaceBookingResponse.BookedVehicleItem.builder()
////                        .vehicleId(item.getVehicleId())
////                        .vehicleName(item.getVehicleName())
////                        .vehicleCategory(item.getVehicleCategory())
////                        .vehicleImageUrl(item.getVehicleImageUrl())
////                        .pricePerDay(item.getPricePerDay())
////                        .quantity(item.getQuantity())
////                        .itemTotal(item.getItemTotal())
////                        .build();
////                responseItems.add(responseItem);
////            }
////
////            int extraKm = Math.max(0, request.getExpectedKilometers() - BASE_KM_ALLOWANCE);
////
////            return PlaceBookingResponse.builder()
////                    .bookingId(booking.getId())
////                    .bookingNumber(bookingNumber)
////                    .status(booking.getStatus().toString())
////                    .paymentStatus(booking.getPaymentStatus().toString())
////                    .customerName(request.getFirstName() + " " + request.getLastName())
////                    .contactNumber(request.getContactNumber())
////                    .email(request.getEmail())
////                    .pickupDate(request.getPickupDate())
////                    .dropDate(request.getDropDate())
////                    .pickupLocation(request.getPickupLocation())
////                    .dropLocation(request.getDropLocation())
////                    .expectedKilometers(request.getExpectedKilometers())
////                    .subtotal(subtotal)
////                    .pickupFee(pickupFee)
////                    .tax(tax)
////                    .extraKmCharge(extraKmCharge)
////                    .total(total)
////                    .baseKmAllowance(BASE_KM_ALLOWANCE)
////                    .extraKm(extraKm)
////                    .extraKmRate(EXTRA_KM_RATE)
////                    .vehicleItems(responseItems)
////                    .paymentMethod(request.getPaymentMethod())
////                    .paymentReference(paymentReference)
////                    .createdAt(booking.getCreatedAt())
////                    .updatedAt(booking.getUpdatedAt())
////                    .confirmationMessage("Your booking has been confirmed successfully!")
////                    .nextSteps("You will receive a confirmation email shortly. Our team will contact you 24 hours before pickup.")
////                    .build();
////
////        } catch (Exception e) {
////            log.error("Error processing booking placement", e);
////            throw new RuntimeException("Failed to process booking: " + e.getMessage());
////        }
////    }
////
////    @Override
////    public Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate) {
////        if (expectedKm == null || expectedKm <= baseAllowance) {
////            return 0.0;
////        }
////
////        int extraKm = expectedKm - baseAllowance;
////        return extraKm * extraKmRate;
////    }
////
////    @Override
////    public String generateBookingNumber() {
////        // Generate format: JT-YYYYMMDD-XXXX (e.g., JT-20241225-A1B2)
////        String datePart = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
////        String randomPart = UUID.randomUUID().toString().substring(0, 4).toUpperCase();
////
////        return "JT-" + datePart + "-" + randomPart;
////    }
////
////    @Override
////    public String processPayment(String paymentMethod, Double amount, String cardDetails) {
////        // Mock payment processing
////        log.info("Processing {} payment for amount: Rs.{}", paymentMethod, amount);
////
////        // Simulate payment processing delay
////        try {
////            Thread.sleep(1000);
////        } catch (InterruptedException e) {
////            Thread.currentThread().interrupt();
////        }
////
////        // Generate mock payment reference
////        String paymentRef = "PAY-" + System.currentTimeMillis() + "-" +
////                UUID.randomUUID().toString().substring(0, 8).toUpperCase();
////
////        log.info("Payment processed successfully. Reference: {}", paymentRef);
////        return paymentRef;
////    }
////}
////
//
//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import in.luckyseven.julanatoursapi.entity.VehicleEntity;
//import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
//import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;
//import in.luckyseven.julanatoursapi.repository.BookingRepository;
//import in.luckyseven.julanatoursapi.repository.VehicleRepository;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.UUID;
//
//@Service
//@AllArgsConstructor
//@Slf4j
//public class PlaceBookingServiceImpl implements PlaceBookingService {
//
//    private final BookingRepository bookingRepository;
//    private final VehicleRepository vehicleRepository;
//
//    // Constants matching your frontend
//    private static final Integer BASE_KM_ALLOWANCE = 800;
//    private static final Double EXTRA_KM_RATE = 180.0;
//    private static final Double PICKUP_FEE = 10.0;
//    private static final Double TAX_RATE = 0.1;
//
//    @Override
//    public PlaceBookingResponse placeBooking(PlaceBookingRequest request, String userId) {
//        log.info("Processing booking placement for user: {}", userId);
//
//        try {
//            // Build booking items with vehicle details
//            List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
//            double subtotal = 0.0;
//
//            for (PlaceBookingRequest.BookingVehicleItem itemRequest : request.getBookingItems()) {
//                VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
//                        .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));
//
//                double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
//                subtotal += itemTotal;
//
//                BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
//                        .vehicleId(vehicle.getId())
//                        .vehicleName(vehicle.getName())
//                        .category(vehicle.getCategory()) // Fixed: use 'category' not 'vehicleCategory'
//                        .price(vehicle.getPrice()) // Fixed: use 'price' not 'pricePerDay'
//                        .quantity(itemRequest.getQuantity())
//                        .imageUrl(vehicle.getImageUrl()) // Fixed: use 'imageUrl' not 'vehicleImageUrl'
//                        .build();
//
//                bookingItems.add(bookingItem);
//            }
//
//            // Calculate fees and charges
//            double pickupFee = subtotal > 0 ? PICKUP_FEE : 0.0;
//            double tax = subtotal * TAX_RATE;
//
//            // Calculate extra kilometer charge
//            double extraKmCharge = calculateExtraKmCharge(
//                    request.getExpectedKilometers(),
//                    BASE_KM_ALLOWANCE,
//                    EXTRA_KM_RATE
//            );
//
//            double total = subtotal + pickupFee + tax + extraKmCharge;
//
//            // Generate booking number
//            String bookingNumber = generateBookingNumber();
//
//            // Process payment
//            String paymentReference = processPayment(
//                    request.getPaymentMethod(),
//                    total,
//                    request.getCardNumber()
//            );
//
//            // Create booking entity using correct field names
//            BookingEntity booking = BookingEntity.builder()
//                    .customerId(userId) // Fixed: use 'customerId' to match your entity
//                    .userEmail(request.getEmail())
//                    .userName(request.getFirstName() + " " + request.getLastName())
//                    .bookingItems(bookingItems) // Fixed: use 'bookingItems' not 'items'
//                    .subtotal(subtotal)
//                    .pickupFee(pickupFee)
//                    .tax(tax)
//                    .discountAmount(extraKmCharge) // Using this field for extra KM charge
//                    .total(total)
//                    .status(BookingEntity.BookingStatus.CONFIRMED)
//                    .paymentStatus(BookingEntity.PaymentStatus.PAID)
//                    .customerPhone(request.getContactNumber())
//                    .customerAddress(request.getAddress() +
//                            (request.getAddress2() != null ? ", " + request.getAddress2() : "") +
//                            ", " + request.getState() + " " + request.getZip() + ", " + request.getCountry())
//                    .pickupLocation(request.getPickupLocation())
//                    .dropoffLocation(request.getDropLocation())
//                    .pickupDateTime(request.getPickupDate().atTime(9, 0)) // Default 9 AM
//                    .returnDateTime(request.getDropDate().atTime(18, 0)) // Default 6 PM
//                    .createdAt(LocalDateTime.now())
//                    .updatedAt(LocalDateTime.now())
//                    .build();
//
//            booking = bookingRepository.save(booking);
//            log.info("Booking confirmed successfully with ID: {} and number: {}", booking.getId(), bookingNumber);
//
//            // Build response using correct field names
//            List<PlaceBookingResponse.BookedVehicleItem> responseItems = new ArrayList<>();
//            for (BookingEntity.BookingItem item : bookingItems) {
//                PlaceBookingResponse.BookedVehicleItem responseItem = PlaceBookingResponse.BookedVehicleItem.builder()
//                        .vehicleId(item.getVehicleId())
//                        .vehicleName(item.getVehicleName())
//                        .vehicleCategory(item.getCategory()) // Fixed: map to category
//                        .vehicleImageUrl(item.getImageUrl()) // Fixed: map to imageUrl
//                        .pricePerDay(item.getPrice()) // Fixed: map to price
//                        .quantity(item.getQuantity())
//                        .itemTotal(item.getItemTotal()) // This method exists in your entity
//                        .build();
//                responseItems.add(responseItem);
//            }
//
//            int extraKm = Math.max(0, request.getExpectedKilometers() - BASE_KM_ALLOWANCE);
//
//            return PlaceBookingResponse.builder()
//                    .bookingId(booking.getId())
//                    .bookingNumber(bookingNumber)
//                    .status(booking.getStatus().toString())
//                    .paymentStatus(booking.getPaymentStatus().toString())
//                    .customerName(request.getFirstName() + " " + request.getLastName())
//                    .contactNumber(request.getContactNumber())
//                    .email(request.getEmail())
//                    .pickupDate(request.getPickupDate())
//                    .dropDate(request.getDropDate())
//                    .pickupLocation(request.getPickupLocation())
//                    .dropLocation(request.getDropLocation())
//                    .expectedKilometers(request.getExpectedKilometers())
//                    .subtotal(subtotal)
//                    .pickupFee(pickupFee)
//                    .tax(tax)
//                    .extraKmCharge(extraKmCharge)
//                    .total(total)
//                    .baseKmAllowance(BASE_KM_ALLOWANCE)
//                    .extraKm(extraKm)
//                    .extraKmRate(EXTRA_KM_RATE)
//                    .vehicleItems(responseItems)
//                    .paymentMethod(request.getPaymentMethod())
//                    .paymentReference(paymentReference)
//                    .createdAt(booking.getCreatedAt())
//                    .updatedAt(booking.getUpdatedAt())
//                    .confirmationMessage("Your booking has been confirmed successfully!")
//                    .nextSteps("You will receive a confirmation email shortly. Our team will contact you 24 hours before pickup.")
//                    .build();
//
//        } catch (Exception e) {
//            log.error("Error processing booking placement", e);
//            throw new RuntimeException("Failed to process booking: " + e.getMessage());
//        }
//    }
//
//    @Override
//    public Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate) {
//        if (expectedKm == null || expectedKm <= baseAllowance) {
//            return 0.0;
//        }
//
//        int extraKm = expectedKm - baseAllowance;
//        return extraKm * extraKmRate;
//    }
//
//    @Override
//    public String generateBookingNumber() {
//        // Generate format: JT-YYYYMMDD-XXXX (e.g., JT-20241225-A1B2)
//        String datePart = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
//        String randomPart = UUID.randomUUID().toString().substring(0, 4).toUpperCase();
//
//        return "JT-" + datePart + "-" + randomPart;
//    }
//
//    @Override
//    public String processPayment(String paymentMethod, Double amount, String cardDetails) {
//        // Mock payment processing
//        log.info("Processing {} payment for amount: Rs.{}", paymentMethod, amount);
//
//        // Simulate payment processing delay
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            Thread.currentThread().interrupt();
//        }
//
//        // Generate mock payment reference
//        String paymentRef = "PAY-" + System.currentTimeMillis() + "-" +
//                UUID.randomUUID().toString().substring(0, 8).toUpperCase();
//
//        log.info("Payment processed successfully. Reference: {}", paymentRef);
//        return paymentRef;
//    }
//}

//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import in.luckyseven.julanatoursapi.entity.VehicleEntity;
//import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
//import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;
//import in.luckyseven.julanatoursapi.repository.BookingRepository;
//import in.luckyseven.julanatoursapi.repository.VehicleRepository;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.LocalDateTime;
//import java.time.format.DateTimeFormatter;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.UUID;
//
//@Service
//@AllArgsConstructor
//@Slf4j
//public class PlaceBookingServiceImpl implements PlaceBookingService {
//
//    private final BookingRepository bookingRepository;
//    private final VehicleRepository vehicleRepository;
//
//    // Constants matching your frontend
//    private static final Integer BASE_KM_ALLOWANCE = 800;
//    private static final Double EXTRA_KM_RATE = 180.0;
//    private static final Double PICKUP_FEE = 10.0;
//    private static final Double TAX_RATE = 0.1;
//
//    @Override
//    @Transactional
//    public PlaceBookingResponse placeBooking(PlaceBookingRequest request, String userId) {
//        log.info("Processing booking placement for user: {}", userId);
//
//        try {
//            // Build booking items with vehicle details
//            List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
//            double subtotal = 0.0;
//
//            for (PlaceBookingRequest.BookingVehicleItem itemRequest : request.getBookingItems()) {
//                VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
//                        .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));
//
//                double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
//                subtotal += itemTotal;
//
//                BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
//                        .vehicleId(vehicle.getId())
//                        .vehicleName(vehicle.getName())
//                        .vehicleCategory(vehicle.getCategory())
//                        .vehicleImageUrl(vehicle.getImageUrl())
//                        .pricePerDay(vehicle.getPrice())
//                        .quantity(itemRequest.getQuantity())
//                        .build();
//
//                bookingItems.add(bookingItem);
//            }
//
//            // Calculate fees and charges
//            double pickupFee = subtotal > 0 ? PICKUP_FEE : 0.0;
//            double tax = subtotal * TAX_RATE;
//
//            // Calculate extra kilometer charge
//            double extraKmCharge = calculateExtraKmCharge(
//                    request.getExpectedKilometers(),
//                    BASE_KM_ALLOWANCE,
//                    EXTRA_KM_RATE
//            );
//
//            double total = subtotal + pickupFee + tax + extraKmCharge;
//
//            // Generate booking number
//            String bookingNumber = generateBookingNumber();
//
//            // Process payment
//            String paymentReference = processPayment(
//                    request.getPaymentMethod(),
//                    total,
//                    request.getCardNumber()
//            );
//
//            // Create booking entity
//            BookingEntity booking = BookingEntity.builder()
//                    .userId(userId)
//                    .bookingNumber(bookingNumber)
//                    .userEmail(request.getEmail())
//                    .userName(request.getFirstName() + " " + request.getLastName())
//                    .items(bookingItems)
//                    .subtotal(subtotal)
//                    .pickupFee(pickupFee)
//                    .tax(tax)
//                    .extraKmCharge(extraKmCharge)
//                    .total(total)
//                    .status(BookingEntity.BookingStatus.CONFIRMED)
//                    .paymentStatus(BookingEntity.PaymentStatus.PAID)
//                    .paymentMethod(request.getPaymentMethod())
//                    .paymentReference(paymentReference)
//                    .customerPhone(request.getContactNumber())
//                    .customerAddress(formatAddress(request))
//                    .pickupLocation(request.getPickupLocation())
//                    .dropoffLocation(request.getDropLocation())
//                    .pickupDateTime(request.getPickupDate().atTime(9, 0))
//                    .returnDateTime(request.getDropDate().atTime(18, 0))
//                    .expectedKilometers(request.getExpectedKilometers())
//                    .baseKmAllowance(BASE_KM_ALLOWANCE)
//                    .extraKmRate(EXTRA_KM_RATE)
//                    .passportNumber(request.getPassportNo())
//                    .createdAt(LocalDateTime.now())
//                    .updatedAt(LocalDateTime.now())
//                    .build();
//
//            booking = bookingRepository.save(booking);
//            log.info("Booking confirmed successfully with ID: {} and number: {}",
//                    booking.getId(), booking.getBookingNumber());
//
//            // Build response
//            List<PlaceBookingResponse.BookedVehicleItem> responseItems = new ArrayList<>();
//            for (BookingEntity.BookingItem item : bookingItems) {
//                PlaceBookingResponse.BookedVehicleItem responseItem =
//                        PlaceBookingResponse.BookedVehicleItem.builder()
//                                .vehicleId(item.getVehicleId())
//                                .vehicleName(item.getVehicleName())
//                                .vehicleCategory(item.getVehicleCategory())
//                                .vehicleImageUrl(item.getVehicleImageUrl())
//                                .pricePerDay(item.getPricePerDay())
//                                .quantity(item.getQuantity())
//                                .itemTotal(item.getItemTotal())
//                                .build();
//                responseItems.add(responseItem);
//            }
//
//            int extraKm = Math.max(0, request.getExpectedKilometers() - BASE_KM_ALLOWANCE);
//
//            return PlaceBookingResponse.builder()
//                    .bookingId(booking.getId())
//                    .bookingNumber(booking.getBookingNumber())
//                    .status(booking.getStatus().toString())
//                    .paymentStatus(booking.getPaymentStatus().toString())
//                    .customerName(booking.getUserName())
//                    .contactNumber(request.getContactNumber())
//                    .email(request.getEmail())
//                    .pickupDate(request.getPickupDate())
//                    .dropDate(request.getDropDate())
//                    .pickupLocation(request.getPickupLocation())
//                    .dropLocation(request.getDropLocation())
//                    .expectedKilometers(request.getExpectedKilometers())
//                    .subtotal(subtotal)
//                    .pickupFee(pickupFee)
//                    .tax(tax)
//                    .extraKmCharge(extraKmCharge)
//                    .total(total)
//                    .baseKmAllowance(BASE_KM_ALLOWANCE)
//                    .extraKm(extraKm)
//                    .extraKmRate(EXTRA_KM_RATE)
//                    .vehicleItems(responseItems)
//                    .paymentMethod(request.getPaymentMethod())
//                    .paymentReference(paymentReference)
//                    .createdAt(booking.getCreatedAt())
//                    .updatedAt(booking.getUpdatedAt())
//                    .confirmationMessage("Your booking has been confirmed successfully!")
//                    .nextSteps("You will receive a confirmation email shortly. Our team will contact you 24 hours before pickup.")
//                    .build();
//
//        } catch (Exception e) {
//            log.error("Error processing booking placement", e);
//            throw new RuntimeException("Failed to process booking: " + e.getMessage());
//        }
//    }
//
//    @Override
//    public Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate) {
//        if (expectedKm == null || expectedKm <= baseAllowance) {
//            return 0.0;
//        }
//
//        int extraKm = expectedKm - baseAllowance;
//        return extraKm * extraKmRate;
//    }
//
//    @Override
//    public String generateBookingNumber() {
//        // Generate format: JT-YYYYMMDD-XXXX (e.g., JT-20241225-A1B2)
//        String datePart = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
//        String randomPart = UUID.randomUUID().toString().substring(0, 4).toUpperCase();
//
//        return "JT-" + datePart + "-" + randomPart;
//    }
//
//    @Override
//    public String processPayment(String paymentMethod, Double amount, String cardDetails) {
//        // Mock payment processing
//        log.info("Processing {} payment for amount: Rs.{}", paymentMethod, amount);
//
//        // Simulate payment processing delay
//        try {
//            Thread.sleep(1000);
//        } catch (InterruptedException e) {
//            Thread.currentThread().interrupt();
//        }
//
//        // Generate mock payment reference
//        String paymentRef = "PAY-" + System.currentTimeMillis() + "-" +
//                UUID.randomUUID().toString().substring(0, 8).toUpperCase();
//
//        log.info("Payment processed successfully. Reference: {}", paymentRef);
//        return paymentRef;
//    }
//
//    private String formatAddress(PlaceBookingRequest request) {
//        StringBuilder address = new StringBuilder(request.getAddress());
//
//        if (request.getAddress2() != null && !request.getAddress2().isEmpty()) {
//            address.append(", ").append(request.getAddress2());
//        }
//
//        address.append(", ").append(request.getState())
//                .append(" ").append(request.getZip())
//                .append(", ").append(request.getCountry());
//
//        return address.toString();
//    }
//}

package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.PlaceBookingRequest;
import in.luckyseven.julanatoursapi.io.PlaceBookingResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Service
@AllArgsConstructor
@Slf4j
public class PlaceBookingServiceImpl implements PlaceBookingService {

    // Inject the unified BookingService instead of repositories directly
    private final BookingService bookingService;

    // Constants matching your frontend
    private static final Integer BASE_KM_ALLOWANCE = 800;
    private static final Double EXTRA_KM_RATE = 180.0;

    @Override
    @Transactional
    public PlaceBookingResponse placeBooking(PlaceBookingRequest request, String userId) {
        log.info("Processing booking placement for user: {}", userId);

        try {
            // Validate request
            validateBookingRequest(request);

            // Use the unified BookingService to create the booking
            PlaceBookingResponse response = bookingService.createBookingFromPlaceBooking(request, userId);

            log.info("Booking placement completed successfully - Booking ID: {}, Total: Rs.{}",
                    response.getBookingId(), response.getTotal());

            return response;

        } catch (RuntimeException e) {
            log.error("Business logic error during booking placement: {}", e.getMessage());
            throw e; // Re-throw business logic exceptions
        } catch (Exception e) {
            log.error("Unexpected error during booking placement", e);
            throw new RuntimeException("Failed to process booking: " + e.getMessage(), e);
        }
    }

    @Override
    public Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate) {
        return bookingService.calculateExtraKmCharge(expectedKm, baseAllowance, extraKmRate);
    }

    @Override
    public String generateBookingNumber() {
        return bookingService.generateBookingNumber();
    }

    @Override
    public String processPayment(String paymentMethod, Double amount, String cardDetails) {
        // Mock payment processing - replace with actual payment gateway integration
        log.info("Processing {} payment for amount: Rs.{}", paymentMethod, amount);

        // Validate payment method
        if (!isValidPaymentMethod(paymentMethod)) {
            throw new RuntimeException("Invalid payment method: " + paymentMethod);
        }

        // Simulate payment processing delay
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new RuntimeException("Payment processing interrupted");
        }

        // Simulate payment failure for testing (optional)
        if (amount != null && amount < 0) {
            throw new RuntimeException("Payment failed: Invalid amount");
        }

        // Generate mock payment reference
        String paymentRef = "PAY-" + System.currentTimeMillis() + "-" +
                UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        log.info("Payment processed successfully. Reference: {}", paymentRef);
        return paymentRef;
    }

    /**
     * Validate booking request before processing
     */
    private void validateBookingRequest(PlaceBookingRequest request) {
        // Validate booking items
        if (request.getBookingItems() == null || request.getBookingItems().isEmpty()) {
            throw new RuntimeException("No vehicles selected for booking");
        }

        // Validate dates
        if (request.getPickupDate() != null && request.getDropDate() != null) {
            if (request.getDropDate().isBefore(request.getPickupDate()) ||
                    request.getDropDate().isEqual(request.getPickupDate())) {
                throw new RuntimeException("Drop date must be after pickup date");
            }
        }

        // Validate required fields
        if (request.getFirstName() == null || request.getFirstName().trim().isEmpty()) {
            throw new RuntimeException("First name is required");
        }

        if (request.getLastName() == null || request.getLastName().trim().isEmpty()) {
            throw new RuntimeException("Last name is required");
        }

        if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
            throw new RuntimeException("Email is required");
        }

        if (request.getContactNumber() == null || request.getContactNumber().trim().isEmpty()) {
            throw new RuntimeException("Contact number is required");
        }

        if (request.getExpectedKilometers() == null || request.getExpectedKilometers() <= 0) {
            throw new RuntimeException("Expected kilometers must be a positive number");
        }
    }

    /**
     * Validate payment method
     */
    private boolean isValidPaymentMethod(String paymentMethod) {
        return paymentMethod != null &&
                (paymentMethod.equalsIgnoreCase("credit") ||
                        paymentMethod.equalsIgnoreCase("debit") ||
                        paymentMethod.equalsIgnoreCase("paypal"));
    }
}