import { Outlet, Link } from "react-router-dom";
// import Article from "./Article";
// import Tradingcard from "./Tradingcard";
// import Feedback from "./Feedback";
import React,{useState,useEffect} from "react";
import { NavLink, Navigate } from "react-router-dom";
// import  {db}  from "../firebase";
// import {database} from "../firebase";
// import { collection, addDoc, onSnapshot} from "firebase/firestore";
// import { getStorage, ref, getMetadata,getDownloadURL } from "firebase/storage";
// import { getDatabase,ref, onValue,child,equalTo ,get,query,orderByChild,limitToLast,limitToFirst } from "firebase/database";
// import { v4 as uuid } from 'uuid';
import { async } from "@firebase/util";
import data from './ar';
// import MarkdownPreview from '@uiw/react-markdown-preview';
import "../App.css"
import {database} from "../firebase";
import {db} from "../firebase";
// import { collection,  query, orderBy, startAfter,startAt,limitToLast, limit, getDocs,addDoc, onSnapshot, getFirestore, endBefore} from "firebase/firestore";
// import { getStorage, ref, getMetadata,getDownloadURL } from "firebase/storage";
import { getDatabase,ref,push, onValue,child, get,query,orderByChild,limitToLast, Database } from "firebase/database";
import { v4 as uuid } from 'uuid';
import MarkdownPreview from '@uiw/react-markdown-preview';

// -----------------------feedback---
import { collection,doc, addDoc, onSnapshot, setDoc} from "firebase/firestore";
import { storage  } from "../firebase";
import { getDownloadURL, uploadBytesResumable,ref1 } from "firebase/storage";
// ------------ArticleMain
import { useParams,useLocation } from "react-router-dom";
import { getDatabase as getDatabase1, ref as ref2, child as child2, get as get2 } from "firebase/database";


function Mainpage() {
  return (
    <div className="container-fluid ml-auto mr-auto">
      <div className="row shadow">
        <Tradingcard />
      </div>
      <div className="row">
        <div className="col-lg-8 ">
          <Article />
        </div>
        <div className="col-md  my-auto p-3">
          <Feedback />
        </div>
      </div>
    </div>
  );
}
export default Mainpage;


// -----------------TradingCard--------------
function Tradingcard() {
  const [title,setTitle]=useState("");
  const [images,setImages]=useState("");
  const [description,setDescription]=useState("");
  const [key,setKey]=useState("");
  // const dbRef = ref(getDatabase());
  const db = getDatabase();
  // const dbref=ref("Article")
  // const dbRef1=database.ref("Aricles");
  // console.log(dbRef1)
   const getdata=async()=>{ 
    const dbRef = ref(db, "/Article");

    const queryConstraints = [orderByChild("date"), limitToLast(1)];

    const data = await get(query(dbRef, ...queryConstraints));

    if (data.exists()) {
      data.forEach(function(doc) {
        console.log(doc.val());
             setTitle(doc.val().title);
        setImages(doc.val().images);
        setDescription(doc.val().description);
        setKey(doc.key);
        })
    } else {
      console.log("No data available");
      return null;
    }
  };
  useEffect(()=>{
    getdata();
    // const usersSnapshot =  get(query(dbRef, `Article`),orderByChild("data"),limitToLast(1));
    // console.log(usersSnapshot);
    // get(query(dbRef, `Article`),orderByChild("data"),equalTo(data),limitToLast(1)).then((snapshot) => {
      // if (snapshot.exists()) {
        // console.log(snapshot.val());
      //  console.log(snapshot.size);
      //  console.log(snapshot.forEach(nodev=>{console.log(nodev.val());
      //  }));
      //  console.log(snapshot.child("CVE1NF7itJJq7xfqcQEX").val())
      //  console.log(snapshot.key.length);
      //  setTitle(snapshot.val().title);
        // setImages(snapshot.val().images);
        // setDescription(snapshot.val().description);
      // } else {
        // console.log("No data available");
      // }
    // }).catch((error) => {
      // console.error(error);
    // });
  },[]);
  // const preview=description.split(" ");
  //  const previewdata=preview.slice(0,40).join(" ");
  //  useEffect(()=>{
  //   onSnapshot(collection(db,"Articles"),(snapshot)=>{
  //     const Images=data.val().images;
  //     const Title=data.val().title;
  //     const Description=data.val().description;
  //     setPreview(Description);
  //     setImages(Images);
  //     setTitle(Title);
  //   }
  //   );
  //  },[]);
  //  const storage = getStorage();
  //  const httpsReference = ref(storage,preview);
 
  //  console.log(httpsReference);
  //  console.log(title);
  //  );
  //  const histroy=Navigate();
  //  function enter(){
  //    histroy('./Articlemain/data');
  //  }
  // <div className="container-fluid" >
  //       <Link  to={{
//                     pathname: `Articlemain/${title}`,
//                     state: {
//                       data:`data1`
//                     },
//                   }}
//           className="text-black text-decoration-none"
//         >
//           <div className="card mb-3">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img id="imagetradingcard"
//                   src={images}
//                   className="img-fluid rounded-start img-thumbnail"
//                   alt="image"
//                 />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <h5 className="card-title img-fluid img-thumbnail rounded">
//                     {title}
//                   </h5>
//                   <p className="card-text">
//                   <div dangerouslySetInnerHTML={{__html:previewdata}}></div>
//                   {". . . . . ."}
//                   </p>
//                   <p className="card-text">
//                     <small className="text-muted">
//                      {data.roles[0].date}
//                     </small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div> 
 
//  <NavLink to={'./ArticleMain'} data1={data1} className="text-black text-decoration-none">  
//  </NavLink> 

// let preview=description.split(" ");
// let previewdata=preview.slice(0,40).join(" ");
return (
<> 
     <div className="container-fluid" >
        <Link  to={{
                    pathname: `Articlemain/${key}`,
                    state: {
                      data:`data1`
                    },
                  }}
          className="text-black text-decoration-none"
        >
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img id="imagetradingcard"
                  src={images}
                  className="img-fluid rounded-start img-thumbnail"
                  alt="image"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title img-fluid img-thumbnail rounded">
                    {title}
                  </h5>
                  <p data-color-mode="light" className="card-text">
                  <MarkdownPreview source={description.split(" ").slice(0,40).join(" ")} />
               
                 
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                    
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div> 
    </>
  );
};

// ----------------Articles----------
// import React,{useEffect,useState} from "react";
// import { Link } from "react-router-dom";
// import data from './ar';

function Article() {
  return (
    <>
      <div className=" container-fluid shadow m-2 p-3">
        {/* <Articlelink />  */}
        <Articles />
      </div>
    </>
  );
};

// function Articlelink() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark m-1 ">
//       <div>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <Link className="nav-link " aria-current="page" to="/">
//               Computer Technology
//             </Link>
//             <Link className="nav-link " to="/">
//               communication system
//             </Link>
//             <Link className="nav-link" to="/">
//               Embedded system
//             </Link>
//              <Link className="nav-link disabled" to='/'>More</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

function Articles() {
  const [list, setList] =  useState([]);
  const [page, setPage] =  useState(1);
  //   useEffect(
  //   ()=>{
  //   onSnapshot(collection(db,"users"),(snapshot)=>{
  //     console.log(snapshot.docs.map(doc=>doc.data()));
  //   });
  //  }
  //  );
  const db = getDatabase();
  // let preview=data.roles[0].description.split(" ");
  // let previewdata=preview.split(" ").slice(0,40).join(" ");
  // const [title,setTitle]=useState("");
  // const [images,setImages]=useState("");
  // const [description,setDescription]=useState("");
  // const [lenght,setLenght]=useState(0);
  const dbRef = ref(getDatabase());
  useEffect(()=>{
    
    get(child(dbRef, `Article`)).then((snapshot) => {
      if (snapshot.exists()) {
        var items = [];
        // console.log(snapshot.val());
        // setTitle(snapshot.val().title);
        // setImages(snapshot.val().images);
        // setLenght(snapshot.size);
        // setDescription(snapshot.val().description);
        snapshot.forEach(function(doc) {
                    console.log(doc.val());
                    items.push({ key: doc.key, ...doc.val() });
      });
      setList(items);
     }
     else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[]);
 
// const first = query(collection(db, "Articles"), limit(2));
// const documentSnapshots = async()=>{await getDocs(first);}
// console.log(documentSnapshots);
  //   useEffect(()=>{
  //     onSnapshot(collection(db,"Articles"),(snapshot)=>{
  //           console.log(snapshot.docs[0].data());
  //         });
  // },[]);
 
  
  //loading initial data
 
  // console.log(list);
  // useEffect(() => {
  //     const fetchData = async () => {
  //       const first = await getDocs(query(collection(db,"Articles"),orderBy('id',"asc"),limit(20)))
  //       var items = [];
  //         first.forEach(function(doc) {
  //           console.log(doc.data());
  //           items.push({ key: doc.id, ...doc.data() });
  //       });
  //       setList(items);
  //     };
  //     fetchData();
  // }, []);
  // console.log(list);
  
  // const showNext = ({ item }) => {
    
  //   if(list.length === 0) 
  //   {
  //       //use this to show hide buttons if there is no records
  //   } 
  //   else {
  //       const fetchNextData = async () => {
  //       const next = await getDocs(query(collection(db,"Articles"),orderBy("id","asc"),limit(20),startAt(`${item.id}`)))
  //           var items = [];
  //           next.forEach(function(doc) {
  //           console.log(doc.data());
  //           items.push({ key: doc.id, ...doc.data() });
  //         });
  //           setList(items);
  //           setPage(page + 1) 
  //               };
  //       fetchNextData();
  //     }
  //   };
    // ----------------
//   const showPrevious = ({item}) => {
//     const fetchPreviousData = async () => {
//       const pre = await getDocs(query(collection(db,"Articles"),orderBy("id","asc"),endBefore(`${item.id}`),limitToLast(20)))
//       var items = [];
//       pre.forEach(function(doc) {
//       console.log(doc.data());
//       items.push({ key: doc.id, ...doc.data() });
//       setList(items);
//       setPage(page - 1);
//     });
    
//     };
//     fetchPreviousData();
// };
  let i=0;
  if(list.length%4!==0){i++;}
  const [pages] = useState(Math.round(list.length / 4)+i);
  const [currentPage, setCurrentPage] = useState(1);

const goToNextPage=()=> {
  setCurrentPage((page) => page + 1);
  
}
const goToPreviousPage=()=> {
   setCurrentPage((page) => page - 1);
}

const changePage=(event)=> {
  const pageNumber = Number(event.target.textContent);
  setCurrentPage(pageNumber);
}
const getPaginatedData = () => {
  const startIndex = currentPage * 4 - 4;
  const endIndex = startIndex + 4;
  return list.slice(startIndex, endIndex);
};
const getPaginationGroup = () => {
  let start = Math.floor((currentPage - 1) /5) *5;
  return new Array(5).fill().map((_, idx) => start + idx + 1);
};
//   let i=0;
//   if(data.roles.length%4!==0){i++;}
//   const [pages] = useState(Math.round(data.roles.length / 4)+i);
//   const [currentPage, setCurrentPage] = useState(1);

// const goToNextPage=()=> {
//   setCurrentPage((page) => page + 1);
  
// }
// const goToPreviousPage=()=> {
//   setCurrentPage((page) => page - 1);
  
 
// }

// const changePage=(event)=> {
//   const pageNumber = Number(event.target.textContent);
//   setCurrentPage(pageNumber);
// }
// const getPaginatedData = () => {
//   const startIndex = currentPage * 4 - 4;
//   const endIndex = startIndex + 4;
//   return data.roles.slice(startIndex, endIndex);
// };
// const getPaginationGroup = () => {
//   let start = Math.floor((currentPage - 1) /5) *5;
//   return new Array(5).fill().map((_, idx) => start + idx + 1);
// };
  return (
    <>  

    
     
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        { 
        getPaginatedData().map((index,i)=>(
          // data.roles.reduce((e,index,i)=>{
          //  if(i<5&&i!=0){
          //  e.push(
           
            <div className="col" key={i}>
          <Link to={{pathname:`Articlemain/${index.key}`,state:`${index.key}`}} className="text-black text-decoration-none">
              <div className="card">
                <img
                  src={index.images}
                   className="card-img-top img-fluid imgthumbnail rounded"
                  alt="..."
                  id="articleimage"
                />
                <div className="card-body">
                  <h5 className="card-title img-thumbnail">
                    {index.title}
                  </h5>
                  <p data-color-mode="light" className="card-text img-fluid img-md-thumbnail rounded">
                  <MarkdownPreview source={index.description.split(" ").slice(0,40).join(" ")} />
                  </p>
                </div>
              </div>
              </Link>
            </div>
           )
          //  }
          //  return e;
          // },[]
          )}
          </div>
        <div className="text-center m-2">
        <div className="pagination">
      
      <button
        onClick={goToPreviousPage}
        className={`btn btn-secondary btn-center ${currentPage === 1 ? 'disabled' : ''}`}
      >
        prev
      </button>
      
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
         
          className={`btn btn-outline-secondary btn-center ${currentPage === item ? 'active' : null}`}
        >
          <span >{item}</span>
        </button>

      ))}
      
      <button
        onClick={goToNextPage}
        className={`btn btn-secondary btn-center ${currentPage*4>list.length ? 'disabled' : ''}`}
      >
        next
      </button>
      
    </div>
     </div>
    </>
  );
};


// -----------------------------Feedback--------
// import React, { useState } from "react";
// import { storage  } from "../firebase";
// import { getDownloadURL, uploadBytesResumable,ref } from "firebase/storage";
// import  {db}  from "../firebase";
// import { collection,doc, addDoc, onSnapshot, setDoc} from "firebase/firestore";
// import { v4 as uuid } from 'uuid';

function Feedback() {
  const [Email,setEmail]=useState("");
  const [Message,setMessage]=useState("");
 const formHandler=(e)=>{
    e.preventDefault();
    const email=e.target[0].value;
    setEmail(email);
    const message=e.target[1].value;
    setMessage(message);
      console.log(email);
    console.log(message);
    addfeedbackdata(); 
 };
  const addfeedbackdata=async(e)=>{
    console.log(Email+Message);
    const collectionRef=collection(db,"Feedback");
    await addDoc(collectionRef,{email:Email,message:Message});
    console.log(collectionRef);
  }
  return (
    <>
    <div className="container-fluid text-center m-3 border" >
      <h3>Give Your Feedback</h3>
      <hr/>
      <form onSubmit={formHandler}>
        <div className="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          
          />
          <label for="exampleFormControlTextarea1">Enter Your Feedback</label>
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

// ---------------------ArticleMain----
// import React,{useEffect, useState} from "react";
// import { useParams,useLocation } from "react-router-dom";
// import { getDatabase, ref, child, get } from "firebase/database";
// import Feedback from './Feedback';
// import data from './ar.json';
// import MarkdownPreview from '@uiw/react-markdown-preview';
const Articlemain=(props)=> {
  //  const {type} = useParams();
  //  const stateparamval =props.useLocation().state.stateParam;
  //  console.log(stateparamval);
  const [color,setColor]=useState("light");
  const [title,setTitle]=useState("");
  const [images,setImages]=useState("");
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("");
  const database = getDatabase1();
    const key=useLocation().pathname.slice(13,).replace(/%20/gi, " ");
  
    console.log(key);
    const dbRef = ref2(getDatabase1());
    useEffect(()=>{
    get2(child2(dbRef, `Article/${key}`)).then((snapshot) => {
      if (snapshot.exists()) {
        setTitle(snapshot.val().title);
        setImages(snapshot.val().images);
        setDescription(snapshot.val().description);
        setDate(snapshot.val().data);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[0]);
  const checkcolor=()=>{
    if(color=="light"){
      setColor("dark");
    }
    else{
      setColor("light");
    }
  }
  return (
    <>
      {/* <div>{props}</div> */}
    {/* <h1>{location1}hii</h1> */}
     {/* {data.roles.map(function(role, i) {  */}
    
					 <div className="row" id="articlerow">
        
         <section id="content" className="col-md-8 offset-md-2 p-4">
         <div className="form-check form-switch">
  <input onClick={checkcolor} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" for="flexSwitchCheckDefault">{color}</label>
</div>
         <h2 className="p-2 ">
           {title}
         </h2>
         <div className="article">
         <img  id="articleimage"
               src={images}
               className="cardImg-top img-fluid img-thumbnail rounded"
               alt="..."
               
             />
           <div data-color-mode={color} className="" style={{textAlign:"justify",}}>
           <MarkdownPreview source={description} />
       </div>
         </div>
       </section>
       <aside className="sidebars offset-md-4 col-md-4">
          <Feedback />

             </aside>
												</div>
										 {/* })}  */}

     
 
      
    </>
  );
}