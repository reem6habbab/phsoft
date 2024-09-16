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

let dData = { phone: "nnnn", mail: "nnnnnnnn@nnn.com" };

function Home() {
  let social_links = [
    { name: "twitter", icon: "bi bi-twitter" },
    { name: "facebook", icon: "bi bi-facebook" },
    { name: "instagram", icon: "bi bi-instagram" },
    { name: "linkedin", icon: "bi bi-linkedin" },
  ];

  let dataHeaderPage = [
    { name: "Home", link: "index.html" },
    { name: "About", link: "about.html" },
    { name: "Services", link: "services.html" },
    { name: "Testimonials", link: "testimonials.html" },
    { name: "Pricing", link: "pricing.html" },
    { name: "Portfolio", link: "portfolio.html" },
    { name: "Blog", link: "blog.html" },
    { name: "Contact", link: "contact.html" },
  ];
  let dataCta = {
    head: "We've created more than 200 websites this year!",
    paragraph:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <>
      <TopHeader socialLinks={social_links} dData={dData} />
      <Header dataHeaderPage={dataHeaderPage} />
      <Slider />
      <Cta dataCta={dataCta} />
      <Services />
      <Portfolio />
      <OurClients />
      <Footer />
      {/* <Breadcrumbs /> */}
      {/* <About/> */}
    </>
  );
}

export default Home;
// <!-- Vendor JS Files -->
import TopHeader from "@/Components/Header/TopHeader/TopHeader";
import Header from "@/Components/Header/Header";
import Footer from "../Footer/page";
import Slider from "../../Components/Slider/page";
import Cta from "../../Components/Cta/page";
import Services from "@/Components/Services";
import Portfolio from "../../Components/Portfolio/page";
import OurClients from "../OurClients/page";
import Breadcrumbs from "../Contact/Breadcrumbs/page";
import About from "../About/page";
import favicon from "../../../public/assets/img/favicon.png";
import appleTouchIcon from "../../../public/assets/img/apple-touch-icon.png";

// <!-- Vendor JS Files -->
// import "../../../public/assets/vendor/aos/aos.js";
// import "../../../public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
// import "../../../public/assets/vendor/glightbox/js/glightbox.min.js";
// import "../../../public/assets/vendor/isotope-layout/isotope.pkgd.min.js";
// import "../../../public/assets/vendor/swiper/swiper-bundle.min.js";
// import "../../../public/assets/vendor/waypoints/noframework.waypoints.js";
// import "../../../public/assets/vendor/php-email-form/validate.js";

// <!-- Template Main JS File -->
// import "../../../public/assets/js/main.js";
