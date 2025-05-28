import { type ReactElement } from "react";
import styles from "./home.module.scss";
import Preview from "../../components/preview/preview";
import Categories from "../../components/categories/categories";
import Banner from "../../components/banner/banner";
import Recommendation from "../../components/recommendation/recommendation";
import Best from "../../components/best/best";
import News from "../../components/news/news";
import Comments from "../../components/comments/comments";

function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <Preview />
      <Categories />
      <Best />
      <Banner />
      <Recommendation />
      <News />
      <Comments />
    </div>
  );
}

export default Home;
