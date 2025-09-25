//package in.luckyseven.julanatoursapi.repository;
//
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Repository
//public interface BookingRepository extends MongoRepository<BookingEntity, String> {
//
//    // Find bookings by user ID
//    List<BookingEntity> findByUserId(String userId);
//
//    // Find bookings by user email
//    List<BookingEntity> findByUserEmail(String userEmail);
//
//    // Find bookings by status
//    List<BookingEntity> findByStatus(BookingEntity.BookingStatus status);
//
//    // Find bookings by payment status
//    List<BookingEntity> findByPaymentStatus(BookingEntity.PaymentStatus paymentStatus);
//
//    // Find bookings by user and status
//    List<BookingEntity> findByUserIdAndStatus(String userId, BookingEntity.BookingStatus status);
//
//    // Find bookings created between dates
//    List<BookingEntity> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
//
//    // Find bookings by promo code
//    List<BookingEntity> findByPromoCode(String promoCode);
//
//    // Find active bookings (not cancelled or completed)
//    @Query("{'status': {'$nin': ['CANCELLED', 'COMPLETED']}}")
//    List<BookingEntity> findActiveBookings();
//
//    // Find bookings by pickup date range
//    List<BookingEntity> findByPickupDateTimeBetween(LocalDateTime startDate, LocalDateTime endDate);
//
//    // Count bookings by user
//    long countByUserId(String userId);
//
//    // Find recent bookings by user (last 30 days)
//    @Query("{'userId': ?0, 'createdAt': {'$gte': ?1}}")
//    List<BookingEntity> findRecentBookingsByUser(String userId, LocalDateTime thirtyDaysAgo);
//}

//package in.luckyseven.julanatoursapi.repository;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Repository
//public interface BookingRepository extends MongoRepository<BookingEntity, String> {
//
//    // Find bookings by user ID
//    List<BookingEntity> findByUserId(String userId);
//
//    // Find bookings by user email
//    List<BookingEntity> findByUserEmail(String userEmail);
//
//    // Find bookings by status
//    List<BookingEntity> findByStatus(BookingEntity.BookingStatus status);
//
//    // Find bookings by payment status
//    List<BookingEntity> findByPaymentStatus(BookingEntity.PaymentStatus paymentStatus);
//
//    // Find bookings by user and status
//    List<BookingEntity> findByUserIdAndStatus(String userId, BookingEntity.BookingStatus status);
//
//    // Find bookings created between dates
//    List<BookingEntity> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
//
//    // Find bookings by promo code
//    List<BookingEntity> findByPromoCode(String promoCode);
//
//    // Find active bookings (not cancelled or completed)
//    @Query("{'status': {'$nin': ['CANCELLED', 'COMPLETED']}}")
//    List<BookingEntity> findActiveBookings();
//
//    // Find bookings by pickup date range
//    List<BookingEntity> findByPickupDateTimeBetween(LocalDateTime startDate, LocalDateTime endDate);
//
//    // Count bookings by user
//    long countByUserId(String userId);
//
//    // Find recent bookings by user (last 30 days)
//    @Query("{'userId': ?0, 'createdAt': {'$gte': ?1}}")
//    List<BookingEntity> findRecentBookingsByUser(String userId, LocalDateTime thirtyDaysAgo);
//}

//package in.luckyseven.julanatoursapi.repository;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Repository
//public interface BookingRepository extends MongoRepository<BookingEntity, String> {
//
//    // Find bookings by customer ID (matches your entity field)
//    List<BookingEntity> findByCustomerId(String customerId);
//
//    // Find bookings by user ID (if you still need this for other methods)
//    List<BookingEntity> findByUserId(String userId);
//
//    // Find bookings by user email
//    List<BookingEntity> findByUserEmail(String userEmail);
//
//    // Find bookings by status
//    List<BookingEntity> findByStatus(BookingEntity.BookingStatus status);
//
//    // Find bookings by payment status
//    List<BookingEntity> findByPaymentStatus(BookingEntity.PaymentStatus paymentStatus);
//
//    // Find bookings by customer and status
//    List<BookingEntity> findByCustomerIdAndStatus(String customerId, BookingEntity.BookingStatus status);
//
//    // Find bookings by user and status (alternative)
//    List<BookingEntity> findByUserIdAndStatus(String userId, BookingEntity.BookingStatus status);
//
//    // Find bookings created between dates
//    List<BookingEntity> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
//
//    // Find bookings by promo code
//    List<BookingEntity> findByPromoCode(String promoCode);
//
//    // Find active bookings (not cancelled or completed)
//    @Query("{'status': {'$nin': ['CANCELLED', 'COMPLETED']}}")
//    List<BookingEntity> findActiveBookings();
//
//    // Find bookings by pickup date range
//    List<BookingEntity> findByPickupDateTimeBetween(LocalDateTime startDate, LocalDateTime endDate);
//
//    // Count bookings by customer
//    long countByCustomerId(String customerId);
//
//    // Count bookings by user (alternative)
//    long countByUserId(String userId);
//
//    // Find recent bookings by customer (last 30 days)
//    @Query("{'customerId': ?0, 'createdAt': {'$gte': ?1}}")
//    List<BookingEntity> findRecentBookingsByCustomer(String customerId, LocalDateTime thirtyDaysAgo);
//
//    // Find recent bookings by user (last 30 days)
//    @Query("{'userId': ?0, 'createdAt': {'$gte': ?1}}")
//    List<BookingEntity> findRecentBookingsByUser(String userId, LocalDateTime thirtyDaysAgo);
//}

//package in.luckyseven.julanatoursapi.repository;
//
//import in.luckyseven.julanatoursapi.entity.BookingEntity;
//import org.springframework.data.mongodb.repository.MongoRepository;
//import org.springframework.data.mongodb.repository.Query;
//import org.springframework.stereotype.Repository;
//
//import java.time.LocalDateTime;
//import java.util.List;
//
//@Repository
//public interface BookingRepository extends MongoRepository<BookingEntity, String> {
//
//    // Use customerId instead of userId (matching your entity)
//    List<BookingEntity> findByCustomerId(String customerId);
//    List<BookingEntity> findByCustomerIdAndStatus(String customerId, BookingEntity.BookingStatus status);
//    long countByCustomerId(String customerId);
//
//    // Keep these as they match your entity fields
//    List<BookingEntity> findByUserEmail(String userEmail);
//    List<BookingEntity> findByStatus(BookingEntity.BookingStatus status);
//    List<BookingEntity> findByPaymentStatus(BookingEntity.PaymentStatus paymentStatus);
//    List<BookingEntity> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);
//    List<BookingEntity> findByPromoCode(String promoCode);
//
//    @Query("{'status': {'$nin': ['CANCELLED', 'COMPLETED']}}")
//    List<BookingEntity> findActiveBookings();
//
//    List<BookingEntity> findByPickupDateTimeBetween(LocalDateTime startDate, LocalDateTime endDate);
//
//    @Query("{'customerId': ?0, 'createdAt': {'$gte': ?1}}")
//    List<BookingEntity> findRecentBookingsByCustomer(String customerId, LocalDateTime thirtyDaysAgo);
//
//    // REMOVE OR COMMENT OUT THESE METHODS:
//    // List<BookingEntity> findByUserId(String userId);
//    // List<BookingEntity> findByUserIdAndStatus(String userId, BookingEntity.BookingStatus status);
//    // long countByUserId(String userId);
//    // List<BookingEntity> findRecentBookingsByUser(String userId, LocalDateTime thirtyDaysAgo);
//}

//}

package in.luckyseven.julanatoursapi.repository;

import in.luckyseven.julanatoursapi.entity.BookingEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface BookingRepository extends MongoRepository<BookingEntity, String> {

    // Find bookings by user ID
    List<BookingEntity> findByUserId(String userId);

    // Find bookings by user ID and status
    List<BookingEntity> findByUserIdAndStatus(String userId, BookingEntity.BookingStatus status);

    // Find bookings by status
    List<BookingEntity> findByStatus(BookingEntity.BookingStatus status);

    // Find bookings by payment status
    List<BookingEntity> findByPaymentStatus(BookingEntity.PaymentStatus paymentStatus);

    // Find booking by booking number (IMPORTANT - this method is required)
    Optional<BookingEntity> findByBookingNumber(String bookingNumber);

    // Find bookings by user email
    List<BookingEntity> findByUserEmail(String userEmail);

    // Find bookings created between dates
    List<BookingEntity> findByCreatedAtBetween(LocalDateTime startDate, LocalDateTime endDate);

    // Find bookings by pickup date range
    List<BookingEntity> findByPickupDateTimeBetween(LocalDateTime startDate, LocalDateTime endDate);

    // Count bookings by status
    long countByStatus(BookingEntity.BookingStatus status);

    // Count bookings by user ID
    long countByUserId(String userId);

    // Find recent bookings (last N records)
    List<BookingEntity> findTop10ByOrderByCreatedAtDesc();

    // Find active bookings (not cancelled or completed)
    @Query("{'status': {'$nin': ['CANCELLED', 'COMPLETED']}}")
    List<BookingEntity> findActiveBookings();
}