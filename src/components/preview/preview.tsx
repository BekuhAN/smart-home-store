import { type ReactElement } from "react";
import styles from "./preview.module.scss";
import clsx from "clsx";
import { Link } from "react-router-dom";

function Preview(): ReactElement {
  return (
    <section className={styles.preview}>
      <div className={clsx(styles.preview__wrapper, "container")}>
        <div className={styles.preview__inner}>
          <h1 className={styles.preview__title}>
            Умный дом — надежная защита вашего пространства.
          </h1>
          <p className={styles.preview__subtitle}>
            Обеспечьте безопасность и комфорт с инновационными гаджетами для
            умного дома.
          </p>
          <Link to="/catalog" className={styles.preview__button}>
            Каталог
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Preview;
