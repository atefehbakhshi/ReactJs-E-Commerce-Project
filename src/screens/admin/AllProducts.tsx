import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/buttons";
import Pagination from "../../components/pagination";
import { ProductsTable } from "../../components/tables";
import { getAllProducts } from "../../store/actions/data-actions";
import { setModalName, setShowModal } from "../../store/slices/modal-slice";

export const AllProducts = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [productCategory, setProductCategory] = useState("all");
  const { allProducts } = useSelector((state) => state.data);

  const filtredList = (id: string) => {
    setProductCategory(id);
    setPage(1);
  };

  useEffect(() => {
    dispatch(getAllProducts({ page, productCategory }));
  }, [page, productCategory]);

  const addProduct = () => {
    dispatch(setShowModal(true));
    dispatch(setModalName("addEditProduct"));
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
        {allProducts.status === "pending" ? (
          <span className="loader"></span>
        ) : (
          <ProductsTable list={allProducts.list} onFiltredList={filtredList} />
        )}
      </div>
      <Pagination
        page={page}
        totalCount={allProducts.count}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataPerPage={allProducts.dataPerPage}
      />
    </main>
  );
};
