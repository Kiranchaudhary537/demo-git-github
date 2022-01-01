import React from "react";
import Feedback from "./Feedback";
import Footer from "./Footer";
import Header from "./Header";

function Write() {
  return (
    <div>
      <Header />
      <div className="row">
        <div className="col-sm-8">
          <div className="form-group">
            <h1 className="text-center font-weight-bold">Write Your Article Here</h1>
            <textarea
              className="form-control rounded-0"
              id="exampleFormControlTextarea1"
              rows="40"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mb-2 ">SUBMIT</button>
        </div>
        <div className="col">
            <div className="container-fluid">
            <div className="form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
  </div>
          <div><Feedback/></div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Write;
