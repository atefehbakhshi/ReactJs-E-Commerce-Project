import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { EmptyBasket } from "../../components/notices";
import { BasketTable } from "../../components/tables";

export const Basket = () => {
  const { list } = useSelector((state) => state.order);
  return (
    <div className="p-3 max-w-xl mx-auto">
      <h1 className="font-bold text-xl mb-4">سبد خرید</h1>
      {list.length === 0 ? (
        <EmptyBasket />
      ) : (
        <>
          <BasketTable selectedList={list} location="home" />
          <div className="flex justify-between items-center gap-8 mt-8">
            <p>
              <span className="font-bold">جمع:</span> 256 تومان
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
