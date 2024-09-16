export default function Breadcrumbs() {
  return <>
   <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Blog</h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Blog</li>
          </ol>
        </div>
      </div>
    </section>
  </>;
}
