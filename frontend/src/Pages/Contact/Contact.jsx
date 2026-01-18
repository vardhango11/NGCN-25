import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
        "https://sanshi-h2o-backend.onrender.com/api/contact",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      if (response.status === 201 || response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* 1. Hero Section (Gradient Background) */}
      <header className="hero-header">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            We're excited to connect with researchers, partners, and anyone interested in future computing and networking. Whether you're exploring collaboration or have questions, reach out — we’d love to hear from you.          </p>
        </div>
      </header>

      <div className="main-content-area">
        {/* 2. Overlapping Form Card */}
        <div className="form-card-wrapper">
          <div className="form-header">
            <h3>Send us a Message</h3>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Please input your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                id="msg"
                rows="5"
                placeholder="Please enter your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-submit">
              <button type="submit">
                <span>Send Message</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>

            {status && <p className="status-text">{status}</p>}
          </form>
        </div>

        {/* 3. Info Grid (3 Columns) */}
        <div className="info-section">
          <div className="info-title">
            <h3>Get in Touch</h3>
            <div className="divider"></div>
          </div>

          <div className="info-grid">
            {/* Location Card */}
            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h4>Visit Us</h4>
              <p className="details-text">
                CSE BLOCK, IIITDM Kurnool<br />
                Jagannathagattu Hill<br />
                Kurnool - 518 008, Andhra Pradesh, India.
              </p>
              <div className="map-preview">
                {/* Using a static placeholder image to match layout */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZM176U1_FySECMOhxvUR2xZBvSGVjTQLn2v1fuzjh4dvtaTsWoyQYg5GaXIl8EGeDVytaFh213AFc6NAszbopiSCB98-SYeRJ6gU0mIruBkFQqRKAhxY3GqEdZjhTw9kWNklgG7Y7plWhqFGVZY_cU_2laWAhzOIO_SUkV1NDwdj12oiIOIEWHX76U-37anBfkeW03xxywY3h0x2yo7tdiHEmfP6JZWHerMJ58x5lb2ldMEs2ArJH5bc3pZlH1Xcif51bJwYCeVYP"
                  alt="Kurnool Campus Map"
                />
                <span className="map-btn">Open in Maps</span>
              </div>
            </div>

            {/* Reach Out / Socials Card */}
            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-at"></i>
              </div>
              <h4>Reach Out</h4>

              <div className="contact-person">
                <span className="tiny-label">FOUNDER</span>
                <a href="mailto:srinivasadesikan@iiitk.ac.in" className="contact-link">Dr. K. E. Srinivasa Desikan</a>
                <span className="email-small">srinivasadesikan@iiitk.ac.in</span>
              </div>

              <div className="contact-person">
                <span className="tiny-label">GENERAL SUPPORT</span>
                <a href="mailto:ngcngroup@gmail.com" className="contact-link">ngcngroup@gmail.com</a>
              </div>

              <div className="social-icons-row">
                <a href="https://www.linkedin.com/company/next-gen-computing-and-networking-ngcn/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://x.com/NGCN_Group">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="https://www.instagram.com/ngcngroup">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="info-card">
              <div className="icon-wrapper">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h4>Working Hours</h4>

              <div className="hours-list">
                <div className="hours-row">
                  <span>Monday - Friday</span>
                  <span className="time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span className="time">10:00 AM - 5:00 PM</span>
                </div>
                <div className="hours-row closed">
                  <span>Sunday</span>
                  <span className="status-closed">Closed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;