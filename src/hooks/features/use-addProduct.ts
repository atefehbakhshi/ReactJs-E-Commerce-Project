import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { addProduct, uploadImage } from "../../api/services/index";
import { useDispatch } from "react-redux";
import { setShowModal } from "../../store/slices/modal-slice";

const uploadHandler = async (img) => {
  let formData = new FormData();
  formData.append("image", img);
  const res = await uploadImage(formData);
  return { data: res.data.filename, status: res.status };
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
  subCat: yup.string().required(" مشخص کردن زیرمجموعه محصول الزامیست ."),
  desc: yup.string().required(" توضیحات الزامیست ."),
});

export const useAddProduct = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addProductSchema),
    mode: "onChange",
  });

  const handleAddProduct = async (data) => {
    const thumbnail = await uploadHandler(data.image[0]);
    const firstImage = await uploadHandler(data.images[0]);
    const secondImage = await uploadHandler(data.images[1]);

    const newProduct = {
      name: data.name,
      brand: data.brand,
      thumbnail: thumbnail.data,
      image: [firstImage.data, secondImage.data],
      price: Number(data.price),
      quantity: Number(data.quantity),
      category: Number(data.category),
      subcategory:
        data.subCat === "1" ? data.category * 2 - 1 : data.category * 2,
      description: data.desc,
    };

    if (
      thumbnail.status === 200 &&
      firstImage.status === 200 &&
      secondImage.status === 200
    ) {
      try {
        const res = await addProduct(newProduct);
        if (res.status === 200) {
          toast.success(".محصول با موفقیت به لیست اضافه گردید ");
        }
      } catch (ex) {
        toast.error(".محصول به لیست اضافه نگردید، لطفا مجدد تلاش فرمائید ");
      }
    } else {
      toast.error(".مشکلی در اپلود عکس به وجود آمده، لطفا مجدد تلاش فرمائید ");
    }
    dispatch(setShowModal(false));
  };

  return {
    register,
    handleSubmit,
    errors,
    handleAddProduct,
  };
};
