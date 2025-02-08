import { ProductImagesType } from "@/static/types/product";
import makeSlug from "./make-slug";

export function getProductColorsFromImages(imageArray: ProductImagesType) {
  if (imageArray.length === 0) {
    return [];
  }
  const colors: { color: string; slug: string }[] = [];

  imageArray.forEach((imgObj) => {
    const keys = Object.keys(imgObj);

    keys.forEach((key) => {
      colors.push({
        color: key,
        slug: makeSlug(key),
      });
    });
  });

  return colors;
}

export function getProductImages(imageArray: ProductImagesType) {
  if (imageArray.length === 0) {
    return [];
  }

  const values = imageArray.map((imageObj) => Object.values(imageObj)[0]);

  return values.map((value, index) => {
    const color = Object.keys(imageArray[index])[0];
    return {
      color: color,
      image: value, // The image URL
    };
  });
}
