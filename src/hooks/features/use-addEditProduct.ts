import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import {
  addProduct,
  editProductDataById,
  uploadImage,
} from "../../api/services/index";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../store/slices/modal-slice";
import { getAllProducts } from "../../store/actions/data-actions";

const uploadHandler = async (img) => {
  let formData = new FormData();
  formData.append("image", img);
  const res = await uploadImage(formData);
  return { data: res.data.filename, status: res.status };
};

const objectCreator = async (data) => {
  const thumbnail = await uploadHandler(data.image[0]);
  const firstImage = await uploadHandler(data.images[0]);
  const secondImage = await uploadHandler(data.images[1]);

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

const addProductSchema = yup.object({
  name: yup.string().required("نام محصول الزامیست ."),
  image: yup
    .mixed()
    .test(
      "fileNumber",
      "وارد کردن  تصویر الزامی می باشد.",
      (files) =>
        !files || // Check if `files` is defined
        files.length > 0 // Check if `files` has attachment
    )
    .test(
      "fileSize",
      "اندازه فایل حداکثر 2 مگابایت می باشد.",
      (files) =>
        !files ||
        files.length === 0 || // Check if `files` is not an empty list
        Array.from(files).every((file) => file.size <= 2_000_000)
    ),
  images: yup
    .mixed()
    .test(
      "fileNumber",
      "وارد کردن دو تصویر الزامی می باشد.",
      (files) => !files || files.length === 2 // Check if `files` has more than 1 attachment
    )
    .test(
      "fileSize",
      "اندازه فایل حداکثر 2 مگابایت می باشد.",
      (files) =>
        !files ||
        files.length === 0 ||
        Array.from(files).every((file) => file.size <= 2_000_000)
    ),

  brand: yup.string().required("برند محصول الزامیست ."),
  price: yup.string().required("قیمت محصول الزامیست .").matches("^[0-9]*$"),
  quantity: yup.string().required("تعداد محصول الزامیست .").matches("^[0-9]*$"),
  category: yup.string().required(" دسته بندی محصول الزامیست ."),
  subcategory: yup.string().required(" مشخص کردن زیرمجموعه محصول الزامیست ."),
  description: yup.string().required(" توضیحات الزامیست ."),
});

export const useAddEditProduct = (mode) => {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state) => state.data);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductSchema),
    mode: "onChange",
  });

  const handleAddProduct = async (data) => {
    const product = await objectCreator(data);

    if (mode === "add") {
      try {
        const res = await addProduct(product);
        if (res.status === 201) {
          toast.success(".محصول با موفقیت به لیست اضافه گردید ");
          const required = {
            page: 1,
            productCategory: "all",
          };
          dispatch(getAllProducts(required));
        }
      } catch (ex) {
        toast.error(".محصول به لیست اضافه نگردید، لطفا مجدد تلاش فرمائید ");
      }
    } else {
      const productId = Number(mode.split("/")[1]);
      try {
        const res = await editProductDataById(productId, product);

        if (res.status === 200) {
          toast.success(".مشخصات  با موفقیت ویرایش گردید ");
          const required = {
            page: allProducts.page,
            productCategory: allProducts.productCategory,
          };
          dispatch(getAllProducts(required));
        }
      } catch (ex) {
        toast.error(".ویرایش اطلاعات ناموفق بود، لطفا مجدد تلاش فرمائید ");
      }
    }

    dispatch(setShowModal(false));
  };

  return {
    reset,
    register,
    handleSubmit,
    errors,
    handleAddProduct,
  };
};
