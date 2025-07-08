package in.luckyseven.julanatoursapi.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import in.luckyseven.julanatoursapi.service.VehicleService;
import in.luckyseven.julanatoursapi.entity.VehicleEntity;
import in.luckyseven.julanatoursapi.io.VehicleResponse;
import in.luckyseven.julanatoursapi.io.VehicleRequest;
import in.luckyseven.julanatoursapi.repository.VehicleRepository;
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
                return "https://"+bucketName+".s3.amazonaws.com/"+key;
            } else {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "File upload failed");
            }
        } catch (IOException ex) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred while uploading file");
        }
    }

    @Override
    public VehicleResponse addVehicle(VehicleRequest request, MultipartFile file) {
        VehicleEntity newVehicleEntity = convertToEntity(request);
        String imageUrl = uploadFile(file);
        newVehicleEntity.setImageUrl(imageUrl);
        newVehicleEntity = vehicleRepository.save(newVehicleEntity);
        return convertToResponse(newVehicleEntity);
    }

    @Override
    public List<VehicleResponse> readVehicles() {
        List<VehicleEntity> databaseEntries = vehicleRepository.findAll();
        return databaseEntries.stream().map(object -> convertToResponse(object)).collect(Collectors.toList());
    }

    @Override
    public List<VehicleResponse> addVehicles() {
        List<VehicleEntity> databaseEntries = vehicleRepository.findAll();
        return databaseEntries.stream().map(object -> convertToResponse(object)).collect(Collectors.toList());
    }

    @Override
    public VehicleResponse readVehicle(String id) {
        VehicleEntity existingVehicle = vehicleRepository.findById(id).orElseThrow(() -> new RuntimeException("Vehicle not found for the id: " + id));
        return convertToResponse(existingVehicle);
    }

    @Override
    public boolean deleteFile(String filename) {
        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                .bucket(bucketName)
                .key(filename)
                .build();
        s3Client.deleteObject(deleteObjectRequest);
        return true;
    }

    @Override
    public void deleteVehicle(String id) {
        VehicleResponse response = readVehicle(id);
        String imageUrl = response.getImageUrl();
        String filename = imageUrl.substring(imageUrl.lastIndexOf("/")+1);
        boolean isFileDelete = deleteFile(filename);
        if (isFileDelete) {
            vehicleRepository.deleteById(response.getId());
        }
    }

    private VehicleEntity convertToEntity(VehicleRequest request) {
        return VehicleEntity.builder()
                .name(request.getName())
                .description(request.getDescription())
                .category(request.getCategory())
                .price(request.getPrice())
                .build();
    }

    private VehicleResponse convertToResponse(VehicleEntity entity) {
        return VehicleResponse.builder()
                .id(entity.getId())
                .name(entity.getName())
                .description(entity.getDescription())
                .category(entity.getCategory())
                .price(entity.getPrice())
                .imageUrl(entity.getImageUrl())
                .build();
    }
}