import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Mainpage from "./Mainpage";
import Articlemain from "./Articlemain";
import Write from "./Write";
import { BrowserRouter as Router ,Routes, Route, NavLink,Link,Switch } from 'react-router-dom'
import Feedback from "./Feedback";

function App() {
  return (
    <div>
      <Header/>
      <Mainpage/>
      <Footer/>
    </div>

    );
}

export default App;
