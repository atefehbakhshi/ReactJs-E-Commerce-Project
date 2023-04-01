// most sails
import menShoes from "/img/adds/menShoes.jpg";
import womenShoes from "/img/adds/womenShoes.jpg";
import menClothes from "/img/adds/menClothes.jpg";
import womenClothes from "/img/adds/womenClothes.jpg";
import menWatch from "/img/adds/menWatch.jpg";
import womenWatch from "/img/adds/womenWatch.jpg";
import { Link } from "react-router-dom";
const topSailList = [
  {
    text: "کفش مردانه",
    image: menShoes,
    path: "products/shoes/men",
  },
  {
    text: "کفش زنانه",
    image: womenShoes,
    path: "products/shoes/women",
  },
  {
    text: "لباس مردانه",
    image: menClothes,
    path: "products/clothes/men",
  },
  {
    text: "لباس زنانه",
    image: womenClothes,
    path: "products/clothes/women",
  },
  {
    text: "ساعت مردانه",
    image: menWatch,
    path: "products/watch/men",
  },
  {
    text: "ساعت زنانه",
    image: womenWatch,
    path: "products/watch/women",
  },
];

const MostSailing = () => {
  return (
    <div className="px-3 py-8">
      <h1 className="font-bold text-xl text-center mb-4">پر فروش ترین ها</h1>

      <div className="flex gap-4 overflow-x-scroll most-sail 2xl:justify-center">
        {topSailList.map((item) => (
          <Link
            to={item.path}
            className="flex flex-col items-center gap-2 border-2 p-3 rounded min-w-[10rem] md:min-w-[15rem] max-w-[15rem]"
          >
            <img src={item.image} alt={item.text} className="rounded-lg " />
            <p className="text-base font-bold">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostSailing;
