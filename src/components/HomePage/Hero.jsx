import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { EffectFade, Pagination, Autoplay, Navigation } from "swiper/modules";
import img1 from "../../images/bg_images/111.jpeg";
import img2 from "../../images/bg_images/f-2.jpg";
import img3 from "../../images/bg_images/113.jpeg";
import img4 from "../../images/bg_images/forging_bg4.webp";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero_section">
      <h1 className="hero_title tracking-in-contract">{t("slogan")}</h1>
      <div className="hero_slider_wrapper">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide">
              <img src={img1} alt="Slide 1" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={img2} alt="Slide 2" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide">
              <img src={img4} alt="Slide 3" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide last_slide">
              <img src={img3} alt="Slide 3" />
              <div className="overlay"></div>
            </div>
          </SwiperSlide>

          
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
