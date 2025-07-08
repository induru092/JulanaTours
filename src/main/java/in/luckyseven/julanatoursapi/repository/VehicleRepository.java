package in.luckyseven.julanatoursapi.repository;

import in.luckyseven.julanatoursapi.entity.VehicleEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends MongoRepository<VehicleEntity, String> {

}
