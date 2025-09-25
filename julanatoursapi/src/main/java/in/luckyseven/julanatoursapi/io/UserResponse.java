//package in.luckyseven.julanatoursapi.io;
//
//
//import lombok.AllArgsConstructor;
//import lombok.Builder;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//@Builder
//
//public class UserResponse {
//
//    private String id;
//    private String name;
//    private String email;
//
//
//}


package in.luckyseven.julanatoursapi.io;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserResponse {

    private String id;
    private String name;
    private String email;
    private LocalDateTime createdAt;
    private String message;

    // Constructor for success registration
    public UserResponse(String id, String name, String email, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
        this.message = "User registered successfully";
    }

    // Constructor for simple response
    public UserResponse(String message) {
        this.message = message;
    }
}