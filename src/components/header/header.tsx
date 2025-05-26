import { type ReactElement } from "react";
import styles from "./header.module.scss";
import clsx from "clsx";
import { useNavigation } from "../../data-access/navigation/use-navigation";
import { Link, NavLink, useLocation } from "react-router-dom";
import Cart from "../cart/cart";
import Wishlist from "../wishlist/wishlist";
import { Icon } from "@iconify/react/dist/iconify.js";

function Header(): ReactElement {
  const navList = useNavigation();
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={clsx(styles.header__inner, "container")}>
        <Link to="/" className={styles.header__logo}>
          <Icon icon="fluent:home-database-20-regular" width="50" height="50" />{" "}
          Умный дом
        </Link>
        <nav className={styles.header__nav}>
          <ul className={styles.header__nav__list}>
            {navList.length > 0 &&
              navList.map((item) => (
                <li className={styles.header__nav__item} key={item.id}>
                  <NavLink
                    className={clsx(
                      styles.header__nav__link,
                      location.pathname === item.path && styles.active
                    )}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
          </ul>
        </nav>
        <div className={styles.header__cart}>
          <Wishlist />
          <Cart />
        </div>
      </div>
    </header>
  );
}

export default Header;
