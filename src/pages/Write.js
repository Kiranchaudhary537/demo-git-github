import React from "react";
import Feedback from "./Feedback";
function Write() {
  return (
    <div className="row">
    <section id="content" className="col-md-8 shadow border border-info" role="main">
  <div className="form-group">
  <h1 className="text-center font-weight-bold">
    Write Your Article Here
  </h1>
  <textarea
    className="form-control rounded-0"
    id="summernote"
    rows="15"
  ></textarea>
</div>
<div className="text-center m-3">
<button type="submit" className="btn btn-primary ">
  SUBMIT
</button>
</div>
    </section>
    <aside className="sidebars col-md-4">
  <div className="container-fluid">
  <div className="form-group p-5  bg-gradient-light text-dark">
    <label for="exampleFormControlFile1">Upload Your file</label>
    <input
      type="file"
      className="form-control-file"
      id="exampleFormControlFile1"
    />
  </div>
  <div className="w-100 "></div>
  <div className="">
    <Feedback />
  </div>
</div>
    </aside>
  </div>

  );
}
export default Write;
