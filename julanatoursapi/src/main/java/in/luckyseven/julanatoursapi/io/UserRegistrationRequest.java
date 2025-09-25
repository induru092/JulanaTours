//package in.luckyseven.julanatoursapi.io;
//
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;
//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;
//
//@Data
//@AllArgsConstructor
//@NoArgsConstructor
//public class UserRegistrationRequest {
//
//    @NotBlank(message = "Name is required")
//    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
//    private String name;
//
//    @NotBlank(message = "Email is required")
//    @Email(message = "Please provide a valid email address")
//    private String email;
//
//    @NotBlank(message = "Password is required")
//    @Size(min = 6, message = "Password must be at least 6 characters long")
//    private String password;
//}
package in.luckyseven.julanatoursapi.io;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationRequest {

    @NotBlank(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    private String name;

    @NotBlank(message = "Email is required")
    @Email(message = "Please provide a valid email address")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters long")
    private String password;
}