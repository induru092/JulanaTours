package in.luckyseven.julanatoursapi.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import in.luckyseven.julanatoursapi.io.VehicleRequest;
import in.luckyseven.julanatoursapi.io.VehicleResponse;
import in.luckyseven.julanatoursapi.service.VehicleService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;


import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@RequiredArgsConstructor
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