import Category from "../../components/category";
import { FadeSlider } from "../../components/slider";

// slider
import one from "/img/slider/clothes/1.png";
import two from "/img/slider/clothes/2.png";
import three from "/img/slider/clothes/3.png";
const images = [one, two, three];

export const Clothes = () => {
  return (
    <div>
      <FadeSlider images={images} />
      <main className="px-3 pb-3">
        <Category
          path="/clothes/women"
          text="زنانه"
          icon="icon-park-outline:women"
          id="7"
          landing="pruducts"
        />
        <Category
          path="/clothes/men"
          text="مردانه"
          icon="mdi:face-man-outline"
          id="8"
          landing="pruducts"
        />
      </main>
    </div>
  );
};
