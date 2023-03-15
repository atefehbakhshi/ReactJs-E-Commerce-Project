import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchDataById } from "../../api/services";
import { addOrderProduct } from "../../store/slices/order-slice";
import { Button } from "../buttons";
import { categoryText, subcategoryText } from "../constants";
import { SlideSlider } from "../slider";

const getData = async (id) => {
  const res = await fetchDataById(id);
  return res.data[0];
};

const ProductDetail = () => {
  const [count, setcount] = useState(0);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { list } = useSelector((state) => state.order);

  useEffect(() => {
    getData(productId).then((res) => setProduct(res));
  }, [productId]);

  const addToBasket = (product) => {
    const newOrderList = list.filter((i) => i.id !== product.id);
    const order = {
      id: product.id,
      name: product.name,
      count: count,
      price: product.price,
      image: product.thumbnail,
    };
    newOrderList.push(order);
    dispatch(addOrderProduct(newOrderList));
  };

  return (
    <div className="py-8 px-4">
      <div className="flex flex-col pb-8 md:flex-row md:gap-8">
        <SlideSlider images={product.image} />
        <div className="md:w-[50%] md:py-4">
          <p className="text-lg mb-4">{product.name}</p>
          <div className="flex gap-4 mb-4">
            <h3 className="text-base font-semibold">گروه محصولات &larr;</h3>
            <span>{categoryText[product.category]} &larr;</span>
            <span>{subcategoryText[product.subcategory]}</span>
          </div>
          <p className="mb-4">
            {product.price?.toLocaleString("fa")} هزار تومان
          </p>
          <div>{/* size and color */}</div>
          <div className="flex items-center gap-4">
            <div className="flex justify-between p-1 items-center border rounded">
              <Icon
                icon="material-symbols:arrow-drop-down-rounded"
                width="24"
                className="cursor-pointer"
                onClick={() => count > 0 && setcount(count - 1)}
              />
              <span>{count}</span>
              <Icon
                icon="material-symbols:arrow-drop-up-rounded"
                width="24"
                className="cursor-pointer"
                onClick={() => count < product.quantity && setcount(count + 1)}
              />
            </div>
            {product.quantity === 0 ? (
              <p className="text-red-500 text-base">اتمام موجودی</p>
            ) : (
              <Button
                bg="bg-[#ade5ad]"
                hover="hover:bg-[#bdeabd]"
                onClick={() => addToBasket(product)}
                disabled={count === 0 ? true : false}
              >
                افزودن به سبد خرید
              </Button>
            )}
          </div>
        </div>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
