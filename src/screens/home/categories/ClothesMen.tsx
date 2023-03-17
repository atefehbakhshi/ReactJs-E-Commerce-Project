import SubHeader from "../../../components/sub-header";
import Product from "../../../components/product/Product";
import { useState } from "react";
import Pagination from "../../../components/pagination";
import { useGetDataBySubcategory } from "../../../hooks";

const subcategoryNo = 8;
export const ClothesMen = () => {
  const [page, setPage] = useState(1);
  const [list, DATA_ON_PRODUCTS_PAGE, count] = useGetDataBySubcategory(
    subcategoryNo,
    page
  );
  return (
    <div>
      <SubHeader text="Clothes Men" />
      <div className="grid grid-cols-2 gap-4 mb-4 py-8 sm:px-8 sm:grid-cols-3">
        {list.map((product) => (
          <Product
            key={product.id}
            img={product.thumbnail}
            title={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
      <Pagination
        page={page}
        totalCount={count}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataPerPage={DATA_ON_PRODUCTS_PAGE}
      />
    </div>
  );
};
