package in.luckyseven.julanatoursapi.controller;

import in.luckyseven.julanatoursapi.io.UserRequest;
import in.luckyseven.julanatoursapi.io.UserResponse;
import in.luckyseven.julanatoursapi.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("api")
public class UserController {
    private final UserService userService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public UserResponse register(@RequestBody UserRequest request){
        return userService.registerUser(request);



    }


}
