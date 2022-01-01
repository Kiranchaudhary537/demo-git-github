import React from "react";
import Article from "./Article";
import Tradingcard from "./Tradingcard";
import Feedback from "./Feedback";

function Mainpage() {
  return (

    <div className="container-fluid ml-auto mr-auto">
        <div className="row shadow">
            <Tradingcard/>
        </div>
        <div className="row">
          <div className="col-lg-8 ">
              <Article/>
          </div>
          <div className="col-md  my-auto p-3" >
              <Feedback/>
              <Feedback/>
          </div>
       </div>
    </div>
 );
}
export default Mainpage;
