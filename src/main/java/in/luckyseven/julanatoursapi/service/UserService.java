package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.UserRequest;
import in.luckyseven.julanatoursapi.io.UserResponse;

public interface UserService {

     UserResponse registerUser(UserRequest request);
     String findByUserId();
}
