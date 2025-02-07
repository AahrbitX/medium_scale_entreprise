import { productType } from "./types/product";

export const products: productType[] = [
  // Company manufactured products
  {
    id: "own-1",
    name: "Premium Handcrafted Coffee Blend",
    price: 24.99,
    description:
      "Our signature house-roasted coffee blend made from carefully selected Arabica beans",
    isOwnProduct: true,
    category: "Coffee",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "own-2",
    name: "Specialty Cold Brew Concentrate",
    price: 18.99,
    description:
      "Smooth and rich cold brew coffee concentrate made using our proprietary brewing process",
    isOwnProduct: true,
    category: "Coffee",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "own-3",
    name: "Limited Edition Seasonal Blend",
    price: 29.99,
    description:
      "Small-batch seasonal coffee blend featuring unique flavor profiles",
    isOwnProduct: true,
    category: "Coffee",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },

  // Resale products
  {
    id: "rs-1",
    name: "French Press Coffee Maker",
    price: 34.99,
    description: "Classic glass French press for rich, full-bodied coffee",
    isOwnProduct: false,
    category: "Equipment",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "rs-2",
    name: "Electric Gooseneck Kettle",
    price: 79.99,
    description: "Temperature-controlled kettle perfect for pour-over coffee",
    isOwnProduct: false,
    category: "Equipment",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "rs-3",
    name: "Coffee Filter Papers",
    price: 8.99,
    description: "Pack of 100 biodegradable filter papers for drip coffee",
    isOwnProduct: false,
    category: "Accessories",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "rs-4",
    name: "Coffee Bean Grinder",
    price: 49.99,
    description: "Burr grinder for consistent, perfectly ground coffee",
    isOwnProduct: false,
    category: "Equipment",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "rs-5",
    name: "Ceramic Coffee Mug Set",
    price: 28.99,
    description: "Set of 4 handcrafted ceramic coffee mugs",
    isOwnProduct: false,
    category: "Accessories",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "rs-6",
    name: "Coffee Storage Container",
    price: 19.99,
    description: "Airtight container to keep coffee beans fresh",
    isOwnProduct: false,
    category: "Accessories",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
  {
    id: "rs-7",
    name: "Pour Over Coffee Dripper",
    price: 24.99,
    description: "Ceramic pour-over coffee maker for manual brewing",
    isOwnProduct: false,
    category: "Equipment",
    inStock: true,
    productSizes: [
      {
        id: "1",
        size: "10",
        unit: "mm",
      },
      {
        id: "2",
        size: "20",
        unit: "mm",
      },
      {
        id: "3",
        size: "30",
        unit: "mm",
      },
      {
        id: "4",
        size: "40",
        unit: "mm",
      },
    ],
  },
];
