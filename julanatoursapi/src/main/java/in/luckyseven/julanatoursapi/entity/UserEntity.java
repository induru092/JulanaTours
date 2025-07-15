package in.luckyseven.julanatoursapi.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection ="users")
@Builder

public class UserEntity {
    @id
    private String id;
    private String username;
    private String password;
    private String email;

}
