import { type ReactElement } from "react";
import styles from "./home.module.scss";
import Preview from "../../components/preview/preview";
import Categories from "../../components/categories/categories";
import Banner from "../../components/banner/banner";
import Recomendation from "../../components/recomendation/recomendation";

function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <Preview />
      <Categories />
      <Banner />
      <Recomendation />
    </div>
  );
}

export default Home;
