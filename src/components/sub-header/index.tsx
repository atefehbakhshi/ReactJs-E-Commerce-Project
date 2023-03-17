import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFilterList } from "../../store/slices/category-slice";

const SubHeader = ({ text }) => {
  const dispatch = useDispatch();
  const [priceFilter, setPriceFilter] = useState(null);
  const [dateFilter, setDateFilter] = useState(null);

  useEffect(() => {
    dispatch(getFilterList({ price: priceFilter, date: dateFilter }));
  }, [priceFilter, dateFilter]);

  return (
    <div>
      <header className="flex justify-center mb-3 font-semibold sub-header">
        <h1>{text}</h1>
      </header>

      <div className="flex gap-4 py-2 px-1">
        <select
          className="px-4 max-w-[10rem] hover:shadow-custom"
          onChange={(e) => {
            setPriceFilter(e.target.value);
            setDateFilter(null);
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
          onChange={(e) => {
            setDateFilter(e.target.value);
            setPriceFilter(null);
          }}
          // do not display which option selected
          value={""}
        >
          <option className="hidden">تاریخ</option>
          <option value="desc">جدیدترین</option>
          <option value="asc">قدیمی ترین</option>
        </select>
      </div>
      <div className="flex items-center gap-2 px-4 mt-2">
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
      </div>
    </div>
  );
};

export default SubHeader;
