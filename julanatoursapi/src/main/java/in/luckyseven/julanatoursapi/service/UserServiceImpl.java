package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.entity.UserEntity;
import in.luckyseven.julanatoursapi.io.UserRequest;
import in.luckyseven.julanatoursapi.io.UserResponse;
import in.luckyseven.julanatoursapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository userRepository;
    @Override
    public UserResponse registerUser(UserRequest request){
        UserEntity newUser =convertToEntity(request);
        newUser = userRepository.save(newUser);
        return convertToResponse(newUser);

    }
    private UserEntity convertToEntity(UserRequest request){
        return UserEntity.builder()
                .password(request.getPassword())
                .username(request.getUsername())
                .build();
    }
    private UserResponse convertToResponse(UserEntity registeredUser){
        return UserResponse.builder()
                .id(registeredUser.getId())
                .username(registeredUser.getUsername())
                .password(registeredUser.getPassword())
                .build();
    }
}
