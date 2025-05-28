import { type ReactElement } from "react";
import styles from "./catalog-item.module.scss";
import type { CatalogItemType } from "../../interfaces/catalog-item";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addWishList,
  getWishList,
  removeWishList,
} from "../../features/wishlist/wishlist";
import { addCart, getCart } from "../../features/cart/cart";

interface Props {
  item: CatalogItemType;
}
const priceFormat = (price: number) =>
  price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

function CatalogItem({ item }: Props): ReactElement {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishList);
  const cart = useSelector(getCart);
  const navigate = useNavigate();

  return (
    <div className={styles.catalog_item}>
      <div className={styles.catalog_item__image}>
        <img
          src={`../assets/catalog/${item.image[0]}`}
          alt={item.title}
          className={styles.main}
        />
        {item.image.length > 1 && (
          <img
            src={`../assets/catalog/${item.image[1]}`}
            alt={item.title}
            className={styles.sub}
          />
        )}
        <div className={styles.catalog_item__control}>
          <button className={styles.catalog_item__control__item}>
            {wishlist.find((i) => i.id === item?.id) ? (
              <Icon
                icon="fluent:heart-20-filled"
                onClick={() => dispatch(removeWishList(item?.id || ""))}
              />
            ) : (
              <Icon
                icon="fluent:heart-20-regular"
                onClick={() => dispatch(addWishList(item))}
              />
            )}
          </button>
          <button
            className={styles.catalog_item__control__item}
            onClick={() => {
              dispatch(addCart({ ...item, count: 1 }));
            }}
            disabled={cart.some((i) => i.id === item?.id)}
          >
            <Icon icon="fluent:cart-20-regular" />
          </button>
          <button
            className={styles.catalog_item__control__item}
            onClick={() => navigate(`/catalog/${item.id}`)}
          >
            <Icon icon="fluent:more-horizontal-20-regular" />
          </button>
        </div>
        {item.oldPrice > 0 && (
          <div className={styles.catalog_item__sale}>Скидка</div>
        )}
      </div>
      <Link to={`/catalog/${item.id}`} className={styles.catalog_item__title}>
        {item.title}
      </Link>
      <div className={styles.catalog_item__price}>
        {priceFormat(item.price)} ₽{" "}
        {item.oldPrice > 0 && (
          <span className={styles.catalog_item__old_price}>
            {" "}
            {priceFormat(item.oldPrice)} ₽
          </span>
        )}
      </div>
    </div>
  );
}

export default CatalogItem;
