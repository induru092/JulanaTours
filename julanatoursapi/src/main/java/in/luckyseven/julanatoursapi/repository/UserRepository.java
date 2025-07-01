package in.luckyseven.julanatoursapi.repository;

import in.luckyseven.julanatoursapi.entity.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


import java.util.Optional;

public interface UserRepository extends MongoRepository<UserEntity, String> {

    @Repository
    Optional<UserEntity> findByEmail(String email);
}
