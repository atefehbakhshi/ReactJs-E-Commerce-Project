import { Button } from "../../components/buttons";
import { ProductsTable } from "../../components/tables";
import highHeelTwo from "/img/shoes/women/highHeelTwo.jpg";

const productsList = [
  {
    name: "کفش پاشنه بلند",
    brand: "برند تست",
    image: [
      "1cb0abd374486a8038b9a8c78e5ed6b8",
      "99874537d939b76572bdf0fd26470eb3",
    ],
    thumbnail: highHeelTwo,
    price: 10275000,
    quantity: 8,
    createdAt: 1643373068134,
    id: 1,
    category: 2,
    subcategory: 1,
    description: "<p>تستتتتت</p>",
  },
  {
    name: "کفش پاشنه بلند",
    brand: "برند تست",
    image: [
      "1cb0abd374486a8038b9a8c78e5ed6b8",
      "99874537d939b76572bdf0fd26470eb3",
    ],
    thumbnail: highHeelTwo,
    price: 10275000,
    quantity: 8,
    createdAt: 1643373068134,
    id: 2,
    category: 3,
    subcategory: 1,
    description: "<p>تستتتتت</p>",
  },
  {
    name: "کفش پاشنکفش پاشنه کفش پاشنه   کفش پاشنه ه بلند",
    brand: "برند تست",
    image: [
      "1cb0abd374486a8038b9a8c78e5ed6b8",
      "99874537d939b76572bdf0fd26470eb3",
    ],
    thumbnail: highHeelTwo,
    price: 10275000,
    quantity: 8,
    createdAt: 1643373068134,
    id: 4,
    category: 3,
    subcategory: 1,
    description: "<p>تستتتتت</p>",
  },
];

export const AllProducts = () => {
  return (
    <main className="p-3">
      <header className="flex justify-between items-center">
        <h1 className="font-bold text-lg">مدیریت محصولات</h1>
        <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
          افزودن محصول
        </Button>
      </header>
      <div className="px-3 py-8 max-w-xl mx-auto">
        <ProductsTable list={productsList} />
      </div>
      <div className="flex justify-center gap-1">
        <span className="bg-gray-200 p-1 text-center border rounded-full w-6 h-6">
          1
        </span>
        <span className="bg-gray-200 p-1 text-center border rounded-full w-6 h-6">
          2
        </span>
        <span className="bg-gray-200 p-1 text-center border rounded-full w-6 h-6">
          3
        </span>
      </div>
      <div></div>
    </main>
  );
};
