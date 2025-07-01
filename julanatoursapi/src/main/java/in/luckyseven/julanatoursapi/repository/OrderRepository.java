package in.luckyseven.julanatoursapi.repository;

import in.luckyseven.julanatoursapi.entity.OrderEntity;
import org.springframework.core.annotation.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface OrderRepository extends MongoRepository<OrderEntity, String> {
    List<OrderEntity> findByUserId(String userId);
    Optional<OrderEntity> findByRazorpayOrderid(String razorpayOrderId);


}
