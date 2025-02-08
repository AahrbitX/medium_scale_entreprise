export type productType = {
  id: string;
  name: string;
  price: productPriceType[];
  images: ProductImagesType;
  description: string;
  isOwnProduct: boolean;
  category: string;
  inStock: boolean;
};

export type productPriceType = {
  id: number;
  price: string;
  size: string;
  unit?: string;
};

export type ProductImagesType = {
  [key: string]: string;
}[];
