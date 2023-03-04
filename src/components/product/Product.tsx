import { Link } from "react-router-dom";

const Product = ({ img, title, price, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="cart-shadow cursor-pointer hover:scale-105 md:max-w-sm">
        <div className="flex items-center bg-[#bfbfbf50] p-3 h-[10rem] md:h-[14rem]">
          <img src={img} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className="p-3">
          <h3 className="pb-3">{title}</h3>
          <p>{price}هزار تومان </p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
