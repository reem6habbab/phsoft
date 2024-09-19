"use client";
import { useEffect } from "react";
import { GalleriesProps, GalleryProps } from "./GalleryProps";
import ImageGallery from "./ImageGallery";
import { useState } from "react";

export default function Portfolio() {
  const [listOfGalleries, setListOfGalleries] = useState<any[]>([]);
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

  useEffect(() => {
    setListOfGalleries(dataGalleries);
  },[]);

  const filterGallery = (val: string) => {
    if (val === "All") {
      setListOfGalleries(dataGalleries);
    } else {
      let filterGallery = dataGalleries.filter((x) => x.categoryName == val);
      if (filterGallery) {
        setListOfGalleries(filterGallery);
      }
    }
  };

  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  onClick={() => filterGallery("All")}
                  data-filter="*"
                  className="filter-active"
                >
                  {" "}
                  All{" "}
                </li>
                <li
                  onClick={() => filterGallery("App")}
                  data-filter=".filter-app"
                >
                  App
                </li>
                <li
                  onClick={() => filterGallery("Card")}
                  data-filter=".filter-card"
                >
                  Card
                </li>
                <li
                  onClick={() => filterGallery("Web")}
                  data-filter=".filter-web"
                >
                  Web
                </li>
              </ul>
            </div>
          </div>
          <ImageGallery galleries={listOfGalleries} />
        </div>
      </section>
    </>
  );
}
