import React, { useState } from 'react';


function ContactPage(props) {
            const [name, setName] = useState('');
            const [email, setEmail] = useState('');
            const [message, setMessage] = useState('');
          
            const handleSubmit = (event) => {
              event.preventDefault();
           console.log('Form submitted! Name:', name, 'Email:', email, 'Message:', message);
              setName('');
              setEmail('');
              setMessage('');
            };
        
          return (
            <div className="contact-form">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Fill out the form below to send us a message.</p>
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
              <button type="submit">Send Message</button>
            </form>
            <p>You can also reach us at:</p>
            <ul>
              <li>Phone: (555) 555-5555</li>
              <li>Email: contact@example.com</li>
            </ul>
          </div>
          );
        }
        
export default ContactPage;