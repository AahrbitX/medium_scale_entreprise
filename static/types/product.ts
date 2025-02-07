export type productType = {
  id: string;
  name: string;
  price: number;
  description: string;
  isOwnProduct: boolean;
  productSizes?: productSizesType[];
  category: string;
  inStock: boolean;
};

export type productSizesType = {
  id: string;
  size: string;
  unit?: string;
};
