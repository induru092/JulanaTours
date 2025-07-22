package in.luckyseven.julanatoursapi.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document(collection = "carts")
public class CartEntity {
    @Id

    private String id;
    private String userId;
    private Map<String,Integer> items = new HashMap<>();

    public CartEntity(CartEntity cartEntity) {
        this.userId = userId;
        this.items = items;






    }

}
