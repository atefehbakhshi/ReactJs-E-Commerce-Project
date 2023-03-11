import { Icon } from "@iconify/react";

export const BasketTable = ({ selectedList, location }) => {
  return (
    <table className="border rounded w-full">
      <thead>
        <tr className="border-b bg-gray-400 text-white">
          <th className="text-right p-1">محصول</th>
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
              <td className="p-1">{product.name}</td>
              <td>{product.count.toLocaleString("fa")}</td>
              <td>{product.price.toLocaleString("fa")}</td>
              {location !== "adminPanel" ? (
                <td>
                  <Icon icon="carbon:trash-can" width="22" color="#525252" />
                </td>
              ) : null}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
