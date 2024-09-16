export default function Info() {
  return (
    <>
      <div className="info-wrap">
        <div className="row">
          <div className="col-lg-4 info">
            <i className="bi bi-geo-alt"></i>
            <h4>Location:</h4>
            <p>
              A108 Adam Street
              <br />
              New York, NY 535022
            </p>
          </div>

          <div className="col-lg-4 info mt-4 mt-lg-0">
            <i className="bi bi-envelope"></i>
            <h4>Email:</h4>
            <p>
              info@example.com
              <br />
              contact@example.com
            </p>
          </div>

          <div className="col-lg-4 info mt-4 mt-lg-0">
            <i className="bi bi-phone"></i>
            <h4>Call:</h4>
            <p>
              +1 5589 55488 51
              <br />
              +1 5589 22475 14
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
