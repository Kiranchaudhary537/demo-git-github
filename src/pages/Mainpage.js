import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Articlemain from "./Articlemain";
import axios from "axios";
function Mainpage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [urllist, setUrllist] = useState([]);
  const [check,setCheck]=useState("false");
  const [title, setTitle] = useState("");
  const [images, setImages] = useState("");
  // const [last,setLast] =useState(0);
  // 6a32a9f154c6a49d1c39626d93d6cd6757090024
  const [description, setDescription] = useState("");
  const [bgcolor, setBgcolor] = useState("white");
  const [textcolor, setTextcolor] = useState("black");
  useEffect(() => {
    const getfilesurl = async () => {
      const filen = await axios.get(
        "https://api.github.com/repos/Abhiyanta-Community/articles/git/trees/main?recursive=1"
      );
      // console.log(filen);
      var sha;
      filen.data.tree.map((x)=>{
        if(x.path==="markdown/src")
        {
          sha=x.sha;
        }
      });
      const filesha = await axios.get(
        `https://api.github.com/repos/Abhiyanta-Community/articles/git/trees/${sha}?recursive=1`
      );
      // console.log(filesha);
      return filesha;
    };
    const getfiles = async () => {
      const url = await getfilesurl();
      // console.log(url);
      setTitle(url.data.tree[0].path);
      // console.log(title);
      const des=await axios.get(`https://raw.githubusercontent.com/Abhiyanta-Community/articles/main/markdown/src/${title}`);
      setDescription(des.data);
      const last=des.data.indexOf('-->');
      setImages(des.data.substr(5,last-6));
      // console.log(des);
      var items = [];
      for (const key in url.data.tree) {
        items.push({ title: url.data.tree[key].path });
      }
      setUrllist(items);

      var articleitems = [];
      for (const key in urllist) {
        await axios
          .get(
            `https://raw.githubusercontent.com/Abhiyanta-Community/articles/main/markdown/src/${urllist[key].title}`
          )
          .then((resp) => {
            const last=resp.data.indexOf('-->');
            articleitems.push({
              title: urllist[key].title,
              description: resp.data,
              image:resp.data.substr(5,last-6),
            });
          })
          .catch((err) => {
            alert("Unable to obtain repos list. " + err);
            return;
          });
      }
      setList(articleitems);
      // console.log(list);
    };
    getfiles();
  },[check]);
  const checkcolor = () => {
    if (bgcolor === "white") {
      setBgcolor("black");
      setTextcolor("white");
    } else {
      setBgcolor("white");
      setTextcolor("black");
    }
  };
  const timer =setTimeout(()=>{
    if(check=="false"){
    setCheck("true");
    }
    else{
      setCheck("false");
    }
  },1000);
  if(list.length!==0){
    clearTimeout(timer);
  }
  let i = 0;
  if (list.length % 4 !== 0) {
    i++;
  }
  const [pages] = useState(Math.round(list.length / 4) + i);
  const [currentPage, setCurrentPage] = useState(1);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  const getPaginatedData = () => {
    const startIndex = currentPage * 4 - 4;
    const endIndex = startIndex + 4;
    return list.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5;
    return new Array(5).fill().map((_, idx) => start + idx + 1);
  };
  
  return (
    <div className="container-fluid ml-auto mr-auto">
       <div className="form-check form-switch">
            <input
              onClick={checkcolor}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" for="flexSwitchCheckDefault">
              {bgcolor}
            </label>
          </div>
      <div className="row shadow">
      
         <Link to= "Articlemain"  state={{ data: title }} className="text-black text-decoration-none"
            >
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  id="imagetradingcard"
                  src={images}
                  className="img-fluid rounded-start img-thumbnail"
                  alt={images}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title img-fluid img-thumbnail rounded">
                    {title}
                  </h5>
                  <p data-color-mode="light" className="card-text">
                    <MarkdownPreview
                      source={description.split(" ").slice(0, 40).join(" ")}
                    />
                  </p>
                  <p className="card-text">
                    <small className="text-muted"></small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-8 ">
        <div className=" container-fluid shadow m-2 p-3">
        <div className="row row-cols-1 row-cols-md-2 g-4 ">
        {getPaginatedData().map((index, i) => (
          <div className="col" key={i}>
            <Link to= "Articlemain"  state={{ data: index.title }} className="text-black text-decoration-none"
            >
              <div className="card">
                <img
                  src={index.image}
                  className="card-img-top img-fluid imgthumbnail rounded"
                  alt="..."
                  id="articleimage"
                />
                <div className="card-body">
                  <h5 className="card-title img-thumbnail">{index.title}</h5>
                  <div
                    data-color-mode="light"
                    className="card-text img-fluid img-md-thumbnail rounded"
                  >
                    <MarkdownPreview
                      source={index.description
                        .split(" ")
                        .slice(0, 40)
                        .join(" ")}
                    />
                 </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      { list.length!==0?
        <div className="text-center m-2">
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`btn btn-secondary btn-center ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            prev
          </button>

          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`btn btn-outline-secondary btn-center m-1 ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          <button
            onClick={goToNextPage}
            className={`btn btn-secondary btn-center ${
              currentPage * 4 > list.length ? "disabled" : ""
            }`}
          >
            next
          </button>
        </div>
      </div>
      :<div></div>}
      </div>
        </div>
      </div>
    </div>
  );
}
export default Mainpage;
// const Articlemain = (props) => {
//   const [color, setColor] = useState("light");
//   // const [title, setTitle] = useState("");
//   const [images, setImages] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//     const location=useLocation();
//   const title = location.state?.data;
//   console.log(title);
//   // useEffect(() => {}, []);
//   const checkcolor = () => {
//     if (color == "light") {
//       setColor("dark");
//     } else {
//       setColor("light");
//     }
//   };
//   return (
//     <>
//       <div className="row" id="articlerow">
//         <section id="content" className="col-md-8 offset-md-2 p-4">
//           <div className="form-check form-switch">
//             <input
//               onClick={checkcolor}
//               className="form-check-input"
//               type="checkbox"
//               role="switch"
//               id="flexSwitchCheckDefault"
//             />
//             <label className="form-check-label" for="flexSwitchCheckDefault">
//               {color}
//             </label>
//           </div>
//           <h2 className="p-2 ">{title}</h2>
//           <div className="article">
//             <img
//               id="articleimage"
//               src={images}
//               className="cardImg-top img-fluid img-thumbnail rounded"
//               alt="..."
//             />
//             <div
//               data-color-mode={color}
//               className=""
//               style={{ textAlign: "justify" }}
//             >
//               {/* <MarkdownPreview source={description} /> */}
//             </div>
//           </div>
//         </section>
//         <aside className="sidebars offset-md-4 col-md-4"></aside>
//       </div>
//     </>
//   );
// };
