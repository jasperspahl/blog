import { h } from 'preact';
import { useState } from 'preact/hooks';
import "./ImageCarousel.scss";

export interface ImageCarouselProps {
    images: {
        src: string;
        alt?: string;
    }[]
}
export default function ImageCarousel({images}:ImageCarouselProps) {


    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prev = () => {
        setCurrentIndex((currentIndex -1 + images.length) % images.length);
    }

    return (
            <div className="slider-container">
                {images.map((image, i) => (
                    <div className={i === currentIndex ? "fade": "slide fade"}>
                        <img src={image.src} alt={image.alt}>
                        </img>
                        <div className="caption">{image.alt}</div>
                    </div>
                ))}
                <div className="slider-buttons">
                    <button onClick={prev} className="prev">&lt;</button>
                    <button onClick={next} className="next">&gt;</button>
                </div>
            </div>
    );
}
