import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

const authService = {
  async login(credentials) {
    try {
      console.log('authService: Attempting login with:', credentials);
      const response = await apiClient.post('/login', credentials);
      console.log('authService: Backend response:', response.data);
      
      if (response.data && response.data.token) {
        // Store the token
        localStorage.setItem('authToken', response.data.token);
        
        // Store user data in the format that getCurrentUser() will return
        const userData = {
          id: response.data.user?.id,
          name: response.data.user?.name,
          email: response.data.user?.email,
          token: response.data.token
        };
        
        localStorage.setItem('user', JSON.stringify(userData));
        console.log('authService: Stored user data:', userData);
        
        return response.data;
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('authService: Login error:', error);
      throw {
        message: error.response?.data?.error || 'Login failed',
        status: error.response?.status || 500
      };
    }
  },

  async register(userData) {
    try {
      console.log('authService: Attempting registration with:', userData);
      
      // 🔥 FIX: Transform frontend data to match backend expectations
      const backendPayload = {
        name: `${userData.firstName} ${userData.lastName}`.trim(), // Combine names
        email: userData.email,
        password: userData.password
      };
      
      console.log('authService: Transformed payload for backend:', backendPayload);
      
      const response = await apiClient.post('/register', backendPayload);
      console.log('authService: Registration response:', response.data);
      return response.data;
    } catch (error) {
      console.error('authService: Registration error:', error);
      
      // Enhanced error handling for better debugging
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error status:', error.response.status);
        
        throw {
          message: error.response.data?.message || error.response.data?.error || 'Registration failed',
          status: error.response.status,
          details: error.response.data
        };
      } else {
        throw {
          message: error.message || 'Network error occurred',
          status: 500
        };
      }
    }
  },

  logout() {
    console.log('authService: Logging out...');
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    const user = userStr ? JSON.parse(userStr) : null;
    console.log('authService: getCurrentUser returning:', user);
    return user;
  },

  isAuthenticated() {
    const token = localStorage.getItem('authToken');
    const isAuth = !!token;
    console.log('authService: isAuthenticated:', isAuth);
    return isAuth;
  },

  getToken() {
    const token = localStorage.getItem('authToken');
    console.log('authService: getToken:', token ? 'exists' : 'missing');
    return token;
  }
};

export default authService;






// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api';

// const apiClient = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Request interceptor
// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('authToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Response interceptor
// apiClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem('authToken');
//       localStorage.removeItem('user');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

// const authService = {
//   async login(credentials) {
//     try {
//       console.log('authService: Attempting login with:', credentials);
//       const response = await apiClient.post('/login', credentials);
//       console.log('authService: Backend response:', response.data);
      
//       if (response.data && response.data.token) {
//         // Store the token
//         localStorage.setItem('authToken', response.data.token);
        
//         // Store user data in the format that getCurrentUser() will return
//         const userData = {
//           id: response.data.user?.id,
//           name: response.data.user?.name,
//           email: response.data.user?.email,
//           token: response.data.token
//         };
        
//         localStorage.setItem('user', JSON.stringify(userData));
//         console.log('authService: Stored user data:', userData);
        
//         return response.data;
//       } else {
//         throw new Error('Invalid response from server');
//       }
//     } catch (error) {
//       console.error('authService: Login error:', error);
//       throw {
//         message: error.response?.data?.error || 'Login failed',
//         status: error.response?.status || 500
//       };
//     }
//   },

//   async register(userData) {
//     try {
//       console.log('authService: Attempting registration with:', userData);
//       const response = await apiClient.post('/register', userData);
//       console.log('authService: Registration response:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('authService: Registration error:', error);
//       throw {
//         message: error.response?.data?.error || 'Registration failed',
//         status: error.response?.status || 500
//       };
//     }
//   },

//   logout() {
//     console.log('authService: Logging out...');
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('user');
//     window.location.href = '/login';
//   },

//   getCurrentUser() {
//     const userStr = localStorage.getItem('user');
//     const user = userStr ? JSON.parse(userStr) : null;
//     console.log('authService: getCurrentUser returning:', user);
//     return user;
//   },

//   isAuthenticated() {
//     const token = localStorage.getItem('authToken');
//     const isAuth = !!token;
//     console.log('authService: isAuthenticated:', isAuth);
//     return isAuth;
//   },

//   getToken() {
//     const token = localStorage.getItem('authToken');
//     console.log('authService: getToken:', token ? 'exists' : 'missing');
//     return token;
//   }
// };

// export default authService;