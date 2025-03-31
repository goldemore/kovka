import React, { useEffect, useState } from "react";
import slider1 from "../../images/slider/1.png";
import Separator from "../Separator";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

AOS.init({
  duration: 800,
}); // Инициализация

const ShortAbout = () => {
  const { t } = useTranslation(); // Использование i18n для перевода
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("animated-text");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Проверить сразу
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const letterAnimation = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 120 },
    }),
  };

  return (
    <>
      <section className="short_about_section">
        <div className="container ">
          <div className="short_about_h2">
            <h2 id="animated-text" className="short_about_h2">
              {t("who_are_we").split("").map((char, index) => ( // Используем ключ "who_are_we"
                <motion.span
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={letterAnimation}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h2>
          </div>
          <div data-aos="zoom-in">
            <div className="short_about_content">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="short_about_content_h3_p">
                  <p>{t("shortPar")}</p> {/* Используем ключ "short_about_paragraph" */}
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="sviper_example">
                  <img src={slider1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default ShortAbout;
