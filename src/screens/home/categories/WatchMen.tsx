import SubHeader from "../../../components/sub-header";
import Product from "../../../components/product/Product";
import { useEffect, useState } from "react";
import Pagination from "../../../components/pagination";
import { useGetDataBySubcategory } from "../../../hooks";

const subcategoryNo = 2;
export const WatchMen = () => {
  const [page, setPage] = useState(1);
  const [list, DATA_ON_PRODUCTS_PAGE, count] = useGetDataBySubcategory(
    subcategoryNo,
    page
  );

  // for the first time page started from top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SubHeader text="Men Watch" />
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
