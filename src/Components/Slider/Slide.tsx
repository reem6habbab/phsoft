import { SlideProps } from "./SlideProps";

export default function Slide({
  backgroundImage,
  container,
  textCenter,
}: SlideProps) {
  return (
    <>
      <div
        className="carousel-item active"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="carousel-container">
          <div className="carousel-content animate__animated animate__fadeInUp">
            <h2>
              Welcome to <span>Flattern</span>
            </h2>
            <p>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <div className="text-center">
              <a href="" className="btn-get-started">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
