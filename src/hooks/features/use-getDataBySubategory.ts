import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  fetchDataBySubcategory,
  fetchFiltredData,
  fetchSearchData,
  fetchRangeData,
} from "../../api/services";
import { DATA_ON_PRODUCTS_PAGE } from "../../constants";

const getData = async (id: number, page: number, limit: number) => {
  const res = await fetchDataBySubcategory(id, page, limit);
  return {
    data: res.data,
    count: res.headers["x-total-count"],
  };
};

const getFilterData = async (
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

const getSearchData = async (id, page, limit, text) => {
  const res = await fetchSearchData(id, page, limit, text);
  return {
    data: res.data,
    count: res.headers["x-total-count"],
  };
};

const getRangeData = async (id, page, limit, range) => {
  const res = await fetchRangeData(id, page, limit, range);
  return {
    data: res.data,
    count: res.headers["x-total-count"],
  };
};

export const useGetDataBySubcategory = (subCategoryId, page) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const { filterList, searchText, rangePrice } = useSelector(
    (state) => state.category
  );

  useEffect(() => {
    if (filterList.price) {
      getFilterData(
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        "price",
        filterList.price
      ).then((res) => {
        setList(res.data);
        setCount(res.count);
      });
    } else if (filterList.date) {
      getFilterData(
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        "createdAt",
        filterList.date
      ).then((res) => {
        setList(res.data);
        setCount(res.count);
      });
    } else if (rangePrice.max) {
      getRangeData(
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        rangePrice.max
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
  }, [page, filterList, rangePrice]);

  useEffect(() => {
    if (searchText.text) {
      getSearchData(
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        searchText.text
      ).then((res) => {
        setList(res.data);
        setCount(res.count);
      });
    }
  }, [page, searchText]);

  return [list, DATA_ON_PRODUCTS_PAGE, count];
};
