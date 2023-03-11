import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllProductsData, fetchDataByCategory } from "../../api/services";
import { Button } from "../../components/buttons";
import { EndOfList } from "../../components/notices";
import Pagination from "../../components/pagination";
import { ProductsTable } from "../../components/tables";
import { setModalName, setShowModal } from "../../store/slices/modal-slice";
import { AllProductsGetData } from "../../type/type";

const DATA_PER_PAGE = 5;

const getData: AllProductsGetData = async (page, limit, productCategory) => {
  let res;
  if (productCategory === "all") {
    res = await fetchAllProductsData(page, limit);
  } else {
    res = await fetchDataByCategory(productCategory, page, limit);
  }
  const data = { data: res.data, status: res.status };
  return data;
};

export const AllProducts = () => {
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [productCategory, setProductCategory] = useState("all");
  const [emptyPage, setEmptyPage] = useState(false);

  const filtredList = (id: string) => {
    setProductCategory(id);
    setPage(1);
  };

  useEffect(() => {
    getData(page, DATA_PER_PAGE, productCategory).then((res) => {
      if (res.status === 200 && res.data.length === 0) {
        setEmptyPage(true);
      } else {
        setEmptyPage(false);
      }
      setList(res.data);
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
        {emptyPage ? (
          <EndOfList />
        ) : list.length === 0 ? (
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
