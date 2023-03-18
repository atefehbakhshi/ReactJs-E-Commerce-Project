import * as yup from "yup";

const addImages = {
  thumbnail: yup
    .mixed()
    .test(
      "fileNumber",
      "وارد کردن  تصویر الزامی می باشد.",
      (files: any) =>
        !files || // Check if `files` is defined
        files.length > 0 // Check if `files` has attachment
    )
    .test(
      "fileSize",
      "اندازه فایل حداکثر 2 مگابایت می باشد.",
      (files: any) =>
        !files ||
        files.length === 0 || // Check if `files` is not an empty list
        Array.from(files).every((file: any) => file.size <= 2_000_000)
    ),
  image: yup
    .mixed()
    .test(
      "fileNumber",
      "وارد کردن دو تصویر الزامی می باشد.",
      (files: any) => !files || files.length === 2 // Check if `files` has more than 1 attachment
    )
    .test(
      "fileSize",
      "اندازه فایل حداکثر 2 مگابایت می باشد.",
      (files: any) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file: any) => file.size <= 2_000_000)
    ),
};

const editImage = {
  thumbnail: yup.mixed(),
  image: yup.mixed(),
};

export const CreateSchema = (mode: string) => {
  let schema;
  if (mode === "add") {
    schema = yup.object({
      name: yup.string().required("نام محصول الزامیست ."),
      ...addImages,
      brand: yup.string().required("برند محصول الزامیست ."),
      price: yup.string().required("قیمت محصول الزامیست .").matches("^[0-9]*$"),
      quantity: yup
        .string()
        .required("تعداد محصول الزامیست .")
        .matches("^[0-9]*$"),
      category: yup.string().required(" دسته بندی محصول الزامیست ."),
      subcategory: yup
        .string()
        .required(" مشخص کردن زیرمجموعه محصول الزامیست ."),
      description: yup.string().required(" توضیحات الزامیست ."),
    });
  } else {
    schema = yup.object({
      name: yup.string().required("نام محصول الزامیست ."),
      ...editImage,
      brand: yup.string().required("برند محصول الزامیست ."),
      price: yup.string().required("قیمت محصول الزامیست .").matches("^[0-9]*$"),
      quantity: yup
        .string()
        .required("تعداد محصول الزامیست .")
        .matches("^[0-9]*$"),
      category: yup.string().required(" دسته بندی محصول الزامیست ."),
      subcategory: yup
        .string()
        .required(" مشخص کردن زیرمجموعه محصول الزامیست ."),
      description: yup.string().required(" توضیحات الزامیست ."),
    });
  }
  return schema;
};
