import { useRef, type FormEvent, type ReactElement } from "react";
import styles from "./contacts.module.scss";
import PageTitle from "../../components/page-title/page-title";
import clsx from "clsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import emailjs from "@emailjs/browser";
import { addToast } from "@heroui/react";

function Contacts(): ReactElement {
  const formRef = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    // yhj04@reva.fun
    emailjs
      .sendForm("service_tacw9nw", "template_0tnbjxm", formRef.current || "", {
        publicKey: "FBbVRZs7lpcd54K2-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          formRef.current?.reset();
          addToast({
            title: "Успех!",
            description: "Сообщение успешно отправлено!",
            timeout: 3000,
            color: "success",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          addToast({
            title: "Ошибка...",
            description: error.text,
            timeout: 3000,
            color: "danger",
          });
        }
      );
  };
  return (
    <main className={styles.contacts}>
      <PageTitle title="Контакты" image="Breadcrumb-contact-us.jpg" />
      <div className={clsx("container", styles.contacts__inner)}>
        <h2 className={styles.contacts__title}>Свяжитесь с нами</h2>
        <div className={styles.contacts__subtitle}>
          Мы всегда готовы помочь вам и ответить на любые ваши вопросы, чтобы вы
          могли принять наилучшее решение относительно вашего пути к созданию
          умного дома вместе с нами.
        </div>
        <div className={styles.contacts__list}>
          <div className={styles.contacts__list__item}>
            <div className={styles.contacts__list__item__icon}>
              <Icon icon="fluent:location-24-regular" width="80" height="80" />
            </div>
            <div className={styles.contacts__list__item__title}>Адрес</div>
            <div className={styles.contacts__list__item__text}>
              г. Краснодар, проспект Чекистов, 28
            </div>
          </div>
          <div className={styles.contacts__list__item}>
            <div className={styles.contacts__list__item__icon}>
              <Icon icon="fluent:call-48-regular" width="80" height="80" />
            </div>
            <div className={styles.contacts__list__item__title}>Телефон</div>
            <div className={styles.contacts__list__item__text}>
              <a href="tel:8-800-250-15-15">8-800-250-15-15</a>
            </div>
          </div>
          <div className={styles.contacts__list__item}>
            <div className={styles.contacts__list__item__icon}>
              <Icon icon="fluent:mail-48-regular" width="80" height="80" />
            </div>
            <div className={styles.contacts__list__item__title}>E-mail</div>
            <div className={styles.contacts__list__item__text}>
              <a href="mailto:sale@smart.ru">sale@smart.ru</a>
            </div>
          </div>
        </div>
        <div className={styles.contacts__map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d34018edb1ee77aec2685c434903867e034201ea541f370a6068ea612f1ae92&amp;source=constructor"
            width="100%"
            height="500"
            frameBorder="0"
          ></iframe>
        </div>
        <div className={styles.contacts__form}>
          <h3 className={styles.contacts__form__title}>Оставьте нам сообщение</h3>
          <form
            className={styles.contacts__form__inner}
            action=""
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input
              placeholder="Ваше имя *"
              required
              type="text"
              name="contacts_name"
              className={styles.contacts__form__item}
            />
            <input
              placeholder="Ваша почта *"
              required
              type="email"
              name="contacts_email"
              className={styles.contacts__form__item}
            />
            <input
              placeholder="Тема сообщения"
              type="text"
              name="contacts_theme"
              className={styles.contacts__form__item}
            />
            <textarea
              placeholder="Ваше сообщение *"
              required
              name="contacts_message"
              className={clsx(styles.contacts__form__item, styles.contacts__form__textarea)}
            ></textarea>
            <button className={styles.contacts__form__btn} type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contacts;
