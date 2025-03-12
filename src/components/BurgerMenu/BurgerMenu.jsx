import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useNavigate } from "react-router-dom";
import "./BurgerMenu.css"; // Важно для стилей меню
import { FaPhoneAlt } from "react-icons/fa";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (path) => {
    closeMenu();
    navigate(path);
  };

  return (
    <Menu right isOpen={isOpen} onStateChange={handleStateChange}>
      <div className="menu_item header_contacts_phones bg_header_contacts_phones">
        <FaPhoneAlt />
        <div className="bg_two_contacts">
          <a href="tel:+994500000000" className="contact_item">
            +99450-00-00
          </a>
          <a href="tel:+994500000000" className="contact_item">
            +99450-00-00
          </a>
        </div>
      </div>

      <div className="menu_item">
        <input
          type="text"
          placeholder="Məhsullar, xidmətlər və daha çoxu.."
          className="search_input"
        />
      </div>

      <div className="menu_links">
        <div onClick={() => handleNavigation("/")} className="menu_item">Əsas</div>
        <div onClick={() => handleNavigation("/about")} className="menu_item">Haqqımızda</div>
        <div onClick={() => handleNavigation("/projects")} className="menu_item">Lahiyələr</div>
        <div onClick={() => handleNavigation("/contact")} className="menu_item">Əlaqə</div>
      </div>

      <div className="menu_item langs_menu resp_langs_menu">
        <button aria-label="Azərbaycan dilini seç">AZ</button>
        <button aria-label="Choose English language">EN</button>
        <button aria-label="Выбрать русский язык">RU</button>
      </div>
    </Menu>
  );
};

export default BurgerMenu;
