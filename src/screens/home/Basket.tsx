import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { EmptyBasket } from "../../components/notices";
import { BasketTable } from "../../components/tables";

export const Basket = () => {
  const { list } = useSelector((state) => state.order);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let price = 0;
    list.forEach((item) => {
      price += item.price * item.count;
    });
    setTotalPrice(price);
  }, [list]);

  return (
    <div className="p-3 max-w-xl mx-auto">
      {list.length === 0 ? (
        <EmptyBasket />
      ) : (
        <>
          <h1 className="font-bold text-xl mb-4">سبد خرید</h1>
          <BasketTable selectedList={list} location="home" />
          <div className="flex justify-between items-center gap-8 mt-8">
            <p>
              <span className="font-bold">جمع : </span>{" "}
              {totalPrice.toLocaleString("fa")} تومان
            </p>
            <Link to="/checkout">
              <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
                نهایی کردن سبد خرید
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
