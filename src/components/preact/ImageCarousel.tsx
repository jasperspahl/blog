import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./ImageCarousel.scss";

export interface ImageCarouselProps {
  images: {
    src: string;
    alt?: string;
  }[];
  hero?: boolean;
}
export default function ImageCarousel({ images, hero }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userChanged, setUserChanged] = useState(false);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    setUserChanged(true);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    setUserChanged(true);
  };

  useEffect(() => {
    if (!userChanged && images.length > 1) {
      const inteval = setInterval(
        () => setCurrentIndex((index) => (index + 1) % images.length),
        5000
      );
      return () => clearInterval(inteval);
    }
  }, [userChanged]);

  return (
    <div className={`slider-container${hero ? " hero" : ""}`}>
      {images.map((image, i) => (
        <div className={i === currentIndex ? "fade" : "slide fade"}>
          <img src={image.src} alt={image.alt || ""}></img>
          <div className="caption">{image.alt}</div>
        </div>
      ))}
      {images.length > 1 && (
        <div className="slider-buttons">
          <button onClick={prev} className="prev">
            &lt;
          </button>
          <button onClick={next} className="next">
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
