import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { addProduct, editProductDataById } from "../../api/services/index";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../store/slices/modal-slice";
import { getAllProducts } from "../../store/actions/data-actions";
import { objectCreator, objectEditor } from "../utility/objecCreator";
import { CreateSchema } from "../utility/schema";
import {
  ProductGetFromAdmin,
  ProductGetFromDbI,
  ProductSendToDbI,
} from "../../type/interface";
import { AppDispatch, RootState } from "../../type/type";
import { FieldValues } from "react-hook-form/dist/types";

let defaultImages: { image: string[]; thumbnail: string } = {
  thumbnail: "",
  image: [],
};

export const useAddEditProduct = (mode: string) => {
  const dispatch = useDispatch<AppDispatch>();
  const { allProducts } = useSelector((state: RootState) => state.data);

  const productSchema = CreateSchema(mode);

  const getEditedProduct = (product: ProductGetFromDbI) => {
    defaultImages.thumbnail = product.thumbnail;
    defaultImages.image = product.image;
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productSchema),
    mode: "onChange",
  });

  const handleAddProduct = async (data: FieldValues | ProductGetFromAdmin) => {
    let product: ProductSendToDbI | ProductGetFromDbI;

    if (mode === "add") {
      product = await objectCreator(data);
    } else {
      product = await objectEditor(data, defaultImages);
    }

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
    getEditedProduct,
  };
};
