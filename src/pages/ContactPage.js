import React, { useState } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../styles/contactPage.css'
import { NavLink } from 'react-router-dom';


function ContactPage(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted! Name:', name, 'Email:', email, 'Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };
  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
};

  return (

    <div className="rowcontacts">

      <div>   <Header />
      </div>

      <div className="col-sm">
        <div className='sub-banner'>
          <h2 className='title-size'> Contact us</h2>
          <span className='list-text'><NavLink to="/" className="list-text">Home </NavLink> <span class="elementor-icon-list-icon">
            <i aria-hidden="true" class="fas fa-chevron-right"></i></span>
            <NavLink to="/contactPage" className="list-text"> Contact</NavLink></span>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="col-sm "><img width="31" height="44" src="../asset/icon-map.png" classNameName="size-full" alt="" />
            </div>
            <div className="col-sm "><h4>OUR ADDRESS</h4>
              <span className='subtitle'>PSD Building, 2 AlBahr St, Loskia sripur, jamukara.
              </span>
            </div>
          </div>
          <div className="col">
            <div className="col-sm "><img width="31" height="44" src="../asset/icon-phone.png" className="size-full" alt="" />
            </div>
            <div className="col-sm "><h4>OUR PHONE</h4>
              <span className='subtitle'>Office Telephone : 0029129102320
              </span>
            </div>
          </div>
          <div className="col">

            <div className="col-sm "><img width="35" height="44" src="../asset/icon-mail.png" className="size-full" alt="" />
            </div>
            <div className="col-sm "><h4>OUR EMAIL</h4>
              <span className='subtitle'>Main Email : name@website.com</span><p><span className='subtitle'>Inquiries : Info@orex.com</span></p>


            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact-form">


          <h1>Contact Us</h1>
          <p className='list-text'>We'd love to hear from you! Fill out the form below to send us a message.</p>
         {/* Show popup when sending success message */}
         {submitted ? (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={resetForm}>&times;</span>
              <h2>Thank you for your message!</h2>
              <p>We'll get back to you soon.</p>
            </div>
          </div>
           ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className='btn btn-success'>Send Message</button>
          </form>
 )}
        </div>
      </div>

      <Footer />

    </div>

  );
}

export default ContactPage;