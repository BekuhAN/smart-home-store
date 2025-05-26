import { type ReactElement } from "react";
import styles from "./recomendation.module.scss";
import Banner7 from "../../assets/banner-7.jpg";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

function Recomendation(): ReactElement {
  return (
    <section className={styles.recomendation}>
      <div className="container">
        <div className={styles.recomendation__banner__item}>
          <img className={styles.recomendation__banner__image} src={Banner7} />
          <div className={styles.recomendation__banner__content}>
            <h4 className={styles.recomendation__banner__subtitle}>
              Умные роботы-пылесосы
            </h4>
            <h3 className={styles.recomendation__banner__title}>
              Автоматическая уборка для вашего комфорта
            </h3>
            <p className={styles.recomendation__banner__text}>
              Современные технологии делают поддержание чистоты простым и эффективным.
            </p>
            <Link to="/catalog" className={styles.recomendation__banner__link}>
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

export default Recomendation;
