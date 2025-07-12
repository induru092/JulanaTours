package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.OrderRequest;
import in.luckyseven.julanatoursapi.io.OrderResponse;

import java.util.List;
import java.util.Map;

public class  interface OrderService{
    OrderResponse createOrderWithPayment(OrderRequest request) throws RazorpayException;

    void verifyPayment(Map<String, String> paymentData, String status);

    List<OrderResponse> getUserOrders();

    void removeOrder(String orderId);

    List<OrderResponse> getOrdersOfAllUsers();

    List<OrderResponse> getOrdersOfAllUsers();

    void updateOrderStatus(String orderId, String status0);
}
