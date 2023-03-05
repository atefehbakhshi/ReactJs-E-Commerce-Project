import Category from "../../components/category";
import Slideshow from "../../components/slider";

// slider
import one from "/img/slider/perfume/1.png";
import two from "/img/slider/perfume/2.png";
import three from "/img/slider/perfume/3.png";
const images = [one, two, three];

export const Perfume = () => {
  return (
    <div>
      <Slideshow images={images} />
      <main className="px-3 pb-3">
        <Category
          path="/perfume/women"
          text="زنانه"
          icon="icon-park-outline:women"
          id="9"
          landing="pruducts"
        />
        <Category
          path="/perfume/men"
          text="مردانه"
          icon="mdi:face-man-outline"
          id="10"
          landing="pruducts"
        />
      </main>
    </div>
  );
};
