"use client";
import Image from "next/image";
import { GalleriesProps, GalleryProps } from "./GalleryProps";
import { useEffect, useState } from "react";

export default function ImageGallery({ galleries }: GalleriesProps) {
  return (
    <>
      <div className="row portfolio-container" data-aos="fade-up">
        {galleries.map((item) => (
          <>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <Image
                key={item.id}
                src={item.srcImage}
                className="img-fluid"
                alt=""
                width={1000} // Specify the width
                height={600} // Specify the height
              />
              <div className="portfolio-info">
                <h4>{item.name}</h4>
                <p>{item.categoryName}</p>
                <a
                  href={item.srcImage}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title={item.name}
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a
                  href="portfolio-details.html"
                  className="details-link"
                  title="More Details"
                >
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}