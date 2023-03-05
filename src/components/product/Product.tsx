import { Link } from "react-router-dom";

const Product = ({ img, title, price, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <div className="cart-shadow cursor-pointer hover:scale-105 md:max-w-sm">
        <div className="flex justify-center bg-[#bfbfbf50] p-3 h-[10rem] md:h-[14rem]">
          <img
            src={`http://localhost:3002/files/${img}`}
            alt=""
            className="max-w-[100%] max-h-[100%] rounded bg-transparent"
          />
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
