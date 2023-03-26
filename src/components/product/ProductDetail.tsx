import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchDataById } from "../../api/services";
import { addOrderProduct } from "../../store/slices/order-slice";
import { BasketProductI, ProductI } from "../../type/interface";
import { Button } from "../buttons";
import { categoryText, subcategoryText } from "../constants";
import { SlideSlider } from "../slider";

const getData = async (id: number) => {
  const res = await fetchDataById(id);
  return res.data;
};

const ProductDetail = () => {
  const [count, setcount] = useState(0);
  const [product, setProduct] = useState<ProductI[] | []>([]);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { list } = useSelector((state) => state.order);

  useEffect(() => {
    if (productId) {
      getData(+productId).then((res) => {
        setProduct(res);
      });
    }
  }, [productId]);

  useEffect(() => {
    if (product.length !== 0 && count === product[0].quantity) {
      toast.warn(`تعداد موجودی در انبار  ${count} عدد می باشد.`);
    }
  }, [count]);

  const addToBasket = (product: ProductI) => {
    const newOrderList = list.filter(
      (i: BasketProductI) => i.id !== product.id
    );
    const order = {
      id: product.id,
      name: product.name,
      count: count,
      price: product.price,
      image: product.thumbnail,
      limitCount: product.quantity,
    };
    newOrderList.push(order);
    dispatch(addOrderProduct(newOrderList));
  };

  return (
    <>
      {product.length !== 0 && (
        <div className="py-8 px-4">
          <div className="flex flex-col pb-8 md:flex-row md:gap-8">
            <SlideSlider images={product[0].image} />
            <div className="md:w-[50%] md:py-4">
              <p className="text-lg mb-4">{product[0].name}</p>
              <div className="flex gap-4 mb-4">
                <h3 className="text-base font-semibold">گروه محصولات &larr;</h3>
                <span>{categoryText[product[0].category]} &larr;</span>
                <span>{subcategoryText[product[0].subcategory]}</span>
              </div>
              <p className="mb-4">
                {product[0].price?.toLocaleString("fa")} هزار تومان
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
                    onClick={() =>
                      count < product[0].quantity && setcount(count + 1)
                    }
                  />
                </div>
                {product[0].quantity === 0 ? (
                  <p className="text-red-500 text-base">اتمام موجودی</p>
                ) : (
                  <Button
                    bg="bg-[#ade5ad]"
                    hover="hover:bg-[#bdeabd]"
                    onClick={() => addToBasket(product[0])}
                    disabled={count === 0 ? true : false}
                  >
                    افزودن به سبد خرید
                  </Button>
                )}
              </div>
            </div>
          </div>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: product[0].description }}
          ></div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
