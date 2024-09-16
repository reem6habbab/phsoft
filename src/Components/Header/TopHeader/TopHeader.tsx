import { TopHeaderProps } from "./TopHeaderProps"; // Adjust the path according to your project structure
export default function TopHeader({ socialLinks, dData }: TopHeaderProps) {
  return (
    <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href=" ">{dData.mail}</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <span>{dData.phone}</span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            {socialLinks.map(function (s) {
              return (
                <a href="#" className={s.name}>
                  <i className={s.icon}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
