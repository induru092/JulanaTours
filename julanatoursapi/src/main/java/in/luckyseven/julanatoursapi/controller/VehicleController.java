//////package in.luckyseven.julanatoursapi.controller;
//////
//////import com.fasterxml.jackson.core.JsonProcessingException;
//////import com.fasterxml.jackson.databind.ObjectMapper;
//////import in.luckyseven.julanatoursapi.io.VehicleRequest;
//////import in.luckyseven.julanatoursapi.io.VehicleResponse;
//////import in.luckyseven.julanatoursapi.service.VehicleService;
//////import lombok.AllArgsConstructor;
//////import org.springframework.http.HttpStatus;
//////import org.springframework.http.ResponseEntity;
//////import org.springframework.web.bind.annotation.*;
//////import org.springframework.web.multipart.MultipartFile;
//////import org.springframework.web.server.ResponseStatusException;
//////
//////import java.util.List;
//////
//////@RestController
//////@RequestMapping("/api/vehicles")
//////@AllArgsConstructor
//////@CrossOrigin("*")
//////public class VehicleController {
//////
//////    private final VehicleService vehicleService;
//////    private final ObjectMapper objectMapper;
//////
//////    @PostMapping
//////    public VehicleResponse addVehicle(@RequestPart("vehicle") String vehicleString,
//////                                      @RequestPart("file") MultipartFile file) {
//////        ObjectMapper objectMapper = new ObjectMapper();
//////        VehicleRequest request = null;
//////        try {
//////            request = objectMapper.readValue(vehicleString, VehicleRequest.class);
//////        } catch (JsonProcessingException ex) {
//////            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
//////        }
//////        VehicleResponse response = vehicleService.addVehicle(request, file);
//////        return response;
//////    }
//////
//////    @GetMapping
//////    public List<VehicleResponse> readVehicles() {
//////        return vehicleService.readVehicles();
//////    }
//////
//////    @GetMapping("/{id}")
//////    public ResponseEntity<VehicleResponse> readVehicle(@PathVariable String id) {
//////        try {
//////            // Log the received ID for debugging
//////            System.out.println("Received ID in controller: " + id);
//////
//////            // Validate the ID
//////            if (id == null || id.trim().isEmpty() || "${id}".equals(id)) {
//////                System.err.println("Invalid ID received: " + id);
//////                return ResponseEntity.badRequest().build();
//////            }
//////
//////            VehicleResponse response = vehicleService.readVehicle(id.trim());
//////            return ResponseEntity.ok(response);
//////        } catch (RuntimeException e) {
//////            System.err.println("Error fetching vehicle with ID: " + id);
//////            System.err.println("Error message: " + e.getMessage());
//////            e.printStackTrace();
//////            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//////        } catch (Exception e) {
//////            System.err.println("Unexpected error: " + e.getMessage());
//////            e.printStackTrace();
//////            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//////        }
//////    }
//////
//////    @DeleteMapping("/{id}")
//////    @ResponseStatus(HttpStatus.NO_CONTENT)
//////    public void deleteVehicle(@PathVariable String id) {
//////        vehicleService.deleteVehicle(id);
//////    }
//////}
////
////
////
////
////
////
//////package in.luckyseven.julanatoursapi.controller;
//////
//////import com.fasterxml.jackson.core.JsonProcessingException;
//////import com.fasterxml.jackson.databind.ObjectMapper;
//////import in.luckyseven.julanatoursapi.io.VehicleRequest;
//////import in.luckyseven.julanatoursapi.io.VehicleResponse;
//////import in.luckyseven.julanatoursapi.service.VehicleService;
//////import lombok.AllArgsConstructor;
//////import org.springframework.http.HttpStatus;
//////import org.springframework.web.bind.annotation.*;
//////import org.springframework.web.multipart.MultipartFile;
//////import org.springframework.web.server.ResponseStatusException;
//////
//////import java.awt.*;
//////import java.util.List;
//////
//////@RestController
//////@RequestMapping("/api/vehicles")
//////@AllArgsConstructor
//////@CrossOrigin("*")
//////
//////
//////public class VehicleController {
//////
//////    private final VehicleService vehicleService;
//////
//////    private final ObjectMapper objectMapper;
//////
//////    @PostMapping
//////    public VehicleResponse addVehicle(@RequestPart("vehicle") String vehicleString,
//////                                @RequestPart("file") MultipartFile file) {
//////        ObjectMapper objectMapper = new ObjectMapper();
//////        VehicleRequest request = null;
//////        try {
//////            request = objectMapper.readValue(vehicleString, VehicleRequest.class);
//////        } catch (JsonProcessingException ex) {
//////            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
//////        }
//////        VehicleResponse response = vehicleService.addVehicle(request, file);
//////        return response;
//////    }
//////
//////    @GetMapping
//////    public List<VehicleResponse> readVehicles() {
//////        return vehicleService.readVehicles();
//////    }
//////
//////    @GetMapping("/{id}")
//////    public VehicleResponse readVehicle(@PathVariable String id) {
//////        return vehicleService.readVehicle(id);
//////    }
//////
//////    @DeleteMapping("/{id}")
//////    @ResponseStatus(HttpStatus.NO_CONTENT)
//////    public void deleteVehicle(@PathVariable String id) {
//////        vehicleService.deleteVehicle(id);
//////    }
//////}
////
////package in.luckyseven.julanatoursapi.controller;
////
////import lombok.extern.slf4j.Slf4j;
////import org.springframework.http.ResponseEntity;
////import org.springframework.security.core.Authentication;
////import org.springframework.web.bind.annotation.*;
////
////import java.util.Arrays;
////import java.util.List;
////import java.util.Map;
////
////@RestController
////@RequestMapping("/api/vehicles")
////@Slf4j
////@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
////public class VehicleController {
////
////    @GetMapping
////    public ResponseEntity<?> getAllVehicles(Authentication authentication) {
////        try {
////            log.info("Fetching vehicles for user: {}", authentication.getName());
////
////            // Mock data for testing - replace with actual service call
////            List<Map<String, Object>> vehicles = Arrays.asList(
////                    Map.of(
////                            "id", 1,
////                            "name", "Toyota Camry",
////                            "type", "Sedan",
////                            "pricePerDay", 50.0,
////                            "available", true
////                    ),
////                    Map.of(
////                            "id", 2,
////                            "name", "Honda CR-V",
////                            "type", "SUV",
////                            "pricePerDay", 75.0,
////                            "available", true
////                    ),
////                    Map.of(
////                            "id", 3,
////                            "name", "Ford Transit",
////                            "type", "Van",
////                            "pricePerDay", 100.0,
////                            "available", false
////                    )
////            );
////
////            return ResponseEntity.ok(vehicles);
////
////        } catch (Exception e) {
////            log.error("Error fetching vehicles", e);
////            return ResponseEntity.status(500)
////                    .body(Map.of("message", "Failed to fetch vehicles"));
////        }
////    }
////
////    @GetMapping("/{id}")
////    public ResponseEntity<?> getVehicleById(@PathVariable Long id, Authentication authentication) {
////        try {
////            log.info("Fetching vehicle {} for user: {}", id, authentication.getName());
////
////            // Mock data for testing - replace with actual service call
////            Map<String, Object> vehicle = Map.of(
////                    "id", id,
////                    "name", "Toyota Camry",
////                    "type", "Sedan",
////                    "pricePerDay", 50.0,
////                    "available", true,
////                    "description", "Comfortable sedan for city driving",
////                    "features", Arrays.asList("Air Conditioning", "GPS", "Bluetooth")
////            );
////
////            return ResponseEntity.ok(vehicle);
////
////        } catch (Exception e) {
////            log.error("Error fetching vehicle {}", id, e);
////            return ResponseEntity.status(500)
////                    .body(Map.of("message", "Failed to fetch vehicle details"));
////        }
////    }
////}
//
//package in.luckyseven.julanatoursapi.controller;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.util.Arrays;
//import java.util.List;
//import java.util.Map;
//
//@RestController
//@RequestMapping("/api/vehicles")
//@Slf4j
//@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
//public class VehicleController {
//
//    private final ObjectMapper objectMapper = new ObjectMapper();
//
//    @GetMapping
//    public ResponseEntity<?> getAllVehicles(Authentication authentication) {
//        try {
//            log.info("Fetching vehicles for user: {}", authentication.getName());
//
//            // Mock data for testing - replace with actual service call
//            List<Map<String, Object>> vehicles = Arrays.asList(
//                    Map.of(
//                            "id", 1,
//                            "name", "Toyota Camry",
//                            "type", "Sedan",
//                            "pricePerDay", 50.0,
//                            "available", true
//                    ),
//                    Map.of(
//                            "id", 2,
//                            "name", "Honda CR-V",
//                            "type", "SUV",
//                            "pricePerDay", 75.0,
//                            "available", true
//                    ),
//                    Map.of(
//                            "id", 3,
//                            "name", "Ford Transit",
//                            "type", "Van",
//                            "pricePerDay", 100.0,
//                            "available", false
//                    )
//            );
//
//            return ResponseEntity.ok(vehicles);
//
//        } catch (Exception e) {
//            log.error("Error fetching vehicles", e);
//            return ResponseEntity.status(500)
//                    .body(Map.of("message", "Failed to fetch vehicles"));
//        }
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getVehicleById(@PathVariable Long id, Authentication authentication) {
//        try {
//            log.info("Fetching vehicle {} for user: {}", id, authentication.getName());
//
//            // Mock data for testing - replace with actual service call
//            Map<String, Object> vehicle = Map.of(
//                    "id", id,
//                    "name", "Toyota Camry",
//                    "type", "Sedan",
//                    "pricePerDay", 50.0,
//                    "available", true,
//                    "description", "Comfortable sedan for city driving",
//                    "features", Arrays.asList("Air Conditioning", "GPS", "Bluetooth")
//            );
//
//            return ResponseEntity.ok(vehicle);
//
//        } catch (Exception e) {
//            log.error("Error fetching vehicle {}", id, e);
//            return ResponseEntity.status(500)
//                    .body(Map.of("message", "Failed to fetch vehicle details"));
//        }
//    }
//
//    // ADD THIS POST ENDPOINT TO FIX THE 405 ERROR
//    @PostMapping
//    public ResponseEntity<?> addVehicle(@RequestPart("vehicle") String vehicleString,
//                                        @RequestPart("file") MultipartFile file,
//                                        Authentication authentication) {
//        try {
//            log.info("Adding vehicle for user: {}", authentication.getName());
//
//            // Parse the vehicle JSON string
//            Map<String, Object> vehicleData;
//            try {
//                vehicleData = objectMapper.readValue(vehicleString, Map.class);
//            } catch (JsonProcessingException ex) {
//                log.error("Invalid JSON format: {}", vehicleString, ex);
//                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
//            }
//
//            // Validate required fields
//            if (!vehicleData.containsKey("name") || !vehicleData.containsKey("price")) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "Name and price are required"));
//            }
//
//            // Validate file
//            if (file == null || file.isEmpty()) {
//                return ResponseEntity.badRequest()
//                        .body(Map.of("message", "Vehicle image is required"));
//            }
//
//            // Log the received data
//            log.info("Received vehicle data: {}", vehicleData);
//            log.info("Received file: {} ({})", file.getOriginalFilename(), file.getSize());
//
//            // TODO: Replace with actual service call to save vehicle
//            // VehicleResponse response = vehicleService.addVehicle(request, file);
//
//            // Mock response for testing
//            Map<String, Object> response = Map.of(
//                    "id", System.currentTimeMillis(), // Generate a mock ID
//                    "name", vehicleData.get("name"),
//                    "description", vehicleData.getOrDefault("description", ""),
//                    "category", vehicleData.getOrDefault("category", "Sedan"),
//                    "price", vehicleData.get("price"),
//                    "imageUrl", "/uploads/" + file.getOriginalFilename(), // Mock image URL
//                    "message", "Vehicle added successfully"
//            );
//
//            return ResponseEntity.status(HttpStatus.CREATED).body(response);
//
//        } catch (Exception e) {
//            log.error("Error adding vehicle", e);
//            return ResponseEntity.status(500)
//                    .body(Map.of("message", "Failed to add vehicle: " + e.getMessage()));
//        }
//    }
//
//    // ADD DELETE ENDPOINT IF NEEDED
//    @DeleteMapping("/{id}")
//    public ResponseEntity<?> deleteVehicle(@PathVariable Long id, Authentication authentication) {
//        try {
//            log.info("Deleting vehicle {} for user: {}", id, authentication.getName());
//
//            // TODO: Replace with actual service call
//            // vehicleService.deleteVehicle(id);
//
//            return ResponseEntity.noContent().build();
//
//        } catch (Exception e) {
//            log.error("Error deleting vehicle {}", id, e);
//            return ResponseEntity.status(500)
//                    .body(Map.of("message", "Failed to delete vehicle"));
//        }
//    }
//}

package in.luckyseven.julanatoursapi.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.luckyseven.julanatoursapi.io.VehicleRequest;
import in.luckyseven.julanatoursapi.io.VehicleResponse;
import in.luckyseven.julanatoursapi.service.VehicleService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/vehicles")
@AllArgsConstructor
@Slf4j
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
public class VehicleController {

    private final VehicleService vehicleService;
    private final ObjectMapper objectMapper;

    @GetMapping
    public ResponseEntity<?> getAllVehicles(Authentication authentication) {
        try {
            log.info("Fetching vehicles for user: {}", authentication != null ? authentication.getName() : "anonymous");

            List<VehicleResponse> vehicles = vehicleService.readVehicles();

            if (vehicles.isEmpty()) {
                log.info("No vehicles found in database");
                return ResponseEntity.ok(vehicles);
            }

            log.info("Found {} vehicles in database", vehicles.size());
            return ResponseEntity.ok(vehicles);

        } catch (Exception e) {
            log.error("Error fetching vehicles from database", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch vehicles: " + e.getMessage()));
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getVehicleById(@PathVariable String id, Authentication authentication) {
        try {
            log.info("Fetching vehicle {} for user: {}", id, authentication != null ? authentication.getName() : "anonymous");

            // Validate the ID
            if (id == null || id.trim().isEmpty()) {
                log.warn("Invalid vehicle ID received: {}", id);
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Invalid vehicle ID"));
            }

            VehicleResponse vehicle = vehicleService.readVehicle(id.trim());

            if (vehicle == null) {
                log.warn("Vehicle not found with ID: {}", id);
                return ResponseEntity.notFound().build();
            }

            log.info("Successfully found vehicle: {}", vehicle.getName());
            return ResponseEntity.ok(vehicle);

        } catch (RuntimeException e) {
            log.error("Vehicle not found with ID: {}", id, e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Vehicle not found with ID: " + id));
        } catch (Exception e) {
            log.error("Error fetching vehicle {} from database", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to fetch vehicle details: " + e.getMessage()));
        }
    }

    @PostMapping
    public ResponseEntity<?> addVehicle(@RequestPart("vehicle") String vehicleString,
                                        @RequestPart("file") MultipartFile file,
                                        Authentication authentication) {
        try {
            log.info("Adding vehicle for user: {}", authentication != null ? authentication.getName() : "anonymous");

            // Parse the vehicle JSON string
            VehicleRequest request;
            try {
                request = objectMapper.readValue(vehicleString, VehicleRequest.class);
                log.info("Parsed vehicle request: {}", request.getName());
            } catch (JsonProcessingException ex) {
                log.error("Invalid JSON format: {}", vehicleString, ex);
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Invalid JSON format: " + ex.getMessage()));
            }

            // Validate required fields
            if (request.getName() == null || request.getName().trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Vehicle name is required"));
            }

            // For primitive double (can't be null)
            if (request.getPrice() <= 0) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Valid price is required"));
            }

            // Validate file
            if (file == null || file.isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Vehicle image is required"));
            }

            // Validate file type
            String contentType = file.getContentType();
            if (contentType == null || !contentType.startsWith("image/")) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Only image files are allowed"));
            }

            // Log the received data
            log.info("Adding vehicle: {} with image: {} ({})",
                    request.getName(), file.getOriginalFilename(), file.getSize());

            // Save vehicle to database
            VehicleResponse response = vehicleService.addVehicle(request, file);

            log.info("Successfully added vehicle with ID: {}", response.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (Exception e) {
            log.error("Error adding vehicle to database", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to add vehicle: " + e.getMessage()));
        }
    }

    // UPDATE METHOD REMOVED - Not available in your current VehicleService interface
    // You can add updateVehicle method to your VehicleService interface if needed

    @PatchMapping("/{id}/availability")
    public ResponseEntity<?> toggleAvailability(
            @PathVariable String id,
            @RequestBody Map<String, Boolean> request,
            Authentication authentication) {
        try {
            log.info("Toggling availability for vehicle {} by user: {}",
                    id, authentication != null ? authentication.getName() : "anonymous");

            if (id == null || id.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Invalid vehicle ID"));
            }

            Boolean available = request.get("available");
            if (available == null) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Available status is required"));
            }

            VehicleResponse response = vehicleService.toggleAvailability(id.trim(), available);

            log.info("Successfully toggled availability for vehicle ID: {} to {}", id, available);
            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            log.error("Vehicle not found with ID: {}", id, e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Vehicle not found with ID: " + id));
        } catch (Exception e) {
            log.error("Error toggling availability for vehicle {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to update vehicle availability: " + e.getMessage()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVehicle(@PathVariable String id, Authentication authentication) {
        try {
            log.info("Deleting vehicle {} for user: {}", id, authentication != null ? authentication.getName() : "anonymous");

            // Validate the ID
            if (id == null || id.trim().isEmpty()) {
                return ResponseEntity.badRequest()
                        .body(Map.of("message", "Invalid vehicle ID"));
            }

            // Delete vehicle from database
            vehicleService.deleteVehicle(id.trim());

            log.info("Successfully deleted vehicle with ID: {}", id);
            return ResponseEntity.noContent().build();

        } catch (RuntimeException e) {
            log.error("Vehicle not found for deletion with ID: {}", id, e);
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "Vehicle not found with ID: " + id));
        } catch (Exception e) {
            log.error("Error deleting vehicle {} from database", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to delete vehicle: " + e.getMessage()));
        }
    }

    // AVAILABLE VEHICLES METHOD REMOVED - Not available in your current VehicleService interface
    // You can add getAvailableVehicles method to your VehicleService interface if needed

    // CATEGORY FILTER METHOD REMOVED - Not available in your current VehicleService interface
    // You can add getVehiclesByCategory method to your VehicleService interface if needed

    @PostMapping("/bulk-add")
    public ResponseEntity<?> addBulkVehicles(Authentication authentication) {
        try {
            log.info("Adding bulk vehicles for user: {}", authentication != null ? authentication.getName() : "anonymous");

            List<VehicleResponse> vehicles = vehicleService.addVehicles();

            log.info("Successfully added {} vehicles", vehicles.size());
            return ResponseEntity.status(HttpStatus.CREATED).body(vehicles);

        } catch (Exception e) {
            log.error("Error adding bulk vehicles to database", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("message", "Failed to add bulk vehicles: " + e.getMessage()));
        }
    }
}