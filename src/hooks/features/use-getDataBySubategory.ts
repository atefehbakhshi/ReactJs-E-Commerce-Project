import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  fetchDataBySubcategory,
  fetchFiltredData,
  fetchSearchData,
  fetchRangeData,
} from "../../api/services";
import { DATA_ON_PRODUCTS_PAGE } from "../../constants";
import { GetDataT } from "../../type/type";

const getData = async (fn, inputs) => {
  const res = await fn(...inputs);
  return {
    data: res.data,
    count: res.headers["x-total-count"],
  };
};

export const useGetDataBySubcategory: GetDataT = (subCategoryId, page) => {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const { filterList, searchText, rangePrice } = useSelector(
    (state) => state.category
  );

  let fn;
  let inputs;

  useEffect(() => {
    if (filterList.price) {
      fn = fetchFiltredData;
      inputs = [
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        "price",
        filterList.price,
      ];
    } else if (filterList.date) {
      fn = fetchFiltredData;
      inputs = [
        subCategoryId,
        page,
        DATA_ON_PRODUCTS_PAGE,
        "createdAt",
        filterList.date,
      ];
    } else if (rangePrice.max) {
      fn = fetchRangeData;
      inputs = [subCategoryId, page, DATA_ON_PRODUCTS_PAGE, rangePrice.max];
    } else if (searchText.text) {
      fn = fetchSearchData;
      inputs = [subCategoryId, page, DATA_ON_PRODUCTS_PAGE, searchText.text];
    } else {
      fn = fetchDataBySubcategory;
      inputs = [subCategoryId, page, DATA_ON_PRODUCTS_PAGE];
    }
    getData(fn, inputs).then((res) => {
      setList(res.data);
      setCount(res.count);
    });
  }, [
    subCategoryId,
    page,
    DATA_ON_PRODUCTS_PAGE,
    filterList,
    rangePrice,
    searchText,
  ]);

  return [list, DATA_ON_PRODUCTS_PAGE, count];
};
