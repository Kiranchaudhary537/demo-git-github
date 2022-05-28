import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";
import axios from "axios";
const Articlemain = (props) => {
  const [bgcolor, setBgcolor] = useState("white");
  const [textcolor, setTextcolor] = useState("black");
  // const [title,setTitle]=useState("");
  const [check,setCheck]=useState("false");
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const location = useLocation();
  const title = location.state?.data;

  useEffect( () => {
    const getdata=async()=>{
    const des = await axios.get(
      `https://raw.githubusercontent.com/Abhiyanta-Community/articles/main/markdown/src/${title}`
    );
    setDescription(des.data);
    const last=des.data.indexOf('-->');
    setImages(des.data.substr(5,last-6));}
    getdata();
  }, [check]);
  const timer =setTimeout(()=>{
    if(check==="false"){
    setCheck("true");
    }
    else{
      setCheck("false");
    }
  },1000);
  if(description.length!==0){
    clearTimeout(timer);
  }
  const checkcolor = () => {
    if (bgcolor === "white") {
      setBgcolor("black");
      setTextcolor("white");
    } else {
      setBgcolor("white");
      setTextcolor("black");
    }
  };
  return (
    <>
      <div className="row" style={{background:bgcolor}}id="articlerow">
        <section id="content" className="col-md-8 offset-md-2 p-4">
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
          <h2 className="p-2 " style={{color:textcolor}}>{title}</h2>
          <div className="article">
            <img
              id="articleimage"
               src={images}
              className="cardImg-top img-fluid img-thumbnail rounded"
              alt="..."
            />
            <div
              className=""
              style={{ textAlign: "justify" }}
            >
              <MarkdownPreview style={{background:bgcolor,color:textcolor}}source={description} />
            </div>
          </div>
        </section>
        <aside className="sidebars offset-md-4 col-md-4">
          {/* <Feedback /> */}
        </aside>
      </div>
      {/* })}  */}
    </>
  );
};
export default Articlemain;
