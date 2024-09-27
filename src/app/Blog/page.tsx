import BlogEntry from "./BlogEntry";
import Breadcrumbs from "./Breadcrumbs";

export default function Blog() {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Blog</title>
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <!-- Google Fonts --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Muli:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link
          href="../../../assets/vendor/animate.css/animate.min.css"
          rel="stylesheet"
        />
        <link href="../../../assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="../../../assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="../../../assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="../../../assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="../../../assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="../../../assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link href="../../../assets/css/style.css" rel="stylesheet" />
      </head>
      <main id="main" className="">
        <Breadcrumbs />
        <BlogEntry />
       
      </main>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
