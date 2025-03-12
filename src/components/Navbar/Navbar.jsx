import React, { useEffect, useState } from "react";
import "../../style.css";
import logo from "../../images/logo/logo200.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

import { FaPhoneAlt, FaEnvelope, FaSearch } from "react-icons/fa";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Эффект при прокрутке 


 const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
   // Функция для отслеживания прокрутки
   const handleScroll = () => {
     if (window.scrollY > 50) { // если прокрутка больше 50px
       setIsScrolled(true);
     } else {
       setIsScrolled(false);
     }
   };

   // Добавление события прокрутки
   window.addEventListener("scroll", handleScroll);

   // Очистка события при размонтировании компонента
   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

 console.log(isScrolled);
 

  return (
    <>
      <header
       className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-default"}`}
        style={
          !isHomePage
            ? { position:'relative', backgroundColor: "#1a242d" }
            : {}
        }
      >
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
              <nav className="nav_manu">
                <ul>
                  <Link to="/">
                    <li>Əsas</li>
                  </Link>
                  <Link to="/about">
                    <li>Haqqımızda</li>
                  </Link>
                  <Link to="/projects">
                    <li>Lahiyələr</li>
                  </Link>
                  <Link to="/contact">
                    <li>Əlaqə</li>
                  </Link>
                  <li>
                    <FaSearch />
                  </li>
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
                </div>
              </div>

              <div className="langs_menu">
                <button aria-label="Azərbaycan dilini seç">AZ</button>
                <button aria-label="Choose English language">EN</button>
                <button aria-label="Выбрать русский язык">RU</button>
              </div>
            </div>
            <BurgerMenu/>
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Navbar;
