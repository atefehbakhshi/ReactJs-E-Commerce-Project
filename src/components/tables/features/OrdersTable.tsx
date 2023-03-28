import { Icon } from "@iconify/react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import {
  getId,
  setModalName,
  setShowModal,
} from "../../../store/slices/modal-slice";
import { OrderI } from "../../../type/interface";

export const OrdersTable: FC<{
  list: OrderI[];
  onFiltredList: (e: string) => void;
}> = ({ list, onFiltredList }) => {
  const dispatch = useDispatch();

  const showOrdersInfo = (id: number) => {
    dispatch(setShowModal(true));
    dispatch(setModalName("ordersInfo"));
    dispatch(getId(id));
  };

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
        {list.map((user: OrderI, index: number) => {
          return (
            <tr
              key={user.id}
              className={`${Math.floor(index % 2) !== 0 ? "bg-gray-200" : ""}`}
            >
              <td className="p-1 border">
                {user.username} {user.lastname}
              </td>
              <td className="p-1 border">{user.prices.toLocaleString("fa")}</td>
              <td className="p-1 border">
                {new Date(user.createdAt).toLocaleDateString("fa")}
              </td>
              <td className="p-1 border">
                <div className="flex justify-center">
                  <Icon
                    icon="material-symbols:check"
                    width="20"
                    color="#525252"
                    onClick={() => showOrdersInfo(user.id)}
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
