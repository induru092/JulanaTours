//////package in.luckyseven.julanatoursapi.service;
//////
//////import in.luckyseven.julanatoursapi.io.UserRequest;
//////import in.luckyseven.julanatoursapi.io.UserResponse;
//////
//////
//////public interface UserService {
//////
//////    UserResponse registerUser(UserRequest request);
//////}
////
////
////package in.luckyseven.julanatoursapi.service;
////
////import in.luckyseven.julanatoursapi.entity.UserEntity;
////import in.luckyseven.julanatoursapi.io.UserRequest;
////import in.luckyseven.julanatoursapi.io.UserResponse;
////import in.luckyseven.julanatoursapi.repository.UserRepository;
////import lombok.AllArgsConstructor;
////import lombok.extern.slf4j.Slf4j;
////import org.springframework.security.crypto.password.PasswordEncoder;
////import org.springframework.stereotype.Service;
////
////import java.time.LocalDateTime;
////import java.util.Optional;
////
////@Service
////@AllArgsConstructor
////@Slf4j
////public class UserService {
////
////    private final UserRepository userRepository;
////    private final PasswordEncoder passwordEncoder;
////
////    public UserResponse registerUser(UserRequest request) {
////        log.info("Registering user with email: {}", request.getEmail());
////
////        // Check if user already exists
////        if (userRepository.existsByEmail(request.getEmail().toLowerCase().trim())) {
////            throw new RuntimeException("User with this email already exists");
////        }
////
////        // Create new user entity
////        UserEntity user = UserEntity.builder()
////                .name(request.getName().trim())
////                .email(request.getEmail().toLowerCase().trim())
////                .password(passwordEncoder.encode(request.getPassword()))
////                .enabled(true)
////                .accountNonExpired(true)
////                .accountNonLocked(true)
////                .credentialsNonExpired(true)
////                .createdAt(LocalDateTime.now())
////                .updatedAt(LocalDateTime.now())
////                .build();
////
////        // Save user
////        UserEntity savedUser = userRepository.save(user);
////        log.info("User registered successfully with ID: {}", savedUser.getId());
////
////        // Return response
////        return UserResponse.builder()
////                .id(savedUser.getId())
////                .name(savedUser.getName())
////                .email(savedUser.getEmail())
////                .createdAt(savedUser.getCreatedAt())
////                .message("User registered successfully")
////                .build();
////    }
////
////    public UserResponse getUserByEmail(String email) {
////        log.debug("Getting user by email: {}", email);
////
////        Optional<UserEntity> userOptional = userRepository.findByEmail(email.toLowerCase().trim());
////
////        if (userOptional.isEmpty()) {
////            throw new RuntimeException("User not found with email: " + email);
////        }
////
////        UserEntity user = userOptional.get();
////
////        return UserResponse.builder()
////                .id(user.getId())
////                .name(user.getName())
////                .email(user.getEmail())
////                .createdAt(user.getCreatedAt())
////                .build();
////    }
////
////    public UserResponse getUserById(String id) {
////        log.debug("Getting user by ID: {}", id);
////
////        Optional<UserEntity> userOptional = userRepository.findById(id);
////
////        if (userOptional.isEmpty()) {
////            throw new RuntimeException("User not found with ID: " + id);
////        }
////
////        UserEntity user = userOptional.get();
////
////        return UserResponse.builder()
////                .id(user.getId())
////                .name(user.getName())
////                .email(user.getEmail())
////                .createdAt(user.getCreatedAt())
////                .build();
////    }
////
////    public void deleteUser(String email) {
////        log.info("Deleting user with email: {}", email);
////
////        if (!userRepository.existsByEmail(email.toLowerCase().trim())) {
////            throw new RuntimeException("User not found with email: " + email);
////        }
////
////        userRepository.deleteByEmail(email.toLowerCase().trim());
////        log.info("User deleted successfully: {}", email);
////    }
////
////    public boolean existsByEmail(String email) {
////        return userRepository.existsByEmail(email.toLowerCase().trim());
////    }
////}
////
//
//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.UserEntity;
//import in.luckyseven.julanatoursapi.io.UserRegistrationRequest;
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
//public class UserService {
//
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    public UserEntity registerUser(UserRegistrationRequest request) {
//        log.info("Registering user with email: {}", request.getEmail());
//
//        // Validate email doesn't exist
//        if (existsByEmail(request.getEmail())) {
//            throw new IllegalArgumentException("User with email " + request.getEmail() + " already exists");
//        }
//
//        // Create new user
//        UserEntity user = UserEntity.builder()
//                .name(request.getName().trim())
//                .email(request.getEmail().trim().toLowerCase())
//                .password(passwordEncoder.encode(request.getPassword()))
//                .enabled(true)
//                .accountNonExpired(true)
//                .accountNonLocked(true)
//                .credentialsNonExpired(true)
//                .createdAt(LocalDateTime.now())
//                .updatedAt(LocalDateTime.now())
//                .build();
//
//        // Save user
//        UserEntity savedUser = userRepository.save(user);
//        log.info("User registered successfully with ID: {}", savedUser.getId());
//
//        return savedUser;
//    }
//
//    public boolean existsByEmail(String email) {
//        return userRepository.existsByEmail(email.trim().toLowerCase());
//    }
//
//    public Optional<UserEntity> findByEmail(String email) {
//        return userRepository.findByEmail(email.trim().toLowerCase());
//    }
//
//    public UserEntity save(UserEntity user) {
//        return userRepository.save(user);
//    }
//}
package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.entity.UserEntity;
import in.luckyseven.julanatoursapi.io.UserRegistrationRequest;
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
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserEntity registerUser(UserRegistrationRequest request) {
        log.info("Registering user with email: {}", request.getEmail());

        // Validate email doesn't exist
        if (existsByEmail(request.getEmail())) {
            throw new IllegalArgumentException("User with email " + request.getEmail() + " already exists");
        }

        // Create new user
        UserEntity user = UserEntity.builder()
                .name(request.getName().trim())  // Use the name field directly
                .email(request.getEmail().trim().toLowerCase())
                .password(passwordEncoder.encode(request.getPassword()))
                .enabled(true)
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .createdAt(LocalDateTime.now())
                .updatedAt(LocalDateTime.now())
                .build();

        // Save user
        UserEntity savedUser = userRepository.save(user);
        log.info("User registered successfully with ID: {} and name: {}", savedUser.getId(), savedUser.getName());

        return savedUser;
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email.trim().toLowerCase());
    }

    public Optional<UserEntity> findByEmail(String email) {
        return userRepository.findByEmail(email.trim().toLowerCase());
    }

    public UserEntity save(UserEntity user) {
        return userRepository.save(user);
    }
}