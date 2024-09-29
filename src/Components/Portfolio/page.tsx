"use client";
import { use, useEffect } from "react";
import { GalleriesProps, GalleryProps } from "./GalleryProps";
import ImageGallery from "./ImageGallery";
import { useState } from "react";

export default function Portfolio() {
  const dataGalleries: GalleryProps[] = [
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
    },
  ];
  const [GalleryList, setGalleryList] = useState<GalleryProps[]>([]);
  const [isLiActive, setIsLiActive] = useState<String>("");
  useEffect(() => {
    setGalleryList(dataGalleries);
    setIsLiActive("All");
  }, []);
  function filterGalleries(cateName: String) {
    setIsLiActive(cateName);
    if (cateName == "All") {
      setGalleryList(dataGalleries);
    } else {
      let dataFilter = dataGalleries.filter(
        (item) => item.categoryName == cateName
      );
      setGalleryList(dataFilter);
    }
  }

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  onClick={() => filterGalleries("All")}
                  className={isLiActive == "All" ? "filter-active" : ""}
                >
                  All
                </li>
                <li
                  onClick={() => filterGalleries("App")}
                  className={isLiActive == "App" ? "filter-active" : ""}
                >
                  App
                </li>
                <li
                  onClick={() => filterGalleries("Card")}
                  className={isLiActive == "Card" ? "filter-active" : ""}
                >
                  Card
                </li>
                <li
                  onClick={() => filterGalleries("Web")}
                  className={isLiActive == "Web" ? "filter-active" : ""}
                >
                  Web
                </li>
              </ul>
            </div>
          </div>
          <ImageGallery galleries={GalleryList} />
        </div>
      </section>
    </>
  );
}
