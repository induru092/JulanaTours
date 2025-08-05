package in.luckyseven.julanatoursapi.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashMap;
import java.util.Map;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class CartRequest {

    private String userId;
    private Map<String, Integer> items = new HashMap<>();


}
