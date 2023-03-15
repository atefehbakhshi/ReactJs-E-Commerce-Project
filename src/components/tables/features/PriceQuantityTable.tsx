import { useEffect, useState } from "react";
import { perToEn } from "../../../utile/transferNumbers";
// import Td from "../../table-td";

export const PriceQuantityTable = ({
  list,
  onContainEditItem,
  onEditHandler,
  mode,
}) => {
  const [editPriceList, setEditPriceList] = useState([]);
  const [editQuantityList, setEditQuantityList] = useState([]);
  const [editMode, setEditMode] = useState(true);

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
              {/* ========================= */}
              <td
                className={`p-1 border ${
                  editPriceList.find((i) => i.id === product.id)
                    ? "bg-[#77e1e5]"
                    : ""
                }`}
                contentEditable={editMode}
                suppressContentEditableWarning={true}
                onClick={(e) => {
                  setEditMode(true);

                  e.target.innerText = product.price
                    .toLocaleString("fa")
                    .split("٬")
                    .join("");
                }}
                onBlur={(e) => {
                  if (
                    e.target.innerText !==
                    product.price.toLocaleString("fa").split("٬").join("")
                  ) {
                    const list = [...editPriceList];
                    const filtredList = list.filter((i) => i.id !== product.id);

                    const newValue = perToEn(e.target.innerText);
                    if (newValue.match("^[0-9]*$") !== null) {
                      filtredList.push({
                        ...product,
                        price: Number(newValue),
                      });
                    } else {
                      e.target.innerText = product.price.toLocaleString("fa");
                    }

                    setEditPriceList(filtredList);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    e.target.innerText = product.price.toLocaleString("fa");

                    const list = [...editPriceList];
                    const filtredList = list.filter((i) => i.id !== product.id);

                    setEditPriceList(filtredList);
                    setEditMode(false);
                  }
                }}
              >
                {editPriceList.find((i) => i.id === product.id)
                  ? editPriceList[
                      editPriceList.findIndex((i) => i.id === product.id)
                    ].price.toLocaleString("fa")
                  : product.price.toLocaleString("fa")}
              </td>
              {/* ========================= */}
              <td
                className={`p-1 border ${
                  editQuantityList.find((i) => i.id === product.id)
                    ? "bg-[#77e1e5]"
                    : ""
                }`}
                contentEditable={editMode}
                suppressContentEditableWarning={true}
                onClick={(e) => {
                  setEditMode(true);

                  e.target.innerText = product.quantity
                    .toLocaleString("fa")
                    .split("٬")
                    .join("");
                }}
                onBlur={(e) => {
                  if (
                    e.target.innerText !==
                    product.quantity.toLocaleString("fa").split("٬").join("")
                  ) {
                    const list = [...editQuantityList];
                    const filtredList = list.filter((i) => i.id !== product.id);

                    const newValue = perToEn(e.target.innerText);
                    if (newValue.match("^[0-9]*$") !== null) {
                      filtredList.push({
                        ...product,
                        quantity: Number(newValue),
                      });
                    } else {
                      e.target.innerText =
                        product.quantity.toLocaleString("fa");
                    }

                    setEditQuantityList(filtredList);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") {
                    e.target.innerText = product.quantity.toLocaleString("fa");

                    const list = [...editQuantityList];
                    const filtredList = list.filter((i) => i.id !== product.id);

                    setEditQuantityList(filtredList);
                    setEditMode(false);
                  }
                }}
              >
                {editQuantityList.find((i) => i.id === product.id)
                  ? editQuantityList[
                      editQuantityList.findIndex((i) => i.id === product.id)
                    ].quantity.toLocaleString("fa")
                  : product.quantity.toLocaleString("fa")}
              </td>
              {/* ========================= */}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
