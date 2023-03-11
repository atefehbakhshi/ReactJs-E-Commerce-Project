import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { fetchOrdersData } from "../../api/services";
import { EndOfList } from "../../components/notices";
import Pagination from "../../components/pagination";
import { OrdersTable } from "../../components/tables";
import { OrdersGetData } from "../../type/type";

const DATA_PER_PAGE = 3;

const getData: OrdersGetData = async (ordersDate, page, limit, isDelivered) => {
  const res = await fetchOrdersData(ordersDate, page, limit, isDelivered);
  const data = { data: res.data, status: res.status };
  return data;
};

export const Orders = () => {
  const [isDelivered, setIsDelivered] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [ordersDate, setOrdersDate] = useState("desc");
  const [emptyPage, setEmptyPage] = useState(false);

  const filtredList = (text: string) => {
    setOrdersDate(text);
    setPage(1);
  };

  const deliverHandler = (deliver: boolean) => {
    setIsDelivered(deliver);
    setPage(1);
  };

  useEffect(() => {
    getData(ordersDate, page, DATA_PER_PAGE, isDelivered).then((res) => {
      if (res.status === 200 && res.data.length === 0) {
        setEmptyPage(true);
      } else {
        setEmptyPage(false);
      }
      setList(res.data);
    });
  }, [page, ordersDate, isDelivered]);

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
        {emptyPage ? (
          <EndOfList />
        ) : list.length === 0 ? (
          <span className="loader"></span>
        ) : (
          <OrdersTable list={list} onFiltredList={filtredList} />
        )}
      </div>
      <Pagination
        page={page}
        list={list}
        OnSetPage={(pageNo: number) => setPage(pageNo)}
        dataLength={DATA_PER_PAGE}
      />
    </main>
  );
};
