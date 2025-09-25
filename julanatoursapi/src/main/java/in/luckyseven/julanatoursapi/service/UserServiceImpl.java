//package in.luckyseven.julanatoursapi.service;
//
//
//import in.luckyseven.julanatoursapi.entity.UserEntity;
//import in.luckyseven.julanatoursapi.io.UserRequest;
//import in.luckyseven.julanatoursapi.io.UserResponse;
//import in.luckyseven.julanatoursapi.repository.UserRepository;
//import lombok.AllArgsConstructor;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//@Service
//@AllArgsConstructor
//public class UserServiceImpl {
//
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    private UserEntity convertToEntity(UserRequest request){
//        return  UserEntity.builder()
//                .email(request.getEmail())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .name(request.getName())
//                .build();
//    }
//    private UserResponse convertToResponse(UserEntity registeredUser){
//        return UserResponse.builder()
//                .id(registeredUser.getId())
//                .name(registeredUser.getName())
//                .email(registeredUser.getEmail())
//                .build();
//    }
//}

package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.entity.UserEntity;
import in.luckyseven.julanatoursapi.io.UserRequest;
import in.luckyseven.julanatoursapi.io.UserResponse;
import in.luckyseven.julanatoursapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class UserServiceImpl implements UserServiceInterface {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserResponse registerUser(UserRequest request) {
        log.info("Registering user with email: {}", request.getEmail());

        // Check if user already exists
        if (userRepository.existsByEmail(request.getEmail().toLowerCase().trim())) {
            throw new RuntimeException("User with this email already exists");
        }

        // Create new user entity using helper method
        UserEntity user = convertToEntity(request);

        // Save user
        UserEntity savedUser = userRepository.save(user);
        log.info("User registered successfully with ID: {}", savedUser.getId());

        // Return response using helper method
        UserResponse response = convertToResponse(savedUser);
        response.setMessage("User registered successfully");
        return response;
    }

    @Override
    public UserResponse getUserByEmail(String email) {
        log.debug("Getting user by email: {}", email);

        Optional<UserEntity> userOptional = userRepository.findByEmail(email.toLowerCase().trim());

        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found with email: " + email);
        }

        UserEntity user = userOptional.get();
        return convertToResponse(user);
    }

    @Override
    public UserResponse getUserById(String id) {
        log.debug("Getting user by ID: {}", id);

        Optional<UserEntity> userOptional = userRepository.findById(id);

        if (userOptional.isEmpty()) {
            throw new RuntimeException("User not found with ID: " + id);
        }

        UserEntity user = userOptional.get();
        return convertToResponse(user);
    }

    @Override
    public void deleteUser(String email) {
        log.info("Deleting user with email: {}", email);

        if (!userRepository.existsByEmail(email.toLowerCase().trim())) {
            throw new RuntimeException("User not found with email: " + email);
        }

        userRepository.deleteByEmail(email.toLowerCase().trim());
        log.info("User deleted successfully: {}", email);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email.toLowerCase().trim());
    }

    // Helper method to convert request to entity
    private UserEntity convertToEntity(UserRequest request) {
        return UserEntity.builder()
                .name(request.getName().trim())
                .email(request.getEmail().toLowerCase().trim())
                .password(passwordEncoder.encode(request.getPassword()))
                .enabled(true)
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();
    }

    // Helper method to convert entity to response
    private UserResponse convertToResponse(UserEntity user) {
        return UserResponse.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .createdAt(user.getCreatedAt())
                .build();
    }
}

//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.UserEntity;
//import in.luckyseven.julanatoursapi.io.UserRequest;
//import in.luckyseven.julanatoursapi.io.UserResponse;
//import in.luckyseven.julanatoursapi.repository.UserRepository;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDateTime;
//import java.util.Optional;
//
//@Service
//@AllArgsConstructor
//@Slf4j
//public class UserServiceImpl implements UserService {
//
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    @Override
//    public UserResponse registerUser(UserRequest request) {
//        log.info("Registering user with email: {}", request.getEmail());
//
//        // Check if user already exists
//        if (userRepository.existsByEmail(request.getEmail().toLowerCase().trim())) {
//            throw new RuntimeException("User with this email already exists");
//        }
//
//        // Create new user entity
//        UserEntity user = convertToEntity(request);
//
//        // Save user
//        UserEntity savedUser = userRepository.save(user);
//        log.info("User registered successfully with ID: {}", savedUser.getId());
//
//        // Return response
//        UserResponse response = convertToResponse(savedUser);
//        response.setMessage("User registered successfully");
//        return response;
//    }
//
//    @Override
//    public UserResponse getUserByEmail(String email) {
//        log.debug("Getting user by email: {}", email);
//
//        Optional<UserEntity> userOptional = userRepository.findByEmail(email.toLowerCase().trim());
//
//        if (userOptional.isEmpty()) {
//            throw new RuntimeException("User not found with email: " + email);
//        }
//
//        UserEntity user = userOptional.get();
//        return convertToResponse(user);
//    }
//
//    @Override
//    public UserResponse getUserById(String id) {
//        log.debug("Getting user by ID: {}", id);
//
//        Optional<UserEntity> userOptional = userRepository.findById(id);
//
//        if (userOptional.isEmpty()) {
//            throw new RuntimeException("User not found with ID: " + id);
//        }
//
//        UserEntity user = userOptional.get();
//        return convertToResponse(user);
//    }
//
//    @Override
//    public void deleteUser(String email) {
//        log.info("Deleting user with email: {}", email);
//
//        if (!userRepository.existsByEmail(email.toLowerCase().trim())) {
//            throw new RuntimeException("User not found with email: " + email);
//        }
//
//        userRepository.deleteByEmail(email.toLowerCase().trim());
//        log.info("User deleted successfully: {}", email);
//    }
//
//    @Override
//    public boolean existsByEmail(String email) {
//        return userRepository.existsByEmail(email.toLowerCase().trim());
//    }
//
//    // Helper methods
//    private UserEntity convertToEntity(UserRequest request) {
//        return UserEntity.builder()
//                .name(request.getName().trim())
//                .email(request.getEmail().toLowerCase().trim())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .enabled(true)
//                .accountNonExpired(true)
//                .accountNonLocked(true)
//                .credentialsNonExpired(true)
//                .createdAt(LocalDateTime.now())
//                .updatedAt(LocalDateTime.now())
//                .build();
//    }
//
//    private UserResponse convertToResponse(UserEntity user) {
//        return UserResponse.builder()
//                .id(user.getId())
//                .name(user.getName())
//                .email(user.getEmail())
//                .createdAt(user.getCreatedAt())
//                .build();
//    }
//}
