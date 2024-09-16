import Breadcrumbs from "./Breadcrumbs";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";
import OurSkills from "./OurSkills";
import OurClients from "../OurClients/page";
import Header from "../Header/page";
import Footer from "../Footer/page";

export default function About() {
  return (
    <>
      <Header />
      <main id="main" className="">
        <Breadcrumbs />
        <AboutUs />
        <OurTeam />
        <OurSkills />
        <OurClients />
      </main>
      <Footer />
    </>
  );
}
