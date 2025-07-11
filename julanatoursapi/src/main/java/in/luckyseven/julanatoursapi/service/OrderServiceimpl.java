package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.entity.OrderEntity;
import in.luckyseven.julanatoursapi.io.OrderRequest;
import in.luckyseven.julanatoursapi.io.OrderResponse;
import in.luckyseven.julanatoursapi.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class OrderServiceimpl implements OrderService{

    @Autowired
    private  OrderRepository orderRepository;
    @Autowired
    private  UserService userService;
    @Autowired
    private CartRespository cartRespository;

    @Value("${razorpay_key}")
    private String RAZORPAY_KEY;
    @Value("${razorpay_secret}")
    private String RazorPay_SECRET;

    @Override
    public OrderResponse createOrderWithPayment(OrderRequest request) {
        OrderEntity newOrder = convertToEntity(request);
        newOrder = orderRepository.save(newOrder);

        RazorpayClient razorpayClient = new RazorpayClient(RAZORPAY_KEY, RazorPay_SECRET);
        JsonObject orderRequest = new JsonObject();
        orderRequest.put("amount",newOrder.getAmount());
        orderRequest.put("currency","INR");
        orderRequest.put("payment_capture",1);

        Order razorpayOrder =razorpayClient.orders.create(orderRequest);
        newOrder.setRazorpayOrderID(razorpayOrder.get("id"));
        String loggedInUSerId = userService.findByUserId();
        newOrder.setUserId(loggedInUSerId);
       newOrder= orderRepository.save(newOrder);
        return convertToResponse(newOrder);


    }

    @Override
    public void verifyPayment(Map<String, String>) paymentData, String status) {
        String razorpayOrderId = paymentData.get("razorpay_order_id");
        OrderEntity existingOrder = orderRepository.findByRazorpayOrderid(razorpayOrderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        existingOrder.setPaymentStatus(status);
        existingOrder.setRazorpaySignature(paymentData.get("razorpay_signature"));
        existingOrder.setRazorpayPaymentId(paymentData.get("razorpay_payment_id"));
        orderRepository.save(existingOrder);
        if("paid".equalsIgnoreCase(status)){
            cartRespository.deleteByUserId(existingOrder.getUserId());
        }
    }

    @Override
    public List<OrderResponse> getUserOrders(){
    String loggedInUserId = userService.findByUserId();
    List<OrderEntity> list=orderRepository.findByUserId(userId);
    return list.stream().map(entity -> convertToResponse(entity)).collect(collectors.toList());
}

    @Override
    public void removeOrder(String orderId) {
        orderRepository.deleteById(orderId);

    }

    @Override
    public List<OrderResponse> getOrdersOfAllUsers() {
        List<OrderEntity> list = orderRepository.findAll();
        return list.stream().map(entity ->convertToResponse(entity)).collect(collectors.toList);
    }

    @Override
    public void updateOrderStatus(String orderId, String status0) {
        OrderEntity entity = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        entity.setOrderStatus(status);
        orderRepository.save(entity);
    }


    private OrderResponse convertToResponse(OrderEntity newOrder) {
       return OrderResponse.builder()
                .id(newOrder.getId())
                .amount(newOrder.getAmount())
                .userAddress(newOrder.getUserAddress())
                .userId(newOrder.getUserId())
                .razorpayOrderId(newOrder.getRazorpayOrderId())
                .paymentStatus(newOrder.getPaymentStatus())
                .orderStatus(newOrder.getOrderStatus())
                .email(newOrder.getEmail())
                .phoneNumber(newOrder.getPhoneNumber())
                .orderedItems(newOrder.getOrderedItems())
                .build();
    }

    private OrderEntity convertToEntity(OrderRequest request) {
        return OrderEntity.builder()
                .userAddress(request.getUserAddress())
                .amount(request.getAmount())
                .orderedItems(request.getOrderedItems())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .orderStatus(request.getOrderStatus())
                .build();



    }
}
