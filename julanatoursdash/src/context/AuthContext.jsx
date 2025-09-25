import React, { createContext, useContext, useEffect, useState } from 'react';
import authService from "../service/authService";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const currentUser = authService.getCurrentUser();
        const token = authService.getToken();
        
        console.log('Initializing auth - stored user:', currentUser);
        console.log('Initializing auth - stored token:', token ? 'exists' : 'missing');
        
        if (currentUser && token) {
          setUser(currentUser);
          setIsAuthenticated(true);
          console.log('User authenticated from localStorage:', currentUser);
        } else {
          setUser(null);
          setIsAuthenticated(false);
          console.log('No authentication found');
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        authService.logout();
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      console.log('AuthContext: Attempting login...');
      
      const result = await authService.login(credentials);
      console.log('AuthContext: Login result from service:', result);
      
      // Get the user data that was stored by authService
      const storedUser = authService.getCurrentUser();
      console.log('AuthContext: User data from storage after login:', storedUser);
      
      if (storedUser) {
        setUser(storedUser);
        setIsAuthenticated(true);
        console.log('AuthContext: User state updated:', storedUser);
      } else {
        console.error('AuthContext: No user data found after login');
        throw new Error('Login succeeded but no user data was stored');
      }
      
      return result;
    } catch (error) {
      console.error('AuthContext: Login failed:', error);
      setUser(null);
      setIsAuthenticated(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData) => {
    try {
      setLoading(true);
      console.log('AuthContext: Attempting registration...');
      
      const result = await authService.register(userData);
      console.log('AuthContext: Registration successful:', result);
      
      return result;
    } catch (error) {
      console.error('AuthContext: Registration failed:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    console.log('AuthContext: Logging out user...');
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  // Debug the current state
  console.log('AuthContext current state:', { user, isAuthenticated, loading });

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};