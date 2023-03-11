import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { categoryText, subcategoryText } from "../../constants";
import {
  setShowModal,
  setModalName,
  getId,
} from "../../../store/slices/modal-slice";

export const ProductsTable = ({ list, onFiltredList }) => {
  const dispatch = useDispatch();

  const setDeleteProductModal = (id) => {
    dispatch(setShowModal(true));
    dispatch(setModalName("deleteModal"));
    dispatch(getId(id));
  };

  return (
    <table className=" border border-collapse rounded w-full">
      <thead>
        <tr className=" bg-gray-400 text-white">
          <th className="border text-right text-xs w-[15%] px-1">تصویر</th>
          <th className="border text-right text-xs w-[55%] px-1">نام محصول</th>
          <th className="border text-right text-xs w-[15%] px-1">
            <select
              name="category"
              className="bg-gray-400"
              onChange={(e) => onFiltredList(e.target.value)}
            >
              <option value="all">همه</option>
              <option value="1">ساعت</option>
              <option value="2">عینک</option>
              <option value="3">کفش</option>
              <option value="4">لباس</option>
              <option value="5">عطر و ادکلن</option>
              <option value="6">جواهرات</option>
            </select>
          </th>
          <th className="border text-right text-xs w-[15%] px-1">
            حذف/ ویرایش
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((product, index) => {
          return (
            <tr
              key={product.id}
              className={`${Math.floor(index % 2) !== 0 ? "bg-gray-200" : ""}`}
            >
              <td className="p-1 border">
                <div className="flex justify-center">
                  <img
                    src={`http://localhost:3002/files/${product.thumbnail}`}
                    alt={product.name}
                    className="max-w-[2rem] rounded sm:max-w-[3rem]"
                  />
                </div>
              </td>
              <td className="p-1 border">{product.name.substring(0, 30)}</td>
              <td className="p-1 border">
                {categoryText[product.category]}/
                {subcategoryText[product.subcategory]}
              </td>
              <td className="p-1 border">
                <div className="flex gap-2">
                  <Icon
                    icon="carbon:trash-can"
                    width="20"
                    color="#525252"
                    onClick={() => setDeleteProductModal(product.id)}
                  />
                  <Icon
                    icon="material-symbols:edit"
                    width="20"
                    color="#525252"
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
