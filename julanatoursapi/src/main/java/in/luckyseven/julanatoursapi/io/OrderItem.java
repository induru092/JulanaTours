package in.luckyseven.julanatoursapi.io;

import lombok.Builder;
import lombok.Data;

@Data
@Builder

public class OrderItem {
    private String vehcleId;
    private int quantity;
    private double price;
    private String category;
    private String imageUrl;
    private String description;
    private String name;


}
