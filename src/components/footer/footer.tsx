import { type ReactElement } from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import { useNavigation } from "../../data-access/navigation/use-navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

function Footer(): ReactElement {
  const navList = useNavigation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__inner}>
          <div className={styles.footer__column}>
            <div className={styles.footer__title}>Соц. сети</div>
            <div className={styles.footer__social}>
              <a
                href="https://telegram.org/"
                className={styles.footer__social__item}
              >
                <Icon icon="cib:telegram" />
              </a>
              <a href="https://vk.com/" className={styles.footer__social__item}>
                <Icon icon="cib:vk" />
              </a>
              <a href="https://ok.ru/" className={styles.footer__social__item}>
                <Icon icon="cib:odnoklassniki" />
              </a>
            </div>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.footer__title}>Навигация</div>
            <ul className={styles.footer__nav}>
              {navList.length > 0 &&
                navList.map((item) => (
                  <li className={styles.footer__nav__item} key={item.id}>
                    <Link className={styles.footer__nav__link} to={item.path}>
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className={styles.footer__column}>
            <div className={styles.footer__title}>Контакты</div>
            <ul className={styles.footer__contacts}>
              <li className={styles.footer__contacts__item}>
                <Icon
                  icon="fluent:location-48-regular"
                  width="30"
                  height="30"
                />
                г. Краснодар, проспект Чекистов, 28
              </li>
              <li className={styles.footer__contacts__item}>
                <Icon icon="fluent:phone-48-regular" width="30" height="30" />
                <a href="tel:8-800-250-15-15"> 8-800-250-15-15</a>
              </li>
              <li className={styles.footer__contacts__item}>
                <Icon icon="fluent:mail-48-regular" width="30" height="30" />
                <a href="mailto:sale@smart.ru">sale@smart.ru</a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__column}>
            <Link className={styles.footer__logo} to="/">
              <Icon
                icon="fluent:home-database-20-regular"
                width="50"
                height="50"
              />{" "}
              Умный дом
            </Link>
            <div className={styles.footer__text}>
              <p>
                Добро пожаловать в будущее комфорта и безопасности! Наш магазин
                предлагает инновационные решения для создания идеального умного
                дома, где технологии работают на ваше благополучие.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__copy}>Copyright © 2025 Умный дом.</div>
    </footer>
  );
}

export default Footer;
