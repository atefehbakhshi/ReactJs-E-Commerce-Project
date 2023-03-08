import { useEffect, useState } from "react";
import { fetchAllProductsData } from "../../api/services";
import { Button } from "../../components/buttons";
import { EndOfList } from "../../components/notices";
import Pagination from "../../components/pagination";
import { PriceQuantityTable } from "../../components/tables";

const DATA_PER_PAGE = 5;

const getData = async (page: number, limit: number) => {
  const res = await fetchAllProductsData(page, limit);
  const data = { data: res.data, status: res.status };
  return data;
};

export const PriceQuantity = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [emptyPage, setEmptyPage] = useState(false);

  useEffect(() => {
    getData(page, DATA_PER_PAGE).then((res) => {
      if (res.status === 200 && res.data.length === 0) {
        setEmptyPage(true);
      } else {
        setEmptyPage(false);
      }
      setList(res.data);
    });
  }, [page]);

  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت موجودی و قیمت ها</h1>
        <Button>ذخیره</Button>
      </header>
      <div className="px-3 py-8 max-w-xl mx-auto">
        {emptyPage ? (
          <EndOfList />
        ) : list.length === 0 ? (
          <span className="loader"></span>
        ) : (
          <PriceQuantityTable list={list} />
        )}
      </div>
      <Pagination
        page={page}
        list={list}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataLength={DATA_PER_PAGE}
      />
    </main>
  );
};
