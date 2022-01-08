import React from "react";
import { Outlet, Link } from "react-router-dom";
function Tradingcard() {
  return (
    <>
      <div className="container-fluid">
        <Link to="ArticleMain" className="text-black text-decoration-none">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn.thewire.in/wp-content/uploads/2021/05/26220619/luc-montagnier.png"
                  className="img-fluid rounded-start img-thumbnail"
                  alt="image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title img-fluid img-thumbnail rounded">
                    Luc Montagnier’s Views on COVID Vaccines Are Latest Of His
                    Wrong, Vexing Ideas
                  </h5>
                  <p className="card-text">
                    Luc Montagnier, December 2008. Photo:
                    Prolineserver/Wikimedia Commons, CC BY-NC-SA 2.0 A popular
                    message circulating on social media with reference to the
                    French Nobel laureate, Luc Montagnier, claims that everyone
                    who has taken any COVID-19 vaccine will die in two years.
                    This has caused a lot of anxiety among those who have taken
                    the vaccines. It is also promoting vaccine hesitancy among
                    those yet to be vaccinated. Luc Montagnier has raised two
                    broad issues to support his controversial views. The first
                    is that vaccines are driving the creation of mutants. The
                    second is that a process called antibody-dependent
                    enhancement (ADE) is driving more (serious) infection in
                    vaccinated persons. People everywhere, especially in India,
                    which is facing a serious wave of infections and death,
                    should not be deterred by this news. They should take
                    COVID-19 vaccines as soon as these are available to them{" "}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default Tradingcard;
