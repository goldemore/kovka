import Aos from "aos";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  once: true,
});

const Project2 = () => {
  return (
    <section className="project2_section">
      <div className="container">
        <div className="footer_contacts">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="800"
            className="place_address"
          >
            <FaMapMarkerAlt />
            <p>Azərbaycan, Bakı ş.</p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="header_contacts_phones"
          >
            <FaPhoneAlt />
            <div>
              <a
                href="tel:+994500000000"
                className="contact_item footer_contact_item"
              >
                +99450-00-00
              </a>
              <a
                href="tel:+994500000000"
                className="contact_item footer_contact_item"
              >
                +99450-00-00
              </a>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="800"
            className="mail_icons"
          >
            <a
              href="mailto:info@kovka.az"
              className="contact_item footer_contact_item"
            >
              <FaEnvelope /> info@kovka.az
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project2;
