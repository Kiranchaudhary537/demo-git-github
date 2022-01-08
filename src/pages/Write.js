import React from "react";
import Feedback from "./Feedback";

function Write() {
  return (
    <div>
      <div className="row shadow ">
        <div className="col-sm-8 shadow-lg">
          <div className="form-group">
            <h1 className="text-center font-weight-bold">
              Write Your Article Here
            </h1>
            <textarea
              className="form-control rounded-0"
              id="exampleFormControlTextarea1"
              rows="40"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mb-3 text-center ">
            SUBMIT
          </button>
        </div>
        <div className="col-md  my-auto p-3">
          <div className="container-fluid">
            <div className="form-group p-5 shadow bg-gradient-light text-dark">
              <label for="exampleFormControlFile1">Upload Your file</label>
              <br />
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <div className="w-100"></div>
            <div>
              <Feedback />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Write;
