import { useEffect, useState } from "react";
import { editPriceQuantity, fetchAllProductsData } from "../../api/services";
import { Button } from "../../components/buttons";
import Pagination from "../../components/pagination";
import { PriceQuantityTable } from "../../components/tables";
import { PRICE_QUANTITY_PER_PAGE } from "../../constants";
import { toast } from "react-toastify";
import { ProductGetFromDbI } from "../../type/interface";

const getData = async (page: number, limit: number) => {
  const res = await fetchAllProductsData(page, limit);
  return { data: res.data, count: res.headers["x-total-count"] };
};

export const PriceQuantity = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [hasEditItem, setHasEditItem] = useState(false);
  const [editedList, SetEditedList] = useState<ProductGetFromDbI[][] | []>([]);
  const [editedMode, setEditedMode] = useState("doing");

  useEffect(() => {
    getData(page, PRICE_QUANTITY_PER_PAGE).then((res) => {
      setList(res.data);
      setCount(res.count);
    });
  }, [page]);

  const containEditItem = (status: boolean) => {
    setHasEditItem(status);
    if (status) {
      setEditedMode("doing");
    }
  };

  const editHandler = async () => {
    const priceList = editedList[0];
    const quantityList = editedList[1];

    try {
      if (priceList.length > 0) {
        const res = await Promise.all(
          priceList.map((i) => {
            editPriceQuantity(i.id, { price: i.price });
          })
        );
      }
      if (quantityList.length > 0) {
        const res = await Promise.all(
          quantityList.map((i) => {
            editPriceQuantity(i.id, { quantity: i.quantity });
          })
        );
      }

      getData(page, PRICE_QUANTITY_PER_PAGE).then((res) => {
        setList(res.data);
        setCount(res.count);
      });

      toast.success(" لیست با موفقیت ویرایش گردید .");
      setEditedMode("done");
    } catch (error) {
      toast.error(
        "مشکلی در پروسه ی ویرایش به وجود آمد، لطفا مجدد تلاش فرمائید ."
      );
    }
  };

  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت موجودی و قیمت ها</h1>
        {!hasEditItem ? (
          <Button>ذخیره</Button>
        ) : (
          <Button
            bg="bg-[#41c1c6]"
            hover="hover:bg-[#77e1e5]"
            onClick={editHandler}
          >
            ذخیره
          </Button>
        )}
      </header>
      <div className="px-3 py-8 max-w-xl mx-auto">
        {list.length === 0 ? (
          <span className="loader"></span>
        ) : (
          <PriceQuantityTable
            list={list}
            onContainEditItem={containEditItem}
            onEditHandler={(list) => SetEditedList([list.price, list.quantity])}
            mode={editedMode}
          />
        )}
      </div>
      <Pagination
        page={page}
        totalCount={count}
        OnSetPage={(pageNo) => setPage(pageNo)}
        dataPerPage={PRICE_QUANTITY_PER_PAGE}
      />
    </main>
  );
};
