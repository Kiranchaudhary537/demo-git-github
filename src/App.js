import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Header from "./pages/Header";
import Write from "./pages/Write";
import Footer from "./pages/Footer";
import Mainpage from "./pages/Mainpage";
import Tradingcard from "./pages/Tradingcard";
import Article from "./pages/Article";
import Feedback from "./pages/Feedback";
import Articlemain from "./pages/Articlemain";
import { auth,provider } from "./firebase";
export default function App() {
  return (
    <BrowserRouter>
   <Header/>
   <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Mainpage />} />
          {/* <Route path="Tradingcard" element={<Tradingcard />} /> */}
          {/* <Route path="Article" element={<Article />} /> */}
          {/* <Route path="Feedback" element={<Feedback />} /> */}
          {/* <Route path="Write" element={<Write />} /> */}
          <Route path="Articlemain" element={<Articlemain/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
   <Footer/>
   </BrowserRouter>
 
  
  );
}
