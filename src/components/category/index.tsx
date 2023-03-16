import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchDataByCategory,
  fetchDataBySubcategory,
} from "../../api/services";
import { Button } from "../buttons";
import Product from "../product/Product";

const DATA_LIMIT = 6;

const getData = async (id, landing) => {
  let res;
  if (landing === "main") {
    res = await fetchDataByCategory(id, 1, 6);
    return res.data;
  }
  if (landing === "pruducts") {
    res = await fetchDataBySubcategory(id, 1, DATA_LIMIT);
    return res.data;
  }
  return [];
};

const Category = ({ path, text, icon, id, landing }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData(id, landing).then((res) => setList(res));
  }, []);

  return (
    <div className="border-t-2 p-3 sm:justify-start">
      <div className="flex justify-between mb-4 ">
        <div className="flex items-center gap-2">
          <div className="bg-[#bfbfbf50] p-1 rounded-[50%]">
            <Icon icon={icon} />
          </div>
          <h3 className=" font-semibold text-lg">{text}</h3>
        </div>
        <Button>
          <Link to={`/products${path}`}>مشاهده همه</Link>
        </Button>
      </div>
      {list.length === 0 ? (
        <span className="loader"></span>
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-4 sm:p-8 sm:grid-cols-3">
          {list.map((product) => (
            <Product
              key={product.id}
              img={product.thumbnail}
              title={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
