import { Icon } from "@iconify/react";

export const BasketTable = ({ selectedList }) => {
  let bg = "";
  return (
    <table className="border rounded w-full">
      <thead>
        <tr className="border-b bg-gray-400 text-white">
          <th className="text-right p-1">محصول</th>
          <th className="text-right">تعداد</th>
          <th className="text-right">قیمت</th>
          <th className="text-right">حذف</th>
        </tr>
      </thead>
      <tbody>
        {selectedList.map((product, index) => {
          if (Math.floor(index % 2) !== 0) {
            bg = "bg-gray-200";
          } else {
            bg = "";
          }
          return (
            <tr key={product.id} className={`border-b ${bg}`}>
              <td className="p-1">{product.title}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <Icon icon="carbon:trash-can" width="22" color="#525252" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
