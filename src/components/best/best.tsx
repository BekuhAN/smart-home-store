import { type ReactElement } from "react";
import styles from "./best.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { Autoplay } from "swiper/modules";
import { useCatalog } from "../../data-access/catalog/use-catalog";
import CatalogItem from "../catalog-item/catalog-item";

function Best(): ReactElement {
  const bestList = useCatalog({ best: true, _limit: 8 });
  return (
    <section className={styles.best}>
      <div className="container">
        <h3 className="section_title">Наши бестселлеры</h3>
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
          {bestList.length &&
            bestList.map((item) => (
              <SwiperSlide key={item.id}>
                <CatalogItem item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Best;
