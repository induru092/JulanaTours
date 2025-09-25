


//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import in.luckyseven.julanatoursapi.entity.VehicleEntity;
//import in.luckyseven.julanatoursapi.io.BookingRequest;
//import in.luckyseven.julanatoursapi.io.BookingResponse;
//import in.luckyseven.julanatoursapi.repository.BookingRepository;
//import in.luckyseven.julanatoursapi.repository.VehicleRepository;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.ArrayList;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//@AllArgsConstructor
//@Slf4j
//public class BookingServiceImpl implements BookingService {
//
//    private final BookingRepository bookingRepository;
//    private final VehicleRepository vehicleRepository;
//
//    @Override
//    public BookingResponse createBooking(BookingRequest request, String userId) {
//        log.info("Creating booking for user: {}", userId);
//
//        // Build booking items with vehicle details
//        List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
//        double subtotal = 0.0;
//
//        for (BookingRequest.BookingItemRequest itemRequest : request.getItems()) {
//            VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
//                    .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));
//
//            double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
//            subtotal += itemTotal;
//
//            BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
//                    .vehicleId(vehicle.getId())
//                    .vehicleName(vehicle.getName())
//                    .category(vehicle.getCategory())
//                    .price(vehicle.getPrice())
//                    .quantity(itemRequest.getQuantity())
//                    .imageUrl(vehicle.getImageUrl())
//                    .build();
//
//            bookingItems.add(bookingItem);
//        }
//
//        // Calculate fees and discounts
//        double pickupFee = subtotal > 0 ? 10.0 : 0.0;
//        double tax = subtotal * 0.1;
//
//        Integer discountPercentage = validatePromoCode(request.getPromoCode(), subtotal);
//        double discountAmount = subtotal * (discountPercentage / 100.0);
//
//        double total = subtotal + pickupFee + tax - discountAmount;
//
//        // Create booking entity
//        BookingEntity booking = BookingEntity.builder()
//                .customerId(userId)
//                .userEmail(request.getCustomerPhone()) // You may want to get this from user context
//                .userName("User Name") // You may want to get this from user context
//                .bookingItems(bookingItems)
//                .subtotal(subtotal)
//                .pickupFee(pickupFee)
//                .tax(tax)
//                .discountAmount(discountAmount)
//                .total(total)
//                .promoCode(request.getPromoCode())
//                .discountPercentage(discountPercentage)
//                .promoApplied(discountPercentage > 0)
//                .status(BookingEntity.BookingStatus.PENDING)
//                .paymentStatus(BookingEntity.PaymentStatus.PENDING)
//                .customerPhone(request.getCustomerPhone())
//                .customerAddress(request.getCustomerAddress())
//                .pickupLocation(request.getPickupLocation())
//                .dropoffLocation(request.getDropoffLocation())
//                .pickupDateTime(request.getPickupDateTime())
//                .returnDateTime(request.getReturnDateTime())
//                .notes(request.getNotes())
//                .createdAt(LocalDateTime.now())
//                .updatedAt(LocalDateTime.now())
//                .build();
//
//        booking = bookingRepository.save(booking);
//        log.info("Booking created successfully with ID: {}", booking.getId());
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public List<BookingResponse> getUserBookings(String userId) {
//        log.info("Fetching bookings for user: {}", userId);
//
//        List<BookingEntity> bookings = bookingRepository.findByCustomerId(userId);
//        return bookings.stream()
//                .map(this::convertToResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public BookingResponse getBookingById(String bookingId, String userId) {
//        log.info("Fetching booking {} for user: {}", bookingId, userId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        // Verify user ownership
//        if (!booking.getCustomerId().equals(userId)) {
//            throw new RuntimeException("Access denied: Booking does not belong to user");
//        }
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public BookingResponse updateBookingStatus(String bookingId, String status) {
//        log.info("Updating booking {} status to: {}", bookingId, status);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        try {
//            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
//            booking.setStatus(bookingStatus);
//            booking.setUpdatedAt(LocalDateTime.now());
//
//            booking = bookingRepository.save(booking);
//            log.info("Booking status updated successfully");
//
//            return convertToResponse(booking);
//        } catch (IllegalArgumentException e) {
//            throw new RuntimeException("Invalid booking status: " + status);
//        }
//    }
//
//    @Override
//    public BookingResponse cancelBooking(String bookingId, String userId) {
//        log.info("Cancelling booking {} for user: {}", bookingId, userId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        // Verify user ownership
//        if (!booking.getCustomerId().equals(userId)) {
//            throw new RuntimeException("Access denied: Booking does not belong to user");
//        }
//
//        // Check if booking can be cancelled
//        if (booking.getStatus() == BookingEntity.BookingStatus.COMPLETED) {
//            throw new RuntimeException("Cannot cancel completed booking");
//        }
//
//        booking.setStatus(BookingEntity.BookingStatus.CANCELLED);
//        booking.setUpdatedAt(LocalDateTime.now());
//
//        booking = bookingRepository.save(booking);
//        log.info("Booking cancelled successfully");
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public Integer validatePromoCode(String promoCode, Double subtotal) {
//        if (promoCode == null || promoCode.trim().isEmpty()) {
//            return 0;
//        }
//
//        String code = promoCode.toUpperCase().trim();
//
//        switch (code) {
//            case "SAVE10":
//                return 10;
//            case "WELCOME20":
//                return 20;
//            case "FIRST50":
//                return subtotal > 1000 ? 50 : 0; // 50% off for orders over 1000
//            default:
//                log.warn("Invalid promo code used: {}", promoCode);
//                return 0;
//        }
//    }
//
//    @Override
//    public List<BookingResponse> getAllBookings() {
//        log.info("Fetching all bookings");
//
//        List<BookingEntity> bookings = bookingRepository.findAll();
//        return bookings.stream()
//                .map(this::convertToResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public List<BookingResponse> getBookingsByStatus(String status) {
//        log.info("Fetching bookings with status: {}", status);
//
//        try {
//            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
//            List<BookingEntity> bookings = bookingRepository.findByStatus(bookingStatus);
//
//            return bookings.stream()
//                    .map(this::convertToResponse)
//                    .collect(Collectors.toList());
//        } catch (IllegalArgumentException e) {
//            throw new RuntimeException("Invalid booking status: " + status);
//        }
//    }
//
//    private BookingResponse convertToResponse(BookingEntity entity) {
//        List<BookingResponse.BookingItemResponse> itemResponses = entity.getBookingItems().stream()
//                .map(item -> BookingResponse.BookingItemResponse.builder()
//                        .vehicleId(item.getVehicleId())
//                        .vehicleName(item.getVehicleName())
//                        .vehicleCategory(item.getCategory())
//                        .vehicleImageUrl(item.getImageUrl())
//                        .pricePerDay(item.getPrice())
//                        .quantity(item.getQuantity())
//                        .itemTotal(item.getItemTotal())
//                        .build())
//                .collect(Collectors.toList());
//
//        return BookingResponse.builder()
//                .id(entity.getId())
//                .userId(entity.getCustomerId())
//                .userEmail(entity.getUserEmail())
//                .userName(entity.getUserName())
//                .items(itemResponses)
//                .subtotal(entity.getSubtotal())
//                .pickupFee(entity.getPickupFee())
//                .tax(entity.getTax())
//                .discountAmount(entity.getDiscountAmount())
//                .total(entity.getTotal())
//                .promoCode(entity.getPromoCode())
//                .discountPercentage(entity.getDiscountPercentage())
//                .status(entity.getStatus().toString())
//                .paymentStatus(entity.getPaymentStatus().toString())
//                .createdAt(entity.getCreatedAt())
//                .updatedAt(entity.getUpdatedAt())
//                .customerPhone(entity.getCustomerPhone())
//                .customerAddress(entity.getCustomerAddress())
//                .pickupLocation(entity.getPickupLocation())
//                .dropoffLocation(entity.getDropoffLocation())
//                .pickupDateTime(entity.getPickupDateTime())
//                .returnDateTime(entity.getReturnDateTime())
//                .notes(entity.getNotes())
//                .build();
//    }
//}

//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import in.luckyseven.julanatoursapi.entity.VehicleEntity;
//import in.luckyseven.julanatoursapi.io.BookingRequest;
//import in.luckyseven.julanatoursapi.io.BookingResponse;
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
//import java.util.stream.Collectors;
//
//@Service
//@AllArgsConstructor
//@Slf4j
//public class BookingServiceImpl implements BookingService {
//
//    private final BookingRepository bookingRepository;
//    private final VehicleRepository vehicleRepository;
//
//    // Constants for odometer calculation
//    private static final int BASE_KM_ALLOWANCE = 800;
//    private static final double EXTRA_KM_RATE = 180.0;
//
//    @Override
//    public BookingResponse createBooking(BookingRequest request, String userId) {
//        log.info("Creating booking for user: {}", userId);
//
//        // Build booking items with vehicle details
//        List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
//        double subtotal = 0.0;
//
//        for (BookingRequest.BookingItemRequest itemRequest : request.getBookingItems()) {
//            VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
//                    .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));
//
//            double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
//            subtotal += itemTotal;
//
//            BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
//                    .vehicleId(vehicle.getId())
//                    .vehicleName(vehicle.getName())
//                    .vehicleCategory(vehicle.getCategory())
//                    .pricePerDay(vehicle.getPrice())
//                    .quantity(itemRequest.getQuantity())
//                    .vehicleImageUrl(vehicle.getImageUrl())
//                    .build();
//
//            bookingItems.add(bookingItem);
//        }
//
//        // Calculate fees and charges
//        double pickupFee = subtotal > 0 ? 10.0 : 0.0;
//        double tax = subtotal * 0.1;
//
//        // Calculate extra km charges
//        double extraKmCharge = 0.0;
//        Integer expectedKm = request.getExpectedKilometers();
//        if (expectedKm != null && expectedKm > BASE_KM_ALLOWANCE) {
//            extraKmCharge = (expectedKm - BASE_KM_ALLOWANCE) * EXTRA_KM_RATE;
//        }
//
//        // Apply promo code discount if provided
//        Integer discountPercentage = validatePromoCode(request.getPromoCode(), subtotal);
//        double discountAmount = subtotal * (discountPercentage / 100.0);
//
//        double total = subtotal + pickupFee + tax + extraKmCharge - discountAmount;
//
//        // Generate unique booking number
//        String bookingNumber = generateBookingNumber();
//
//        // Create booking entity
//        BookingEntity booking = BookingEntity.builder()
//                .userId(userId)
//                .bookingNumber(bookingNumber)
//                .userName(request.getFirstName() + " " + request.getLastName())
//                .userEmail(request.getEmail())
//                .customerPhone(request.getContactNumber())
//                .customerAddress(buildFullAddress(request))
//                .passportNumber(request.getPassportNo())
//                .items(bookingItems)
//                .subtotal(subtotal)
//                .pickupFee(pickupFee)
//                .tax(tax)
//                .extraKmCharge(extraKmCharge)
//                .total(total)
//                .status(BookingEntity.BookingStatus.PENDING)
//                .paymentStatus(BookingEntity.PaymentStatus.PENDING)
//                .paymentMethod(request.getPaymentMethod())
//                .pickupLocation(request.getPickupLocation())
//                .dropoffLocation(request.getDropLocation())
//                .pickupDateTime(request.getPickupDateTime())
//                .returnDateTime(request.getReturnDateTime())
//                .expectedKilometers(expectedKm != null ? expectedKm : BASE_KM_ALLOWANCE)
//                .baseKmAllowance(BASE_KM_ALLOWANCE)
//                .extraKmRate(EXTRA_KM_RATE)
//                .createdAt(LocalDateTime.now())
//                .updatedAt(LocalDateTime.now())
//                .build();
//
//        booking = bookingRepository.save(booking);
//        log.info("Booking created successfully with ID: {}", booking.getId());
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public List<BookingResponse> getUserBookings(String userId) {
//        log.info("Fetching bookings for user: {}", userId);
//
//        List<BookingEntity> bookings = bookingRepository.findByUserId(userId);
//        return bookings.stream()
//                .map(this::convertToResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public BookingResponse getBookingById(String bookingId, String userId) {
//        log.info("Fetching booking {} for user: {}", bookingId, userId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        // Verify user ownership
//        if (!booking.getUserId().equals(userId)) {
//            throw new RuntimeException("Access denied: Booking does not belong to user");
//        }
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public BookingResponse updateBookingStatus(String bookingId, String status) {
//        log.info("Updating booking {} status to: {}", bookingId, status);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        try {
//            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
//            booking.setStatus(bookingStatus);
//            booking.setUpdatedAt(LocalDateTime.now());
//
//            booking = bookingRepository.save(booking);
//            log.info("Booking status updated successfully");
//
//            return convertToResponse(booking);
//        } catch (IllegalArgumentException e) {
//            throw new RuntimeException("Invalid booking status: " + status);
//        }
//    }
//
//    @Override
//    public BookingResponse cancelBooking(String bookingId, String userId) {
//        log.info("Cancelling booking {} for user: {}", bookingId, userId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        // Verify user ownership
//        if (!booking.getUserId().equals(userId)) {
//            throw new RuntimeException("Access denied: Booking does not belong to user");
//        }
//
//        // Check if booking can be cancelled
//        if (booking.getStatus() == BookingEntity.BookingStatus.COMPLETED) {
//            throw new RuntimeException("Cannot cancel completed booking");
//        }
//
//        booking.setStatus(BookingEntity.BookingStatus.CANCELLED);
//        booking.setUpdatedAt(LocalDateTime.now());
//
//        booking = bookingRepository.save(booking);
//        log.info("Booking cancelled successfully");
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public Integer validatePromoCode(String promoCode, Double subtotal) {
//        if (promoCode == null || promoCode.trim().isEmpty()) {
//            return 0;
//        }
//
//        String code = promoCode.toUpperCase().trim();
//
//        switch (code) {
//            case "SAVE10":
//                return 10;
//            case "WELCOME20":
//                return 20;
//            case "FIRST50":
//                return subtotal > 1000 ? 50 : 0; // 50% off for orders over 1000
//            case "NEWUSER":
//                return 15;
//            case "SUMMER25":
//                return 25;
//            default:
//                log.warn("Invalid promo code used: {}", promoCode);
//                return 0;
//        }
//    }
//
//    @Override
//    public List<BookingResponse> getAllBookings() {
//        log.info("Fetching all bookings");
//
//        List<BookingEntity> bookings = bookingRepository.findAll();
//        return bookings.stream()
//                .map(this::convertToResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public List<BookingResponse> getBookingsByStatus(String status) {
//        log.info("Fetching bookings with status: {}", status);
//
//        try {
//            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
//            List<BookingEntity> bookings = bookingRepository.findByStatus(bookingStatus);
//
//            return bookings.stream()
//                    .map(this::convertToResponse)
//                    .collect(Collectors.toList());
//        } catch (IllegalArgumentException e) {
//            throw new RuntimeException("Invalid booking status: " + status);
//        }
//    }
//
//    // Helper method to calculate extra charges
//    public Double calculateExtraCharges(Integer expectedKilometers) {
//        if (expectedKilometers == null || expectedKilometers <= BASE_KM_ALLOWANCE) {
//            return 0.0;
//        }
//        return (expectedKilometers - BASE_KM_ALLOWANCE) * EXTRA_KM_RATE;
//    }
//
//    private BookingResponse convertToResponse(BookingEntity entity) {
//        List<BookingResponse.BookingItemResponse> itemResponses = entity.getItems().stream()
//                .map(item -> BookingResponse.BookingItemResponse.builder()
//                        .vehicleId(item.getVehicleId())
//                        .vehicleName(item.getVehicleName())
//                        .vehicleCategory(item.getVehicleCategory())
//                        .vehicleImageUrl(item.getVehicleImageUrl())
//                        .pricePerDay(item.getPricePerDay())
//                        .quantity(item.getQuantity())
//                        .itemTotal(item.getItemTotal())
//                        .build())
//                .collect(Collectors.toList());
//
//        return BookingResponse.builder()
//                .id(entity.getId())
//                .bookingId(entity.getId())
//                .bookingNumber(entity.getBookingNumber())
//                .userId(entity.getUserId())
//                .userEmail(entity.getUserEmail())
//                .userName(entity.getUserName())
//                .items(itemResponses)
//                .subtotal(entity.getSubtotal())
//                .pickupFee(entity.getPickupFee())
//                .tax(entity.getTax())
//                .extraKmCharge(entity.getExtraKmCharge())
//                .total(entity.getTotal())
//                .status(entity.getStatus().toString())
//                .paymentStatus(entity.getPaymentStatus().toString())
//                .paymentMethod(entity.getPaymentMethod())
//                .paymentReference(entity.getPaymentReference())
//                .createdAt(entity.getCreatedAt())
//                .updatedAt(entity.getUpdatedAt())
//                .customerPhone(entity.getCustomerPhone())
//                .customerAddress(entity.getCustomerAddress())
//                .passportNumber(entity.getPassportNumber())
//                .pickupLocation(entity.getPickupLocation())
//                .dropoffLocation(entity.getDropoffLocation())
//                .pickupDateTime(entity.getPickupDateTime())
//                .returnDateTime(entity.getReturnDateTime())
//                .expectedKilometers(entity.getExpectedKilometers())
//                .baseKmAllowance(entity.getBaseKmAllowance())
//                .extraKmRate(entity.getExtraKmRate())
//                .build();
//    }
//
//    private String generateBookingNumber() {
//        // Generate format: JT-20250924-1234
//        String date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
//        String random = String.format("%04d", (int) (Math.random() * 10000));
//        return "JT-" + date + "-" + random;
//    }
//
//    private String buildFullAddress(BookingRequest request) {
//        StringBuilder address = new StringBuilder();
//
//        if (request.getAddress() != null) {
//            address.append(request.getAddress());
//        }
//
//        if (request.getAddress2() != null && !request.getAddress2().trim().isEmpty()) {
//            address.append(", ").append(request.getAddress2());
//        }
//
//        if (request.getState() != null) {
//            address.append(", ").append(request.getState());
//        }
//
//        if (request.getCountry() != null) {
//            address.append(", ").append(request.getCountry());
//        }
//
//        if (request.getZip() != null) {
//            address.append(" ").append(request.getZip());
//        }
//
//        return address.toString();
//    }
//}


//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import in.luckyseven.julanatoursapi.entity.VehicleEntity;
//import in.luckyseven.julanatoursapi.io.*;
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
//import java.util.Optional;
//import java.util.UUID;
//import java.util.stream.Collectors;
//
//@Service
//@AllArgsConstructor
//@Slf4j
//public class BookingServiceImpl implements BookingService {
//
//    private final BookingRepository bookingRepository;
//    private final VehicleRepository vehicleRepository;
//
//    // Constants for odometer calculation
//    private static final int BASE_KM_ALLOWANCE = 800;
//    private static final double EXTRA_KM_RATE = 180.0;
//    private static final double PICKUP_FEE = 10.0;
//    private static final double TAX_RATE = 0.1;
//
//    // ===== NEW METHOD FOR PLACE BOOKING INTEGRATION =====
//    @Override
//    @Transactional
//    public PlaceBookingResponse createBookingFromPlaceBooking(PlaceBookingRequest request, String userId) {
//        log.info("Creating booking from PlaceBookingRequest for user: {}", userId);
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
//            // Generate unique booking number
//            String bookingNumber = generateUniqueBookingNumber();
//
//            // Process payment (mock)
//            String paymentReference = processPayment(request.getPaymentMethod(), total);
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
//                    .customerAddress(formatPlaceBookingAddress(request))
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
//            // Save to database
//            booking = bookingRepository.save(booking);
//            log.info("Booking saved to database with ID: {} and number: {}",
//                    booking.getId(), booking.getBookingNumber());
//
//            // Build response
//            return buildPlaceBookingResponse(booking, request);
//
//        } catch (Exception e) {
//            log.error("Error creating booking from PlaceBookingRequest", e);
//            throw new RuntimeException("Failed to create booking: " + e.getMessage(), e);
//        }
//    }
//
//    // ===== EXISTING METHOD FOR BOOKING REQUEST =====
//    @Override
//    @Transactional
//    public BookingResponse createBooking(BookingRequest request, String userId) {
//        log.info("Creating booking for user: {}", userId);
//
//        // Build booking items with vehicle details
//        List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
//        double subtotal = 0.0;
//
//        for (BookingRequest.BookingItemRequest itemRequest : request.getBookingItems()) {
//            VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
//                    .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));
//
//            double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
//            subtotal += itemTotal;
//
//            BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
//                    .vehicleId(vehicle.getId())
//                    .vehicleName(vehicle.getName())
//                    .vehicleCategory(vehicle.getCategory())
//                    .pricePerDay(vehicle.getPrice())
//                    .quantity(itemRequest.getQuantity())
//                    .vehicleImageUrl(vehicle.getImageUrl())
//                    .build();
//
//            bookingItems.add(bookingItem);
//        }
//
//        // Calculate fees and charges
//        double pickupFee = subtotal > 0 ? PICKUP_FEE : 0.0;
//        double tax = subtotal * TAX_RATE;
//
//        // Calculate extra km charges
//        double extraKmCharge = 0.0;
//        Integer expectedKm = BASE_KM_ALLOWANCE; // Default value
//        if (expectedKm != null && expectedKm > BASE_KM_ALLOWANCE) {
//            extraKmCharge = (expectedKm - BASE_KM_ALLOWANCE) * EXTRA_KM_RATE;
//        }
//
//        // Apply promo code discount if provided
//        Integer discountPercentage = validatePromoCode(request.getPromoCode(), subtotal);
//        double discountAmount = subtotal * (discountPercentage / 100.0);
//
//        double total = subtotal + pickupFee + tax + extraKmCharge - discountAmount;
//
//        // Generate unique booking number
//        String bookingNumber = generateUniqueBookingNumber();
//
//        // Create booking entity
//        BookingEntity booking = BookingEntity.builder()
//                .userId(userId)
//                .bookingNumber(bookingNumber)
//                .userName("") // Will need to get from user details
//                .userEmail("") // Will need to get from user details
//                .customerPhone(request.getCustomerPhone())
//                .customerAddress(request.getCustomerAddress())
//                .items(bookingItems)
//                .subtotal(subtotal)
//                .pickupFee(pickupFee)
//                .tax(tax)
//                .extraKmCharge(extraKmCharge)
//                .discountAmount(discountAmount)
//                .total(total)
//                .promoCode(request.getPromoCode())
//                .discountPercentage(discountPercentage)
//                .status(BookingEntity.BookingStatus.PENDING)
//                .paymentStatus(BookingEntity.PaymentStatus.PENDING)
//                .pickupLocation(request.getPickupLocation())
//                .dropoffLocation(request.getDropoffLocation())
//                .pickupDateTime(request.getPickupDateTime())
//                .returnDateTime(request.getReturnDateTime())
//                .expectedKilometers(expectedKm)
//                .baseKmAllowance(BASE_KM_ALLOWANCE)
//                .extraKmRate(EXTRA_KM_RATE)
//                .notes(request.getNotes())
//                .createdAt(LocalDateTime.now())
//                .updatedAt(LocalDateTime.now())
//                .build();
//
//        booking = bookingRepository.save(booking);
//        log.info("Booking created successfully with ID: {}", booking.getId());
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public List<BookingResponse> getUserBookings(String userId) {
//        log.info("Fetching bookings for user: {}", userId);
//
//        List<BookingEntity> bookings = bookingRepository.findByUserId(userId);
//        return bookings.stream()
//                .map(this::convertToResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public List<BookingResponse> getBookingsByUser(String userId) {
//        return getUserBookings(userId); // Same method, different name for consistency
//    }
//
//    @Override
//    public BookingResponse getBookingById(String bookingId, String userId) {
//        log.info("Fetching booking {} for user: {}", bookingId, userId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        // Verify user ownership
//        if (!booking.getUserId().equals(userId)) {
//            throw new RuntimeException("Access denied: Booking does not belong to user");
//        }
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public BookingResponse getBookingById(String bookingId) {
//        log.info("Fetching booking by ID (admin access): {}", bookingId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public BookingResponse updateBookingStatus(String bookingId, String status) {
//        log.info("Updating booking {} status to: {}", bookingId, status);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        try {
//            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
//            booking.setStatus(bookingStatus);
//            booking.setUpdatedAt(LocalDateTime.now());
//
//            booking = bookingRepository.save(booking);
//            log.info("Booking status updated successfully");
//
//            return convertToResponse(booking);
//        } catch (IllegalArgumentException e) {
//            throw new RuntimeException("Invalid booking status: " + status);
//        }
//    }
//
//    @Override
//    public BookingResponse cancelBooking(String bookingId, String userId) {
//        log.info("Cancelling booking {} for user: {}", bookingId, userId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        // Verify user ownership
//        if (!booking.getUserId().equals(userId)) {
//            throw new RuntimeException("Access denied: Booking does not belong to user");
//        }
//
//        // Check if booking can be cancelled
//        if (booking.getStatus() == BookingEntity.BookingStatus.COMPLETED) {
//            throw new RuntimeException("Cannot cancel completed booking");
//        }
//
//        booking.setStatus(BookingEntity.BookingStatus.CANCELLED);
//        booking.setUpdatedAt(LocalDateTime.now());
//
//        booking = bookingRepository.save(booking);
//        log.info("Booking cancelled successfully");
//
//        return convertToResponse(booking);
//    }
//
//    @Override
//    public boolean deleteBooking(String bookingId) {
//        log.info("Deleting/Cancelling booking: {}", bookingId);
//
//        BookingEntity booking = bookingRepository.findById(bookingId)
//                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));
//
//        // Instead of actual deletion, mark as cancelled
//        booking.setStatus(BookingEntity.BookingStatus.CANCELLED);
//        booking.setUpdatedAt(LocalDateTime.now());
//        bookingRepository.save(booking);
//
//        return true;
//    }
//
//    @Override
//    public Integer validatePromoCode(String promoCode, Double subtotal) {
//        if (promoCode == null || promoCode.trim().isEmpty()) {
//            return 0;
//        }
//
//        String code = promoCode.toUpperCase().trim();
//
//        switch (code) {
//            case "SAVE10":
//                return 10;
//            case "WELCOME20":
//                return 20;
//            case "FIRST50":
//                return subtotal > 1000 ? 50 : 0; // 50% off for orders over 1000
//            case "NEWUSER":
//                return 15;
//            case "SUMMER25":
//                return 25;
//            default:
//                log.warn("Invalid promo code used: {}", promoCode);
//                return 0;
//        }
//    }
//
//    @Override
//    public List<BookingResponse> getAllBookings() {
//        log.info("Fetching all bookings");
//
//        List<BookingEntity> bookings = bookingRepository.findAll();
//        return bookings.stream()
//                .map(this::convertToResponse)
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public List<BookingResponse> getBookingsByStatus(String status) {
//        log.info("Fetching bookings with status: {}", status);
//
//        try {
//            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
//            List<BookingEntity> bookings = bookingRepository.findByStatus(bookingStatus);
//
//            return bookings.stream()
//                    .map(this::convertToResponse)
//                    .collect(Collectors.toList());
//        } catch (IllegalArgumentException e) {
//            throw new RuntimeException("Invalid booking status: " + status);
//        }
//    }
//
//    @Override
//    public Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate) {
//        if (expectedKm == null || expectedKm <= baseAllowance) {
//            return 0.0;
//        }
//        return (expectedKm - baseAllowance) * extraKmRate;
//    }
//
//    @Override
//    public String generateBookingNumber() {
//        // Generate format: JT-20250924-1234
//        String date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
//        String random = String.format("%04d", (int) (Math.random() * 10000));
//        return "JT-" + date + "-" + random;
//    }
//
//    // Helper method to calculate extra charges (keeping for backward compatibility)
//    public Double calculateExtraCharges(Integer expectedKilometers) {
//        return calculateExtraKmCharge(expectedKilometers, BASE_KM_ALLOWANCE, EXTRA_KM_RATE);
//    }
//
//    // ===== HELPER METHODS =====
//    private String generateUniqueBookingNumber() {
//        String bookingNumber;
//        int attempts = 0;
//
//        do {
//            bookingNumber = generateBookingNumber();
//            attempts++;
//            if (attempts > 10) {
//                throw new RuntimeException("Failed to generate unique booking number");
//            }
//        } while (bookingRepository.findByBookingNumber(bookingNumber).isPresent());
//
//        return bookingNumber;
//    }
//
//    private String processPayment(String paymentMethod, Double amount) {
//        log.info("Processing {} payment for amount: Rs.{}", paymentMethod, amount);
//
//        // Generate mock payment reference
//        String paymentRef = "PAY-" + System.currentTimeMillis() + "-" +
//                UUID.randomUUID().toString().substring(0, 8).toUpperCase();
//
//        log.info("Payment processed successfully. Reference: {}", paymentRef);
//        return paymentRef;
//    }
//
//    private String formatPlaceBookingAddress(PlaceBookingRequest request) {
//        StringBuilder address = new StringBuilder();
//
//        if (request.getAddress() != null) {
//            address.append(request.getAddress());
//        }
//
//        if (request.getAddress2() != null && !request.getAddress2().trim().isEmpty()) {
//            address.append(", ").append(request.getAddress2());
//        }
//
//        if (request.getState() != null) {
//            address.append(", ").append(request.getState());
//        }
//
//        if (request.getZip() != null) {
//            address.append(" ").append(request.getZip());
//        }
//
//        if (request.getCountry() != null) {
//            address.append(", ").append(request.getCountry());
//        }
//
//        return address.toString();
//    }
//
//    private String buildFullAddress(BookingRequest request) {
//        StringBuilder address = new StringBuilder();
//
//        if (request.getCustomerAddress() != null) {
//            address.append(request.getCustomerAddress());
//        }
//
//        return address.toString();
//    }
//
//    private PlaceBookingResponse buildPlaceBookingResponse(BookingEntity booking, PlaceBookingRequest request) {
//        List<PlaceBookingResponse.BookedVehicleItem> responseItems = booking.getItems().stream()
//                .map(item -> PlaceBookingResponse.BookedVehicleItem.builder()
//                        .vehicleId(item.getVehicleId())
//                        .vehicleName(item.getVehicleName())
//                        .vehicleCategory(item.getVehicleCategory())
//                        .vehicleImageUrl(item.getVehicleImageUrl())
//                        .pricePerDay(item.getPricePerDay())
//                        .quantity(item.getQuantity())
//                        .itemTotal(item.getItemTotal())
//                        .build())
//                .collect(Collectors.toList());
//
//        int extraKm = Math.max(0, request.getExpectedKilometers() - BASE_KM_ALLOWANCE);
//
//        return PlaceBookingResponse.builder()
//                .bookingId(booking.getId())
//                .bookingNumber(booking.getBookingNumber())
//                .status(booking.getStatus().toString())
//                .paymentStatus(booking.getPaymentStatus().toString())
//                .customerName(booking.getUserName())
//                .contactNumber(request.getContactNumber())
//                .email(request.getEmail())
//                .pickupDate(request.getPickupDate())
//                .dropDate(request.getDropDate())
//                .pickupLocation(request.getPickupLocation())
//                .dropLocation(request.getDropLocation())
//                .expectedKilometers(request.getExpectedKilometers())
//                .subtotal(booking.getSubtotal())
//                .pickupFee(booking.getPickupFee())
//                .tax(booking.getTax())
//                .extraKmCharge(booking.getExtraKmCharge())
//                .total(booking.getTotal())
//                .baseKmAllowance(BASE_KM_ALLOWANCE)
//                .extraKm(extraKm)
//                .extraKmRate(EXTRA_KM_RATE)
//                .vehicleItems(responseItems)
//                .paymentMethod(request.getPaymentMethod())
//                .paymentReference(booking.getPaymentReference())
//                .createdAt(booking.getCreatedAt())
//                .updatedAt(booking.getUpdatedAt())
//                .confirmationMessage("Your booking has been confirmed successfully!")
//                .nextSteps("You will receive a confirmation email shortly. Our team will contact you 24 hours before pickup.")
//                .build();
//    }
//
//    private BookingResponse convertToResponse(BookingEntity entity) {
//        List<BookingResponse.BookingItemResponse> itemResponses = entity.getItems().stream()
//                .map(item -> BookingResponse.BookingItemResponse.builder()
//                        .vehicleId(item.getVehicleId())
//                        .vehicleName(item.getVehicleName())
//                        .vehicleCategory(item.getVehicleCategory())
//                        .vehicleImageUrl(item.getVehicleImageUrl())
//                        .pricePerDay(item.getPricePerDay())
//                        .quantity(item.getQuantity())
//                        .itemTotal(item.getItemTotal())
//                        .build())
//                .collect(Collectors.toList());
//
//        return BookingResponse.builder()
//                .id(entity.getId())
//                .userId(entity.getUserId())
//                .userEmail(entity.getUserEmail())
//                .userName(entity.getUserName())
//                .items(itemResponses)
//                .subtotal(entity.getSubtotal())
//                .pickupFee(entity.getPickupFee())
//                .tax(entity.getTax())
//                .discountAmount(entity.getDiscountAmount())
//                .total(entity.getTotal())
//                .promoCode(entity.getPromoCode())
//                .discountPercentage(entity.getDiscountPercentage())
//                .status(entity.getStatus().toString())
//                .paymentStatus(entity.getPaymentStatus() != null ? entity.getPaymentStatus().toString() : "PENDING")
//                .createdAt(entity.getCreatedAt())
//                .updatedAt(entity.getUpdatedAt())
//                .customerPhone(entity.getCustomerPhone())
//                .customerAddress(entity.getCustomerAddress())
//                .passportNumber(entity.getPassportNumber())
//                .pickupLocation(entity.getPickupLocation())
//                .dropoffLocation(entity.getDropoffLocation())
//                .pickupDateTime(entity.getPickupDateTime())
//                .returnDateTime(entity.getReturnDateTime())
//                .expectedKilometers(entity.getExpectedKilometers())
//                .baseKmAllowance(entity.getBaseKmAllowance())
//                .extraKmRate(entity.getExtraKmRate())
//                .notes(entity.getNotes())
//                .build();
//    }
//}

package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.entity.BookingEntity;
import in.luckyseven.julanatoursapi.entity.VehicleEntity;
import in.luckyseven.julanatoursapi.io.*;
import in.luckyseven.julanatoursapi.repository.BookingRepository;
import in.luckyseven.julanatoursapi.repository.VehicleRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
@Slf4j
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final VehicleRepository vehicleRepository;

    // Constants for odometer calculation
    private static final int BASE_KM_ALLOWANCE = 800;
    private static final double EXTRA_KM_RATE = 180.0;
    private static final double PICKUP_FEE = 10.0;
    private static final double TAX_RATE = 0.1;

    // ===== NEW METHOD FOR PLACE BOOKING INTEGRATION =====
    @Override
    @Transactional
    public PlaceBookingResponse createBookingFromPlaceBooking(PlaceBookingRequest request, String userId) {
        log.info("Creating booking from PlaceBookingRequest for user: {}", userId);

        try {
            // Build booking items with vehicle details
            List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
            double subtotal = 0.0;

            for (PlaceBookingRequest.BookingVehicleItem itemRequest : request.getBookingItems()) {
                VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
                        .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));

                double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
                subtotal += itemTotal;

                BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
                        .vehicleId(vehicle.getId())
                        .vehicleName(vehicle.getName())
                        .vehicleCategory(vehicle.getCategory())
                        .vehicleImageUrl(vehicle.getImageUrl())
                        .pricePerDay(vehicle.getPrice())
                        .quantity(itemRequest.getQuantity())
                        .build();

                bookingItems.add(bookingItem);
            }

            // Calculate fees and charges
            double pickupFee = subtotal > 0 ? PICKUP_FEE : 0.0;
            double tax = subtotal * TAX_RATE;

            // Calculate extra kilometer charge
            double extraKmCharge = calculateExtraKmCharge(
                    request.getExpectedKilometers(),
                    BASE_KM_ALLOWANCE,
                    EXTRA_KM_RATE
            );

            double total = subtotal + pickupFee + tax + extraKmCharge;

            // Generate unique booking number
            String bookingNumber = generateUniqueBookingNumber();

            // Process payment (mock)
            String paymentReference = processPayment(request.getPaymentMethod(), total);

            // Create booking entity
            BookingEntity booking = BookingEntity.builder()
                    .userId(userId)
                    .bookingNumber(bookingNumber)
                    .userEmail(request.getEmail())
                    .userName(request.getFirstName() + " " + request.getLastName())
                    .items(bookingItems)
                    .subtotal(subtotal)
                    .pickupFee(pickupFee)
                    .tax(tax)
                    .extraKmCharge(extraKmCharge)
                    .total(total)
                    .status(BookingEntity.BookingStatus.CONFIRMED)
                    .paymentStatus(BookingEntity.PaymentStatus.PAID)
                    .paymentMethod(request.getPaymentMethod())
                    .paymentReference(paymentReference)
                    .customerPhone(request.getContactNumber())
                    .customerAddress(formatPlaceBookingAddress(request))
                    .pickupLocation(request.getPickupLocation())
                    .dropoffLocation(request.getDropLocation())
                    .pickupDateTime(request.getPickupDate().atTime(9, 0))
                    .returnDateTime(request.getDropDate().atTime(18, 0))
                    .expectedKilometers(request.getExpectedKilometers())
                    .baseKmAllowance(BASE_KM_ALLOWANCE)
                    .extraKmRate(EXTRA_KM_RATE)
                    .passportNumber(request.getPassportNo()) // This should work now
                    .createdAt(LocalDateTime.now())
                    .updatedAt(LocalDateTime.now())
                    .build();

            // Save to database
            booking = bookingRepository.save(booking);
            log.info("Booking saved to database with ID: {} and number: {}",
                    booking.getId(), booking.getBookingNumber());

            // Build response
            return buildPlaceBookingResponse(booking, request);

        } catch (Exception e) {
            log.error("Error creating booking from PlaceBookingRequest", e);
            throw new RuntimeException("Failed to create booking: " + e.getMessage(), e);
        }
    }

    // ===== EXISTING METHOD FOR BOOKING REQUEST =====
    @Override
    @Transactional
    public BookingResponse createBooking(BookingRequest request, String userId) {
        log.info("Creating booking for user: {}", userId);

        // Build booking items with vehicle details
        List<BookingEntity.BookingItem> bookingItems = new ArrayList<>();
        double subtotal = 0.0;

        // FIXED: Now using getBookingItems() instead of getItems()
        for (BookingRequest.BookingItemRequest itemRequest : request.getBookingItems()) {
            VehicleEntity vehicle = vehicleRepository.findById(itemRequest.getVehicleId())
                    .orElseThrow(() -> new RuntimeException("Vehicle not found: " + itemRequest.getVehicleId()));

            double itemTotal = vehicle.getPrice() * itemRequest.getQuantity();
            subtotal += itemTotal;

            BookingEntity.BookingItem bookingItem = BookingEntity.BookingItem.builder()
                    .vehicleId(vehicle.getId())
                    .vehicleName(vehicle.getName())
                    .vehicleCategory(vehicle.getCategory())
                    .pricePerDay(vehicle.getPrice())
                    .quantity(itemRequest.getQuantity())
                    .vehicleImageUrl(vehicle.getImageUrl())
                    .build();

            bookingItems.add(bookingItem);
        }

        // Calculate fees and charges
        double pickupFee = subtotal > 0 ? PICKUP_FEE : 0.0;
        double tax = subtotal * TAX_RATE;

        // Calculate extra km charges
        double extraKmCharge = 0.0;
        Integer expectedKm = BASE_KM_ALLOWANCE; // Default value
        if (expectedKm != null && expectedKm > BASE_KM_ALLOWANCE) {
            extraKmCharge = (expectedKm - BASE_KM_ALLOWANCE) * EXTRA_KM_RATE;
        }

        // Apply promo code discount if provided
        Integer discountPercentage = validatePromoCode(request.getPromoCode(), subtotal);
        double discountAmount = subtotal * (discountPercentage / 100.0);

        double total = subtotal + pickupFee + tax + extraKmCharge - discountAmount;

        // Generate unique booking number
        String bookingNumber = generateUniqueBookingNumber();

        // Create booking entity
        BookingEntity booking = BookingEntity.builder()
                .userId(userId)
                .bookingNumber(bookingNumber)
                .userName("") // Will need to get from user details
                .userEmail("") // Will need to get from user details
                .customerPhone(request.getCustomerPhone())
                .customerAddress(request.getCustomerAddress())
                .items(bookingItems)
                .subtotal(subtotal)
                .pickupFee(pickupFee)
                .tax(tax)
                .extraKmCharge(extraKmCharge)
                .discountAmount(discountAmount)
                .total(total)
                .promoCode(request.getPromoCode())
                .discountPercentage(discountPercentage)
                .status(BookingEntity.BookingStatus.PENDING)
                .paymentStatus(BookingEntity.PaymentStatus.PENDING)
                .pickupLocation(request.getPickupLocation())
                .dropoffLocation(request.getDropoffLocation())
                .pickupDateTime(request.getPickupDateTime())
                .returnDateTime(request.getReturnDateTime())
                .expectedKilometers(expectedKm)
                .baseKmAllowance(BASE_KM_ALLOWANCE)
                .extraKmRate(EXTRA_KM_RATE)
                .notes(request.getNotes())
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        booking = bookingRepository.save(booking);
        log.info("Booking created successfully with ID: {}", booking.getId());

        return convertToResponse(booking);
    }

    @Override
    public List<BookingResponse> getUserBookings(String userId) {
        log.info("Fetching bookings for user: {}", userId);

        List<BookingEntity> bookings = bookingRepository.findByUserId(userId);
        return bookings.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingResponse> getBookingsByUser(String userId) {
        return getUserBookings(userId); // Same method, different name for consistency
    }

    @Override
    public BookingResponse getBookingById(String bookingId, String userId) {
        log.info("Fetching booking {} for user: {}", bookingId, userId);

        BookingEntity booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));

        // Verify user ownership
        if (!booking.getUserId().equals(userId)) {
            throw new RuntimeException("Access denied: Booking does not belong to user");
        }

        return convertToResponse(booking);
    }

    @Override
    public BookingResponse getBookingById(String bookingId) {
        log.info("Fetching booking by ID (admin access): {}", bookingId);

        BookingEntity booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));

        return convertToResponse(booking);
    }

    @Override
    public BookingResponse updateBookingStatus(String bookingId, String status) {
        log.info("Updating booking {} status to: {}", bookingId, status);

        BookingEntity booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));

        try {
            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
            booking.setStatus(bookingStatus);
            booking.setUpdatedAt(LocalDateTime.now());

            booking = bookingRepository.save(booking);
            log.info("Booking status updated successfully");

            return convertToResponse(booking);
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid booking status: " + status);
        }
    }

    @Override
    public BookingResponse cancelBooking(String bookingId, String userId) {
        log.info("Cancelling booking {} for user: {}", bookingId, userId);

        BookingEntity booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));

        // Verify user ownership
        if (!booking.getUserId().equals(userId)) {
            throw new RuntimeException("Access denied: Booking does not belong to user");
        }

        // Check if booking can be cancelled
        if (booking.getStatus() == BookingEntity.BookingStatus.COMPLETED) {
            throw new RuntimeException("Cannot cancel completed booking");
        }

        booking.setStatus(BookingEntity.BookingStatus.CANCELLED);
        booking.setUpdatedAt(LocalDateTime.now());

        booking = bookingRepository.save(booking);
        log.info("Booking cancelled successfully");

        return convertToResponse(booking);
    }

    @Override
    public boolean deleteBooking(String bookingId) {
        log.info("Deleting/Cancelling booking: {}", bookingId);

        BookingEntity booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found: " + bookingId));

        // Instead of actual deletion, mark as cancelled
        booking.setStatus(BookingEntity.BookingStatus.CANCELLED);
        booking.setUpdatedAt(LocalDateTime.now());
        bookingRepository.save(booking);

        return true;
    }

    @Override
    public Integer validatePromoCode(String promoCode, Double subtotal) {
        if (promoCode == null || promoCode.trim().isEmpty()) {
            return 0;
        }

        String code = promoCode.toUpperCase().trim();

        switch (code) {
            case "SAVE10":
                return 10;
            case "WELCOME20":
                return 20;
            case "FIRST50":
                return subtotal > 1000 ? 50 : 0; // 50% off for orders over 1000
            case "NEWUSER":
                return 15;
            case "SUMMER25":
                return 25;
            default:
                log.warn("Invalid promo code used: {}", promoCode);
                return 0;
        }
    }

    @Override
    public List<BookingResponse> getAllBookings() {
        log.info("Fetching all bookings");

        List<BookingEntity> bookings = bookingRepository.findAll();
        return bookings.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Override
    public List<BookingResponse> getBookingsByStatus(String status) {
        log.info("Fetching bookings with status: {}", status);

        try {
            BookingEntity.BookingStatus bookingStatus = BookingEntity.BookingStatus.valueOf(status.toUpperCase());
            List<BookingEntity> bookings = bookingRepository.findByStatus(bookingStatus);

            return bookings.stream()
                    .map(this::convertToResponse)
                    .collect(Collectors.toList());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid booking status: " + status);
        }
    }

    @Override
    public Double calculateExtraKmCharge(Integer expectedKm, Integer baseAllowance, Double extraKmRate) {
        if (expectedKm == null || expectedKm <= baseAllowance) {
            return 0.0;
        }
        return (expectedKm - baseAllowance) * extraKmRate;
    }

    @Override
    public String generateBookingNumber() {
        // Generate format: JT-20250924-1234
        String date = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMdd"));
        String random = String.format("%04d", (int) (Math.random() * 10000));
        return "JT-" + date + "-" + random;
    }

    // Helper method to calculate extra charges (keeping for backward compatibility)
    public Double calculateExtraCharges(Integer expectedKilometers) {
        return calculateExtraKmCharge(expectedKilometers, BASE_KM_ALLOWANCE, EXTRA_KM_RATE);
    }

    // ===== HELPER METHODS =====
    private String generateUniqueBookingNumber() {
        String bookingNumber;
        int attempts = 0;

        do {
            bookingNumber = generateBookingNumber();
            attempts++;
            if (attempts > 10) {
                throw new RuntimeException("Failed to generate unique booking number");
            }
        } while (bookingRepository.findByBookingNumber(bookingNumber).isPresent());

        return bookingNumber;
    }

    private String processPayment(String paymentMethod, Double amount) {
        log.info("Processing {} payment for amount: Rs.{}", paymentMethod, amount);

        // Generate mock payment reference
        String paymentRef = "PAY-" + System.currentTimeMillis() + "-" +
                UUID.randomUUID().toString().substring(0, 8).toUpperCase();

        log.info("Payment processed successfully. Reference: {}", paymentRef);
        return paymentRef;
    }

    private String formatPlaceBookingAddress(PlaceBookingRequest request) {
        StringBuilder address = new StringBuilder();

        if (request.getAddress() != null) {
            address.append(request.getAddress());
        }

        if (request.getAddress2() != null && !request.getAddress2().trim().isEmpty()) {
            address.append(", ").append(request.getAddress2());
        }

        if (request.getState() != null) {
            address.append(", ").append(request.getState());
        }

        if (request.getZip() != null) {
            address.append(" ").append(request.getZip());
        }

        if (request.getCountry() != null) {
            address.append(", ").append(request.getCountry());
        }

        return address.toString();
    }

    private PlaceBookingResponse buildPlaceBookingResponse(BookingEntity booking, PlaceBookingRequest request) {
        List<PlaceBookingResponse.BookedVehicleItem> responseItems = booking.getItems().stream()
                .map(item -> PlaceBookingResponse.BookedVehicleItem.builder()
                        .vehicleId(item.getVehicleId())
                        .vehicleName(item.getVehicleName())
                        .vehicleCategory(item.getVehicleCategory())
                        .vehicleImageUrl(item.getVehicleImageUrl())
                        .pricePerDay(item.getPricePerDay())
                        .quantity(item.getQuantity())
                        .itemTotal(item.getItemTotal())
                        .build())
                .collect(Collectors.toList());

        int extraKm = Math.max(0, request.getExpectedKilometers() - BASE_KM_ALLOWANCE);

        return PlaceBookingResponse.builder()
                .bookingId(booking.getId())
                .bookingNumber(booking.getBookingNumber())
                .status(booking.getStatus().toString())
                .paymentStatus(booking.getPaymentStatus().toString())
                .customerName(booking.getUserName())
                .contactNumber(request.getContactNumber())
                .email(request.getEmail())
                .pickupDate(request.getPickupDate())
                .dropDate(request.getDropDate())
                .pickupLocation(request.getPickupLocation())
                .dropLocation(request.getDropLocation())
                .expectedKilometers(request.getExpectedKilometers())
                .subtotal(booking.getSubtotal())
                .pickupFee(booking.getPickupFee())
                .tax(booking.getTax())
                .extraKmCharge(booking.getExtraKmCharge())
                .total(booking.getTotal())
                .baseKmAllowance(BASE_KM_ALLOWANCE)
                .extraKm(extraKm)
                .extraKmRate(EXTRA_KM_RATE)
                .vehicleItems(responseItems)
                .paymentMethod(request.getPaymentMethod())
                .paymentReference(booking.getPaymentReference())
                .createdAt(booking.getCreatedAt())
                .updatedAt(booking.getUpdatedAt())
                .confirmationMessage("Your booking has been confirmed successfully!")
                .nextSteps("You will receive a confirmation email shortly. Our team will contact you 24 hours before pickup.")
                .build();
    }

    private BookingResponse convertToResponse(BookingEntity entity) {
        List<BookingResponse.BookingItemResponse> itemResponses = entity.getItems().stream()
                .map(item -> BookingResponse.BookingItemResponse.builder()
                        .vehicleId(item.getVehicleId())
                        .vehicleName(item.getVehicleName())
                        .vehicleCategory(item.getVehicleCategory())
                        .vehicleImageUrl(item.getVehicleImageUrl())
                        .pricePerDay(item.getPricePerDay())
                        .quantity(item.getQuantity())
                        .itemTotal(item.getItemTotal())
                        .build())
                .collect(Collectors.toList());

        return BookingResponse.builder()
                .id(entity.getId())
                .userId(entity.getUserId())
                .userEmail(entity.getUserEmail())
                .userName(entity.getUserName())
                .items(itemResponses)
                .subtotal(entity.getSubtotal())
                .pickupFee(entity.getPickupFee())
                .tax(entity.getTax())
                .discountAmount(entity.getDiscountAmount())
                .total(entity.getTotal())
                .promoCode(entity.getPromoCode())
                .discountPercentage(entity.getDiscountPercentage())
                .status(entity.getStatus().toString())
                .paymentStatus(entity.getPaymentStatus() != null ? entity.getPaymentStatus().toString() : "PENDING")
                .createdAt(entity.getCreatedAt())
                .updatedAt(entity.getUpdatedAt())
                .customerPhone(entity.getCustomerPhone())
                .customerAddress(entity.getCustomerAddress())
                .passportNumber(entity.getPassportNumber())
                .pickupLocation(entity.getPickupLocation())
                .dropoffLocation(entity.getDropoffLocation())
                .pickupDateTime(entity.getPickupDateTime())
                .returnDateTime(entity.getReturnDateTime())
                .expectedKilometers(entity.getExpectedKilometers())
                .baseKmAllowance(entity.getBaseKmAllowance())
                .extraKmRate(entity.getExtraKmRate())
                .notes(entity.getNotes())
                .build();
    }
}