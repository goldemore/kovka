import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

AOS.init({ duration: 800 });


const ContactPage = () => {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm("mkgrayre"); // Заменить на твой ID
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(()=>{

  }, state)

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        icon: "success",
        title: "Mesaj uğurla göndərildi!",
        showConfirmButton: false,
        timer: 2500,
      });
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    }
  }, [state.succeeded]);
  
  
  return (
    <section className="hero_contact_section">
      <div className="navbar_imitation" />
      <div className="container hero_about_container hero_contatct_section">
        <h1 className="project_h1 tracking-in-contract">{t("contactUs")}</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Adınız"
            className="contact-input"
            required
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefon"
            className="contact-input"
            required
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="contact-input"
            required
            data-aos="fade-up"
            data-aos-delay="300"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Mesajınız"
            className="contact-input"
            required
            data-aos="fade-up"
            data-aos-delay="400"
          />
          <ValidationError field="email" errors={state.errors} />
          <ValidationError field="message" errors={state.errors} />
          <button
            type="submit"
            className="submit-btn"
            disabled={state.submitting}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Göndər
          </button>
        </form>
        <div className="iframe__address">
          <h3 style={{ fontSize: "18px", color: "white", marginTop: "20px" }}>
            Ünvan: Azərbaycan, Bakı ş.
          </h3>
          <iframe
            src="https://www.google.com/maps?q=Baku, Azerbaijan&output=embed"
            style={{
              width: "100%",
              height: "220px",
              border: "none",
              marginTop: "15px",
            }}
            allowFullScreen
            title="Google Maps location - Baku, Azerbaijan"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
