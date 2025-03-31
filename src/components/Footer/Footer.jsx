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
        
        <div className="soc_icons footer_soc_icons">
          <a
            href="https://www.facebook.com/people/Kovkaaz/100092172795360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/kovka.az/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.youtube.com/@Kovka_az"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://www.tiktok.com/@kovka.az"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
        <p className="footer_copyr">© Copyright 2020 All Rights Reserved</p>
        <div className="footer_end"></div>
      </div>
    </footer>
  );
};

export default Footer;
