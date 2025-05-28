import { type ReactElement } from "react";
import styles from "./recommendation.module.scss";
import Banner7 from "../../assets/banner-7.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Autoplay } from "swiper/modules";
import { useCatalog } from "../../data-access/catalog/use-catalog";
import CatalogItem from "../catalog-item/catalog-item";

function Recommendation(): ReactElement {
  const recommendationList = useCatalog({ recommendation: true, _limit: 8 });
  return (
    <section className={styles.recommendation}>
      <div className="container">
        <h2 className={"section_title"}>Рекомендуем</h2>
        <div className={styles.recommendation__list}>
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {recommendationList.length &&
              recommendationList.map((item) => (
                <SwiperSlide key={item.id}>
                  <CatalogItem item={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className={styles.recommendation__banner__item}>
          <img className={styles.recommendation__banner__image} src={Banner7} />
          <div className={styles.recommendation__banner__content}>
            <h4 className={styles.recommendation__banner__subtitle}>
              Умные роботы-пылесосы
            </h4>
            <h3 className={styles.recommendation__banner__title}>
              Автоматическая уборка для вашего комфорта
            </h3>
            <p className={styles.recommendation__banner__text}>
              Современные технологии делают поддержание чистоты простым и
              эффективным.
            </p>
            <Link to="/catalog" className={styles.recommendation__banner__link}>
              <Icon
                icon="fluent:ios-arrow-rtl-24-regular"
                width="12"
                height="12"
              />
              Каталог
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recommendation;
