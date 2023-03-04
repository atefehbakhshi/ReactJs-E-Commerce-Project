import { Link } from "react-router-dom";
import { Button } from "../buttons";

const Adds = ({ product }) => {
  return (
    <div className="border w-4/5 max-w-xl md:w-4/6 mx-auto p-3 md:px-8  mb-8 relative cursor-pointer">
      <p className="absolute top-[-1rem] bg-white px-3 rounded  md:text-xl">
        با <span className="font-semibold text-gray-500">Shicoo</span> همیشه شیک
        باش
      </p>
      <div className="flex justify-between items-center w-[100%]">
        <div>
          <h3 className="mb-4">{product.title}</h3>
          <p>{product.price} تومان</p>
        </div>
        <img
          src={product.img}
          alt="high-heel"
          className="w-[60%] rounded-md "
        />
      </div>
      <div className="flex justify-end pt-4 md:pt-8">
        <Button>
          <Link to={`/products/${product.id}`}>مشاهده محصول</Link>
        </Button>
      </div>
    </div>
  );
};

export default Adds;
