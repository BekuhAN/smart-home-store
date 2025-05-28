import { type ReactElement } from "react";
import styles from "./comments.module.scss";
import Banner8 from "../../assets/banner-8.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useComments } from "../../data-access/comments/use-comments";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Autoplay } from "swiper/modules";

function Comments(): ReactElement {
  const commentsList = useComments();
  return (
    <section className={styles.comments}>
      <div className="container">
        <h2 className={"section_title"}>Отзывы</h2>
        <div className={styles.comments__list}>
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {commentsList.length &&
              commentsList.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.comments__item}>
                    <div className={styles.comments__rating}>
                      <Icon icon="fluent:star-48-filled" />
                      <Icon icon="fluent:star-48-filled" />
                      <Icon icon="fluent:star-48-filled" />
                      <Icon icon="fluent:star-48-filled" />
                      <Icon icon="fluent:star-48-filled" />
                    </div>
                    <div className={styles.comments__text}>{item.text}</div>
                    <div className={styles.comments__author}>{item.name}</div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className={styles.comments__banner__item}>
          <img className={styles.comments__banner__image} src={Banner8} />
          <div className={styles.comments__banner__content}>
            <h4 className={styles.comments__banner__subtitle}>
              Умные датчики для полного контроля дома
            </h4>
            <h3 className={styles.comments__banner__title}>
              Управляйте домом из любой точки мира
            </h3>
            <p className={styles.comments__banner__text}>
              Интеллектуальные датчики — основа безопасного и комфортного умного
              дома.
            </p>
            <Link to="/catalog" className={styles.comments__banner__link}>
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

export default Comments;
