import React, { useState } from "react";
import {  Link } from "react-router-dom";
import "../App.css";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  getAuth,
  fetchSignInMethodsForEmail,
  EmailAuthProvider,
  isSignInWithEmailLink, signInWithEmailLink
} from "firebase/auth";
import { authentication } from "../firebase";
function Header() {
  
  const auth = getAuth();
  const user = auth.currentUser;
  const [email,setEmail]=useState("");
  const signInWithGoogle = () => {
    
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      
      const user = result.user;
      setEmail(user.email);
    }).catch((error) => {
      
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(`error${error}`);
    });

  };
  const givealert=()=>{
    alert("please check Login");
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <span>Abhiyanta</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <a
                href="#Aboutusmodel"
                className="nav-link text-white"
                data-toggle="modal"
              >
                About US
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Contactusmodal"
                className="nav-link text-white"
                data-toggle="modal"
              >
                Contact US
              </a>
            </li>
            <li className="nav-item">
            { email.length <= 0?
              <Link onClick={givealert} to="Write" className="nav-link text-white">
                Write
              </Link>
              : 
              <Link to="Write" className="nav-link text-white">
              Write
              </Link>
             }
             </li>
          </ul>
        </div>
        <form className="navbar-form form-inline">
          <div className="gcse-search"></div>
          <div className="input-group search-box">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Search Article"
            />
            <button type="submit"  className="input-group-addon btn btn-dark">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
         <div className="navbar-nav ml-auto">
         
         <div className="nav-item dropdown">
            <a
              href="#"
              data-toggle="dropdown"
              className="nav-link text-center dropdown-toggle user-action"
            >
              {" "}
              <i className="fa fa-user-o"></i>{" "}
            </a>
            <div className="dropdown-menu dropdown-menu-dark">
              { email.length <= 0 ? <a
                onClick={signInWithGoogle}
                className="dropdown-item"
                data-toggle="modal"
              >
                {" "}
                Log In / Sign In
              </a> :
              
              <a href="#myModal" className="dropdown-item"data-toggle="modal" >Profile</a>
              }
              <div className="dropdown-divider"></div>
              <Link
                onClick={() => {
                  {setEmail(" ")}
                  signOut();
                }}
                to='/'
                className="dropdown-item"
              >
                {" "}
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalRegisterForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fa fa-user prefix grey-text"></i>
                <input
                  type="text"
                  id="orangeForm-name"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  for="orangeForm-name"
                >
                  Your name
                </label>
              </div>
              <div className="md-form mb-5">
                <i className="fa fa-envelope " aria-hidden="true"></i>
                <input
                  type="email"
                  id="orangeForm-email"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  for="orangeForm-email"
                >
                  Your email
                </label>
              </div>

              <div className="md-form mb-4">
                <i className="fa fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  id="orangeForm-pass"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  for="orangeForm-pass"
                >
                  Your password
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-deep-orange">Sign up</button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalLoginForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Sign in</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <i className="fa fa-envelope prefix grey-text"></i>
                <input
                  type="email"
                  id="defaultForm-email"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  for="defaultForm-email"
                >
                  Your email
                </label>
              </div>

              <div className="md-form mb-4">
                <i className="fa fa-lock prefix grey-text"></i>
                <input
                  type="password"
                  id="defaultForm-pass"
                  className="form-control validate"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  for="defaultForm-pass"
                >
                  Your password
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button className="btn btn-default">Login</button>
            </div>
          </div>
        </div>
      </div>
    { email.length > 0 ?  
    <div
        className="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <center>
              <img src={user.photoURL} name="aboutme" width="140" height="140" border="0" className="img-circle"></img>
              <hr />
                <h3 className="media-heading">
                  {user.displayName}
                </h3>
                
              </center>
      
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      :
      <div>

      </div>
    }
      <div
        className="modal fade"
        id="Aboutusmodel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                About US
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h3>This is Project of Abhiyanta community.</h3>
              <br />
              <br />
              <mark>Designer:</mark> Kiran Chaudhary
              <br />
              <br />
              <mark>Tech Leads:</mark> Rishav Singh
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="Contactusmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Contact Us
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <br />
              <h4>Designer</h4>
              <br />
              Kiran Chaudhary: kiranchaudhary537@gmail.com
              <br />
              <br />
              <h4>Tech Leads:</h4>
              Rishav Singh
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </nav>
  );
}
export default Header;

