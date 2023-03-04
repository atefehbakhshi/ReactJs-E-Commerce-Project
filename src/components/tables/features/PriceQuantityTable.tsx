export const PriceQuantityTable = ({ list }) => {
  let bg = "";
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
          if (Math.floor(index % 2) !== 0) {
            bg = "bg-gray-200";
          } else {
            bg = "";
          }
          return (
            <tr key={product.id} className={`${bg}`}>
              <td className="p-1 border w-3/4">
                {product.name.substring(0, 30)}
              </td>
              <td
                className="p-1 border"
                contentEditable="true"
                onBlur={(e) => console.log(e.target.innerText)}
              >
                {product.price}
              </td>
              <td className="p-1 border" contentEditable="true">
                {product.quantity}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
