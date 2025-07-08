package in.luckyseven.julanatoursapi.io;

import lombok.Getter;
import lombok.AllArgsConstructor;

@Getter
@AllArgsConstructor

public class AuthenticationResponse {
    private String username;
    private String password;
    private String token;

}
