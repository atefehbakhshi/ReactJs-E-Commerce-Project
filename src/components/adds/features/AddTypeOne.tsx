import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchDataByCategory } from "../../../api/services";
import { ProductGetFromDbI } from "../../../type/interface";
import { Button } from "../../buttons";

const getData = async (id: number) => {
  const res = await fetchDataByCategory(id, 1, 1);
  return res.data;
};

export const AddTypeOne: FC<{ id: string }> = ({ id }) => {
  const [product, setProduct] = useState<ProductGetFromDbI[] | []>([]);

  useEffect(() => {
    getData(+id).then((res) => setProduct(res));
  }, []);

  return (
    <>
      {product.length === 0 ? (
        <span className="loader"></span>
      ) : (
        <div className="border w-4/5 max-w-xl md:w-4/6 mx-auto p-3 md:px-8  mb-8 relative">
          <p className="absolute top-[-1rem] bg-white px-3 rounded md:text-xl">
            با <span className="font-semibold text-gray-500">Shicoo</span> همیشه
            شیک باش
          </p>
          <div className="flex justify-between items-center w-[100%]">
            <div>
              <h3 className="mb-4 text-lg">{product[0].name}</h3>
              <p className="text-base">
                {product[0].price.toLocaleString("fa")} هزار تومان
              </p>
            </div>
            <img
              src={`http://localhost:3002/files/${product[0].thumbnail}`}
              alt={product[0].name}
              className="w-[50%] rounded-md  "
            />
          </div>
          <div className="flex justify-end pt-4 md:pt-8">
            <Button>
              <Link to={`/products/${product[0].id}`}>مشاهده محصول</Link>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
