//package in.luckyseven.julanatoursapi.service;
//
//import in.luckyseven.julanatoursapi.io.VehicleResponse;
//import in.luckyseven.julanatoursapi.io.VehicleRequest;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.util.List;
//
//public interface VehicleService {
//
//    String uploadFile(MultipartFile file);
//
//    VehicleResponse addVehicle(VehicleRequest request, MultipartFile file);
//
//    List<VehicleResponse> readVehicles();
//
//    List<VehicleResponse> addVehicles();
//
//    VehicleResponse readVehicle(String id);
//
//    boolean deleteFile(String filename);
//
//    void deleteVehicle(String id);
//
//}

package in.luckyseven.julanatoursapi.service;

import in.luckyseven.julanatoursapi.io.VehicleRequest;
import in.luckyseven.julanatoursapi.io.VehicleResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface VehicleService {

    /**
     * Upload a file and return the file URL/path
     * @param file File to upload
     * @return File URL or path
     */
    String uploadFile(MultipartFile file);

    /**
     * Add a new vehicle to the database
     * @param request Vehicle details
     * @param file Vehicle image file
     * @return VehicleResponse with saved vehicle data
     */
    VehicleResponse addVehicle(VehicleRequest request, MultipartFile file);

    /**
     * Get all vehicles from database
     * @return List of all vehicles
     */
    List<VehicleResponse> readVehicles();

    /**
     * Add multiple vehicles (bulk add operation)
     * @return List of added vehicles
     */
    List<VehicleResponse> addVehicles();

    /**
     * Get a specific vehicle by ID
     * @param id Vehicle ID
     * @return Vehicle details
     * @throws RuntimeException if vehicle not found
     */
    VehicleResponse readVehicle(String id);

    /**
     * Delete a file by filename
     * @param filename Name of file to delete
     * @return true if deleted successfully, false otherwise
     */
    boolean deleteFile(String filename);

    /**
     * Delete a vehicle by ID
     * @param id Vehicle ID to delete
     * @throws RuntimeException if vehicle not found
     */
    void deleteVehicle(String id);

    /**
     * Toggle vehicle availability status
     * @param id Vehicle ID
     * @param available New availability status (true = available, false = unavailable)
     * @return Updated vehicle response
     * @throws RuntimeException if vehicle not found
     */
    VehicleResponse toggleAvailability(String id, boolean available);

}