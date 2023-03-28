import { FieldValues } from "react-hook-form/dist/types";
import { uploadImage } from "../../api/services";
import { ProductGetFromAdmin, ProductGetFromDbI } from "../../type/interface";

const uploadHandler = async (img: any) => {
  let formData = new FormData();
  formData.append("image", img);
  const res = await uploadImage(formData);
  return { data: res.data.filename, status: res.status };
};

export const objectEditor = async (
  data: FieldValues | ProductGetFromAdmin,
  defaultImages: { image: string[]; thumbnail: string }
) => {
  let thumbnail;
  let firstImage;
  let secondImage;

  if (defaultImages.thumbnail === data.thumbnail) {
    thumbnail = defaultImages.thumbnail;
  } else {
    const res = await uploadHandler(data.thumbnail[0]);
    thumbnail = res.data;
  }

  if (defaultImages.image[0] === data.image[0]) {
    firstImage = defaultImages.image[0];
  } else {
    const res = await uploadHandler(data.image[0]);
    firstImage = res.data;
  }

  if (defaultImages.image[1] === data.image[1]) {
    secondImage = defaultImages.image[1];
  } else {
    const res = await uploadHandler(data.image[1]);
    secondImage = res.data;
  }

  const obj = {
    name: data.name,
    brand: data.brand,
    thumbnail,
    image: [firstImage, secondImage],
    price: Number(data.price),
    quantity: Number(data.quantity),
    category: Number(data.category),
    subcategory:
      data.subcategory === "1" ? data.category * 2 - 1 : data.category * 2,
    description: data.description,
  };

  return obj;
};

export const objectCreator = async (
  data: FieldValues | ProductGetFromAdmin
) => {
  const thumbnail = await uploadHandler(data.thumbnail[0]);
  const firstImage = await uploadHandler(data.image[0]);
  const secondImage = await uploadHandler(data.image[1]);

  const obj = {
    name: data.name,
    brand: data.brand,
    thumbnail: thumbnail.data,
    image: [firstImage.data, secondImage.data],
    price: Number(data.price),
    quantity: Number(data.quantity),
    category: Number(data.category),
    subcategory:
      data.subcategory === "1" ? data.category * 2 - 1 : data.category * 2,
    description: data.description,
  };

  return obj;
};
