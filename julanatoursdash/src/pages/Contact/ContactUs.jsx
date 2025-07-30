import React, { useState } from 'react';
import './ContactUs.css';
import Footer from '../../components/Footer/Footer';
import Menubar from '../../components/Menubar/Menubar';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  return (
    <>
      <Menubar />
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-background">
            <div className="hero-overlay"></div>
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-title">Get In Touch</h1>
                <p className="hero-subtitle">
                  We're here to help you with all your vehicle rental needs. 
                  Reach out to us anytime!
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <div className="stat-icon">⚡</div>
                    <div className="stat-text">Quick Response</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">🏆</div>
                    <div className="stat-text">Expert Support</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">📞</div>
                    <div className="stat-text">24/7 Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="contact-main">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-grid">
                
                {/* Contact Information */}
                <div className="contact-info-section">
                  <div className="info-header">
                    <h2 className="info-title">Let's Start a Conversation</h2>
                    <p className="info-description">
                      Have questions about our vehicles or services? We'd love to hear from you. 
                      Send us a message and we'll respond as soon as possible.
                    </p>
                  </div>

                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="method-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <div className="method-content">
                        <h4 className="method-title">Visit Our Office</h4>
                        <p className="method-text">Kumbukgate<br />Kurunegala, Sri Lanka</p>
                        <a href="https://maps.google.com" className="method-link">Get Directions</a>
                      </div>
                    </div>

                    <div className="contact-method">
                      <div className="method-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      </div>
                      <div className="method-content">
                        <h4 className="method-title">Call Us</h4>
                        <p className="method-text">(+94) 71 9946092</p>
                        <a href="tel:+94719946092" className="method-link">Call Now</a>
                      </div>
                    </div>

                    <div className="contact-method">
                      <div className="method-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <div className="method-content">
                        <h4 className="method-title">Email Us</h4>
                        <p className="method-text">JulanaTours@dushan.com</p>
                        <a href="mailto:JulanaTours@dushan.com" className="method-link">Send Email</a>
                      </div>
                    </div>

                    <div className="contact-method">
                      <div className="method-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12,6 12,12 16,14"/>
                        </svg>
                      </div>
                      <div className="method-content">
                        <h4 className="method-title">Business Hours</h4>
                        <p className="method-text">
                          Mon - Fri: 8:00 AM - 8:00 PM<br />
                          Sat - Sun: 9:00 AM - 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="social-section">
                    <h4 className="social-title">Follow Us</h4>
                    <div className="social-links">
                      <a href="#" className="social-link facebook">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                      <a href="#" className="social-link twitter">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="#" className="social-link instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                      <a href="#" className="social-link linkedin">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="contact-form-section">
                  <div className="form-container">
                    <div className="form-header">
                      <h2 className="form-title">Send us a Message</h2>
                      <p className="form-description">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="success-message">
                        <div className="success-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22,4 12,14.01 9,11.01"/>
                          </svg>
                        </div>
                        <div>
                          <h4>Message Sent Successfully!</h4>
                          <p>Thank you for reaching out. We'll get back to you soon.</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="contact-form">
                      <div className="form-row">
                        <div className="form-group">
                          <label className="form-label">First Name *</label>
                          <input 
                            type="text" 
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="form-input" 
                            placeholder="Enter your first name"
                            required 
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Last Name *</label>
                          <input 
                            type="text" 
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="form-input" 
                            placeholder="Enter your last name"
                            required 
                          />
                        </div>
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input" 
                          placeholder="your.email@example.com"
                          required 
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input" 
                          placeholder="+94 XX XXXXXXX" 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Subject *</label>
                        <input 
                          type="text" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="form-input" 
                          placeholder="How can we help you?"
                          required 
                        />
                      </div>
                      
                      <div className="form-group">
                        <label className="form-label">Message *</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className="form-textarea" 
                          rows="5" 
                          placeholder="Tell us more about your inquiry..."
                          required
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="spinner"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <line x1="22" y1="2" x2="11" y2="13"/>
                              <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                            </svg>
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <div className="container">
            <div className="map-wrapper">
              <div className="map-header">
                <h3 className="map-title">Find Our Location</h3>
                <p className="map-description">Visit our office for personalized service and vehicle viewing.</p>
              </div>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.789560303381!2d80.360277315363!3d7.999999994424987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTknNTkuOSJOIDgwwrAyMSc0Ni4xIkU!5e0!3m2!1sen!2sus!4v1620000000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
                <div className="map-overlay">
                  <div className="location-card">
                    <div className="location-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div className="location-details">
                      <h4>Julana Tours</h4>
                      <p>Kumbukgate, Kurunegala</p>
                      <a href="https://maps.google.com" className="directions-btn">Get Directions</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

// import React from 'react';
// import './ContactUs.css';
// import Footer from '../../components/Footer/Footer';

// export const ContactUs = () => {
//   return (
//     <>
//     <div className="bg-light">
//       <div className="container py-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-10">
//             <div className="contact-wrapper">
//               <div className="row g-0">
//                 <div className="col-md-5">
//                   <div className="contact-info h-100">
//                     <h3 className="mb-4">Get In Touch</h3>
//                     <p className="mb-4">We'd love to hear from you. Please fill out the form or contact us using the information below.</p>

//                     <div className="contact-item">
//                       <div className="contact-icon">
//                         <i className="fas fa-map-marker-alt"></i>
//                       </div>
//                       <div>
//                         <h6 className="mb-0">Address</h6>
//                         <p className="mb-0">Kumbukgate<br />Kurunegala</p>
//                       </div>
//                     </div>

//                     <div className="contact-item">
//                       <div className="contact-icon">
//                         <i className="fas fa-phone"></i>
//                       </div>
//                       <div>
//                         <h6 className="mb-0">Phone</h6>
//                         <p className="mb-0">(+94) 71 9946092</p>
//                       </div>
//                     </div>

//                     <div className="contact-item">
//                       <div className="contact-icon">
//                         <i className="fas fa-envelope"></i>
//                       </div>
//                       <div>
//                         <h6 className="mb-0">Email</h6>
//                         <p className="mb-0">JulanaTours@dushan.com</p>
//                       </div>
//                     </div>

                    
//                     {/* <div className="social-links">
//                       <h6 className="mb-3">Follow Us</h6>
//                       <a href="https://facebook.com/yourpage" className="social-icon"><i className="fab fa-facebook-f"></i></a>
//                       <a href="https://twitter.com/yourhandle" className="social-icon"><i className="fab fa-twitter"></i></a>
//                       <a href="https://linkedin.com/in/yourprofile" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
//                       <a href="https://instagram.com/yourprofile" className="social-icon"><i className="fab fa-instagram"></i></a>
//                     </div> */}
//                   </div>
//                 </div>
                
//                 <div className="col-md-7">
//                   <div className="contact-form">
//                     <h3 className="mb-4">Send us a message</h3>
//                     <form>
//                       <div className="row">
//                         <div className="col-md-6 mb-3">
//                           <label className="form-label">First Name</label>
//                           <input type="text" className="form-control" placeholder="First Name" />
//                         </div>
//                         <div className="col-md-6 mb-3">
//                           <label className="form-label">Last Name</label>
//                           <input type="text" className="form-control" placeholder="Second Name" />
//                         </div>
//                       </div>
                      
//                       <div className="mb-3">
//                         <label className="form-label">Email</label>
//                         <input type="email" className="form-control" placeholder="@example.com" />
//                       </div>

//                       <div className="mb-3">
//                         <label className="form-label">Contact Number</label>
//                         <input type="phoneNo" className="form-control" placeholder="+xx - xxxxxxx" />
//                       </div>
                      
//                       <div className="mb-3">
//                         <label className="form-label">Subject</label>
//                         <input type="text" className="form-control" placeholder="How can we help?" />
//                       </div>
                      
//                       <div className="mb-4">
//                         <label className="form-label">Message</label>
//                         <textarea className="form-control" rows="5" placeholder="Your message here..."></textarea>
//                       </div>
                      
//                       <button type="submit" className="btn btn-submit text-white">Send Message</button>
//                     </form>

//                     <div className="map-container mt-4">
//                       <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.789560303381!2d80.360277315363!3d7.999999994424987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTknNTkuOSJOIDgwwrAyMSc0Ni4xIkU!5e0!3m2!1sen!2sus!4v1620000000000"
//                         width="100%"
//                         height="300"
//                         style={{ border: 0 }}
//                         allowFullScreen=""
//                         loading="lazy"
//                       ></iframe>
//                     </div>
//                     {/* <div className="map-container mt-4">
//                       <img src="" alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//                     </div> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Footer />
//     </>

    
//   );
// };

// export default ContactUs;

// import React from 'react';
// import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
// import './ContactUs.css';

// export const ContactUs = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <div className="container mx-auto py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <div className="grid md:grid-cols-5 gap-0">
//               <div className="md:col-span-2 bg-blue-600 text-white p-8">
//                 <div className="h-full flex flex-col">
//                   <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
//                   <p className="mb-8 text-blue-100">We'd love to hear from you. Please fill out the form or contact us using the information below.</p>

//                   <div className="space-y-6 flex-grow">
//                     <div className="flex items-start space-x-4">
//                       <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//                         <MapPin className="w-5 h-5" />
//                       </div>
//                       <div>
//                         <h6 className="font-semibold mb-1">Address</h6>
//                         <p className="text-blue-100">Kumbukgate<br />Kurunegala</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-4">
//                       <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//                         <Phone className="w-5 h-5" />
//                       </div>
//                       <div>
//                         <h6 className="font-semibold mb-1">Phone</h6>
//                         <p className="text-blue-100">(+94) 71 9946092</p>
//                       </div>
//                     </div>

//                     <div className="flex items-start space-x-4">
//                       <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//                         <Mail className="w-5 h-5" />
//                       </div>
//                       <div>
//                         <h6 className="font-semibold mb-1">Email</h6>
//                         <p className="text-blue-100">JulanaTours@dushan.com</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-8">
//                     <h6 className="font-semibold mb-4">Follow Us</h6>
//                     <div className="flex space-x-4">
//                       <a href="https://facebook.com/yourpage" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
//                         <Facebook className="w-5 h-5" />
//                       </a>
//                       <a href="https://twitter.com/yourhandle" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
//                         <Twitter className="w-5 h-5" />
//                       </a>
//                       <a href="https://linkedin.com/in/yourprofile" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
//                         <Linkedin className="w-5 h-5" />
//                       </a>
//                       <a href="https://instagram.com/yourprofile" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
//                         <Instagram className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="md:col-span-3 p-8">
//                 <div>
//                   <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h3>
//                   <div className="space-y-4">
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
//                         <input 
//                           type="text" 
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
//                           placeholder="First Name" 
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
//                         <input 
//                           type="text" 
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
//                           placeholder="Last Name" 
//                         />
//                       </div>
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                       <input 
//                         type="email" 
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
//                         placeholder="example@email.com" 
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
//                       <input 
//                         type="tel" 
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
//                         placeholder="+94 - xxxxxxx" 
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
//                       <input 
//                         type="text" 
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" 
//                         placeholder="How can we help?" 
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
//                       <textarea 
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" 
//                         rows="5" 
//                         placeholder="Your message here..."
//                       ></textarea>
//                     </div>
                    
//                     <button 
//                       type="button" 
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
//                       onClick={() => alert('Form submitted! (This is just a demo)')}
//                     >
//                       Send Message
//                     </button>
//                   </div>

//                   <div className="mt-8">
//                     <iframe
//                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.789560303381!2d80.360277315363!3d7.999999994424987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTknNTkuOSJOIDgwwrAyMSc0Ni4xIkU!5e0!3m2!1sen!2sus!4v1620000000000"
//                       width="100%"
//                       height="300"
//                       className="rounded-lg border-0 shadow-md"
//                       allowFullScreen=""
//                       loading="lazy"
//                     ></iframe>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
