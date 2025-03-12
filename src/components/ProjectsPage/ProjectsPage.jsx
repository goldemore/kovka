import React, { useState } from "react";
import photos from "../../api/Photos";
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProjectsPage = () => {
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
    if (e.target.classList.contains('fullscreen-gallery')) {
      closeGallery();
    }
  };

  return (
    <>
      <section className="hero_about_section">
        <div className="container hero_about_container">
          <h1 className="project_h1">LAHİYƏLƏR</h1>
        </div>
      </section>
      <section className="hero_about_section_content">
        <div className="container">
          <div className="grid_container_products">
            {photos.map((product, index) => (
              <div className="product_card" key={product.id}>
                <h3>{product.name}</h3>
                <div className="product_card_image">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    onClick={() => openGallery(index)} // Открытие галереи
                    style={{ cursor: 'pointer' }} // Чтобы было видно, что картинка кликабельна
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Компонент галереи в полноэкранном режиме */}
      {isGalleryOpen && (
        <div
          className="fullscreen-gallery"
          onClick={closeGalleryOnBackgroundClick} // Закрытие галереи по клику на фон
        >
          <ImageGallery
            items={photos[currentIndex].images.map((img) => ({ original: img, thumbnail: img }))}
            startIndex={0} // Начать с первого изображения
            showThumbnails={false} // Скрыть миниатюры
            showBullets={true} // Показать стрелки навигации
            onClose={closeGallery} // Закрытие галереи
            slideDuration={500} // Анимация смены слайдов
            showPlayButton={false}
            showFullscreenButton={false}
          />
        </div>
      )}
    </>
  );
};

export default ProjectsPage;
