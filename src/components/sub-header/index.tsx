import { Icon } from "@iconify/react";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getFilterList,
  getSearchText,
  getRangePrice,
} from "../../store/slices/category-slice";

const SubHeader: FC<{ text: string }> = ({ text }) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [maxRange, setMaxRange] = useState(999999);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [dateFilter, setDateFilter] = useState<string | null>(null);

  useEffect(() => {
    // prevent extra request
    const timer = setTimeout(
      () => dispatch(getSearchText({ text: searchText })),
      1000
    );
    return () => clearTimeout(timer);
  }, [searchText]);

  // prevent from changing price range when other filter works
  useEffect(() => {
    if (priceFilter || dateFilter || searchText) {
      setMaxRange(0);
    } else {
      setMaxRange(999999);
    }
    dispatch(
      getRangePrice({
        max: maxPrice,
      })
    );
  }, [priceFilter, dateFilter, searchText, maxPrice]);

  // get date and price filter
  useEffect(() => {
    dispatch(
      getFilterList({
        price: priceFilter,
        date: dateFilter,
      })
    );
  }, [priceFilter, dateFilter]);

  return (
    <div>
      <header className="flex justify-center mb-3 font-semibold sub-header">
        <h1>{text}</h1>
      </header>

      <div className="flex flex-col gap-2 ">
        <div className="flex items-center gap-4 bg-gray-100 rounded p-1 max-w-[30rem] sm:min-w-[20rem]">
          <Icon icon="material-symbols:search" width="20" />
          <input
            type="text"
            placeholder="جستجو در بیش از 50 محصول ..."
            className="bg-transparent outline-none text-xs"
            value={!searchText ? "" : searchText}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearchText(e.target.value);
              setPriceFilter(null);
              setDateFilter(null);
              setMaxPrice(null);
            }}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 py-2">
          <div className="flex items-center gap-2">
            <p>
              {" "}
              قیمت تا{" "}
              {(maxPrice || maxPrice === 0) &&
                `${maxPrice.toLocaleString("fa")} تومان`}{" "}
            </p>
            <input
              type="range"
              min="0"
              max={maxRange}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setMaxPrice(+e.target.value);
                setPriceFilter(null);
                setDateFilter(null);
                setSearchText(null);
              }}
            />
          </div>
          <div>
            <select
              className="max-w-[10rem] hover:shadow-custom"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setPriceFilter(e.target.value);
                setDateFilter(null);
                setMaxPrice(null);
                setSearchText(null);
              }}
              // do not display which option selected
              value={""}
            >
              <option className="hidden">قیمت</option>
              <option value="desc">بیشترین قیمت</option>
              <option value="asc">کمترین قیمت</option>
            </select>
            <select
              className="px-4 max-w-[10rem] hover:shadow-custom"
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                setDateFilter(e.target.value);
                setPriceFilter(null);
                setMaxPrice(null);
                setSearchText(null);
              }}
              // do not display which option selected
              value={""}
            >
              <option className="hidden">تاریخ</option>
              <option value="desc">جدیدترین</option>
              <option value="asc">قدیمی ترین</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        {priceFilter && (
          <>
            <Icon
              icon="carbon:close-filled"
              width="16"
              color="#626262"
              onClick={() => setPriceFilter(null)}
              className="cursor-pointer"
            />
            <p>{priceFilter === "asc" ? "کمترین قیمت" : "بیشترین قیمت"}</p>
          </>
        )}
        {dateFilter && (
          <>
            <Icon
              icon="carbon:close-filled"
              width="16"
              color="#626262"
              onClick={() => setDateFilter(null)}
              className="cursor-pointer"
            />
            <p>{dateFilter === "asc" ? "قدیمی ترین" : "جدید ترین"}</p>
          </>
        )}
        {searchText && (
          <>
            <Icon
              icon="carbon:close-filled"
              width="16"
              color="#626262"
              onClick={() => setSearchText(null)}
              className="cursor-pointer"
            />
            <p>{searchText}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SubHeader;
