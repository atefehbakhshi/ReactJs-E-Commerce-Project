import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchDataById } from "../../../api/services";
import { useAddEditProduct } from "../../../hooks";
import { Button } from "../../buttons";
import Input from "../../input";

export const AddEditProduct = () => {
  const [mode, setMode] = useState("add");
  const [subcategory, setSubcategory] = useState(["زنانه", "مردانه"]);
  const { tempId } = useSelector((state) => state.modal);
  const { register, handleSubmit, errors, handleAddProduct, reset } =
    useAddEditProduct(mode);

  const categoryHandler = (e) => {
    if (e.target.value === "6") {
      setSubcategory(["دستبند", "گردنبند"]);
    } else {
      setSubcategory(["زنانه", "مردانه"]);
    }
  };

  //  if the form use for editing
  useEffect(() => {
    if (tempId !== 0) {
      setMode(`edit/${tempId}`);

      fetchDataById(tempId).then((res) => {
        const editedProduct = { ...res.data[0] };

        // last category has difference subcategory name
        if (res.data[0].subcategory === 11 || res.data[0].subcategory === 12) {
          setSubcategory(["دستبند", "گردنبند"]);
        }

        // we save subcategory by 12 number but display to admin just 2 subcategory
        if (editedProduct.subcategory % 2 === 0) {
          editedProduct.subcategory = 2;
        } else {
          editedProduct.subcategory = 1;
        }

        reset(editedProduct);
      });
    }
  }, []);

  return (
    <form
      className="flex flex-col gap-8 max-w-xl mx-auto p-4 max-h-[75vh] overflow-y-scroll sd:overflow-hidden "
      onSubmit={handleSubmit(handleAddProduct)}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <Input
          label="نام محصول"
          id="name"
          type="text"
          error={errors.name?.message}
          validation={{ ...register("name") }}
        />

        <Input
          label="برند "
          id="brand"
          type="text"
          error={errors.brand?.message}
          validation={{ ...register("brand") }}
        />

        <Input
          label="تصویر محصول"
          id="image"
          type="file"
          error={errors.image?.message}
          validation={{ ...register("image") }}
          accept=".png,.jpg"
        />

        <Input
          label="لیست تصاویر محصول "
          id="images"
          type="file"
          error={errors.images?.message}
          validation={{ ...register("images") }}
          accept=".png,.jpg"
          multiple="multiple"
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="category" className="font-semibold">
            مجموعه
          </label>
          <select
            id="category"
            className="bg-gray-100 rounded p-2"
            {...register("category")}
            onBlur={(e) => categoryHandler(e)}
          >
            it does not register correctly
            <option value="" className="hidden"></option>
            <option value="1">ساعت</option>
            <option value="2">عینک</option>
            <option value="3">کفش</option>
            <option value="4">لباس</option>
            <option value="5">عطر و ادکلن</option>
            <option value="6">جواهرات</option>
          </select>
          <p className="text-red-400 font-light text-xs">
            {errors.category?.message}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subcategory" className="font-semibold">
            زیر مجموعه
          </label>
          <select
            id="subcategory"
            className="bg-gray-100 rounded p-2"
            {...register("subcategory")}
          >
            <option value="" className="hidden"></option>
            {subcategory.map((sub, index) => (
              <option key={index} value={index + 1}>
                {sub}
              </option>
            ))}
          </select>
          <p className="text-red-400 font-light text-xs">
            {errors.subcategory?.message}
          </p>
        </div>

        <Input
          label="قیمت "
          id="price"
          type="number"
          error={errors.price?.message}
          validation={{ ...register("price") }}
        />

        <Input
          label="تعداد "
          id="quantity"
          type="number"
          error={errors.quantity?.message}
          validation={{ ...register("quantity") }}
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-semibold">
            توضیحات
          </label>
          <textarea
            id="description"
            rows={5}
            className="bg-gray-100 rounded p-2"
            {...register("description")}
          ></textarea>
          <p className="text-red-400 font-light text-xs">
            {errors.description?.message}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 md:mx-auto">
        {tempId === 0 ? (
          <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
            ذخیره
          </Button>
        ) : (
          <Button bg="bg-[#41c1c6]" hover="hover:bg-[#77e1e5]">
            ویرایش
          </Button>
        )}
      </div>
    </form>
  );
};
