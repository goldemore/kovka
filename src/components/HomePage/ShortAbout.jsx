import React from "react";
import slider1 from "../../images/slider/1.png";
import Separator from "../Separator";

const ShortAbout = () => {
  return (
    <>
      <section className="short_about_section">
        <div className="container ">
          <div className="short_about_h2">
            <h2>Metal Dizayn və Döymə Dəmir işləri</h2>
            <div className="short_about_uzor_after"></div>
          </div>

          <div className="short_about_content">
            <div className="short_about_content_h3_p">
              <h3>Biz kimik</h3>
              <p>
                Bədii döymə mərkəzimiz Bakıda etibarlı metal məmulatlarının
                istehsalı üçün xidmətlər təklif edir. Onlar sizi uzun müddət öz
                gözəlliyi və orijinallığı ilə sevindirəcəklər. Dəmirçi
                ustalarımız öz işlərinin ustasıdır. Biz həqiqətən unikal və
                yüksək keyfiyyətli məhsullar təklif edirik. Davamlılıq və daimi
                texniki xidmətə ehtiyac olmaması soyuq qaynaq texnologiyasının
                nəticəsidir. İstənilən növdə və mürəkkəblikdə məmulatların
                sifarişlərini qəbul edirik, istehsal əllə həyata keçirilir. Əmin
                ola bilərsiniz ki, iş bütün keyfiyyət standartlarına uyğun
                tamamlanacaq.
              </p>
            </div>

            <div className="sviper_example">
              <img src={slider1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Separator />
    </>
  );
};

export default ShortAbout;
