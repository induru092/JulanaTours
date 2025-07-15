package in.luckyseven.julanatoursapi.service;


import in.luckyseven.julanatoursapi.entity.CartEntity;
import in.luckyseven.julanatoursapi.repository.CartRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class CartServiceImpl implements CartService{

    private final CartRepository cartRepository;
    private final UserService userService;
    @Override
    public void addToCart(String vehicleId){
         String loggedInUserId = userService.findByUserId();
       Optional<CartEntity> cartOptional =  cartRepository.findByUserId(loggedInUserId);
    }
}
