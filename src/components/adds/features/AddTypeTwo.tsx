import { Link } from "react-router-dom";
import menClothes from "/img/adds/menClothes2.jpg";
import menGlasses from "/img/adds/menGlasses.jpg";

export const AddTypeTwo = () => {
  return (
    <div className="mb-4">
      <h1 className="font-bold py-1 md:text-base text-center">
        محبوب ترین های آقایان
      </h1>
      <div className="flex justify-center items-center bg-gray-100 gap-2 md:gap-4 px-2 py-4">
        <Link to="/products/clothes/men">
          <img src={menClothes} alt="men clothes" />
        </Link>
        <Link to="/products/glasses/men">
          <img src={menGlasses} alt="men clothes" />
        </Link>
      </div>
    </div>
  );
};
