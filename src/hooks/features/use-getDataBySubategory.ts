import { useEffect, useState } from "react";
import { fetchDataBySubcategory } from "../../api/services";
import { DATA_ON_PRODUCTS_PAGE } from "../../constants";

const getData = async (id: number, page: number, limit: number) => {
  const res = await fetchDataBySubcategory(id, page, limit);
  return {
    data: res.data,
    count: res.headers["x-total-count"],
  };
};

export const useGetDataBySubcategory = (subCategoryId, page) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getData(subCategoryId, page, DATA_ON_PRODUCTS_PAGE).then((res) => {
      setList(res.data);
      setCount(res.count);
    });
  }, [page]);

  return [list, DATA_ON_PRODUCTS_PAGE, count];
};
