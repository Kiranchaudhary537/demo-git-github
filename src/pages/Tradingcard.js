import React from "react";
import { Outlet, Link } from "react-router-dom";
import data from './ar';
let preview=data.roles[0].description.split(" ");
let previewdata=preview.slice(0,40).join(" ");
const data1=data.roles[0];
function Tradingcard() {
  return (
    <>
    <div className="container-fluid" >
        {/* <Link to='./ArticleMain' className="text-black text-decoration-none"> */}
        <Link to={{
                    pathname: "./ArticleMain",
                    search: "?sort=name",
                   hash: "#the-hash",
                    state: { dataname:true },
                        }}>
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img id="imagetradingcard"
                  src={data.roles[0].images}
                  className="img-fluid rounded-start img-thumbnail"
                  alt="image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title img-fluid img-thumbnail rounded">
                    {data.roles[0].title}
                  </h5>
                  <p className="card-text">
                    {previewdata}{"........"}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                     {data.roles[0].date}
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
