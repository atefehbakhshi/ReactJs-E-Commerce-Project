import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../buttons";
import highHeelTwo from "/img/shoes/women/highHeelTwo.jpg";

const product = {
  id: 1,
  img: highHeelTwo,
  title: "کفش پاشنه بلند مدل jgtb",
  price: 320,
  description:
    "fkjgjguitnjfg dfjgkjngvkcmvu  dfjgkjngvkcmvur lllls,vkgfggg ;orijtnrr lllls,vkgfggg ;orijtnrmvc; dof;rdfmgir",
  category: "shoes",
  subCategory: "women",
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col pb-8 md:flex-row gap-4">
        <div className="max-w-lg mx-auto md:w-[50%]">
          <img
            src={product.img}
            alt={product.title}
            className="w-[100%] rounded-md"
          />
        </div>
        <div className="md:w-[50%] md:py-4">
          <p className="text-lg mb-4">{product.title}</p>
          <div className="flex gap-4 mb-4">
            <h3 className="text-base font-semibold">گروه محصولات &larr;</h3>
            <Link
              to={`/products/${product.category}`}
              className="cursor-pointer"
            >
              کفش &larr;
            </Link>
            <Link
              to={`/products/${product.category}/${product.subCategory}`}
              className="cursor-pointer"
            >
              زنانه
            </Link>
          </div>
          <p className="mb-4">تومان {product.price}</p>
          <div>{/* size and color */}</div>
          <div className="flex gap-4">
            <div className="flex justify-between p-1 items-center border rounded">
              <Icon
                icon="material-symbols:arrow-drop-down-rounded"
                width="24"
              />
              <span>{quantity}</span>
              <Icon icon="material-symbols:arrow-drop-up-rounded" width="24" />
            </div>
            <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
              افزودن به سبد خرید
            </Button>
          </div>
        </div>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
