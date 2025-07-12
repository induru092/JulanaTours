package in.luckyseven.julanatoursapi.io;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Builder
@Data
public class OrderRequest {
    private List<OrderItem> orderedItems;
    private String UserAddress;
    private double amount;
    private String email;
    private String phoneNumber;
    private String orderStatus;

}
