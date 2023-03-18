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
  const [constInputs, setConstInputs] = useState<number[]>([]);
  const [count, setCount] = useState(0);
  const { filterList, searchText, rangePrice } = useSelector(
    (state) => state.category
  );

  let fn;
  let inputs;

  useEffect(() => {
    setConstInputs([subCategoryId, page, DATA_ON_PRODUCTS_PAGE]);
  }, [page]);

  useEffect(() => {
    if (filterList.price) {
      fn = fetchFiltredData;
      inputs = [...constInputs, "price", filterList.price];
    } else if (filterList.date) {
      fn = fetchFiltredData;
      inputs = [...constInputs, "createdAt", filterList.date];
    } else if (rangePrice.max) {
      fn = fetchRangeData;
      inputs = [...constInputs, rangePrice.max];
    } else if (searchText.text) {
      fn = fetchSearchData;
      inputs = [...constInputs, searchText.text];
    } else {
      fn = fetchDataBySubcategory;
      inputs = [...constInputs];
    }
    getData(fn, inputs).then((res) => {
      setList(res.data);
      setCount(res.count);
    });
  }, [constInputs, filterList, rangePrice, searchText]);

  return [list, DATA_ON_PRODUCTS_PAGE, count];
};
