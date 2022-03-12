import React,{useState,useEffect} from "react";
import { Outlet, Link,NavLink, Navigate } from "react-router-dom";
import  {db}  from "../firebase";
import {database} from "../firebase";
import { collection, addDoc, onSnapshot} from "firebase/firestore";
// import { getStorage, ref, getMetadata,getDownloadURL } from "firebase/storage";
import { getDatabase,ref, onValue,child, get,query,orderByChild,limitToLast } from "firebase/database";
import { v4 as uuid } from 'uuid';
import { async } from "@firebase/util";
import data from './ar';
let preview=data.roles[0].description.split(" ");
let previewdata=preview.slice(0,40).join(" ");
const data1=data.roles[0];
function Tradingcard() {
  
  const [title,setTitle]=useState("");
  const [images,setImages]=useState("");
  const [description,setDescription]=useState("");
  const dbRef = ref(getDatabase());
  const db = getDatabase();
  console.log(dbRef);
 
  // const dbRef1=database.ref("Aricles");
  // console.log(dbRef1);
  useEffect(()=>{
    get(child(dbRef, `Aricles`)).then((snapshot) => {
      if (snapshot.exists()) {
      //   console.log(snapshot.val());
      //  console.log(snapshot.size);
      //  console.log(snapshot.forEach(nodev=>{console.log(nodev.val());
      //  }));
      //  console.log(snapshot.child("CVE1NF7itJJq7xfqcQEX").val())
      //  console.log(snapshot.key.length);
       setTitle(snapshot.val().title);
        setImages(snapshot.val().images);
        setDescription(snapshot.val().description);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[]);
  // const preview=description.split(" ");
  //  const previewdata=preview.slice(0,40).join(" ");
  //  useEffect(()=>{
  //   onSnapshot(collection(db,"Articles"),(snapshot)=>{
  //     const Images=snapshot.docs[0].data().images;
  //     const Title=snapshot.docs[0].data().title;
  //     const Description=snapshot.docs[0].data().description;
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
  return (
 <> 
{/* <div className="container-fluid" >
      <Link  to={{
                    pathname: `Articlemain/${title}`,
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
                  <p className="card-text">
                  <div dangerouslySetInnerHTML={{__html:previewdata}}></div>
                  {". . . . . ."}
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                     {data.roles[0].date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div> */}
     <div className="container-fluid" >
         {/* <NavLink to={'./ArticleMain'} data1={data1} className="text-black text-decoration-none">  */}
        <Link  to={{
                    pathname: `Articlemain/${title}`,
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
                  <p className="card-text">
                  <div dangerouslySetInnerHTML={{__html:previewdata}}></div>

                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                     {data.roles[0].date}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/* </NavLink> */}
        </Link>
      </div>
    </>
  );
};
export default Tradingcard;
