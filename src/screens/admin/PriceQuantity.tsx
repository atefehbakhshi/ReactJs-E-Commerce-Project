import { useEffect, useState } from "react";
import { fetchAllProductsDataService } from "../../api/services/get";
import { Button } from "../../components/buttons";
import Pagination from "../../components/pagination";
import { PriceQuantityTable } from "../../components/tables";

const DATA_PER_PAGE = 5;

const getData = async (page, limit) => {
  const res = await fetchAllProductsDataService(page, limit);
  return res.data;
};

export const PriceQuantity = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData(page, DATA_PER_PAGE).then((res) => setList(res));
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
        list={list}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataLength={DATA_PER_PAGE}
      />
    </main>
  );
};
