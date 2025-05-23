import React from "react";
import slider1 from "../../images/slider/1.png";
import uzor from "../../images/after-before/429_1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
AOS.init({
  duration: 800,
}); // Инициализация

const HeroAboutUs = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="hero_about_section hero_about_section2">
        
        <div className="container hero_about_container">
          <h1 className="tracking-in-contract">{t("nav.about")}</h1>

          <div className="about_content_section">
            <div className="img_plus_piece_of_text" data-aos="zoom-in">
              <div
                className="img_plus_piece_of_text_img"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src={slider1} alt="About us" />
              </div>

              <div
                className="about_text"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <p>
                  <span>{t("aboutUsSpan")}</span>
                  <br />
                  {t("aboutUs")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAboutUs;
