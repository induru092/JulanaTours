package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.UserRequest;
import in.luckyseven.julanatoursapi.io.UserResponse;

public interface UserServiceInterface {

    UserResponse registerUser(UserRequest request);

    UserResponse getUserByEmail(String email);

    UserResponse getUserById(String id);

    void deleteUser(String email);

    boolean existsByEmail(String email);
}