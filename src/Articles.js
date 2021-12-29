import React from "react";

function Articles() {
    return (
          <>
    <div className="container">
        <div className="col">
    <nav className="nav">
      <a className="nav-link active" aria-current="page" href="/">
        Active
      </a>
      <a className="nav-link" href="/">
        Link
      </a>
      <a className="nav-link" href="/">
        Link
      </a>
      <a className="nav-link disabled">Disabled</a>
    </nav>
      </div>
    <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="col">
      <div className="card">
        <img src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg" className="card-img-top img-fluid" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card">
        <img src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center" style={{border:'10px solid pink'}}>
      
  <button type="button" class="btn btn-outline-secondary btn-center" >More Article</button>
  </div>
      </div>
          </>
  );    
}
export default Articles;
