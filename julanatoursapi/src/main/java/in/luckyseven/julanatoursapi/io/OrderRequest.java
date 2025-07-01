package in.luckyseven.julanatoursapi.io;

import lombok.Builder;
import lombok.Data;

import java.awt.*;

@Builder
@Data
public class OrderRequest {
    private String UserId;
    private List<OrderItem> orderedItems;
    private String UserAddress;
    private double amount;
}
