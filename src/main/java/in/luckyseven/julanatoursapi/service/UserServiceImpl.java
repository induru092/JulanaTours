package in.luckyseven.julanatoursapi.service;


import in.luckyseven.julanatoursapi.entity.UserEntity;
import in.luckyseven.julanatoursapi.io.UserRequest;
import in.luckyseven.julanatoursapi.io.UserResponse;
import in.luckyseven.julanatoursapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public abstract class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse registerUser(UserRequest request){
      UserEntity newUser =  convertToEntity(request);
       newUser = userRepository.save(newUser);
        return convertToResponse(newUser);
    }
    private UserEntity convertToEntity(UserRequest request){
       return  UserEntity.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .build();
    }
    private UserResponse convertToResponse(UserEntity registeredUser){
        return UserResponse.builder()
                .id(registeredUser.getId())
                .name(registeredUser.getName())
                .email(registeredUser.getEmail())
                .build();
    }
}
