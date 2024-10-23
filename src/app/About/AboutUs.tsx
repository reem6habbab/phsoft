let dataAboutAs = {
  tittle: "Build efficient, easy-to-use and secure projects.",
  aboutAs: "We are working on several projects such as: ERP ....",
  dataBox: [
    {
      i: "bx bx-receipt",
      h4: "ERP",
      p: "  Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    },
    {
      i: "bx bx-cube-alt",
      h4: "DAMAN",
      p: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    },
    {
      i: "bx bx-shield",
      h4: "TICKET",
      p: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
    },
    {
      i: "bx bx-images",
      h4: "CASH",
      p: " Aut suscipit aut cum nemo deleniti aut omnis. Doloribus utmaiores omnis facere",
    },
  ],
};

export default function AboutUs() {
  const divBoxes = dataAboutAs.dataBox.map((item, index) => (
    <div
      key={index}
      className="col-md-6 icon-box aos-init aos-animate"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      // data-aos-offset="500"
      data-aos-duration="2000"
    >
      <i className={item.i}></i>
      <h4>{item.h4}</h4>
      <p>{item.p}</p>
    </div>
  ));
  return (
    <>
      <section id="about-us" className="about-us">
        <div className="container">
          <div className="row no-gutters">
            <div
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start aos-init aos-animate"
              data-aos="fade-right"
            ></div>
            <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
              <div className="content d-flex flex-column justify-content-center">
                <h3 data-aos="fade-up" className="aos-init aos-animate">
                  {dataAboutAs.tittle}
                </h3>
                <p data-aos="fade-up" className="aos-init aos-animate">
                  {dataAboutAs.aboutAs}
                </p>
                <div className="row">{divBoxes}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
