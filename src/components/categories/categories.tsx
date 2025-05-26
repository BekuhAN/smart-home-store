import { type ReactElement } from "react";
import styles from "./categories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Autoplay } from "swiper/modules";
import { useCategories } from "../../data-access/categories/use-categories";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/banner-1.jpg";
import Banner2 from "../../assets/banner-2.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

function Cateories(): ReactElement {
  const categoriesList = useCategories();
  return (
    <section className={styles.categories}>
      <div className="container">
        <h2 className={"section_title"}>Категории</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {categoriesList.length &&
            categoriesList.map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={"/catalog"} className={styles.categories__item}>
                  <img
                    className={styles.categories__image}
                    src={`./assets/${item.image}`}
                  />
                  <h3 className={styles.categories__title}>{item.title}</h3>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>

        <div className={styles.banners}>
          <div className={styles.banners__item}>
            <img className={styles.banners__image} src={Banner1} />
            <div className={styles.banners__content}>
              <h4 className={styles.banners__subtitle}>Лучшее освещение</h4>
              <h3 className={styles.banners__title}>Самая умная лампа</h3>
              <Link to="/catalog" className={styles.banners__link}>
                <Icon
                  icon="fluent:ios-arrow-rtl-24-regular"
                  width="12"
                  height="12"
                />
                Каталог
              </Link>
            </div>
          </div>
          <div className={styles.banners__item}>
            <img className={styles.banners__image} src={Banner2} />
            <div className={styles.banners__content}>
              <h4 className={styles.banners__subtitle}>Камера безопасности</h4>
              <h3 className={styles.banners__title}>Единая защита дома</h3>
              <Link to="/catalog" className={styles.banners__link}>
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
      </div>
    </section>
  );
}

export default Cateories;
