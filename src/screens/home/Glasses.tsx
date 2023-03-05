import Category from "../../components/category";
import Slideshow from "../../components/slider";

// slideshow
import one from "/img/slider/glasses/1.png";
import two from "/img/slider/glasses/2.png";
import three from "/img/slider/glasses/3.png";
const images = [one, two, three];

export const Glasses = () => {
  return (
    <div>
      <Slideshow images={images} />
      <main className="px-3 pb-3">
        <Category
          path="/glasses/women"
          text="زنانه"
          icon="icon-park-outline:women"
          id="3"
          landing="pruducts"
        />
        <Category
          path="/glasses/men"
          text="مردانه"
          icon="mdi:face-man-outline"
          id="4"
          landing="pruducts"
        />
      </main>
    </div>
  );
};
