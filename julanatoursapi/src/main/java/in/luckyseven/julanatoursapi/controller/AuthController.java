//package in.luckyseven.julanatoursapi.controller;
//
//import in.luckyseven.julanatoursapi.entity.UserEntity;
//import in.luckyseven.julanatoursapi.io.AuthenticationRequest;
//import in.luckyseven.julanatoursapi.io.UserRegistrationRequest;
//import in.luckyseven.julanatoursapi.service.AppUserDetailsService;
//import in.luckyseven.julanatoursapi.service.UserService;
//import in.luckyseven.julanatoursapi.util.JwtUtil;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.web.bind.annotation.*;
//
//import jakarta.validation.Valid;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api")
//@AllArgsConstructor
//@Slf4j
//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
//public class AuthController {
//
//    private final AuthenticationManager authenticationManager;
//    private final AppUserDetailsService userDetailsService;
//    private final JwtUtil jwtUtil;
//    private final UserService userService;
//
//    @PostMapping("/register")
//    public ResponseEntity<?> register(@Valid @RequestBody UserRegistrationRequest request) {
//        try {
//            log.info("Registration attempt for email: {}", request.getEmail());
//
//            // Validate input
//            if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("error", "Email is required"));
//            }
//
//            if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("error", "Password is required"));
//            }
//
//            if (request.getName() == null || request.getName().trim().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("error", "Name is required"));
//            }
//
//            // Check if user already exists
//            if (userService.existsByEmail(request.getEmail().trim())) {
//                return ResponseEntity.status(HttpStatus.CONFLICT)
//                        .body(Map.of("error", "User with this email already exists"));
//            }
//
//            // Register user
//            UserEntity user = userService.registerUser(request);
//
//            log.info("Registration successful for email: {}", request.getEmail());
//
//            return ResponseEntity.status(HttpStatus.CREATED)
//                    .body(Map.of(
//                            "message", "User registered successfully",
//                            "user", Map.of(
//                                    "id", user.getId(),
//                                    "name", user.getName(),
//                                    "email", user.getEmail()
//                            )
//                    ));
//
//        } catch (IllegalArgumentException e) {
//            log.warn("Registration validation error: {}", e.getMessage());
//            return ResponseEntity.badRequest()
//                    .body(Map.of("error", e.getMessage()));
//
//        } catch (Exception e) {
//            log.error("Registration error for email: {}", request.getEmail(), e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("error", "Registration failed. Please try again."));
//        }
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> login(@Valid @RequestBody AuthenticationRequest request) {
//        try {
//            log.info("Login attempt for email: {}", request.getEmail());
//
//            // Validate input
//            if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("error", "Email is required"));
//            }
//
//            if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("error", "Password is required"));
//            }
//
//            // Authenticate user
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            request.getEmail().trim().toLowerCase(),
//                            request.getPassword()
//                    )
//            );
//
//            // Load user details
//            final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail().trim());
//
//            // Get user entity for additional info
//            UserEntity user = userService.findByEmail(request.getEmail().trim())
//                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//
//            // Generate JWT token
//            final String jwtToken = jwtUtil.generateToken(userDetails);
//
//            log.info("Login successful for email: {}", request.getEmail());
//
//            // Return comprehensive user data
//            return ResponseEntity.ok(Map.of(
//                    "message", "Login successful",
//                    "token", jwtToken,
//                    "user", Map.of(
//                            "id", user.getId(),
//                            "name", user.getName(),
//                            "email", user.getEmail()
//                    )
//            ));
//
//        } catch (BadCredentialsException e) {
//            log.warn("Invalid credentials for email: {}", request.getEmail());
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                    .body(Map.of("error", "Invalid email or password"));
//
//        } catch (UsernameNotFoundException e) {
//            log.warn("User not found for email: {}", request.getEmail());
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                    .body(Map.of("error", "Invalid email or password"));
//
//        } catch (Exception e) {
//            log.error("Login error for email: {}", request.getEmail(), e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("error", "Authentication failed. Please try again."));
//        }
//    }
//
//    @PostMapping("/logout")
//    public ResponseEntity<?> logout() {
//        log.info("Logout requested");
//        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
//    }
//
//    @GetMapping("/me")
//    public ResponseEntity<?> getCurrentUser() {
//        try {
//            org.springframework.security.core.Authentication authentication =
//                    org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();
//
//            if (authentication != null && authentication.isAuthenticated()) {
//                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
//                UserEntity user = userService.findByEmail(userDetails.getUsername())
//                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
//
//                return ResponseEntity.ok(Map.of(
//                        "user", Map.of(
//                                "id", user.getId(),
//                                "name", user.getName(),
//                                "email", user.getEmail()
//                        )
//                ));
//            }
//
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
//                    .body(Map.of("error", "Not authenticated"));
//
//        } catch (Exception e) {
//            log.error("Error getting current user", e);
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//                    .body(Map.of("error", "Failed to get user information"));
//        }
//    }
//}

package in.luckyseven.julanatoursapi.controller;

import in.luckyseven.julanatoursapi.entity.UserEntity;
import in.luckyseven.julanatoursapi.io.AuthenticationRequest;
import in.luckyseven.julanatoursapi.io.UserRegistrationRequest;
import in.luckyseven.julanatoursapi.service.AppUserDetailsService;
import in.luckyseven.julanatoursapi.service.UserService;
import in.luckyseven.julanatoursapi.util.JwtUtil;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.Map;

@RestController
@RequestMapping("/api")
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final AppUserDetailsService userDetailsService;
    private final JwtUtil jwtUtil;
    private final UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody UserRegistrationRequest request) {
        try {
            log.info("Registration attempt for email: {}", request.getEmail());

            // Validate input
            if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Email is required"));
            }

            if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Password is required"));
            }

            // Validate name field
            if (request.getName() == null || request.getName().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Name is required"));
            }

            // Check if user already exists
            if (userService.existsByEmail(request.getEmail().trim())) {
                return ResponseEntity.status(HttpStatus.CONFLICT)
                        .body(Map.of("error", "User with this email already exists"));
            }

            // Register user
            UserEntity user = userService.registerUser(request);

            log.info("Registration successful for email: {}", request.getEmail());

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(Map.of(
                            "message", "User registered successfully",
                            "user", Map.of(
                                    "id", user.getId(),
                                    "name", user.getName(),
                                    "email", user.getEmail()
                            )
                    ));

        } catch (IllegalArgumentException e) {
            log.warn("Registration validation error: {}", e.getMessage());
            return ResponseEntity.badRequest()
                    .body(Map.of("error", e.getMessage()));

        } catch (Exception e) {
            log.error("Registration error for email: {}", request.getEmail(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Registration failed. Please try again."));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AuthenticationRequest request) {
        try {
            log.info("Login attempt for email: {}", request.getEmail());

            // Validate input
            if (request.getEmail() == null || request.getEmail().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Email is required"));
            }

            if (request.getPassword() == null || request.getPassword().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("error", "Password is required"));
            }

            // Authenticate user
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail().trim().toLowerCase(),
                            request.getPassword()
                    )
            );

            // Load user details
            final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail().trim());

            // Get user entity for additional info
            UserEntity user = userService.findByEmail(request.getEmail().trim())
                    .orElseThrow(() -> new UsernameNotFoundException("User not found"));

            // Generate JWT token
            final String jwtToken = jwtUtil.generateToken(userDetails);

            log.info("Login successful for email: {}", request.getEmail());

            // Return comprehensive user data
            return ResponseEntity.ok(Map.of(
                    "message", "Login successful",
                    "token", jwtToken,
                    "user", Map.of(
                            "id", user.getId(),
                            "name", user.getName(),
                            "email", user.getEmail()
                    )
            ));

        } catch (BadCredentialsException e) {
            log.warn("Invalid credentials for email: {}", request.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid email or password"));

        } catch (UsernameNotFoundException e) {
            log.warn("User not found for email: {}", request.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid email or password"));

        } catch (Exception e) {
            log.error("Login error for email: {}", request.getEmail(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Authentication failed. Please try again."));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout() {
        log.info("Logout requested");
        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser() {
        try {
            org.springframework.security.core.Authentication authentication =
                    org.springframework.security.core.context.SecurityContextHolder.getContext().getAuthentication();

            if (authentication != null && authentication.isAuthenticated()) {
                UserDetails userDetails = (UserDetails) authentication.getPrincipal();
                UserEntity user = userService.findByEmail(userDetails.getUsername())
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));

                return ResponseEntity.ok(Map.of(
                        "user", Map.of(
                                "id", user.getId(),
                                "name", user.getName(),
                                "email", user.getEmail()
                        )
                ));
            }

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Not authenticated"));

        } catch (Exception e) {
            log.error("Error getting current user", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "Failed to get user information"));
        }
    }
}