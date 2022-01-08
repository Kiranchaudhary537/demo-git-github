import React from "react";
import { Outlet, Link } from "react-router-dom";
import Layout from "./Layout";
function Header() {
  return (
    <header>
      <nav className="navbar shadow navbar-expand-lg navbar-light bg-light m-1">
        <div className="container-fluid m-1 px-5">
          <Link className="navbar-brand text-decoration-none" to="Layout">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AAAD19fX7+/v4+Pje3t68vLxwcHDy8vLp6emFhYXw8PDs7Ozh4eHn5+dxcXHZ2deurq4yMjLHx8ebm5tqamp8fHxra2vS0tKQkJChoaHMzMxNTU1+fn7BwcFGRkYRERAnJyVeXl6rq6tVVVS1tbWUlJSenp4ZGRghISBbW1tAQD8tLi06OjkLCwodHRyQHPQ6AAAMH0lEQVR4nO2biXbiuBKGg1e8G7zv4I2dvP/b3SoZCCRYkHR6Mplb3+lzuhvZWL9VqkUSLy8EQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDE/yOm3DmH9WRgnuulrP10l74Ts0vyyTuOua8IP92xb8JM2vfyBtZtY/x0574B2bkv70RiSeJPd/GPMPslV+Bksmu036wxG7HPmwnZur9WohA+1ocsVrbwKzXawXMCgdCa/sJxnFZPC5xMHNmQfrrDn8X8hD6gzrRfZqnWZ0aQSYx/l8TpE070HY77q8LG7tMCQSIY6k/3+2nSLwicrHsYxZ/u+ZNkm68onCxL1/wddmp8fhIObBV3+iskNl8UONkk3sPsxjTN6T8jg8MTWtaH3a6qdofl8ebjtolN/lTUDnmlv4g/O9L6w6Ga51WV53mL5PvFVVOoyPwRkuGiralNf9Il2Q9i/WJegb5tHUSq46hRUOdXfmnXZDa386iwjWP7J+drxxd4ZPoCp9D73vf7Xi+c+vDWnHR8Z4MKq6ZzHxjz38SoufqWqC8qkrRTvAzwlK5Jijfn26YeNyi6cM1B98Ej/WOK3mMdx/VNJq+7Kq+dJFUyV7ZtTdNs2c2UtL8sVM2TjjsTUeE8TErr5xTy0xkYwTrsO8/VDEESAUkwNNfrknOa9+qkMS/sM4WOrsg/p5CXkR5xBPW0lG/KCFHQ3PKynpPzx4cpVDkKDUuWZev+V5isbXBlUwisN9NBslmr9tCF8UZwuYMRBIHGbREhSobsnZfkdkXnctYYHyj0/JotO2/UNPvYluNrXBzCGdzcQ7AqxUtgNbrigGFrXekdf4mTFwyP82rr9CDww2sSDVk5XbR3mozzHrkKNX399rR5b1wnBkZ9FZSC7CWCvxrz/K7L6xXrrcfLKHiedJPnETiSjwKZxNMgruu+tMa9KU9hyXKH43G9HrxdXk4vs6EbtF/ami38J8lcVrBNT0tmi1PjJLHHUwqewn2+LZrsfiSTzNn5DcJLGJ+IHIUZk3AIAswiWDq4ybRTcB0EziHPCLbtOYtahA0YFLSyl3vMobFuma1OivF1I57CKg8S6NpdCxAFbz9c1eqzeDxejCuU0cctI70IHSBgZrfNhkzeeEUJ57aoHiQu6mSGjpu5/0MxtKr1Epv8UYk8he2WM8dE63RrHqbZPUN+oFDAiTVPdAeSwbAowrDewDCqHuZ34hbFh7oaRE4YQpu6ZApbJ83slxInaJ2EEd6JYIr1mo6V41yFNc9PaqeJWDkrbzwijir00CpD6KajJ6s0XfVJCyO1WcWQ/Shosk4YQK6Y+KyNSVzkKiZH6Bx3uhNEod6v0pWfhHMc/tK9/545Co9twIt1Uj9ctnN8b9yZjirE5edtEQRh33QeZoMzlkVESmxMC3j4FgSGkCyWXuaVs1XLFEbwKAum6ALMOtL9GWvs0gjeyLHx7js8rkK198YrB/GsMOrL8atGFU4w0ERB4SuxpZmGabulDh2d+4rlwizcOCBwdWnzmuNJoYn1eusEqt54rg1pgCZnHZZH+xGnyLPS2llxMrLzLkcF7ujzCmNm30HodxAAMB0UDLnDCaU3MRpwrgZOr8QayxUlw4oPJ4UGzNHFNgr0NLMM1ji1Y+zKvFesex6Pr5CXc06DN4XjtjymEGu2PIrQOZ7eDoRY6Mwx9D30lW0U6W8LCOJUC84KQeoGZiiM9blsEzSMXHu8/k5veQrBS3IU2oc/UVjgGwyc9GoaiFN0r2qi9BjswEav6jJR8E+exphgjAkwRF26JqBFLJ37c4qncM61Une46Pg1K0WHWEdFF1/5apF9qM8SDAzRjYaXlxV+eFEYgUm+PVMUmML7fnHLUbhRe84axcnRrKsveRo2hu8/x+kUhU2CYwhjKV9/a8PiIXgaphAilH0lX8MPR3JD7jIUtzI6XbNH0/l8tMC5luNbv1bBrDRME2xTId0Vb9sGhWuchyHMuavGmKNQ4Cnch+MR3z+bcvuliI+lyc5JbmaODZnbUQ19VL97r/BwUqjt8B/vFKbMSu8rlA6j+ia4HjqWtcmnyvl4aL+UtTFjU5ObKF2u8bNw1UDGuw5uFVqTk0IbrS5/pxDTq82YwoSncDJWup5DxWSdb7+UeYtzTCluPpdwGrYRlNwOLi8kN/eEF4Ueezfp9av3IEU4OtGIQo+7ErX07ycKl+m7zOsvVU+S/2EWdGyGRUUTp5hbq9e+VFlOTr7UdjGBq1ZXM1jCIdxBGnfXa4guf1tm38h31kP9S/suD75UAUuYpEzmTXwZCgurMUgCwCRc9PAb/S0elmwuDZm3iU58ESju5RvRLx8huI7kmNMVV+Fk4n9Y8pXfDm0s8vaJVQyYIa4hnRHhz4toNlj0HVbx0FGhQ4EHzNVKy86wPoRygcULwU7OD4OcxjYs9vi6O+k31cmQxxUj+YmQcX0NvJ2gu1mIErrlW+M851ZYg8INlNJYA56AyjV9kcyYWfpGbbw4zjpnwUZGDXBVwbR61Ht8rf2maSK02cPurFDQSlZ7z3uoSWLFZ93PIRUfW7mVNP5Btgn6Ye9NYr+9mrgLMNLHq4kf2U4NU/YGUzgu5/PhnS0i6GevyFNB85LlzQ1zPE04KJQMeVA1WS+XpwWOA5RaxdjqOyS8XF9zItdTeJ31/vbTA642PlwR/gju1dhuF16bz7EKQ6iJZjAzRUEuV9Wbxte6x+Ogg0JR0rK0vd4AW9YFS8XHHJ5gP9xeG+MVh5C/qi9PNssNsLxi85o3imvb2Sxpz6d0l3lQYNGXelgCiWas9E5+2MOd+6oOkyLMz55GFKdymar5fhgYCMhOGAVO0sWjCy5G+dmzNGcOVXtTAdxhWjZ63bZ1HVzjJFDdmZbX6E6NBLjiAt3UU2VYvBS0eNYXagC3wQwOHaeoLgpBv6v4RXS5Uw2iMGni8c0fyUpfvyRwiYtxD3bXJMtLoe9BpF4TQv1qC4Idd77OltMcR1WdIpl559gkGnHZJMNaG2jUsYubelAIbkrGxsuNob7qeAeYwCSePJR4y2uVb8NHO6SiFne9/p7Eh+kmiVCdKw20FiF4Wr1Pu9gaRjDOMs+Us67xE7w6Wc1YjRuop5ICvE3WpT3eCOoTvylj7oECwfIeRIx7rMFGo+TRLrdoWLHSzd7RKRlW6KKgydDapKtV2swUzz3thlvtcv+awp1Z2XV4tSezdQqomE+xF16O6ymzFGm6MrZM7okJcKezzx+KmoON6g9PKrxIUw33iN5hnbSIgmHLbozItnmxd/R9+5ll22x/CVpSdCv1VdEksu9lN7qWbTw6fwb+159/UuA+z7cQgh6fpRUlYfoB4dIl6KphAsZUeNtfsdHDHhLXECS80uox6M8hHZi9rQng97I7r75svBOC7PXPRMUrgVW1Vf1vOjEkirebR6LEjvgcW3iFlpKGLHVegLvS308K8dlzLGCnXn/4hMZDhRtvyt869SVYq+W7Jy6DKAj97Msn6STT7ZKnw+J6XlWtk6A//FZhF8D3JdV12jLJVbWGJ46s3D8DZMJd/+GHMvfB4wvbKJn9vdOXEMC6JKpeT1a1ZmlLAAnPnzxRwkRBfcLfLJY5O5/RxfxI+EdIGiYDGM+DAGIl/uXojTey1ffsl4LEVVE9Ooi53IGF4vkMfoz9QyBSxkqqF0PSAmmLo/cg8Os2ykCJqR5wI+PrDi00KPhZ0jeABz682QrSFkx4dNDX4T7FH36rZFjZrNej6uZw3oXjK5SyVd4GkOZ68l8/xiVB2oJHsGZNg1lNLPPTlucYEkU9DKBuWbyXt5+DfeZtDQXAd7zOJ3ojGdop4XEx4fmWJ2Ki6M1gigfbvNrtN0dkcQRxeLwUshio4Hrct/tnfoiAW2eGwfKd7/tZANo/HlwDkfW2bfML7bbGTee08+KfPS36x4Bt2HKmzKBuCR0IQkOdGQRqWECV0nmuZf6mn1ncBXdV5RhrEz9JLhVdv8IqRbaNX/VLmVFOtUnmlcpA6WWsSvlvyGNgbWJq9rm0syzbNL5xuv9LwNOkZ6T/nDqCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIIiP/A9IaiG1/rcNJAAAAABJRU5ErkJggg=="
              alt="image"
              className="img-fluid rounded-circle"
              style={{ width: "80px", height: "80px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold "
                  aria-current="page"
                  href="#exampleModal1"
                  data-toggle="modal"
                >
                  About US
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link font-weight-bold"
                  href="#exampleModal2"
                  data-toggle="modal"
                >
                  Contact US
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold " to="Write">
                  Write
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav sm-icons">
              <li className="nav-item px-2">
                <a className="nav-link" href="/">
                  <i className="bi bi-search"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="/">
                  <i className="bi bi-person"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="black"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="modal fade"
        id="exampleModal1"
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
              <mark>Designer:</mark> Kiran Chaudhary, Manav Shah,Vashishth Patel
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
        id="exampleModal2"
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
              Manav Shah
              <br />
              Vashishth Patel
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
    </header>
  );
}

export default Header;
