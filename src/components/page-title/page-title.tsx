import { type ReactElement } from "react";
import styles from "./page-title.module.scss";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  beforeLink?: {
    title: string;
    path: string;
  };
  image?: string;
}

function PageTitle({ title, beforeLink, image }: Props): ReactElement {
  return (
    <section
      className={styles.page_title}
      style={{ backgroundImage: `url("../../assets/${image}")` }}
    >
      <h1 className={styles.page_title__main}>{title}</h1>
      <div className={styles.page_title__breadcrumb}>
        <Link to="/" className={styles.page_title__breadcrumb__link}>
          Главная
        </Link>
        {beforeLink !== undefined && (
          <>
            <span>/</span>
            <Link
              to={beforeLink.path}
              className={styles.page_title__breadcrumb__link}
            >
              {beforeLink.title}
            </Link>
          </>
        )}
        <span>/</span>
        <span>{title}</span>
      </div>
    </section>
  );
}

export default PageTitle;
