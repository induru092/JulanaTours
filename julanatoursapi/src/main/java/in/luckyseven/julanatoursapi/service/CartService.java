package in.luckyseven.julanatoursapi.service;


import in.luckyseven.julanatoursapi.io.CartRequest;
import in.luckyseven.julanatoursapi.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request );

    CartResponse getCart();
    void  clearCart();
    CartResponse removeFromCart();
    }


