import React from "react";
import Feedback from "./Feedback";
function Write() {
  return (
    <div className="row">
    <section id="content" className="col-md-6 offset-1 shadow border" >
    <div className="container-fluid">
   <div className="form-group p-5  bg-gradient-light text-dark m-3">
    <label for="exampleFormControlFile1">Upload Your Image</label>
    <div className="w-100 "></div>
    <input
      type="file"
      className="form-control-file"
      id="exampleFormControlFile1"
    />
  <div className="w-100"></div>
  <div className="w-100"></div>
  <label for="exampleFormControlFile1">Upload Your file</label>
    <div className="w-100 "></div>
    <input
      type="file"
      className="form-control-file"
      id="exampleFormControlFile1"
    />
    <div className="w-100 "></div>
  <form action="" className="">
  <button type="submit" class="btn btn-secondary m-2">Submit</button>
  </form>
  </div>.
</div>
    </section>
    <aside className="sidebars col-md-4">
  <div className="container-fluid">
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
