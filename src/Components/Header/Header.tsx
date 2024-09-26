"use client"
import { HeaderPageProps } from "./HeaderPageProps";
import { useEffect, useRef } from 'react';

export default function Header({ dataHeaderPage }: HeaderPageProps) {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectHeader = document.querySelector("#header") as HTMLElement | null;

    
    if (!selectHeader) return;

    const headerOffset = selectHeader.offsetTop;
    const nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if (headerOffset - window.scrollY <= 0) {
        selectHeader.classList.add("fixed-top");
        nextElement?.classList.add("scrolled-offset");
      } else {
        selectHeader.classList.remove("fixed-top");
        nextElement?.classList.remove("scrolled-offset");
      }
    };

    // Initial check on component mount
    headerFixed();

    // Set up scroll event listener
    window.addEventListener('scroll', headerFixed);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', headerFixed);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} id="header" className="d-flex align-items-center" >
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <h1 className="text-light">
              <a href="index.html">PHSOFT</a>
            </h1>
            {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              {/* <li>
                <a className="active" href="index.html">
                  Home
                </a>
              </li> */}
              {dataHeaderPage.map((element, index) => {
                let active =
                  element.name === dataHeaderPage[0].name ? "active" : "";
                console.log(active);
                return (
                  <>
                    <li key={element.name}>
                      <a href={element.link} className={active}>
                        {element.name}
                      </a>
                    </li>
                  </>
                );
              })}
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </>
  );
}
