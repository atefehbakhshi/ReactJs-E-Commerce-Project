import { useEffect } from "react";
import Category from "../../components/category";
import { FadeSlider } from "../../components/slider";

// slideshow
import one from "/img/slider/shoes/1.png";
import two from "/img/slider/shoes/2.png";
import three from "/img/slider/shoes/3.png";
const images = [one, two, three];

export const Shoes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <FadeSlider images={images} />
      <main className="px-3 pb-3">
        <Category
          path="/shoes/women"
          text="زنانه"
          icon="icon-park-outline:women"
          id="5"
          landing="pruducts"
        />
        <Category
          path="/shoes/men"
          text="مردانه"
          icon="mdi:face-man-outline"
          id="6"
          landing="pruducts"
        />
      </main>
    </div>
  );
};
