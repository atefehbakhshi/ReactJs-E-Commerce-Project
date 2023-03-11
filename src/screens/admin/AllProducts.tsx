import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProductsData, fetchDataByCategory } from "../../api/services";
import { Button } from "../../components/buttons";
import Pagination from "../../components/pagination";
import { ProductsTable } from "../../components/tables";
import { ALL_PRODUCTS_PER_PAGE } from "../../constants";
import { setModalName, setShowModal } from "../../store/slices/modal-slice";
import { AllProductsGetData } from "../../type/type";

const getData: AllProductsGetData = async (page, limit, productCategory) => {
  let res;
  if (productCategory === "all") {
    res = await fetchAllProductsData(page, limit);
  } else {
    res = await fetchDataByCategory(productCategory, page, limit);
  }

  return { data: res.data, count: res.headers["x-total-count"] };
};

export const AllProducts = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [productCategory, setProductCategory] = useState("all");
  const [count, setCount] = useState(0);

  const filtredList = (id: string) => {
    setProductCategory(id);
    setPage(1);
  };

  useEffect(() => {
    getData(page, ALL_PRODUCTS_PER_PAGE, productCategory).then((res) => {
      setList(res.data);
      setCount(res.count);
    });
  }, [page, productCategory]);

  const addProduct = () => {
    dispatch(setShowModal(true));
    dispatch(setModalName("addNewProduct"));
  };

  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت محصولات</h1>
        <Button
          bg="bg-[#ade5ad]"
          hover="hover:bg-[#bdeabd]"
          onClick={addProduct}
        >
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
        totalCount={count}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataPerPage={ALL_PRODUCTS_PER_PAGE}
      />
    </main>
  );
};
