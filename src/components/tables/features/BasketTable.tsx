import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addOrderProduct } from "../../../store/slices/order-slice";

export const BasketTable = ({ selectedList, location }) => {
  const dispatch = useDispatch();

  const countHandler = (product, text) => {
    const index = selectedList.findIndex((item) => item.id === product.id);
    const newList = [...selectedList];
    let editProduct;
    if (text === "minus") {
      if (product.count === 1) {
        newList.splice(index, 1);
      } else {
        editProduct = { ...product, count: +(product.count - 1) };
        newList.splice(index, 1, editProduct);
      }
      dispatch(addOrderProduct(newList));
    } else {
      if (product.count === product.limitCount) {
        toast.warn(`تعداد موجودی در انبار  ${product.count} عدد می باشد.`);
      } else {
        editProduct = { ...product, count: product.count + 1 };
        newList.splice(index, 1, editProduct);
        dispatch(addOrderProduct(newList));
      }
    }
  };

  const deleteHandler = (id) => {
    const newList = selectedList.filter((item) => item.id !== id);
    dispatch(addOrderProduct(newList));
  };

  return (
    <table className="border rounded w-full">
      <thead>
        <tr className="border-b bg-gray-400 text-white">
          <th className="text-right p-1">تصویر</th>
          <th className="text-right">محصول</th>
          <th className="text-right">تعداد</th>
          <th className="text-right">قیمت</th>
          {location !== "adminPanel" ? (
            <th className="text-right">حذف</th>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {selectedList.map((product, index) => {
          return (
            <tr
              key={product.id}
              className={`border-b ${
                Math.floor(index % 2) !== 0 ? "bg-gray-200" : ""
              }`}
            >
              <td className="p-2">
                <img
                  src={`http://localhost:3002/files/${product.image}`}
                  alt={`${product.name}`}
                  className="max-w-[2rem] rounded sm:max-w-[2rem]"
                />
              </td>
              <td className="p-1">{product.name}</td>
              <td>
                {location !== "adminPanel" ? (
                  <div className="flex gap-1 items-center">
                    <Icon
                      icon="material-symbols:arrow-drop-down-rounded"
                      width="24"
                      className="cursor-pointer"
                      onClick={() => countHandler(product, "minus")}
                    />
                    <span> {product.count.toLocaleString("fa")}</span>
                    <Icon
                      icon="material-symbols:arrow-drop-up-rounded"
                      width="24"
                      className="cursor-pointer"
                      onClick={() => countHandler(product, "plus")}
                    />
                  </div>
                ) : (
                  <span> {product.count.toLocaleString("fa")}</span>
                )}
              </td>
              <td>{product.price.toLocaleString("fa")}</td>
              {location !== "adminPanel" ? (
                <td>
                  <Icon
                    icon="carbon:trash-can"
                    width="22"
                    color="#525252"
                    onClick={() => deleteHandler(product.id)}
                  />
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
