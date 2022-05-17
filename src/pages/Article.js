// import React,{useEffect,useState} from "react";
// import { Link } from "react-router-dom";
// import data from './ar';
// import "../App.css"
// import {database} from "../firebase";
// import {db} from "../firebase";
// // import { collection,  query, orderBy, startAfter,startAt,limitToLast, limit, getDocs,addDoc, onSnapshot, getFirestore, endBefore} from "firebase/firestore";
// // import { getStorage, ref, getMetadata,getDownloadURL } from "firebase/storage";
// import { getDatabase,ref,push, onValue,child, get,query,orderByChild,limitToLast, Database } from "firebase/database";
// import { v4 as uuid } from 'uuid';
// import MarkdownPreview from '@uiw/react-markdown-preview';
// function Article() {
//   return (
//     <>
//       <div className=" container-fluid shadow m-2 p-3">
//         {/* <Articlelink />  */}
//         <Articles />
//       </div>
//     </>
//   );
// };
// export default Article;

// // function Articlelink() {
// //   return (
// //     <nav className="navbar navbar-expand-lg navbar-light bg-light text-dark m-1 ">
// //       <div>
// //         <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarNavAltMarkup"
// //           aria-controls="navbarNavAltMarkup"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button>
// //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
// //           <div className="navbar-nav">
// //             <Link className="nav-link " aria-current="page" to="/">
// //               Computer Technology
// //             </Link>
// //             <Link className="nav-link " to="/">
// //               communication system
// //             </Link>
// //             <Link className="nav-link" to="/">
// //               Embedded system
// //             </Link>
// //              <Link className="nav-link disabled" to='/'>More</Link>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// function Articles() {
//   const [list, setList] =  useState([]);
//   const [page, setPage] =  useState(1);
//   //   useEffect(
//   //   ()=>{
//   //   onSnapshot(collection(db,"users"),(snapshot)=>{
//   //     console.log(snapshot.docs.map(doc=>doc.data()));
//   //   });
//   //  }
//   //  );
//   const db = getDatabase();
//   // let preview=data.roles[0].description.split(" ");
//   // let previewdata=preview.split(" ").slice(0,40).join(" ");
//   // const [title,setTitle]=useState("");
//   // const [images,setImages]=useState("");
//   // const [description,setDescription]=useState("");
//   // const [lenght,setLenght]=useState(0);
//   const dbRef = ref(getDatabase());
//   useEffect(()=>{
    
//     get(child(dbRef, `Article`)).then((snapshot) => {
//       if (snapshot.exists()) {
//         var items = [];
//         // console.log(snapshot.val());
//         // setTitle(snapshot.val().title);
//         // setImages(snapshot.val().images);
//         // setLenght(snapshot.size);
//         // setDescription(snapshot.val().description);
//         snapshot.forEach(function(doc) {
//                     console.log(doc.val());
//                     items.push({ key: doc.key, ...doc.val() });
//       });
//       setList(items);
//      }
//      else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
//   },[]);
 
// // const first = query(collection(db, "Articles"), limit(2));
// // const documentSnapshots = async()=>{await getDocs(first);}
// // console.log(documentSnapshots);
//   //   useEffect(()=>{
//   //     onSnapshot(collection(db,"Articles"),(snapshot)=>{
//   //           console.log(snapshot.docs[0].data());
//   //         });
//   // },[]);
 
  
//   //loading initial data
 
//   // console.log(list);
//   // useEffect(() => {
//   //     const fetchData = async () => {
//   //       const first = await getDocs(query(collection(db,"Articles"),orderBy('id',"asc"),limit(20)))
//   //       var items = [];
//   //         first.forEach(function(doc) {
//   //           console.log(doc.data());
//   //           items.push({ key: doc.id, ...doc.data() });
//   //       });
//   //       setList(items);
//   //     };
//   //     fetchData();
//   // }, []);
//   // console.log(list);
  
//   // const showNext = ({ item }) => {
    
//   //   if(list.length === 0) 
//   //   {
//   //       //use this to show hide buttons if there is no records
//   //   } 
//   //   else {
//   //       const fetchNextData = async () => {
//   //       const next = await getDocs(query(collection(db,"Articles"),orderBy("id","asc"),limit(20),startAt(`${item.id}`)))
//   //           var items = [];
//   //           next.forEach(function(doc) {
//   //           console.log(doc.data());
//   //           items.push({ key: doc.id, ...doc.data() });
//   //         });
//   //           setList(items);
//   //           setPage(page + 1) 
//   //               };
//   //       fetchNextData();
//   //     }
//   //   };
//     // ----------------
// //   const showPrevious = ({item}) => {
// //     const fetchPreviousData = async () => {
// //       const pre = await getDocs(query(collection(db,"Articles"),orderBy("id","asc"),endBefore(`${item.id}`),limitToLast(20)))
// //       var items = [];
// //       pre.forEach(function(doc) {
// //       console.log(doc.data());
// //       items.push({ key: doc.id, ...doc.data() });
// //       setList(items);
// //       setPage(page - 1);
// //     });
    
// //     };
// //     fetchPreviousData();
// // };
//   let i=0;
//   if(list.length%4!==0){i++;}
//   const [pages] = useState(Math.round(list.length / 4)+i);
//   const [currentPage, setCurrentPage] = useState(1);

// const goToNextPage=()=> {
//   setCurrentPage((page) => page + 1);
  
// }
// const goToPreviousPage=()=> {
//    setCurrentPage((page) => page - 1);
// }

// const changePage=(event)=> {
//   const pageNumber = Number(event.target.textContent);
//   setCurrentPage(pageNumber);
// }
// const getPaginatedData = () => {
//   const startIndex = currentPage * 4 - 4;
//   const endIndex = startIndex + 4;
//   return list.slice(startIndex, endIndex);
// };
// const getPaginationGroup = () => {
//   let start = Math.floor((currentPage - 1) /5) *5;
//   return new Array(5).fill().map((_, idx) => start + idx + 1);
// };
// //   let i=0;
// //   if(data.roles.length%4!==0){i++;}
// //   const [pages] = useState(Math.round(data.roles.length / 4)+i);
// //   const [currentPage, setCurrentPage] = useState(1);

// // const goToNextPage=()=> {
// //   setCurrentPage((page) => page + 1);
  
// // }
// // const goToPreviousPage=()=> {
// //   setCurrentPage((page) => page - 1);
  
 
// // }

// // const changePage=(event)=> {
// //   const pageNumber = Number(event.target.textContent);
// //   setCurrentPage(pageNumber);
// // }
// // const getPaginatedData = () => {
// //   const startIndex = currentPage * 4 - 4;
// //   const endIndex = startIndex + 4;
// //   return data.roles.slice(startIndex, endIndex);
// // };
// // const getPaginationGroup = () => {
// //   let start = Math.floor((currentPage - 1) /5) *5;
// //   return new Array(5).fill().map((_, idx) => start + idx + 1);
// // };
//   return (
//     <>  

    
     
//       <div className="row row-cols-1 row-cols-md-2 g-4 ">
//         { 
//         getPaginatedData().map((index,i)=>(
//           // data.roles.reduce((e,index,i)=>{
//           //  if(i<5&&i!=0){
//           //  e.push(
           
//             <div className="col" key={i}>
//           <Link to={{pathname:`Articlemain/${index.key}`,state:`${index.key}`}} className="text-black text-decoration-none">
//               <div className="card">
//                 <img
//                   src={index.images}
//                    className="card-img-top img-fluid imgthumbnail rounded"
//                   alt="..."
//                   id="articleimage"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title img-thumbnail">
//                     {index.title}
//                   </h5>
//                   <p data-color-mode="light" className="card-text img-fluid img-md-thumbnail rounded">
//                   <MarkdownPreview source={index.description.split(" ").slice(0,40).join(" ")} />
//                   </p>
//                 </div>
//               </div>
//               </Link>
//             </div>
//            )
//           //  }
//           //  return e;
//           // },[]
//           )}
//           </div>
//         <div className="text-center m-2">
//         <div className="pagination">
      
//       <button
//         onClick={goToPreviousPage}
//         className={`btn btn-secondary btn-center ${currentPage === 1 ? 'disabled' : ''}`}
//       >
//         prev
//       </button>
      
//       {getPaginationGroup().map((item, index) => (
//         <button
//           key={index}
//           onClick={changePage}
         
//           className={`btn btn-outline-secondary btn-center ${currentPage === item ? 'active' : null}`}
//         >
//           <span >{item}</span>
//         </button>

//       ))}
      
//       <button
//         onClick={goToNextPage}
//         className={`btn btn-secondary btn-center ${currentPage*4>list.length ? 'disabled' : ''}`}
//       >
//         next
//       </button>
      
//     </div>
//      </div>
//     </>
//   );
// };


