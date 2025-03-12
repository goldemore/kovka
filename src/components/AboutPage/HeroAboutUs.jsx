import React from "react";
import slider1 from "../../images/slider/1.png";
import uzor from "../../images/after-before/429_1.png";

const HeroAboutUs = () => {
  return (
    <>
      <section className="hero_about_section">
        <div className="container hero_about_container">
          <h1>HAQQIMIZDA</h1>
        </div>
      </section>
      <section className="hero_about_section_content">
        <div className="container">
          <div className="about_content_section">
            <div className="img_plus_piece_of_text">
              <div className="img_plus_piece_of_text_img">
                <img src={slider1} alt="" />
              </div>

              <p>
                <span>Kovka.az – Dəmiri sənətə çevirənlər</span>
                <br />
                Kovka.az– metalın sənətə çevrildiyi yer! Biz təkcə dəmir
                işləmirik, ona həyat, ruh və bənzərsiz gözəllik bəxş edirik.
                Brendimizin təməli 2001-ci ildə istedadlı rəssam və sənətkar
                Baxışov Xəqani tərəfindən qoyulub. Sənətə və estetikaya olan
                dərin sevgisi onu döymə dəmir sənətini yeni səviyyəyə qaldırmağa
                sövq etdi. Onun rəhbərliyi ilə Kovka.az ənənəvi ustalığı müasir
                tələblərlə birləşdirərək, dəmirin sərtliyini incə sənət
                nümunəsinə çevirən bir brendə çevrildi. İllər ərzində
                qazandığımız təcrübə, yüzlərlə uğurlu layihə və məmnun müştəri
                bizim üçün sadəcə bir nailiyyət deyil, sənətə olan sevgimizin
                təzahürüdür. Dəmir məhəccərlər, qapılar, fasad elementləri,
                interyer və eksteryer üçün eksklüziv metal həlləri – hər bir
                işimizdə keyfiyyət, estetika və dəqiqlik əsas prinsipimizdir.
              </p>
            </div>
            <div className="other_piece_of_text">
              <p>
                Biz hər bir layihəyə fərdi yanaşır, müştərilərimizin arzularını
                unikal dizaynlarla gerçəkləşdiririk. Kovka.az təkcə dəmir emal
                edən bir marka deyil, sənətin və zövqün simvoludur. Metalın
                sənətə çevrildiyi bu dünyada sizin də iziniz olsun! Bizimlə
                əlaqə saxlayın və fərqin şahidi olun!
              </p>
            </div>
            <img src={uzor} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroAboutUs;
