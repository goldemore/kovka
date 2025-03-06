import React from "react";
import logo from "../../images/logo/anvil_cut.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <div className="footer_logo">
          <img src={logo} alt="" />

          <div className="footer_contacts">
            <div className="header_contacts_phones">
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

            <div className="mail_icons">
              <a
                href="mailto:info@kovka.az"
                className="contact_item footer_contact_item"
              >
                <FaEnvelope /> info@kovka.az
              </a>
            </div>
          </div>
        </div>
        <div className="soc_icons footer_soc_icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTiktok />
        </div>
        <p className="footer_copyr">© Copyright 2020 All Rights Reserved</p>
        <div className="footer_end"></div>
      </div>
    </footer>
  );
};

export default Footer;
