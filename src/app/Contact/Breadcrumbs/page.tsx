import Header from "@/app/Header/page";
import MapSection from "../MapSection/page";
import Footer from "@/app/Footer/page";
import Contact from "../Contact/page";

export default function Breadcrumbs() {
  return (
    <>
    <Header/>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Contact</h2>
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>Contact</li>
            </ol>
          </div>
          <MapSection />
        </div>
      </section>
      <Contact/>
      <Footer/>
    </>
  );
}
