// import React,{useState,useEffect} from "react";
// import { Outlet, Link,NavLink, Navigate } from "react-router-dom";
// import  {db}  from "../firebase";
// import {database} from "../firebase";
// import { collection, addDoc, onSnapshot} from "firebase/firestore";
// // import { getStorage, ref, getMetadata,getDownloadURL } from "firebase/storage";
// import { getDatabase,ref, onValue,child,equalTo ,get,query,orderByChild,limitToLast,limitToFirst } from "firebase/database";
// import { v4 as uuid } from 'uuid';
// import { async } from "@firebase/util";
// import data from './ar';
// import MarkdownPreview from '@uiw/react-markdown-preview';






// function Tradingcard() {
//   const [title,setTitle]=useState("");
//   const [images,setImages]=useState("");
//   const [description,setDescription]=useState("");
//   const [key,setKey]=useState("");
//   // const dbRef = ref(getDatabase());
//   const db = getDatabase();
//   // const dbref=ref("Article")
//   // const dbRef1=database.ref("Aricles");
//   // console.log(dbRef1)
//    const getdata=async()=>{ 
//     const dbRef = ref(db, "/Article");

//     const queryConstraints = [orderByChild("date"), limitToLast(1)];

//     const data = await get(query(dbRef, ...queryConstraints));

//     if (data.exists()) {
//       data.forEach(function(doc) {
//         console.log(doc.val());
//              setTitle(doc.val().title);
//         setImages(doc.val().images);
//         setDescription(doc.val().description);
//         setKey(doc.key);
//         })
//     } else {
//       console.log("No data available");
//       return null;
//     }
//   };
//   useEffect(()=>{
//     getdata();
//     // const usersSnapshot =  get(query(dbRef, `Article`),orderByChild("data"),limitToLast(1));
//     // console.log(usersSnapshot);
//     // get(query(dbRef, `Article`),orderByChild("data"),equalTo(data),limitToLast(1)).then((snapshot) => {
//       // if (snapshot.exists()) {
//         // console.log(snapshot.val());
//       //  console.log(snapshot.size);
//       //  console.log(snapshot.forEach(nodev=>{console.log(nodev.val());
//       //  }));
//       //  console.log(snapshot.child("CVE1NF7itJJq7xfqcQEX").val())
//       //  console.log(snapshot.key.length);
//       //  setTitle(snapshot.val().title);
//         // setImages(snapshot.val().images);
//         // setDescription(snapshot.val().description);
//       // } else {
//         // console.log("No data available");
//       // }
//     // }).catch((error) => {
//       // console.error(error);
//     // });
//   },[]);
//   // const preview=description.split(" ");
//   //  const previewdata=preview.slice(0,40).join(" ");
//   //  useEffect(()=>{
//   //   onSnapshot(collection(db,"Articles"),(snapshot)=>{
//   //     const Images=data.val().images;
//   //     const Title=data.val().title;
//   //     const Description=data.val().description;
//   //     setPreview(Description);
//   //     setImages(Images);
//   //     setTitle(Title);
//   //   }
//   //   );
//   //  },[]);
//   //  const storage = getStorage();
//   //  const httpsReference = ref(storage,preview);
 
//   //  console.log(httpsReference);
//   //  console.log(title);
//   //  );
//   //  const histroy=Navigate();
//   //  function enter(){
//   //    histroy('./Articlemain/data');
//   //  }
//   // <div className="container-fluid" >
//   //       <Link  to={{
// //                     pathname: `Articlemain/${title}`,
// //                     state: {
// //                       data:`data1`
// //                     },
// //                   }}
// //           className="text-black text-decoration-none"
// //         >
// //           <div className="card mb-3">
// //             <div className="row g-0">
// //               <div className="col-md-4">
// //                 <img id="imagetradingcard"
// //                   src={images}
// //                   className="img-fluid rounded-start img-thumbnail"
// //                   alt="image"
// //                 />
// //               </div>
// //               <div className="col-md-8">
// //                 <div className="card-body">
// //                   <h5 className="card-title img-fluid img-thumbnail rounded">
// //                     {title}
// //                   </h5>
// //                   <p className="card-text">
// //                   <div dangerouslySetInnerHTML={{__html:previewdata}}></div>
// //                   {". . . . . ."}
// //                   </p>
// //                   <p className="card-text">
// //                     <small className="text-muted">
// //                      {data.roles[0].date}
// //                     </small>
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </Link>
// //       </div> 
 
// //  <NavLink to={'./ArticleMain'} data1={data1} className="text-black text-decoration-none">  
// //  </NavLink> 

// // let preview=description.split(" ");
// // let previewdata=preview.slice(0,40).join(" ");
// return (
// <> 
//      <div className="container-fluid" >
//         <Link  to={{
//                     pathname: `Articlemain/${key}`,
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
//                   <p data-color-mode="light" className="card-text">
//                   <MarkdownPreview source={description.split(" ").slice(0,40).join(" ")} />
               
                 
//                   </p>
//                   <p className="card-text">
//                     <small className="text-muted">
                    
//                     </small>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div> 
//     </>
//   );
// };
// export default Tradingcard;
