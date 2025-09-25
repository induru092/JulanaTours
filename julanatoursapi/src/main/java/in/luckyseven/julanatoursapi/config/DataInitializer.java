package in.luckyseven.julanatoursapi.config;

import in.luckyseven.julanatoursapi.entity.UserEntity;
import in.luckyseven.julanatoursapi.repository.UserRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@AllArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        // Create a test user if none exists
        if (userRepository.count() == 0) {
            log.info("Creating test user...");

            UserEntity testUser = UserEntity.builder()
                    .name("Test User")
                    .email("test@example.com")
                    .password(passwordEncoder.encode("password123"))
                    .enabled(true)
                    .accountNonExpired(true)
                    .accountNonLocked(true)
                    .credentialsNonExpired(true)
                    .createdAt(LocalDateTime.now())
                    .updatedAt(LocalDateTime.now())
                    .build();

            userRepository.save(testUser);
            log.info("Test user created with email: test@example.com and password: password123");
        }
    }
}
