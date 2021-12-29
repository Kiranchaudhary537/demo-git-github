import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Articles from "./Articles";

function App() {
  return (
    // <div className="container">
    // </div>
    <div >
      <Header />
      <div className="row" style={{border:'10px solid blank'}}>
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src="https://image.shutterstock.com/image-photo/back-light-close-lady-hand-600w-420850261.jpg" class="img-fluid rounded-start" alt="image" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Articles/>
        </div>
        <div className="col-4">
          <div className="row"></div>
          <div className="row">
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
                <label for="exampleFormControlTextarea1">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
