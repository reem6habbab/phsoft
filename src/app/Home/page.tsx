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

function Home() {
 
  let dataCta = {
    head: "We've created more than 200 websites this year!",
    paragraph:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <>
      <Slider />
      <Cta dataCta={dataCta} />
      <Services />
      <Portfolio />
      <OurClients />
      {/* <Breadcrumbs /> */}
      {/* <About/> */}
    </>
  );
}

export default Home;
// <!-- Vendor JS Files -->
import Slider from "../../Components/Slider/page";
import Cta from "../../Components/Cta/page";
import Services from "@/Components/Services";
import Portfolio from "../../Components/Portfolio/page";
import OurClients from "../OurClients/page";
import Breadcrumbs from "../Contact/Breadcrumbs/page";
import About from "../About/page";
import favicon from "../../../public/assets/img/favicon.png";
import appleTouchIcon from "../../../public/assets/img/apple-touch-icon.png";
