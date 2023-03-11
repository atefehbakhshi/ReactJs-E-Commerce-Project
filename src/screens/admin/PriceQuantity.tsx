import { useEffect, useState } from "react";
import { fetchAllProductsData } from "../../api/services";
import { Button } from "../../components/buttons";
import Pagination from "../../components/pagination";
import { PriceQuantityTable } from "../../components/tables";
import { PRICE_QUANTITY_PER_PAGE } from "../../constants";

// const [res1, res2] = await Promiss.all([])

const getData = async (page: number, limit: number) => {
  const res = await fetchAllProductsData(page, limit);
  return { data: res.data, count: res.headers["x-total-count"] };
};

export const PriceQuantity = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData(page, PRICE_QUANTITY_PER_PAGE).then((res) => {
      setList(res.data);
      setCount(res.count);
    });
  }, [page]);

  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت موجودی و قیمت ها</h1>
        <Button>ذخیره</Button>
      </header>
      <div className="px-3 py-8 max-w-xl mx-auto">
        {list.length === 0 ? (
          <span className="loader"></span>
        ) : (
          <PriceQuantityTable list={list} />
        )}
      </div>
      <Pagination
        page={page}
        totalCount={count}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataPerPage={PRICE_QUANTITY_PER_PAGE}
      />
    </main>
  );
};
