package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.entity.OrderEntity;
import in.luckyseven.julanatoursapi.io.OrderRequest;
import in.luckyseven.julanatoursapi.io.OrderResponse;
import in.luckyseven.julanatoursapi.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OrderServiceimpl implements OrderService{

    private final OrderRepository orderRepository;

    @Value("${razorpay_key}")
    private String RAZORPAY_KEY;
    @Value("${razorpay_secret}")
    private String RazorPay_SECRET;

    @Override
    public OrderResponse createOrderWithPayment(OrderRequest request) {
        OrderEntity newOrder = convertToEntity(request);
        newOrder = orderRepository.save(newOrder);


    }

    private OrderEntity convertToEntity(OrderRequest request) {
        return OrderEntity.builder()
                .userId(request.getUserId())
                .userAddress(request.getUserAddress())
                .amount(request.getAmount())
                .orderedItems(request.getOrderedItems())
                .build();



    }
}
