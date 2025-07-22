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
                    <h3 className="mb-4">Get In Touch</h3>
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
                        <p className="mb-0">(+94) 71 9946092</p>
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
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                    {/* <div className="social-links">
                      <h6 className="mb-3">Follow Us</h6>
                      <a href="https://facebook.com/yourpage" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                      <a href="https://twitter.com/yourhandle" className="social-icon"><i className="fab fa-twitter"></i></a>
                      <a href="https://linkedin.com/in/yourprofile" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                      <a href="https://instagram.com/yourprofile" className="social-icon"><i className="fab fa-instagram"></i></a>
                    </div> */}
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
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.789560303381!2d80.360277315363!3d7.999999994424987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTknNTkuOSJOIDgwwrAyMSc0Ni4xIkU!5e0!3m2!1sen!2sus!4v1620000000000"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                      ></iframe>
                    </div>
                    {/* <div className="map-container mt-4">
                      <img src="" alt="Map" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div> */}
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

