import { useEffect, useState } from "react";
import { api } from "../api";
import type { Category } from "../../interfaces/category";

export const useCategories = () => {
  const [categories, setCategories] = useState<Array<Category>>([]);
  useEffect(() => {
    const get = async () => {
      const items = await api<Category>({ path: "categories" });
      setCategories(items);
    };
    get();
  }, []);
  return categories;
};
