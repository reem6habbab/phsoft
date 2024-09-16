interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  smcol: string;
  lgcol: string;
}
export default function Service(props: ServiceProps) {
  let vClasses = "col-lg-" + props.lgcol + " col-md-" + props.smcol;
  return (
    <>
      <div className={vClasses}>
        <div className="icon-box aos-init aos-animate" data-aos="fade-up">
          <div className="icon">
            <i className={props.icon}></i>
          </div>
          <h4 className="title">
            <a href="">{props.title}</a>
          </h4>
          <p className="description">{props.description}</p>
        </div>
      </div>
    </>
  );
}
