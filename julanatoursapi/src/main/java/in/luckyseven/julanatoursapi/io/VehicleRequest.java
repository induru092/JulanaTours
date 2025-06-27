package in.luckyseven.julanatoursapi.io;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VehicleRequest {

    private String id;
    private String name;
    private String description;
    private String imageUrl;
    private double price;
    private String category;

}