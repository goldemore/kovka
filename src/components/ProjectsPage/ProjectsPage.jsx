import React, { useState } from "react";
import photos from "../../api/Photos";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";


AOS.init({
  duration: 800,
}); // Инициализация

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Открытие галереи при клике на изображение
  const openGallery = (index) => {
    setCurrentIndex(index);
    setIsGalleryOpen(true);
  };

  // Закрытие галереи
  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  // Закрытие при клике на фон
  const closeGalleryOnBackgroundClick = (e) => {
    if (e.target.classList.contains("fullscreen-gallery")) {
      closeGallery();
    }
  };

  return (
    <>
      <section className="hero_project_section">
        <div className="navbar_imitation" style={{}}></div>
        <div className="container hero_about_container">
          <h1 className="project_h1 tracking-in-contract">
            {t("nav.projects")}
          </h1>
          <div data-aos="zoom-in">
            <div className="grid_container_products">
              {photos.map((product, index) => (
                <div
                  className="product_card"
                  key={product.id}
                  onClick={() => openGallery(index)}
                >
                  <h3>{product.name}</h3>
                  <div className="product_card_image">
                    <img src={product.images[0]} alt={product.name} />
                    <div className="zoom-icon">
                      <FaSearch /> {/* или любой другой значок лупы */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Компонент галереи в полноэкранном режиме */}
      {isGalleryOpen && (
        <div
          className="fullscreen-gallery"
          onClick={closeGalleryOnBackgroundClick}
        >
          {/* Иконка закрытия */}
          <button className="close-gallery-button" onClick={closeGallery}>
            <FaTimes />
          </button>

          <ImageGallery
            items={photos[currentIndex].images.map((img) => ({
              original: img,
              thumbnail: img,
            }))}
            startIndex={0}
            showThumbnails={true}
            showBullets={true}
            slideDuration={500}
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
