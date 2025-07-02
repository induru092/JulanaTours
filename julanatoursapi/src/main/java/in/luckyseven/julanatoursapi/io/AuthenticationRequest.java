package in.luckyseven.julanatoursapi.io;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
@Data
@NoArgsConstructor
@AllArgsConstructor


public class  AuthenticationRequest {
    private String username;
    private String password;

}
