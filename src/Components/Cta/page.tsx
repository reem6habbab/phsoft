import { CtaProps } from "./CtaProps";
export default function Cta({ dataCta }: CtaProps) {
  return (
    <>
      <section id="cta" className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 text-center text-lg-left">
              <h3>{dataCta.head}</h3>
              <p> {dataCta.paragraph}</p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
