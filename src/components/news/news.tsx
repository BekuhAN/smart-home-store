import { type ReactElement } from "react";
import styles from "./news.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Autoplay } from "swiper/modules";
import { useNews } from "../../data-access/news/use-news";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

function News(): ReactElement {
  const newsList = useNews();
  return (
    <section className={styles.news}>
      <div className="container">
        <h2 className={"section_title"}>Новости</h2>
        <div className={styles.news__list}>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {newsList.length &&
              newsList.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.news__item}>
                    <div className={styles.news__image}>
                      <img src={`./assets/${item.image}`} alt={item.title} />
                    </div>
                    <div className={styles.news__date}>{item.date}</div>
                    <Link
                      to={`/news/${item.id}`}
                      className={styles.news__title}
                    >
                      {item.title}
                    </Link>
                    <Link className={styles.news__more} to={`/news/${item.id}`}>
                      Подробнее
                      <Icon
                        icon="fluent:ios-arrow-rtl-24-regular"
                        width="12"
                        height="12"
                      />
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default News;
