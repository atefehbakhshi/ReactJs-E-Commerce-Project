import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EmptyList } from "../../components/notices";
import Pagination from "../../components/pagination";
import { OrdersTable } from "../../components/tables";
import { getOrdersList } from "../../store/actions/data-actions";
import { AppDispatch, RootState } from "../../type/type";

export const Orders = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isDelivered, setIsDelivered] = useState(false);
  const [ordersDate, setOrdersDate] = useState("desc");
  const [page, setPage] = useState(1);
  const { ordersdata } = useSelector((state:RootState) => state.data);

  const filtredList = (text: string) => {
    setOrdersDate(text);
    setPage(1);
  };

  const deliverHandler = (deliver: boolean) => {
    setIsDelivered(deliver);
    setPage(1);
  };

  useEffect(() => {
    dispatch(getOrdersList({ ordersDate, page, isDelivered }));
  }, [dispatch, page, ordersDate, isDelivered]);

  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت سفارشات</h1>
        <div className="flex gap-2">
          <div
            className="flex items-center gap-1 border-l border-[#afafaf50] px-2"
            onClick={() => deliverHandler(false)}
          >
            {isDelivered ? (
              <Icon icon="material-symbols:circle-outline" color="#525252" />
            ) : (
              <Icon
                icon="material-symbols:check-circle-outline"
                color="#41c1c6"
              />
            )}
            <span>در انتظار تحویل</span>
          </div>
          <div
            className="flex items-center gap-1"
            onClick={() => deliverHandler(true)}
          >
            {isDelivered ? (
              <Icon
                icon="material-symbols:check-circle-outline"
                color="#41c1c6"
              />
            ) : (
              <Icon icon="material-symbols:circle-outline" color="#525252" />
            )}
            <span>تحویل شده</span>
          </div>
        </div>
      </header>
      <div className="px-3 py-8 max-w-xl mx-auto">
        {ordersdata.status === "pending" ? (
          <span className="loader"></span>
        ) : ordersdata.status === "success" && ordersdata.list.length === 0 ? (
          <EmptyList />
        ) : (
          <OrdersTable list={ordersdata.list} onFiltredList={filtredList} />
        )}
      </div>
      <Pagination
        page={page}
        totalCount={ordersdata.count}
        OnSetPage={(pageNo: number) => setPage(pageNo)}
        dataPerPage={ordersdata.dataPerPage}
      />
    </main>
  );
};
