import { useEffect } from "react";
import Category from "../../components/category";
import { FadeSlider } from "../../components/slider";

import one from "/img/slider/jewellery/1.png";
import two from "/img/slider/jewellery/2.png";
import three from "/img/slider/jewellery/3.png";

const images = [one, two, three];

export const Jewellery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FadeSlider images={images} />
      <main className="px-3 pb-3">
        <Category
          path="/jewellery/bracelet"
          text="دستبند"
          icon="game-icons:primitive-necklace"
          id="11"
          landing="pruducts"
        />
        <Category
          path="/jewellery/necklace"
          text="گردنبند / آویز"
          icon="icon-park-outline:diamond-necklace"
          id="12"
          landing="pruducts"
        />
      </main>
    </div>
  );
};
