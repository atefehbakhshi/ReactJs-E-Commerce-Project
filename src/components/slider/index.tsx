import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import shoeTwo from "/img/slider/shoeTwo.jpg";
import shoeOne from "/img/slider/shoeOne.jpg";
import shoeThree from "/img/slider/shoeThree.jpg";
import shoeFour from "/img/slider/shoeFour.jpg";
// const images = [shoeOne, shoeTwo, shoeThree, shoeFour];
// end

import watchOne from "/img/slider/watchOne.jpg";
import watchTwo from "/img/slider/watchTwo.jpg";
import watchThree from "/img/slider/watchThree.jpg";
// const images = [watchOne, watchTwo, watchThree];

import perfumeOne from "/img/slider/perfumeOne.jpg";
import perfumeTwo from "/img/slider/perfumeTwo.jpg";
import perfumeThree from "/img/slider/perfumeThree.jpg";
import perfumeFour from "/img/slider/perfumeFour.jpg";
// const images = [perfumeOne, perfumeTwo, perfumeThree, perfumeFour];

import jewelleryOne from "/img/slider/jewelleryOne.jpg";
import jewelleryTwo from "/img/slider/jewelleryTwo.jpg";
import jewelleryThree from "/img/slider/jewelleryThree.jpg";
// const images = [jewelleryOne, jewelleryTwo, jewelleryThree];

const images = [watchOne, perfumeTwo, shoeThree];

const fadeOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="py-6">
      <Fade {...fadeOutProperties}>
        {images.map((each, index) => (
          <div className="h-[15rem] flex justify-center sm:h-[25rem] sm:items-center md:h-[30rem] ">
            <img key={index} style={{ width: "100%" }} src={each} />
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default Slideshow;
