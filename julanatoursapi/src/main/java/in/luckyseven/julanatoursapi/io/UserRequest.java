package in.luckyseven.julanatoursapi.io;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class UserRequest {
    private String name;
    private String username;
    private String password;

}
