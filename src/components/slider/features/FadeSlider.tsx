import { FC } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const fadeOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  scale: 0.4,
  arrows: true,
};

export const FadeSlider: FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="py-6">
      <Fade {...fadeOutProperties}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="flex justify-center py-8 h-[15rem] slider-shadow md:h-[20rem]"
            >
              <img src={image} />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};
