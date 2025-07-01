package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.OrderRequest;
import in.luckyseven.julanatoursapi.io.OrderResponse;

public class interface OrderService {
    OrderResponse createOrderWithPayment(OrderRequest request);
}
