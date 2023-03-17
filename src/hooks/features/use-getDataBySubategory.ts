import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchDataBySubcategory, fetchFiltredData } from "../../api/services";
import { DATA_ON_PRODUCTS_PAGE } from "../../constants";

const getData = async (id: number, page: number, limit: number) => {
  const res = await fetchDataBySubcategory(id, page, limit);
  return {
    data: res.data,
    count: res.headers["x-total-count"],
  };
};

const getFilterDate = async (
  id: number,
  page: number,
  limit: number,
  filterType: string,
  text: string
) => {
  const res = await fetchFiltredData(id, page, limit, filterType, text);
  return {
    data: res.data,
    count: res.headers["x-total-count"],
  };
};

export const useGetDataBySubcategory = (subCategoryId, page) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const { filterList } = useSelector((state) => state.category);

  useEffect(() => {
    if (filterList.price && !filterList.date) {
      getFilterDate(
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        "price",
        filterList.price
      ).then((res) => {
        setList(res.data);
        setCount(res.count);
      });
    } else if (!filterList.price && filterList.date) {
      getFilterDate(
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        "createdAt",
        filterList.date
      ).then((res) => {
        setList(res.data);
        setCount(res.count);
      });
    } else {
      getData(subCategoryId, page, DATA_ON_PRODUCTS_PAGE).then((res) => {
        setList(res.data);
        setCount(res.count);
      });
    }
  }, [page, filterList]);

  return [list, DATA_ON_PRODUCTS_PAGE, count];
};
