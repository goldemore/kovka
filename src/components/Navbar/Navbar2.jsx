import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo/logo200.png";
import { FaSearch } from "react-icons/fa";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import i18n from "../../i18next";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "az", label: "AZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

const Navbar2 = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const { t } = useTranslation(); 

  // Эффект при прокрутке

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Функция для отслеживания прокрутки
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // если прокрутка больше 50px
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

//   Смена языка при нажатии 

  const [language, setLanguage] = useState(
    localStorage.getItem("kovka_lg") || "az"
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (newLanguage) => {
    window.location.reload();
    setLanguage(newLanguage);
    localStorage.setItem("kovka_lg", newLanguage);
    
    i18n.changeLanguage(newLanguage);
    setIsOpen(false); // Закрываем список после выбора
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  

  return (
    <header
      className={`navbar ${isScrolled ? "navbar-scrolled" : "navbar-default"}`}
      style={
        !isHomePage ? { position: "relative", backgroundColor: "#1a242d" } : {}
      }
    >
      <div className="container navbar2_container">
        {/* Logo */}
        <div className="logo_img">
          <Link to="/">
            <img src={logo} alt="kovka.az logo" />
          </Link>
        </div>

        {/* Nav list */}
        <div className="nav_plus_langs_container">
          <nav className="nav_manu">
            <ul>
              <Link to="/">
                <li>{t("nav.home")}</li>
              </Link>
              <Link to="/about">
                <li>{t("nav.about")}</li>
              </Link>
              <Link to="/projects">
                <li>{t("nav.projects")}</li>
              </Link>
              <Link to="/contact">
                <li>{t("nav.contact")}</li>
              </Link>
              <li>
                <FaSearch />
              </li>
            </ul>
          </nav>

          <div
            className="lang_select"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div className="selected_lang">
              {languages.find((l) => l.code === language)?.label}
            </div>
            {isOpen && (
              <ul className="lang_list">
                {languages.map((lang) => (
                  <li key={lang.code} onClick={() => handleChange(lang.code)}>
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar2;
