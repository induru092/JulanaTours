import React from 'react';
import './ContactUs.css';
import Footer from '../../components/Footer/Footer';

export const ContactUs = () => {
  return (
    <>
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
                        <label className="form-label">Contact Number</label>
                        <input type="phoneNo" className="form-control" placeholder="+xx - xxxxxxx" />
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
    <Footer />
    </>

    
  );
};

export default ContactUs;

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
