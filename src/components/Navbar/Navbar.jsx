import React from "react";
import "../../style.css";
import logo from "../../images/logo/logo200.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <header>
        <div className="to_container"></div>
        {/* Шаблон контейнера */}
        <div className="container navbar_container">
          {/* Лого сайта и доступные языки */}
          <div className="logo_lang">
            <div className="logo_img">
              <Link to="/">
                <img src={logo} alt="kovka.az logo" />
              </Link>
            </div>
            {/* Меню сайта и переход в соц сети */}
            <div className="nav_bar_icons">
              <nav>
                <ul>
                  <li>Əsas</li>
                  <li>Haqqımızda</li>
                  <li>Lahiyələr</li>
                  <li>Əlaqə</li>
                  <li><FaSearch/></li>
                </ul>
              </nav>
            </div>
            <div className="langs_menu_contacts">
              <div className="header_contacts">
                <div className="header_contacts_phones">
                  <FaPhoneAlt />
                  <div>
                    <a href="tel:+994500000000" className="contact_item">
                      +99450-00-00
                    </a>
                    <a href="tel:+994500000000" className="contact_item">
                      +99450-00-00
                    </a>
                  </div>
                </div>

                <div className="mail_icons">
                  <a href="mailto:info@kovka.az" className="contact_item">
                    <FaEnvelope /> info@kovka.az
                  </a>
                  <div className="soc_icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTiktok />
                  </div>
                </div>
              </div>

              <div className="langs_menu">
                <button aria-label="Azərbaycan dilini seç">AZ</button>
                <button aria-label="Choose English language">EN</button>
                <button aria-label="Выбрать русский язык">RU</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
