import Category from "../../components/category";
import Slideshow from "../../components/slider";

// slideshow
import one from "/img/slider/shoes/1.png";
import two from "/img/slider/shoes/2.png";
import three from "/img/slider/shoes/3.png";
const images = [one, two, three];

export const Shoes = () => {
  return (
    <div>
      <Slideshow images={images} />
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
