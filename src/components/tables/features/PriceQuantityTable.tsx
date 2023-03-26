import { FC, useEffect, useState } from "react";
import { ProductI } from "../../../type/interface";
import Td from "../../table-td";

export const PriceQuantityTable: FC<{
  list: ProductI[];
  onContainEditItem: (a: boolean) => void;
  onEditHandler: (a: { price: ProductI[]; quantity: ProductI[] }) => void;
  mode: string;
}> = ({ list, onContainEditItem, onEditHandler, mode }) => {
  const [editPriceList, setEditPriceList] = useState<ProductI[] | []>([]);
  const [editQuantityList, setEditQuantityList] = useState<ProductI[] | []>([]);

  // reset lists for changing colorful background
  useEffect(() => {
    if (mode === "done") {
      setEditPriceList([]);
      setEditQuantityList([]);
    }
  }, [mode]);

  useEffect(() => {
    if (editPriceList.length > 0 || editQuantityList.length > 0) {
      // change store button color
      onContainEditItem(true);
      onEditHandler({ price: editPriceList, quantity: editQuantityList });
    } else {
      onContainEditItem(false);
    }
  }, [editPriceList, editQuantityList]);

  return (
    <table className="border border-collapse rounded w-full">
      <thead>
        <tr className=" bg-gray-400 text-white">
          <th className="border text-right text-xs w-[15%] px-1">محصول</th>
          <th className="border text-right text-xs w-[55%] px-1">قیمت</th>
          <th className="border text-right text-xs w-[15%] px-1">موجودی</th>
        </tr>
      </thead>
      <tbody>
        {list.map((product, index) => {
          return (
            <tr
              key={product.id}
              className={`${Math.floor(index % 2) !== 0 ? "bg-gray-200" : ""}`}
            >
              <td className="p-1 border w-3/4">
                {product.name.substring(0, 30)}
              </td>
              <Td
                product={product}
                editList={editPriceList}
                setEditList={(list) => setEditPriceList(list)}
                editValue={product.price}
                text="price"
              />
              <Td
                product={product}
                editList={editQuantityList}
                setEditList={(list) => setEditQuantityList(list)}
                editValue={product.quantity}
                text="quantity"
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
