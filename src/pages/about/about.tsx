import { type ReactElement } from "react";
import styles from "./about.module.scss";
import PageTitle from "../../components/page-title/page-title";
import Image1 from "../../assets/about-1.jpg";
import Image2 from "../../assets/about-2.jpg";
import Image3 from "../../assets/about-3.png";
import clsx from "clsx";
import Comments from "../../components/comments/comments";

function About(): ReactElement {
  return (
    <main className={styles.about}>
      <PageTitle title="О нас" image="Breadcrumb-about.jpg" />
      <div className={clsx("container", styles.about__inner)}>
        <h1 className={styles.about__sub_title}>О нас</h1>
        <h2 className={styles.about__title}>
          Хотите узнать немного больше о нас и наших продуктах для автоматизации
          умного дома?
        </h2>
        <div className={styles.about__image}>
          <img src={Image1} loading="lazy" />
        </div>
        <div className={styles.about__description}>
          <div className={styles.about__description__text}>
            Мы не любим ничего больше, чем великолепную технологию автоматизации
            умного дома. И, скорее всего, если вы находитесь на этом сайте, вы
            чувствуете то же самое! <br />
            <br />
            У нас есть ассортимент самых качественных продуктов и технологий для
            умного дома, которые есть на рынке. Мы не продаем ничего, что не
            стали бы использовать сами. <br />
            <br />
            Независимо от того, являетесь ли вы опытным пользователем
            автоматизации дома или увлеченным новичком, ищущим, с чего начать,
            мы надеемся предоставить вам некоторые из лучших технологий для
            умного дома!
          </div>
          <div className={styles.about__description__list}>
            <div className={styles.about__description__title}>Наше Видение</div>
            <div className={styles.about__description__text}>
              Мы представляем себе мир, где дома и здания полезны для планеты,
              где технологии работают на упрощение повседневной жизни. В этом
              мире люди здоровы, счастливы и защищены.
            </div>
            <div className={styles.about__description__title}>Наша цель</div>
            <div className={styles.about__description__text}>
              Чтобы помочь создать это будущее, мы будем работать каждый день…
              Чтобы упростить взаимосвязанный мир, чтобы люди были спокойны и
              могли сосредоточиться на самом важном.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about__result}>
        <div className={styles.about__result__image}>
          <img src={Image2} loading="lazy" />
          <img
            className={styles.about__result__image__item}
            src={Image3}
            loading="lazy"
          />
        </div>
        <div className={styles.about__result__content}>
          <h2 className={styles.about__result__title}>
            Создавая экологичное будущее вместе
          </h2>
          <div className={styles.about__result__text}>
            Мы стремимся минимизировать экологическое воздействие наших
            продуктов, учитывая их влияние на окружающую среду и общество. Наши
            поставщики, партнеры и клиенты — часть этого важного процесса.
            Вместе мы заботимся о семьях, домах, воздухе, воде и энергоресурсах.
          </div>
          <ul className={styles.about__result__list}>
            <li className={styles.about__result__list__item}>
              <div className={styles.about__result__list__title}>
                <strong>200 000</strong> устройств переработано
              </div>
              <div className={styles.about__result__text}>
                Ежедневно мы работаем над тем, чтобы сделать наши продукты более
                экологичными и сократить углеродный след.
              </div>
            </li>
            <li className={styles.about__result__list__item}>
              <div className={styles.about__result__list__title}>
                Снижение выбросов на <strong>1,6</strong> тонн
              </div>
              <div className={styles.about__result__text}>
                Как эксперты в области умного дома, мы находимся в уникальной
                позиции, чтобы создавать более умные и экологичные решения для
                каждого.
              </div>
            </li>
            <li className={styles.about__result__list__item}>
              <div className={styles.about__result__list__title}>
                <strong></strong>Цель: сокращение на <strong>20%</strong> к 2026
                году
              </div>
              <div className={styles.about__result__text}>
                Мы стремимся сократить выбросы парниковых газов, потребление
                воды и отходы на 20% по сравнению с уровнем 2019 года.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Comments />
    </main>
  );
}

export default About;
