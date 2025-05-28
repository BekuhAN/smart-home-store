import { type BaseModel } from "./base-model";

export interface CatalogItemType extends BaseModel<string>  {
    title: string;
    info: string;
    description: string;
    image: string[];
    price: number;
    oldPrice: number;
    categoryId: number;
    best: boolean;
    recommendation: boolean;
    count?: number
  }