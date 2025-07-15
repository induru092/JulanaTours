package in.luckyseven.julanatoursapi.io;

import lombok.Builder;
import  lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class UserRequest {
    private String username;
    private String password;

}
