import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Обработка отправки формы
    console.log("Form Submitted:", formData);
  };

  return (
    <>
      <section className="hero_about_section">
        <div className="container hero_about_container">
          <h1 className="project_h1">BİZİMLƏ ƏLAQƏ</h1>
        </div>
      </section>
      <section className="hero_about_section_content">
        <div className="container contact_container">
          {/* <div className="contact-info">
            <div className="contact-item">
              <FaPhone size={20} color="#e8ac39" />
              <span className="contact-text">+994 50 000 00 00</span>
            </div>
            <div className="contact-item">
              <FaEnvelope size={20} color="#e8ac39" />
              <span className="contact-text">email@example.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt size={20} color="#e8ac39" />
              <span className="contact-text">Bakı, Azərbaycan</span>
            </div>
          </div> */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Adınız"
              className="contact-input"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefon"
              className="contact-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="E-mail"
              className="contact-input"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesajınız"
              className="contact-input"
              required
            />
            <button type="submit" className="submit-btn">
              Göndər
            </button>
          </form>
        </div>
        <div className="container">
          <iframe
            src="https://www.google.com/maps?q=Baku, Azerbaijan&output=embed"
            style={{ width: "100%", height: "300px", border: "none", marginTop:'15px' }}
            allowFullScreen
            title="Google Maps location - Baku, Azerbaijan"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
