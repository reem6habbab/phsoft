import Form from "./Forms/page";
import Info from "./Info/page";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div
            className="row justify-content-center aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="col-lg-10">
             <Info/>
            </div>
          </div>
          <Form />
        </div>
      </section>
    </>
  );
}
