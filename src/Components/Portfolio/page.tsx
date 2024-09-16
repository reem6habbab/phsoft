"use client";

import { useEffect } from "react";
import { GalleriesProps, GalleryProps } from "./GalleryProps";
import ImageGallery from "./ImageGallery";
export default function Portfolio() {
  // const filterGallery = (): void => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % dataSlider.length);
  // };
  let dataGalleries: GalleryProps [] = [
    {
      id: "1",
      srcImage: "/assets/img/portfolio/portfolio-1.jpg",
      name: "App 1",
      categoryName: "App",
      categoryId: "1",
    },
    {
      id: "2",
      srcImage: "/assets/img/portfolio/portfolio-2.jpg",
      name: "App 2",
      categoryName: "App",
      categoryId: "1",
    },
    {
      id: "3",
      srcImage: "/assets/img/portfolio/portfolio-3.jpg",
      name: "App 3",
      categoryName: "Web",
      categoryId: "2",
    },
    {
      id: "4",
      srcImage: "/assets/img/portfolio/portfolio-4.jpg",
      name: "Card 2",
      categoryName: "Card",
      categoryId: "3",
    },
    {
      id: "5",
      srcImage: "/assets/img/portfolio/portfolio-5.jpg",
      name: "Card 5",
      categoryName: "Card",
      categoryId: "3",
    },
    {
      id: "6",
      srcImage: "/assets/img/portfolio/portfolio-6.jpg",
      name: "Web 1",
      categoryName: "Web",
      categoryId: "2",
    }
  ];

 
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <ImageGallery  galleries={dataGalleries}/>
        </div>
      </section>
    </>
  );
}
