//package in.luckyseven.julanatoursapi.controller;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.ObjectMapper;
//import in.luckyseven.julanatoursapi.io.VehicleRequest;
//import in.luckyseven.julanatoursapi.io.VehicleResponse;
//import in.luckyseven.julanatoursapi.service.VehicleService;
//import lombok.AllArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.server.ResponseStatusException;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/vehicles")
//@AllArgsConstructor
//@CrossOrigin("*")
//public class VehicleController {
//
//    private final VehicleService vehicleService;
//    private final ObjectMapper objectMapper;
//
//    @PostMapping
//    public VehicleResponse addVehicle(@RequestPart("vehicle") String vehicleString,
//                                      @RequestPart("file") MultipartFile file) {
//        ObjectMapper objectMapper = new ObjectMapper();
//        VehicleRequest request = null;
//        try {
//            request = objectMapper.readValue(vehicleString, VehicleRequest.class);
//        } catch (JsonProcessingException ex) {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
//        }
//        VehicleResponse response = vehicleService.addVehicle(request, file);
//        return response;
//    }
//
//    @GetMapping
//    public List<VehicleResponse> readVehicles() {
//        return vehicleService.readVehicles();
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<VehicleResponse> readVehicle(@PathVariable String id) {
//        try {
//            // Log the received ID for debugging
//            System.out.println("Received ID in controller: " + id);
//
//            // Validate the ID
//            if (id == null || id.trim().isEmpty() || "${id}".equals(id)) {
//                System.err.println("Invalid ID received: " + id);
//                return ResponseEntity.badRequest().build();
//            }
//
//            VehicleResponse response = vehicleService.readVehicle(id.trim());
//            return ResponseEntity.ok(response);
//        } catch (RuntimeException e) {
//            System.err.println("Error fetching vehicle with ID: " + id);
//            System.err.println("Error message: " + e.getMessage());
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//        } catch (Exception e) {
//            System.err.println("Unexpected error: " + e.getMessage());
//            e.printStackTrace();
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
//        }
//    }
//
//    @DeleteMapping("/{id}")
//    @ResponseStatus(HttpStatus.NO_CONTENT)
//    public void deleteVehicle(@PathVariable String id) {
//        vehicleService.deleteVehicle(id);
//    }
//}






package in.luckyseven.julanatoursapi.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.luckyseven.julanatoursapi.io.VehicleRequest;
import in.luckyseven.julanatoursapi.io.VehicleResponse;
import in.luckyseven.julanatoursapi.service.VehicleService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@AllArgsConstructor
@CrossOrigin("*")


public class VehicleController {

    private final VehicleService vehicleService;

    private final ObjectMapper objectMapper;

    @PostMapping
    public VehicleResponse addVehicle(@RequestPart("vehicle") String vehicleString,
                                @RequestPart("file") MultipartFile file) {
        ObjectMapper objectMapper = new ObjectMapper();
        VehicleRequest request = null;
        try {
            request = objectMapper.readValue(vehicleString, VehicleRequest.class);
        } catch (JsonProcessingException ex) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid JSON format");
        }
        VehicleResponse response = vehicleService.addVehicle(request, file);
        return response;
    }

    @GetMapping
    public List<VehicleResponse> readVehicles() {
        return vehicleService.readVehicles();
    }

    @GetMapping("/{id}")
    public VehicleResponse readVehicle(@PathVariable String id) {
        return vehicleService.readVehicle(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteVehicle(@PathVariable String id) {
        vehicleService.deleteVehicle(id);
    }
}