import React from "react";

function Feedback() {
  return (
    <>
    <div className="container-fluid text-center m-3" >
      <form>
        <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  );
}
export default Feedback;
