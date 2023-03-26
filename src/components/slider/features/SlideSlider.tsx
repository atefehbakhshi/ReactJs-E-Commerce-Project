import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideOutProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  scale: 0.4,
  arrows: true,
};

export const SlideSlider:FC<{images:string[]}> = ({ images }) => {
  return (
    <>
      {images && (
        <div className="py-6 md:w-1/2">
          <Slide {...slideOutProperties}>
            {images.map((image, index) => {
              return (
                <div key={index} className="flex justify-center py-8 h-[15rem]">
                  <img
                    src={`http://localhost:3002/files/${image}`}
                    className="max-w-3/4"
                  />
                </div>
              );
            })}
          </Slide>
        </div>
      )}
    </>
  );
};
