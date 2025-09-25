//package in.luckyseven.julanatoursapi.service;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import in.luckyseven.julanatoursapi.service.VehicleService;
//import in.luckyseven.julanatoursapi.entity.VehicleEntity;
//import in.luckyseven.julanatoursapi.io.VehicleResponse;
//import in.luckyseven.julanatoursapi.io.VehicleRequest;
//import in.luckyseven.julanatoursapi.repository.VehicleRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.HttpStatus;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//import org.springframework.web.server.ResponseStatusException;
//import software.amazon.awssdk.core.sync.RequestBody;
//import software.amazon.awssdk.services.s3.S3Client;
//import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
//import software.amazon.awssdk.services.s3.model.PutObjectRequest;
//import software.amazon.awssdk.services.s3.model.PutObjectResponse;
//
//import java.io.IOException;
//import java.util.UUID;
//import java.util.stream.Collectors;
//import java.util.List;
//
//@Service
//public class VehicleServiceImpl implements VehicleService {
//
//    @Autowired
//    private S3Client s3Client;
//
//    @Autowired
//    private VehicleRepository vehicleRepository;
//
//    @Value("${AWS_S3_BUCKETNAME}")
//    private String bucketName;
//
//    @Autowired
//    private ObjectMapper objectMapper;
//
//    @Override
//    public String uploadFile(MultipartFile file) {
//        String filenameExtension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1);
//        String key = UUID.randomUUID().toString()+"."+filenameExtension;
//        try {
//            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
//                    .bucket(bucketName)
//                    .key(key)
//                    .acl("public-read")
//                    .contentType(file.getContentType())
//                    .build();
//            PutObjectResponse response = s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));
//
//            if (response.sdkHttpResponse().isSuccessful()) {
//                return "https://"+bucketName+".s3.amazonaws.com/"+key;
//            } else {
//                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "File upload failed");
//            }
//        } catch (IOException ex) {
//            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred while uploading file");
//        }
//    }
//
//    @Override
//    public VehicleResponse addVehicle(VehicleRequest request, MultipartFile file) {
//        VehicleEntity newVehicleEntity = convertToEntity(request);
//        String imageUrl = uploadFile(file);
//        newVehicleEntity.setImageUrl(imageUrl);
//        newVehicleEntity = vehicleRepository.save(newVehicleEntity);
//        return convertToResponse(newVehicleEntity);
//    }
//
//    @Override
//    public List<VehicleResponse> readVehicles() {
//        List<VehicleEntity> databaseEntries = vehicleRepository.findAll();
//        return databaseEntries.stream().map(object -> convertToResponse(object)).collect(Collectors.toList());
//    }
//
//    @Override
//    public List<VehicleResponse> addVehicles() {
//        List<VehicleEntity> databaseEntries = vehicleRepository.findAll();
//        return databaseEntries.stream().map(object -> convertToResponse(object)).collect(Collectors.toList());
//    }
//
//    @Override
//    public VehicleResponse readVehicle(String id) {
//        VehicleEntity existingVehicle = vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found for the id: " + id));
//        return convertToResponse(existingVehicle);
//    }
//
//    @Override
//    public boolean deleteFile(String filename) {
//        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
//                .bucket(bucketName)
//                .key(filename)
//                .build();
//        s3Client.deleteObject(deleteObjectRequest);
//        return true;
//    }
//
//    @Override
//    public void deleteVehicle(String id) {
//        VehicleResponse response = readVehicle(id);
//        String imageUrl = response.getImageUrl();
//        String filename = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
//        boolean isFileDelete = deleteFile(filename);
//        if (isFileDelete) {
//            vehicleRepository.deleteById(response.getId());
//        }
//    }
//
//    private VehicleEntity convertToEntity(VehicleRequest request) {
//        return VehicleEntity.builder()
//                .name(request.getName())
//                .description(request.getDescription())
//                .category(request.getCategory())
//                .price(request.getPrice())
//                .build();
//    }
//
//    private VehicleResponse convertToResponse(VehicleEntity entity) {
//        return VehicleResponse.builder()
//                .id(entity.getId())
//                .name(entity.getName())
//                .description(entity.getDescription())
//                .category(entity.getCategory())
//                .price(entity.getPrice())
//                .imageUrl(entity.getImageUrl())
//                .build();
//    }
//}

package in.luckyseven.julanatoursapi.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import in.luckyseven.julanatoursapi.service.VehicleService;
import in.luckyseven.julanatoursapi.entity.VehicleEntity;
import in.luckyseven.julanatoursapi.io.VehicleResponse;
import in.luckyseven.julanatoursapi.io.VehicleRequest;
import in.luckyseven.julanatoursapi.repository.VehicleRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectResponse;

import java.io.IOException;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.List;

@Service
@Slf4j
public class VehicleServiceImpl implements VehicleService {

    @Autowired
    private S3Client s3Client;

    @Autowired
    private VehicleRepository vehicleRepository;

    @Value("${AWS_S3_BUCKETNAME}")
    private String bucketName;

    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public String uploadFile(MultipartFile file) {
        String filenameExtension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".")+1);
        String key = UUID.randomUUID().toString()+"."+filenameExtension;
        try {
            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(key)
                    .acl("public-read")
                    .contentType(file.getContentType())
                    .build();
            PutObjectResponse response = s3Client.putObject(putObjectRequest, RequestBody.fromBytes(file.getBytes()));

            if (response.sdkHttpResponse().isSuccessful()) {
                String imageUrl = "https://"+bucketName+".s3.amazonaws.com/"+key;
                log.info("File uploaded successfully: {}", imageUrl);
                return imageUrl;
            } else {
                log.error("File upload failed with response: {}", response.sdkHttpResponse());
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "File upload failed");
            }
        } catch (IOException ex) {
            log.error("Error uploading file: {}", ex.getMessage(), ex);
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred while uploading file");
        }
    }

    @Override
    public VehicleResponse addVehicle(VehicleRequest request, MultipartFile file) {
        log.info("Adding new vehicle: {}", request.getName());
        log.debug("Vehicle request details: name={}, description={}, category={}, price={}",
                request.getName(), request.getDescription(), request.getCategory(), request.getPrice());

        VehicleEntity newVehicleEntity = convertToEntity(request);
        String imageUrl = uploadFile(file);
        newVehicleEntity.setImageUrl(imageUrl);

        newVehicleEntity = vehicleRepository.save(newVehicleEntity);
        log.info("Vehicle saved with ID: {}", newVehicleEntity.getId());

        VehicleResponse response = convertToResponse(newVehicleEntity);
        log.debug("Returning vehicle response: {}", response);
        return response;
    }

    @Override
    public List<VehicleResponse> readVehicles() {
        log.info("Fetching all vehicles from database");

        List<VehicleEntity> databaseEntries = vehicleRepository.findAll();
        log.info("Found {} vehicles in database", databaseEntries.size());

        if (databaseEntries.isEmpty()) {
            log.warn("No vehicles found in database");
            return List.of();
        }

        // Debug: Log first vehicle details
        if (!databaseEntries.isEmpty()) {
            VehicleEntity firstVehicle = databaseEntries.get(0);
            log.debug("First vehicle in DB: id={}, name={}, description={}, category={}, price={}, imageUrl={}",
                    firstVehicle.getId(), firstVehicle.getName(), firstVehicle.getDescription(),
                    firstVehicle.getCategory(), firstVehicle.getPrice(), firstVehicle.getImageUrl());
        }

        List<VehicleResponse> responses = databaseEntries.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());

        log.info("Converted {} entities to responses", responses.size());

        // Debug: Log first response
        if (!responses.isEmpty()) {
            VehicleResponse firstResponse = responses.get(0);
            log.debug("First response: id={}, name={}, description={}, category={}, price={}, imageUrl={}",
                    firstResponse.getId(), firstResponse.getName(), firstResponse.getDescription(),
                    firstResponse.getCategory(), firstResponse.getPrice(), firstResponse.getImageUrl());
        }

        return responses;
    }

    @Override
    public List<VehicleResponse> addVehicles() {
        log.info("Executing addVehicles method (Note: This seems to be same as readVehicles)");
        return readVehicles();
    }

    @Override
    public VehicleResponse readVehicle(String id) {
        log.info("Fetching vehicle with ID: {}", id);

        VehicleEntity existingVehicle = vehicleRepository.findById(id)
                .orElseThrow(() -> {
                    log.error("Vehicle not found for ID: {}", id);
                    return new RuntimeException("Vehicle not found for the id: " + id);
                });

        log.debug("Found vehicle: name={}, description={}", existingVehicle.getName(), existingVehicle.getDescription());

        VehicleResponse response = convertToResponse(existingVehicle);
        log.debug("Returning vehicle response for ID {}: {}", id, response);

        return response;
    }

    @Override
    public boolean deleteFile(String filename) {
        try {
            log.info("Deleting file from S3: {}", filename);
            DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                    .bucket(bucketName)
                    .key(filename)
                    .build();
            s3Client.deleteObject(deleteObjectRequest);
            log.info("File deleted successfully: {}", filename);
            return true;
        } catch (Exception e) {
            log.error("Error deleting file {}: {}", filename, e.getMessage(), e);
            return false;
        }
    }

    @Override
    public void deleteVehicle(String id) {
        log.info("Deleting vehicle with ID: {}", id);

        VehicleResponse response = readVehicle(id);
        String imageUrl = response.getImageUrl();

        if (imageUrl != null && !imageUrl.isEmpty()) {
            String filename = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
            boolean isFileDelete = deleteFile(filename);
            if (!isFileDelete) {
                log.warn("Failed to delete image file: {}", filename);
            }
        }

        vehicleRepository.deleteById(response.getId());
        log.info("Vehicle deleted successfully with ID: {}", id);
    }

    private VehicleEntity convertToEntity(VehicleRequest request) {
        log.debug("Converting request to entity: {}", request.getName());

        VehicleEntity entity = VehicleEntity.builder()
                .name(request.getName())
                .description(request.getDescription())
                .category(request.getCategory())
                .price(request.getPrice())
                .build();

        log.debug("Created entity: name={}, description={}, category={}, price={}",
                entity.getName(), entity.getDescription(), entity.getCategory(), entity.getPrice());

        return entity;
    }

    private VehicleResponse convertToResponse(VehicleEntity entity) {
        if (entity == null) {
            log.warn("Attempting to convert null entity to response");
            return null;
        }

        log.debug("Converting entity to response: ID={}, name={}", entity.getId(), entity.getName());

        VehicleResponse response = VehicleResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .price(entity.getPrice())
                .imageUrl(entity.getImageUrl())
                .build();

        log.debug("Created response: id={}, name={}, description={}, category={}, price={}, imageUrl={}",
                response.getId(), response.getName(), response.getDescription(),
                response.getCategory(), response.getPrice(), response.getImageUrl());

        return response;
    }
}