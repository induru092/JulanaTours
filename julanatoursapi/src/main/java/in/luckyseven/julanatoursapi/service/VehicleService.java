package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.VehicleResponse;
import in.luckyseven.julanatoursapi.io.VehicleRequest;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface VehicleService {

    String uploadFile(MultipartFile file);

    VehicleResponse addVehicle(VehicleRequest request, MultipartFile file);

    List<VehicleResponse> readVehicles();

    List<VehicleResponse> addVehicles();

    VehicleResponse readVehicle(String id);

    boolean deleteFile(String filename);

    void deleteVehicle(String id);

}