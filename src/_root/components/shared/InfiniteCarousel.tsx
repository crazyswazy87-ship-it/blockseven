import React from "react";

type ImageItem = {
  src: string;
  title: string;
  className?: string;
};

type Props = {
  images: ImageItem[];
  speed?: number;
};

const InfiniteCarousel: React.FC<Props> = ({
  images,
  speed = 20,
}) => {
  const loopImages = [...images, ...images];

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-track"
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {loopImages.map((img, i) => (
          <div className="carousel-item" key={i}>
            
            <img
              src={img.src}
              alt={img.title}
              className={img.className}
            />

            <h2 className="carousel-title">
              {img.title}
            </h2>

          </div>
        ))}
      </div>

    </div>
  );
};

export default InfiniteCarousel;