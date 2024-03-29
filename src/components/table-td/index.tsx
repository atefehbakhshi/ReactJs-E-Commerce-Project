import { FC, useState } from "react";
import { perToEn } from "../../utile/transferNumbers";
import { ProductGetFromDbI } from "../../type/interface";

const Td: FC<{
  product: ProductGetFromDbI;
  editValue: number;
  editList: ProductGetFromDbI[];
  setEditList: (list: ProductGetFromDbI[]) => void;
  text: string;
}> = ({ product, editValue, editList, setEditList, text }) => {
  const [editMode, setEditMode] = useState(true);
  return (
    <td
      className={`p-1 border ${
        editList.find((i) => i.id === product.id) ? "bg-[#77e1e5]" : ""
      }`}
      contentEditable={editMode}
      suppressContentEditableWarning={true}
      onClick={(e) => {
        setEditMode(true);
        const event = e.target as HTMLElement;
        event.innerText = editValue.toLocaleString("fa").split("٬").join("");
      }}
      onBlur={(e) => {
        if (
          e.target.innerText !==
          editValue.toLocaleString("fa").split("٬").join("")
        ) {
          const list = [...editList];
          const filtredList = list.filter(
            (i: ProductGetFromDbI) => i.id !== product.id
          );

          const newValue = perToEn(e.target.innerText);
          if (newValue.match("^[0-9]*$") !== null) {
            let editedValue: ProductGetFromDbI = { ...product };
            if (text === "price") {
              editedValue = {
                ...product,
                price: Number(newValue),
              };
            } else {
              editedValue = {
                ...product,
                quantity: Number(newValue),
              };
            }

            filtredList.push(editedValue);
          } else {
            e.target.innerText = editValue.toLocaleString("fa");
          }

          setEditList(filtredList);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          const event = e.target as HTMLElement;
          event.innerText = editValue.toLocaleString("fa");

          const list = [...editList];
          const filtredList = list.filter((i) => i.id !== product.id);

          setEditList(filtredList);
          setEditMode(false);
        }
      }}
    >
      {text === "price"
        ? editList.find((i) => i.id === product.id)
          ? editList[
              editList.findIndex((i) => i.id === product.id)
            ].price.toLocaleString("fa")
          : editValue.toLocaleString("fa")
        : editList.find((i) => i.id === product.id)
        ? editList[
            editList.findIndex((i) => i.id === product.id)
          ].quantity.toLocaleString("fa")
        : editValue.toLocaleString("fa")}
    </td>
  );
};

export default Td;
