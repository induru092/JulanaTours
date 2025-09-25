// import React, { useState } from 'react';
// import './Register.css';
// import authService from "../../service/authService";

// export const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false
//   });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic validation
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
    
//     if (!formData.agreeToTerms) {
//       alert('Please agree to the terms and conditions!');
//       return;
//     }
    
//     console.log('Register attempt:', formData);
//     // Add your registration logic here
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword);
//   };

//   return (
//     <div className="register-container">
//       <div className="register-card">
//         <div className="register-header">
//           <div className="register-icon">
//             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
//               <circle cx="8.5" cy="7" r="4"/>
//               <path d="M20 8v6M23 11h-6"/>
//             </svg>
//           </div>
//           <h1 className="register-title">Create Account</h1>
//           <p className="register-subtitle">Join us and start your journey today</p>
//         </div>

//         <form className="register-form" onSubmit={handleSubmit}>
//           <div className="name-group">
//             <div className="form-group">
//               <label className="form-label">First Name</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="form-input"
//                   placeholder="Enter first name"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <div className="input-icon">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
//                     <circle cx="12" cy="7" r="4"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             <div className="form-group">
//               <label className="form-label">Last Name</label>
//               <div className="input-wrapper">
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="form-input"
//                   placeholder="Enter last name"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <div className="input-icon">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
//                     <circle cx="12" cy="7" r="4"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Email Address</label>
//             <div className="input-wrapper">
//               <input
//                 type="email"
//                 name="email"
//                 className="form-input"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//               <div className="input-icon">
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
//                   <polyline points="22,6 12,13 2,6"/>
//                 </svg>
//               </div>
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Password</label>
//             <div className="input-wrapper">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 className="form-input"
//                 placeholder="Create a password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//                 minLength="6"
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? (
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
//                     <line x1="1" y1="1" x2="23" y2="23"/>
//                   </svg>
//                 ) : (
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                     <circle cx="12" cy="12" r="3"/>
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="form-group">
//             <label className="form-label">Confirm Password</label>
//             <div className="input-wrapper">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 className="form-input"
//                 placeholder="Confirm your password"
//                 value={formData.confirmPassword}
//                 onChange={handleInputChange}
//                 required
//               />
//               <button
//                 type="button"
//                 className="password-toggle"
//                 onClick={toggleConfirmPasswordVisibility}
//               >
//                 {showConfirmPassword ? (
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
//                     <line x1="1" y1="1" x2="23" y2="23"/>
//                   </svg>
//                 ) : (
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
//                     <circle cx="12" cy="12" r="3"/>
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="form-options">
//             <div className="checkbox-wrapper">
//               <input
//                 type="checkbox"
//                 id="agreeToTerms"
//                 name="agreeToTerms"
//                 className="form-checkbox"
//                 checked={formData.agreeToTerms}
//                 onChange={handleInputChange}
//                 required
//               />
//               <label htmlFor="agreeToTerms" className="checkbox-label">
//                 I agree to the <a href="#" className="terms-link">Terms of Service</a> and <a href="#" className="terms-link">Privacy Policy</a>
//               </label>
//             </div>
//           </div>

//           <button type="submit" className="register-button">
//             <span>Create Account</span>
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//               <path d="M5 12h14M12 5l7 7-7 7"/>
//             </svg>
//           </button>

//           <div className="divider">
//             <span>or sign up with</span>
//           </div>

//           <div className="social-buttons">
//             <button type="button" className="social-button google">
//               <svg width="20" height="20" viewBox="0 0 24 24">
//                 <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                 <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                 <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                 <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//               </svg>
//               Google
//             </button>
//             <button type="button" className="social-button facebook">
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
//                 <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
//               </svg>
//               Facebook
//             </button>
//           </div>

//           <div className="login-link">
//             Already have an account? <a href="#" className="login-text">Sign in</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import './Register.css';
import authService from "../../service/authService";

export const Register = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = 'First name must be at least 2 characters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = 'Last name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms of Service and Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   if (!validateForm()) {
  //     return;
  //   }

  //   setIsSubmitting(true);
  //   setErrors({});

  //   try {
  //     const registrationData = {
  //       firstName: formData.firstName.trim(),
  //       lastName: formData.lastName.trim(),
  //       email: formData.email.trim().toLowerCase(),
  //       password: formData.password
  //     };

  //     // Call your registration service
  //     const response = await authService.register(registrationData);
      
  //     setSuccessMessage('Account created successfully! Redirecting to login...');
      
  //     // Redirect to login page after successful registration
  //     setTimeout(() => {
  //       navigate('/login', { 
  //         state: { 
  //           message: 'Registration successful! Please sign in to your account.',
  //           email: registrationData.email
  //         } 
  //       });
  //     }, 2000);

  //   } catch (error) {
  //     console.error('Registration error:', error);
      
  //     // Handle different types of errors
  //     if (error.response?.status === 409) {
  //       setErrors({ email: 'An account with this email already exists' });
  //     } else if (error.response?.status === 400) {
  //       const errorData = error.response.data;
  //       if (errorData.errors) {
  //         setErrors(errorData.errors);
  //       } else {
  //         setErrors({ general: errorData.message || 'Invalid registration data' });
  //       }
  //     } else if (error.message) {
  //       setErrors({ general: error.message });
  //     } else {
  //       setErrors({ general: 'Registration failed. Please try again.' });
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  
const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }

  setIsSubmitting(true);
  setErrors({});

  try {
    const registrationData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password
    };

    console.log('Frontend: Sending registration data:', registrationData);

    // Call your registration service
    const response = await authService.register(registrationData);
    
    setSuccessMessage('Account created successfully! Redirecting to login...');
    
    // Redirect to login page after successful registration
    setTimeout(() => {
      navigate('/login', { 
        state: { 
          message: 'Registration successful! Please sign in to your account.',
          email: registrationData.email
        } 
      });
    }, 2000);

  } catch (error) {
    console.error('Registration error:', error);
    
    // Enhanced error handling with detailed logging
    if (error.status === 409) {
      setErrors({ email: 'An account with this email already exists' });
    } else if (error.status === 400) {
      // Handle validation errors from backend
      if (error.details?.errors) {
        // If backend returns field-specific errors
        setErrors(error.details.errors);
      } else if (error.details?.message) {
        // If backend returns general message
        setErrors({ general: error.details.message });
      } else {
        setErrors({ general: error.message || 'Invalid registration data' });
      }
    } else if (error.status === 500) {
      setErrors({ general: 'Server error. Please try again later.' });
    } else {
      setErrors({ general: error.message || 'Registration failed. Please try again.' });
    }
    
    // Log full error for debugging
    console.error('Full error object:', {
      message: error.message,
      status: error.status,
      details: error.details
    });
  } finally {
    setIsSubmitting(false);
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    // Implement social login logic
  };

  return (
    <div className="register-container">
      <div className="register-card">
        {/* Back to Home Link */}
        <div className="back-navigation">
          <Link to="/" className="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="register-header">
          <div className="register-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="8.5" cy="7" r="4"/>
              <path d="M20 8v6M23 11h-6"/>
            </svg>
          </div>
          <h1 className="register-title">Create Account</h1>
          <p className="register-subtitle">Join us and start your journey today</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          {errors.general && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {errors.general}
            </div>
          )}

          {successMessage && (
            <div className="success-message">
              <span className="success-icon">✅</span>
              {successMessage}
            </div>
          )}

          <div className="name-group">
            <div className="form-group">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <div className="input-wrapper">
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  className={`form-input ${errors.firstName ? 'error' : ''}`}
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  autoComplete="given-name"
                  autoFocus
                />
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              {errors.firstName && (
                <span className="field-error">{errors.firstName}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <div className="input-wrapper">
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className={`form-input ${errors.lastName ? 'error' : ''}`}
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  autoComplete="family-name"
                />
                <div className="input-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
              </div>
              {errors.lastName && (
                <span className="field-error">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <div className="input-wrapper">
              <input
                id="email"
                type="email"
                name="email"
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                autoComplete="email"
              />
              <div className="input-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
            </div>
            {errors.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <div className="input-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                className={`form-input ${errors.password ? 'error' : ''}`}
                placeholder="Create a password"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength="6"
                disabled={isSubmitting}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                disabled={isSubmitting}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <span className="field-error">{errors.password}</span>
            )}
            <div className="password-strength">
              <small>Password must contain at least 6 characters with uppercase, lowercase, and number</small>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="input-wrapper">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
                disabled={isSubmitting}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="field-error">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="form-options">
            <div className="checkbox-wrapper">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                className={`form-checkbox ${errors.agreeToTerms ? 'error' : ''}`}
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
              <label htmlFor="agreeToTerms" className="checkbox-label">
                I agree to the{' '}
                <Link to="/terms" className="terms-link" target="_blank">
                  Terms of Service
                </Link>
                {' '}and{' '}
                <Link to="/privacy" className="terms-link" target="_blank">
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.agreeToTerms && (
              <span className="field-error">{errors.agreeToTerms}</span>
            )}
          </div>

          <button 
            type="submit" 
            className={`register-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Create Account</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </>
            )}
          </button>

          <div className="divider">
            <span>or sign up with</span>
          </div>

          <div className="social-buttons">
            <button 
              type="button" 
              className="social-button google" 
              onClick={() => handleSocialLogin('google')}
              disabled={isSubmitting}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button 
              type="button" 
              className="social-button facebook" 
              onClick={() => handleSocialLogin('facebook')}
              disabled={isSubmitting}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877f2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>

          <div className="login-link">
            Already have an account?{' '}
            <Link to="/login" className="login-text">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;