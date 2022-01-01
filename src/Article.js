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
      <div>
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
              Computer Technology
            </a>
            <a className="nav-link " href="#">
            communication system
            </a>
            <a className="nav-link" href="#">
            Embedded system
            </a>
            <a className="nav-link disabled">More</a>
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
                src="https://cdn.thewire.in/wp-content/uploads/2021/07/14180459/kerala.jpg"
                className="card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Why Is Kerala Reporting So Many More COVID-19 Cases Than Other
                  Indian States?
                </h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  The eyes of many experts and non-experts alike are currently
                  on Kerala, as its COVID-19 case load has been increasing in
                  increments far greater than any other state in India. The
                  average number of daily new cases reached a low of 11,000
                  around the last week of June, 2021, and it has since been
                  rising, albeit slowly, over the past two weeks. At the same
                  time, the number of cases elsewhere in the country has been
                  falling after a major second-wave peak in the first week of
                  May.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://cdn.thewire.in/wp-content/uploads/2021/12/31105849/mat-napo-O3jiPcvNN8M-unsplash-1536x1046.jpg"
                className="card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Vaccine Apartheid Includes Dumping Expiring Vaccines in Africa
                </h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  The emergence and rapid domination of the omicron variant is
                  the sharp reminder that COVID-19 remains a global threat, and
                  that vaccinating the whole world is the only way forward. Yet
                  the global north continues to accept reality of vaccine
                  apartheid, while the rest of the world, particularly Africa,
                  pays the price.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://cdn.thewire.in/wp-content/uploads/2021/12/26083859/51775389630_cb1cf47762_k-1536x944.jpg"
                className="card-img-top card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  James Webb Space Telescope Launched on Daring Quest To Behold
                  First Stars
                </h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  Kourou, French Guiana: The world’s largest and most powerful
                  space telescope rocketed away Saturday on a high-stakes quest
                  to behold light from the first stars and galaxies and scour
                  the universe for hints of life. NASA’s James Webb Space
                  Telescope soared from French Guiana on South America’s
                  northeastern coast, riding a European Ariane rocket into the
                  Christmas morning sky.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://cdn.thewire.in/wp-content/uploads/2021/03/23085642/The_Indian_Space_Research_Organisation_ISRO_Chairman_Dr._K._Sivan_addressing_a_press_conference_on_issues_related_to_Department_of_Space_in_New_Delhi_on_August_28_2018-1536x1049.jpg"
                className="card-img-top img-fluid img-thumbnail rounded"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Andhra Floods May Disrupt ISRO’s Plans for Pending 2021
                  Launches
                </h5>
                <p className="card-text img-fluid img-thumbnail rounded">
                  New Delhi: The floods devastating Andhra Pradesh are likely to
                  also delay the Indian Space Research Organisation (ISRO)’s
                  plans to complete three launches before the end of 2021.
                  ISRO’s plans have already been pushed back due to the COVID-19
                  pandemic, including the Gaganyaan space mission. Now, with
                  many arterial roads in Nellore, the district in which the
                  Sriharikota launch station is located, remaining closed, ISRO
                  will not be able to send key satellite and rocket components
                  from its centres in Kerala and Karnataka for assembling and
                  launch, according to the Times of India..
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center m-2">
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
