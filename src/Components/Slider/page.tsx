// Corrected import statements
"use client";
import favicon from "../../../public/assets/img/favicon.png";
import appleTouchIcon from "../../../public/assets/img/apple-touch-icon.png";
import Slide from "./Slide";
import { SlideProps } from "./SlideProps";
import { useEffect, useState } from "react";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  let dataSlider: SlideProps[] = [
    {
      backgroundImage: "assets/img/slide/slide-1.jpg",
      container:
        " <h2>Welcome to <span>Flattern</span>  </h2> <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et  tempore modi architecto.  </p>",
      textCenter: "Read More",
    },
    {
      backgroundImage: "assets/img/slide/slide-3.jpg",
      container:
        " <h2>Welcome to <span>Flattern</span>  </h2> <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et  tempore modi architecto.  </p>",
      textCenter: "Read More",
    },
    {
      backgroundImage: "assets/img/slide/slide-2.jpg",
      container:
        " <h2>Welcome to <span>Flattern</span>  </h2> <p>Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et  tempore modi architecto.  </p>",
      textCenter: "Read More",
    },
  ];

  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + dataSlider.length) % dataSlider.length
    );
  };
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataSlider.length);
  };
  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 10000);
  });
  return (
    <>
      <section id="hero">
        <div
          id="heroCarousel"
          data-bs-interval="5000"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <Slide {...dataSlider[currentIndex]} />
          <a
            className="carousel-control-prev"
            href="#heroCarousel"
            role="button"
            data-bs-slide="prev"
            onClick={() => prevSlide()}
          >
            <span
              className="carousel-control-prev-icon bx bx-left-arrow"
              aria-hidden="true"
            ></span>
          </a>

          <a
            className="carousel-control-next"
            href="#heroCarousel"
            role="button"
            data-bs-slide="next"
            onClick={() => nextSlide()}
          >
            <span
              className="carousel-control-next-icon bx bx-right-arrow"
              aria-hidden="true"
            ></span>
          </a>
          <ol className="carousel-indicators" id="hero-carousel-indicators">
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="0"
              className=""
            ></li>
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="1"
              className=""
            ></li>
            <li
              data-bs-target="#heroCarousel"
              data-bs-slide-to="2"
              className="active"
              aria-current="true"
            ></li>
          </ol>
        </div>
      </section>
    </>
  );
}
