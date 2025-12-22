import React, { useEffect, useRef } from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const staticUserData = {
  name: "Anupam Chittora",
  email: "2022uec1452@mnit.ac.in",
  phoneNumber: "+91 6350377489",
  linkedinLink: "https://www.linkedin.com/in/anupamchittora"
};

const ContactMe: React.FC = () => {
  const userData = staticUserData;
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_4juf53k',
      'template_ifz0kdi',
      formRef.current!,
      'Lb66oLXTir33I1zZl'
    ).then(() => {
      alert("Message sent successfully!");
      formRef.current?.reset();
    }, (error) => {
      alert("Failed to send message: " + error.text);
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="contact-container">
      <div className="top-section">
        <div className="linkedin-badge-wrapper">
          <div className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme="dark"
            data-type="HORIZONTAL"
            data-vanity="anupamchittora"
            data-version="v1">
            <a className="badge-base__link LI-simple-link" href={userData.linkedinLink}>
              
            </a>
          </div>
        </div>

        <div className="contact-info">
          <p className="contact-header">I'm always up for a chat or a coffee! Feel free to reach out.</p>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${userData.email}`} className="contact-link">{userData.email}</a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <a href={`tel:${userData.phoneNumber}`} className="contact-link">{userData.phoneNumber}</a>
            </div>
            <div className="contact-fun">
              <p>Or catch up over a coffee ☕</p>
              <FaCoffee className="coffee-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Centered Form Below */}
      <div className="form-section">
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <h2>Contact Me</h2>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter name" required />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter email" required />
          <label>Your Message</label>
          <textarea name="message" placeholder="Type your message..." required></textarea>
          <button type="submit">
            <strong>Send Message</strong> <FaEnvelope />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
