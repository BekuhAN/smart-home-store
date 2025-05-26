import { type ReactElement } from "react";
import styles from "./banner.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import Banner3 from "../../assets/banner-3.jpg";
import Banner4 from "../../assets/banner-4.jpg";
import Banner5 from "../../assets/banner-5.jpg";
import Banner6 from "../../assets/banner-6.jpg";

function Banner(): ReactElement {
  return (
    <section className={styles.banner}>
      <div className="container">
        <div className={styles.banner__inner}>
          <div className={styles.banner__small__item}>
            <img className={styles.banner__small__image} src={Banner3} />
            <div className={styles.banner__small__content}>
              <h4 className={styles.banner__small__subtitle}>
                Камеры наблюдения
              </h4>
              <h3 className={styles.banner__small__title}>
                Полный контроль над домом
              </h3>
              <Link to="/catalog" className={styles.banner__small__link}>
                <Icon
                  icon="fluent:ios-arrow-rtl-24-regular"
                  width="12"
                  height="12"
                />
                Каталог
              </Link>
            </div>
          </div>
          <div className={styles.banner__small__item}>
            <img className={styles.banner__small__image} src={Banner4} />
            <div className={styles.banner__small__content}>
              <h4 className={styles.banner__small__subtitle}>
                Системы сигнализации
              </h4>
              <h3 className={styles.banner__small__title}>Единая защита дома</h3>
              <Link to="/catalog" className={styles.banner__small__link}>
                <Icon
                  icon="fluent:ios-arrow-rtl-24-regular"
                  width="12"
                  height="12"
                />
                Каталог
              </Link>
            </div>
          </div>
          <div className={styles.banner__small__item}>
            <img className={styles.banner__small__image} src={Banner5} />
            <div className={styles.banner__small__content}>
              <h4 className={styles.banner__small__subtitle}>Умные датчики</h4>
              <h3 className={styles.banner__small__title}>
                Мгновенные уведомления о любых событиях
              </h3>
              <Link to="/catalog" className={styles.banner__small__link}>
                <Icon
                  icon="fluent:ios-arrow-rtl-24-regular"
                  width="12"
                  height="12"
                />
                Каталог
              </Link>
            </div>
          </div>
          <div className={clsx(styles.banner__long__item)}>
            <img className={styles.banner__long__image} src={Banner6} />
            <div className={styles.banner__long__content}>
              <h4 className={styles.banner__long__subtitle}>
                безопасность - это просто
              </h4>
              <h3 className={styles.banner__long__title}>
                Комплект охранной сигнализации для дома из 5 предметов
              </h3>
              <p className={styles.banner__long__text}>
                Ваше новое комплексное решение для безопасного и надежного дома.
              </p>
              <Link to="/catalog" className={styles.banner__long__link}>
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

export default Banner;
