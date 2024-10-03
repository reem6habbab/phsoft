let dataOurTeam = {
  descrip:
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
  employees: [
    {
      name: "a",
      jobTittle: "Full-Stack developer",
      srcImage: "assets/img/team/team-1.jpg",
    },
    {
      name: "b",
      jobTittle: "Full-Stack developer",
      srcImage: "assets/img/team/team-2.jpg",
    },
    {
      name: "c",
      jobTittle: "Full-Stack developer",
      srcImage: "assets/img/team/team-3.jpg",
    },
    {
      name: "d",
      jobTittle: "Full-Stack developer",
      srcImage: "assets/img/team/team-4.jpg",
    },
  ],
};

export default function OurTeam() {
  const divBoxes = dataOurTeam.employees.map((item, index) => (
    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
      <div
        className="member aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="member-img">
          <img src={item.srcImage} className="img-fluid" alt="" />
          <div className="social">
            <a href="">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="member-info">
          <h4>{item.name}</h4>
          <span>{item.jobTittle}</span>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <section id="team" className="team section-bg">
        <div className="container">
          <div
            className="section-title aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2>
              Our <strong>Team</strong>
            </h2>
            <p>{dataOurTeam.descrip}</p>
          </div>
          <div className="row">{divBoxes}</div>
        </div>
      </section>
    </>
  );
}
