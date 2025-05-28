import { type ReactElement, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./catalog-sidebar.module.scss";
import {
  getActiveCategory,
  setActiveCategory,
  setPriceRange,
} from "../../features/catalog/catalog";
import { useCategories } from "../../data-access/categories/use-categories";
import { Slider } from "@heroui/react";
import { I18nProvider } from "@react-aria/i18n";
import _ from "lodash";
import { useCatalog } from "../../data-access/catalog/use-catalog";
import clsx from "clsx";

export default function CatalogSidebar(): ReactElement {
  const categoriesList = useCategories();
  const dispatch = useDispatch();
  const activeCategory = useSelector(getActiveCategory);
  const productSort = useCatalog({ _sort: "-price" });

  const debouncedOnChange = useCallback(
    _.debounce((value) => {
      dispatch(setPriceRange(value));
    }, 500),
    []
  );

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__title}>
        <span>Категории</span>
      </div>
      <ul className={styles.sidebar__list}>
        <li
          className={clsx(
            styles.sidebar__list__item,
            activeCategory == 0 && styles.active
          )}
          onClick={() => {
            dispatch(setActiveCategory(0));
          }}
        >
          Все
        </li>
        {categoriesList.length > 0 &&
          categoriesList.map((item) => (
            <li
              key={item.id}
              className={clsx(
                styles.sidebar__list__item,
                activeCategory == item.id && styles.active
              )}
              onClick={() => {
                dispatch(setActiveCategory(item.id));
              }}
            >
              {item.title}
            </li>
          ))}
      </ul>
      <div className={styles.sidebar__title}>
        <span>Цена</span>
      </div>
      <div className={styles.sidebar__price}>
        {productSort.length > 0 && (
          <I18nProvider locale="ru">
            <Slider
              defaultValue={[
                productSort.sort((a, b) => a.price - b.price)[0].price,
                productSort.sort((a, b) => b.price - a.price)[0].price,
              ]}
              formatOptions={{ style: "currency", currency: "RUB" }}
              color="foreground"
              label="Цена:"
              maxValue={productSort.sort((a, b) => b.price - a.price)[0].price}
              minValue={productSort.sort((a, b) => a.price - b.price)[0].price}
              step={10}
              size="lg"
              showTooltip={true}
              tooltipValueFormatOptions={{ style: "currency", currency: "RUB" }}
              classNames={{
                filler: styles.sidebar__price__filter,
                thumb: styles.sidebar__price__thumb,
              }}
              onChange={(value) => {
                debouncedOnChange(Array.isArray(value) ? value : [value]);
              }}
            />
          </I18nProvider>
        )}
      </div>
    </aside>
  );
}
