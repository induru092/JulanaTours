////package in.luckyseven.julanatoursapi.service;
////
////import in.luckyseven.julanatoursapi.entity.UserEntity;
////import in.luckyseven.julanatoursapi.repository.UserRepository;
////import lombok.AllArgsConstructor;
////import org.springframework.security.core.userdetails.User;
////import org.springframework.security.core.userdetails.UserDetails;
////import org.springframework.security.core.userdetails.UserDetailsService;
////import org.springframework.security.core.userdetails.UsernameNotFoundException;
////import org.springframework.stereotype.Service;
////
////import java.util.Collections;
////
////@Service
////@AllArgsConstructor
////public class AppUserDetailsService implements UserDetailsService {
////
////    private final UserRepository userRepository;
////
////    @Override
////    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
////        UserEntity user = userRepository.findByEmail(email)
////                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
////        return new User(user.getEmail(), user.getPassword(), Collections.emptyList());
////
////
////    }
////
////
////}
//
////package in.luckyseven.julanatoursapi.service;
////
////import in.luckyseven.julanatoursapi.repository.UserRepository;
////import lombok.extern.slf4j.Slf4j;
////import org.springframework.beans.factory.annotation.Autowired;
////import org.springframework.security.core.userdetails.User;
////import org.springframework.security.core.userdetails.UserDetails;
////import org.springframework.security.core.userdetails.UserDetailsService;
////import org.springframework.security.core.userdetails.UsernameNotFoundException;
////import org.springframework.stereotype.Service;
////
////import java.util.ArrayList;
////
////@Service
////@Slf4j
////public class AppUserDetailsService implements UserDetailsService {
////
////    @Autowired
////    private UserRepository userRepository; // Your user repository
////
////    @Override
////    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
////        log.debug("Loading user details for email: {}", email);
////
////        // Trim and validate email
////        String trimmedEmail = email.trim().toLowerCase();
////
////        if (trimmedEmail.isEmpty()) {
////            throw new UsernameNotFoundException("Email cannot be empty");
////        }
////
////        // Find user by email in your database
////        // Replace this with your actual user entity and repository
////        Optional<YourUserEntity> userOptional = userRepository.findByEmail(trimmedEmail);
////
////        if (userOptional.isEmpty()) {
////            log.warn("User not found with email: {}", trimmedEmail);
////            throw new UsernameNotFoundException("User not found with email: " + trimmedEmail);
////        }
////
////        YourUserEntity user = userOptional.get();
////
////        // Check if user account is active
////        if (!user.isEnabled()) {
////            log.warn("User account is disabled: {}", trimmedEmail);
////            throw new UsernameNotFoundException("User account is disabled");
////        }
////
////        log.debug("Successfully loaded user: {}", trimmedEmail);
////
////        // Create UserDetails object
////        return User.builder()
////                .username(user.getEmail()) // Use email as username
////                .password(user.getPassword()) // Encoded password from DB
////                .authorities(user.getRoles() != null ? user.getRoles() : new ArrayList<>()) // User roles/authorities
////                .accountExpired(!user.isAccountNonExpired())
////                .accountLocked(!user.isAccountNonLocked())
////                .credentialsExpired(!user.isCredentialsNonExpired())
////                .disabled(!user.isEnabled())
////                .build();
////    }
////}
//
//// Example User Entity (adjust according to your actual entity)
///*
//@Entity
//@Table(name = "users")
//@Data
//public class YourUserEntity {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;
//
//    @Column(unique = true, nullable = false)
//    private String email;
//
//    @Column(nullable = false)
//    private String password;
//
//    private boolean enabled = true;
//    private boolean accountNonExpired = true;
//    private boolean accountNonLocked = true;
//    private boolean credentialsNonExpired = true;
//
//    @ElementCollection(fetch = FetchType.EAGER)
//    @Enumerated(EnumType.STRING)
//    private List<Role> roles = new ArrayList<>();
//}
//
//@Repository
//public interface UserRepository extends JpaRepository<YourUserEntity, Long> {
//    Optional<YourUserEntity> findByEmail(String email);
//    boolean existsByEmail(String email);
//}
//*/
//
//
//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.entity.UserEntity;
//import in.luckyseven.julanatoursapi.repository.UserRepository;
//import lombok.AllArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.Optional;
//
//@Service
//@AllArgsConstructor
//@Slf4j
//public class AppUserDetailsService implements UserDetailsService {
//
//    private final UserRepository userRepository;
//
//    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        log.debug("Loading user details for email: {}", email);
//
//        // Trim and validate email
//        String trimmedEmail = email.trim().toLowerCase();
//
//        if (trimmedEmail.isEmpty()) {
//            throw new UsernameNotFoundException("Email cannot be empty");
//        }
//
//        // Find user by email in MongoDB
//        Optional<UserEntity> userOptional = userRepository.findByEmail(trimmedEmail);
//
//        if (userOptional.isEmpty()) {
//            log.warn("User not found with email: {}", trimmedEmail);
//            throw new UsernameNotFoundException("User not found with email: " + trimmedEmail);
//        }
//
//        UserEntity user = userOptional.get();
//
//        // Check if user account is active
//        if (!user.isEnabled()) {
//            log.warn("User account is disabled: {}", trimmedEmail);
//            throw new UsernameNotFoundException("User account is disabled");
//        }
//
//        log.debug("Successfully loaded user: {}", trimmedEmail);
//
//        // Create UserDetails object (using empty authorities for now)
//        return User.builder()
//                .username(user.getEmail()) // Use email as username
//                .password(user.getPassword()) // Encoded password from DB
//                .authorities(new ArrayList<>()) // Empty authorities - add roles if needed
//                .accountExpired(!user.isAccountNonExpired())
//                .accountLocked(!user.isAccountNonLocked())
//                .credentialsExpired(!user.isCredentialsNonExpired())
//                .disabled(!user.isEnabled())
//                .build();
//    }
//}

package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.entity.UserEntity;
import in.luckyseven.julanatoursapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;

@Service
@AllArgsConstructor
@Slf4j
public class AppUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        log.debug("Loading user by email: {}", email);

        UserEntity user = userRepository.findByEmail(email.trim().toLowerCase())
                .orElseThrow(() -> {
                    log.warn("User not found with email: {}", email);
                    return new UsernameNotFoundException("User not found with email: " + email);
                });

        log.debug("User found: {}, enabled: {}", user.getEmail(), user.isEnabled());

        return new User(
                user.getEmail(),
                user.getPassword(),
                user.isEnabled(),
                user.isAccountNonExpired(),
                user.isCredentialsNonExpired(),
                user.isAccountNonLocked(),
                getAuthorities(user)
        );
    }

    private Collection<? extends GrantedAuthority> getAuthorities(UserEntity user) {
        // For now, giving all users a basic USER role
        // You can enhance this later with proper role management
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
    }
}
