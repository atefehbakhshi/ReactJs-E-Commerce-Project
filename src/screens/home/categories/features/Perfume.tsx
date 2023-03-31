import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../../../../components/pagination";
import Product from "../../../../components/product/Product";
import SubHeader from "../../../../components/sub-header";
import { useGetDataBySubcategory } from "../../../../hooks";
import { ProductGetFromDbI } from "../../../../type/interface";

let subcategoryNo = 9;

export const Perfume = () => {
  const [page, setPage] = useState(1);
  const { subcategory } = useParams();
  if (subcategory === "women") {
    subcategoryNo = 9;
  } else {
    subcategoryNo = 10;
  }
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
      <SubHeader
        text={`${subcategory === "women" ? "Women Perfume" : "Men Perfume"}`}
      />
      {list.length === 0 ? (
        <div className="flex items-center min-h-[50vh] ">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-4 py-8 sm:px-8 sm:grid-cols-3">
          {list.map((product: ProductGetFromDbI) => (
            <Product
              key={product.id}
              img={product.thumbnail}
              title={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      )}
      <Pagination
        page={page}
        totalCount={count}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataPerPage={DATA_ON_PRODUCTS_PAGE}
      />
    </div>
  );
};
