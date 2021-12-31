import React from "react";

function Feedback() {
  return (
    <>
    <div className="container-fluid text-center m-3" >
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Submit
        </button>
      </form>
      </div>
    </>
  );
}
export default Feedback;
