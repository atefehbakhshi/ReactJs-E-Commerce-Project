import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataByIdService } from "../../api/services/get";
import { Button } from "../buttons";
import { categoryText, subcategoryText } from "../constants";
import { SlideSlider } from "../slider";

const getData = async (id) => {
  const res = await fetchDataByIdService(id);
  return res.data[0];
};

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(0);
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getData(productId).then((res) => setProduct(res));
  }, [productId]);

  console.log(product);

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
          <p className="mb-4">{product.price} تومان</p>
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
