import React from 'react';
import './ContactUs.css';

export const ContactUs = () => {
  return (

    <div className="bg-light">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-wrapper">
              <div className="row g-0">
                <div className="col-md-5">
                  <div className="contact-info h-100">
                    <h3 className="mb-4">Get in touch</h3>
                    <p className="mb-4">We'd love to hear from you. Please fill out the form or contact us using the information below.</p>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Address</h6>
                        <p className="mb-0">Kumbukgate<br />Kurunegala</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Phone</h6>
                        <p className="mb-0">071 - 9946092</p>
                      </div>
                    </div>

                    <div className="contact-item">
                      <div className="contact-icon">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h6 className="mb-0">Email</h6>
                        <p className="mb-0">JulanaTours@dushan.com</p>
                      </div>
                    </div>

                    <div className="social-links">
                      <h6 className="mb-3">Follow Us</h6>
                      <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                      <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                      <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                      <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-7">
                  <div className="contact-form">
                    <h3 className="mb-4">Send us a message</h3>
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" placeholder="First Name" />
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" placeholder="Second Name" />
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="@example.com" />
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-control" placeholder="How can we help?" />
                      </div>
                      
                      <div className="mb-4">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" rows="5" placeholder="Your message here..."></textarea>
                      </div>
                      
                      <button type="submit" className="btn btn-submit text-white">Send Message</button>
                    </form>

                    <div className="map-container mt-4">
                      <img src="/api/placeholder/800/200" alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

{/* <body classNameName="bg-light">
  <div className="container py-5">
    <div className="row justify-content-center">
      <div className="col-lg-10">
        <div className="contact-wrapper">
          <div className="row g-0">
            <div className="col-md-5">
              <div className="contact-info h-100">
                <h3 className="mb-4">Get in touch</h3>
                <p className="mb-4">We'd love to hear from you. Please fill out the form or contact us using the information below.</p>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Address</h6>
                    <p className="mb-0">123 Business Avenue, Suite 100<br>New York, NY 10001</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Phone</h6>
                    <p className="mb-0">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <p className="mb-0">contact@company.com</p>
                  </div>
                </div>

                <div className="social-links">
                  <h6 className="mb-3">Follow Us</h6>
                  <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            
            <div className="col-md-7">
              <div className="contact-form">
                <h3 className="mb-4">Send us a message</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="John">
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="Doe">
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="john@example.com">
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" placeholder="How can we help?">
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="5" placeholder="Your message here..."></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-submit text-white">Send Message</button>
                </form>

                <div className="map-container mt-4">
                  <img src="/api/placeholder/800/200" alt="Map" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js"></script>
  )
} */}

