//
//
//package in.luckyseven.julanatoursapi.filters;
//
//import in.luckyseven.julanatoursapi.util.JwtUtil;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.stereotype.Component;
//import org.springframework.util.StringUtils;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.util.Arrays;
//import java.util.List;
//
//@Component
//@Slf4j
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//    // Define public endpoints that don't need JWT authentication
//    private static final List<String> PUBLIC_ENDPOINTS = Arrays.asList(
//            "/api/login",
//            "/api/register",
//            "/api/forgot-password",
//            "/api/reset-password",
//            "/api/public/",
//            "/error",
//            "/actuator/health"
//    );
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        try {
//            String requestURI = request.getRequestURI();
//            String method = request.getMethod();
//            log.debug("Processing request: {} {}", method, requestURI);
//
//            // Skip processing for public endpoints
//            if (isPublicEndpoint(requestURI)) {
//                log.debug("Skipping JWT filter for public endpoint: {}", requestURI);
//                filterChain.doFilter(request, response);
//                return;
//            }
//
//            final String authHeader = request.getHeader("Authorization");
//            log.debug("Authorization header present: {}", authHeader != null);
//
//            if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
//                String token = authHeader.substring(7);
//                log.debug("Extracted JWT token (first 20 chars): {}...",
//                        token.length() > 20 ? token.substring(0, 20) : token);
//
//                try {
//                    // Extract email from token
//                    String email = jwtUtil.extractUsername(token);
//                    log.debug("Extracted email from token: {}", email);
//
//                    if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                        // Load user details
//                        UserDetails userDetails = userDetailsService.loadUserByUsername(email);
//                        log.debug("Loaded user details for email: {}", email);
//
//                        // Validate token
//                        if (jwtUtil.validateToken(token, userDetails)) {
//                            // Create authentication token
//                            UsernamePasswordAuthenticationToken authenticationToken =
//                                    new UsernamePasswordAuthenticationToken(
//                                            userDetails,
//                                            null,
//                                            userDetails.getAuthorities()
//                                    );
//
//                            authenticationToken.setDetails(
//                                    new WebAuthenticationDetailsSource().buildDetails(request)
//                            );
//
//                            // Set authentication in security context
//                            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//                            log.debug("Successfully authenticated user: {} with authorities: {}",
//                                    email, userDetails.getAuthorities());
//                        } else {
//                            log.warn("Invalid JWT token for user: {}", email);
//                            handleAuthenticationError(response, "Invalid or expired token");
//                            return;
//                        }
//                    }
//                } catch (io.jsonwebtoken.ExpiredJwtException e) {
//                    log.warn("JWT token expired: {}", e.getMessage());
//                    handleAuthenticationError(response, "Token expired");
//                    return;
//                } catch (io.jsonwebtoken.JwtException e) {
//                    log.warn("JWT token error: {}", e.getMessage());
//                    handleAuthenticationError(response, "Invalid token format");
//                    return;
//                } catch (UsernameNotFoundException e) {
//                    log.warn("User not found for email in token: {}", e.getMessage());
//                    handleAuthenticationError(response, "User not found");
//                    return;
//                } catch (Exception e) {
//                    log.error("JWT token validation error: {}", e.getMessage(), e);
//                    handleAuthenticationError(response, "Authentication failed");
//                    return;
//                }
//            } else {
//                // No authorization header for protected endpoint
//                log.debug("No valid Authorization header found for protected endpoint: {}", requestURI);
//                handleAuthenticationError(response, "Authorization token required");
//                return;
//            }
//        } catch (Exception e) {
//            log.error("Error in JWT filter: {}", e.getMessage(), e);
//            handleAuthenticationError(response, "Internal authentication error");
//            return;
//        }
//
//        // Continue the filter chain
//        filterChain.doFilter(request, response);
//    }
//
//    @Override
//    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
//        String path = request.getRequestURI();
//        boolean shouldSkip = isPublicEndpoint(path);
//        log.debug("Should not filter {}: {}", path, shouldSkip);
//        return shouldSkip;
//    }
//
//    private boolean isPublicEndpoint(String path) {
//        return PUBLIC_ENDPOINTS.stream().anyMatch(path::startsWith);
//    }
//
//    private void handleAuthenticationError(HttpServletResponse response, String message) throws IOException {
//        response.setStatus(HttpStatus.UNAUTHORIZED.value());
//        response.setContentType("application/json");
//        response.getWriter().write(String.format(
//                "{\"error\": \"Unauthorized\", \"message\": \"%s\", \"timestamp\": \"%s\"}",
//                message,
//                java.time.Instant.now()
//        ));
//    }
//}

package in.luckyseven.julanatoursapi.filters;

import in.luckyseven.julanatoursapi.util.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    private static final List<String> PUBLIC_ENDPOINTS = Arrays.asList(
            "/api/login",
            "/api/register",
            "/api/public/",
            "/error",
            "/actuator/health",
            "/h2-console/",
            "/swagger-ui/",
            "/v3/api-docs/"
    );

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String requestURI = request.getRequestURI();
        String method = request.getMethod();

        log.debug("Processing request: {} {}", method, requestURI);

        // Skip processing for public endpoints
        if (isPublicEndpoint(requestURI) || "OPTIONS".equals(method)) {
            log.debug("Skipping JWT filter for public endpoint: {}", requestURI);
            filterChain.doFilter(request, response);
            return;
        }

        try {
            final String authHeader = request.getHeader("Authorization");
            log.debug("Authorization header present: {}", authHeader != null);

            if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
                String token = authHeader.substring(7);
                log.debug("Processing JWT token");

                String email = jwtUtil.extractUsername(token);
                log.debug("Extracted email from token: {}", email);

                if (email != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = userDetailsService.loadUserByUsername(email);

                    if (jwtUtil.validateToken(token, userDetails)) {
                        UsernamePasswordAuthenticationToken authenticationToken =
                                new UsernamePasswordAuthenticationToken(
                                        userDetails,
                                        null,
                                        userDetails.getAuthorities()
                                );
                        authenticationToken.setDetails(
                                new WebAuthenticationDetailsSource().buildDetails(request)
                        );
                        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                        log.debug("Successfully authenticated user: {}", email);
                    } else {
                        log.warn("Invalid JWT token for user: {}", email);
                    }
                }
            } else {
                log.debug("No Authorization header found for protected endpoint: {}", requestURI);
            }
        } catch (Exception e) {
            log.error("JWT authentication error: {}", e.getMessage());
            // Clear security context on error
            SecurityContextHolder.clearContext();
        }

        filterChain.doFilter(request, response);
    }

    private boolean isPublicEndpoint(String path) {
        return PUBLIC_ENDPOINTS.stream().anyMatch(path::startsWith);
    }
}
