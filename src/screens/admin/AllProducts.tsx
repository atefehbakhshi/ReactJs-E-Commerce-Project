import { useEffect, useState } from "react";
import {
  fetchAllProductsDataService,
  fetchDataByCategoryService,
} from "../../api/services/get";
import { Button } from "../../components/buttons";
import Pagination from "../../components/pagination";
import { ProductsTable } from "../../components/tables";

const DATA_PER_PAGE = 5;

const getData = async (page, limit, productCategory) => {
  let res;
  if (productCategory === "all") {
    res = await fetchAllProductsDataService(page, limit);
  } else {
    res = await fetchDataByCategoryService(productCategory, page, limit);
  }
  return res.data;
};

export const AllProducts = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [productCategory, setProductCategory] = useState("all");

  const filtredList = (id: string) => {
    setProductCategory(id);
    setPage(1);
  };

  useEffect(() => {
    getData(page, DATA_PER_PAGE, productCategory).then((res) => setList(res));
  }, [page, productCategory]);

  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت محصولات</h1>
        <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
          افزودن محصول
        </Button>
      </header>
      <div className="px-3 py-8 max-w-xl mx-auto">
        {list.length === 0 ? (
          <span className="loader"></span>
        ) : (
          <ProductsTable list={list} onFiltredList={filtredList} />
        )}
      </div>
      <Pagination
        page={page}
        list={list}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataLength={DATA_PER_PAGE}
      />
      {/* chart */}
      <div></div>
    </main>
  );
};
