import { useEffect } from "react";
import Category from "../../components/category";
import { FadeSlider } from "../../components/slider";

// slider
import one from "/img/slider/watch/1.png";
import two from "/img/slider/watch/2.png";
import three from "/img/slider/watch/3.png";
const images = [one, two, three];

export const Watch = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FadeSlider images={images} />
      <main className="px-3 pb-3">
        <Category
          path="/watch/women"
          text="زنانه"
          icon="icon-park-outline:women"
          id="1"
          landing="pruducts"
        />
        <Category
          path="/watch/men"
          text="مردانه"
          icon="mdi:face-man-outline"
          id="2"
          landing="pruducts"
        />
      </main>
    </div>
  );
};
