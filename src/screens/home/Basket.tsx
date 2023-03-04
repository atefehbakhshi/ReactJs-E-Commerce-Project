import { Link } from "react-router-dom";
import { Button } from "../../components/buttons";
import { BasketTable } from "../../components/tables";

const selectedList = [
  {
    id: 1,
    title: "کفش پاشنه بلند",
    price: 120,
    quantity: 2,
  },
  {
    id: 2,
    title: "عینک زنانه",
    price: 120,
    quantity: 2,
  },
  {
    id: 3,
    title: "تیشرت",
    price: 120,
    quantity: 2,
  },
  {
    id: 3,
    title: "تیشرت",
    price: 120,
    quantity: 2,
  },
];

export const Basket = () => {
  return (
    <div className="p-3 max-w-xl mx-auto">
      <h1 className="font-bold text-xl mb-4">سبد خرید</h1>
      <BasketTable selectedList={selectedList} />
      <div className="flex justify-between items-center gap-8 mt-4">
        <p>
          <span className="font-bold">جمع:</span> 256 تومان
        </p>
        <Link to="/checkout">
          <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
            نهایی کردن سبد خرید
          </Button>
        </Link>
      </div>
    </div>
  );
};
