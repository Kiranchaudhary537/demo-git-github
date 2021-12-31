import React from "react";
function Article() {
  return (
    <>
    <div className=" container-fluid shadow m-2 p-3">
      <Articlelink />
      <Articles />
      </div>
    </>
  );
}
export default Article;

function Articlelink() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark m-1 ">
      <div >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
function Articles() {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
          <div className="col">
            <div className="card">
              <img
                src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg"
                className="card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg"
                className="card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg"
                className="card-img-top card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg"
                className="card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center m-2" >
          <button
            type="button"
            className="btn btn-outline-secondary btn-center"
          >
            More Article
          </button>
        </div>
      </div>
    </>
  );
}
