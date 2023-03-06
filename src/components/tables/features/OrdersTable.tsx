import { Icon } from "@iconify/react";

export const OrdersTable = ({ list, onFiltredList }) => {
  let bg = "";
  return (
    <table className=" border border-collapse rounded w-full">
      <thead>
        <tr className=" bg-gray-400 text-white">
          <th className="border text-right text-xs w-[15%] px-1">نام کاربر</th>
          <th className="border text-right text-xs w-[55%] px-1">مجموع مبلغ</th>
          <th className="border text-right text-xs w-[15%] px-1">
            <select
              name="category"
              className="bg-gray-400"
              onChange={(e) => onFiltredList(e.target.value)}
            >
              <option className="hidden">زمان ثبت سفارش</option>
              <option value="desc">جدیدترین</option>
              <option value="asc"> قدیمی ترین </option>
            </select>
          </th>
          <th className="border text-right text-xs w-[15%] px-1">
            بررسی سفارش
          </th>
        </tr>
      </thead>
      <tbody>
        {list.map((user, index) => {
          if (Math.floor(index % 2) !== 0) {
            bg = "bg-gray-200";
          } else {
            bg = "";
          }

          return (
            <tr key={user.id} className={`${bg}`}>
              <td className="p-1 border">
                {user.username} {user.lastname}
              </td>
              <td className="p-1 border">{user.prices}</td>
              <td className="p-1 border">
                {new Date(user.createdAt).toLocaleDateString("FA")}
              </td>
              <td className="p-1 border">
                <div className="flex justify-center">
                  <Icon
                    icon="material-symbols:check"
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
