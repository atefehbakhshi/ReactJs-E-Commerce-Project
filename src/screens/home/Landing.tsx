import Category from "../../components/category";
import Adds from "../../components/adds";
import { FadeSlider } from "../../components/slider";

// slideshow
import one from "/img/slider/shoes/1.png";
import two from "/img/slider/perfume/1.png";
import three from "/img/slider/watch/3.png";
import { useEffect } from "react";
const images = [one, two, three];

export const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <FadeSlider images={images} />
      <main className="px-3 pb-3">
        <h1 className="font-bold text-xl mb-4">محصولات</h1>
        <Category
          path="/watch"
          text="ساعت"
          icon="ic:outline-watch-later"
          id="1"
          landing="main"
        />
        <Adds id="1" />
        <Category
          path="/glasses"
          text="عینک"
          icon="mdi:glasses"
          id="2"
          landing="main"
        />
        <Category
          path="/shoes"
          text="کفش"
          icon="icon-park-outline:high-heeled-shoes"
          id="3"
          landing="main"
        />
        <Category
          path="/clothes"
          text="لباس"
          icon="icon-park-outline:clothes-crew-neck"
          id="4"
          landing="main"
        />
        <Category
          path="/perfume"
          text="عطر و ادکلن"
          icon="icon-park-outline:perfume"
          id="5"
          landing="main"
        />
        <Adds id="5" />
        <Category
          path="/jewellery"
          text="جواهرات"
          icon="icon-park-outline:diamond-necklace"
          id="6"
          landing="main"
        />
      </main>
    </div>
  );
};
