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

  const {t} = useTranslation()
  return (
    <>
      <section className="hero_about_section">
        <div className="container hero_about_container">
          <h1 className="tracking-in-contract ">{t('nav.about')}</h1>
        </div>
      </section>
      <section className="hero_about_section_content">
        <div className="container">
          <div className="about_content_section">
            <div data-aos="zoom-in">
              <div className="img_plus_piece_of_text">
                <div
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="img_plus_piece_of_text_img">
                    <img src={slider1} alt="" />
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <p>
                    <span>{t('aboutUsSpan')}</span>
                    <br />
                    {t('aboutUs')}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="other_piece_of_text">
              <p>
               
              </p>
            </div> */}
            {/* <img src={uzor} alt="" /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAboutUs;
