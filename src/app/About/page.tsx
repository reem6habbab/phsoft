"use client";

// <!-- Favicons -->
import "../../../public/assets/img/favicon.png";
import "../../../public/assets/img/apple-touch-icon.png";
{
  /* <!-- Google Fonts --> */
}
<link
  href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Muli:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
  rel="stylesheet"
/>;

// <!-- Vendor CSS Files -->
import "../../../public/assets/vendor/animate/animate.min.css";
import "../../../public/assets/vendor/aos/aos.css";
import "../../../public/assets/vendor/bootstrap/css/bootstrap.min.css";
import "../../../public/assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../../../public/assets/vendor/boxicons/css/boxicons.min.css";
import "../../../public/assets/vendor/glightbox/css/glightbox.min.css";
import "../../../public/assets/vendor/swiper/swiper-bundle.min.css";

// <!-- Template Main CSS File -->
import "../../../public/assets/css/style.css";

import Breadcrumbs from "./Breadcrumbs";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";
import OurSkills from "./OurSkills";
import OurClients from "../OurClients/page";
import AOS from "aos";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 1000,
    });
  }, []);
  return (
    <>
      <main id="main" className="">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>About</h2>
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>About</li>
              </ol>
            </div>
          </div>
        </section>
        <AboutUs />
        <OurTeam />
        <OurSkills />
        <OurClients />
      </main>
    </>
  );
}
