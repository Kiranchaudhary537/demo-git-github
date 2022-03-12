import React,{useEffect, useState} from "react";
import Feedback from "./Feedback";
import { storage  } from "../firebase";
import { getDownloadURL, uploadBytesResumable,ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import  {db}  from "../firebase";
import { collection, addDoc, onSnapshot} from "firebase/firestore";
import {  getDatabase,set } from "firebase/database";
// import {getDatabase} from "../firebase"
import { v4 as uuid } from 'uuid';
import { async } from "@firebase/util";

function Write() {
  // useEffect(
  //   ()=>{
  //   onSnapshot(collection(db,"users"),(snapshot)=>{
  //     console.log(snapshot.docs.map(doc=>doc.data()));
  //   });
  //  }
  //  );
  const auth = getAuth();
  const user = auth.currentUser;
  const [progress,setProgress]=useState(0);
  const [progress1,setProgress1]=useState(0);
  const [fileurl,setFileurl]=useState("");
  const [Imageurl,setImageurl]=useState("");
  const [date,setDate]=useState();
  const [files, setFiles] = useState([])
  const database = getDatabase();
  const formHandler=(e)=>{
    e.preventDefault();
    const image=e.target[0].files[0];
    uploadfiles(image);
  };
  const formHandler1=(e)=>{
    e.preventDefault();
    const file=e.target[0].files[0];
    // uploadfiles1(file);
    uploadfilestoDatabase(file);
  };
 
  
  const uploadfiles=(file)=>{
   if(!file) return;
   console.log("uploadfile");
   const storageRef=ref(storage,`/files/${file.name}`);
   const uploadTask=uploadBytesResumable(storageRef,file);
   uploadTask.on("state_changed",(snapshot)=>{
     const prog=Math.round(
       (snapshot.bytesTransferred/snapshot.totalBytes)*100
     );
     setProgress(prog);
   },(err)=>alert(err),
   ()=>{
     getDownloadURL(uploadTask.snapshot.ref).then((url)=>setImageurl(url)
     )
     
   }, );
 
  }
  const uploadfiles1=(file)=>{
   if(!file) return;
   console.log("uploadfile");
   const storageRef=ref(storage,`/files/${file.name}`);
   const uploadTask=uploadBytesResumable(storageRef,file);
   uploadTask.on("state_changed",(snapshot)=>{
     const prog=Math.round(
       (snapshot.bytesTransferred/snapshot.totalBytes)*100
     );
     setProgress1(prog);
   },(err)=>alert(err),
   ()=>{
     getDownloadURL(uploadTask.snapshot.ref).then((url)=>setFileurl(url)
     )
     
   }, );
  }
  const uploadfilestoDatabase=async()=>{
   console.log("uploadfiletodatabase");
  //  console.log(db);
   setDate(new Date());
  //  console.log(date);
  console.log("fileurl:" +fileurl);
  console.log("iamgeurl: "+Imageurl);
  const collectionRef=collection(db,"Articles");
   await addDoc(collectionRef,{FileUrl:fileurl,imageUrl:Imageurl,Date:date});
   console.log("collecton" +collectionRef);
  //  console.log(fileurl);
//    db.collection("cities").doc("LA").set({
//         id: uuid(),
//         first: "Ada",
//         last: "Lovelace",
//         born: 1815
//     })
// .then(() => {
//     console.log("Document successfully written!");
// })
// .catch((error) => {
//     console.error("Error writing document: ", error);
// });
//   db.collection("users1").add({
//     id: uuid(),
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// })

  };
  // const storage = getStorage();
  // const storageRef = ref(storage, 'some-child');
  // const [image , setImage] = useState('');
  // const [url,setUrl] =useState("");
  // const upload = ()=>{
  //  const uploadTask=storage.ref(`images/${image.name}`).put(image);
  //  uploadTask.on(
  //    "state_changed",
  //    snapshot => {},
  //    error => {
  //      console.log(error);
  //    },
  //    ()=>{
  //      storage.ref("images").child(image.name).getDownloadURL().then(
  //        url=>{
  //           setUrl(url);
  //          console.log(url);
  //        }
  //      );
  //    }
  //  );
  // };
  return ( 
    <>
    <div className="row">
    <section id="content" className="col-md-6 offset-1 shadow border" >
    <div className="container-fluid">
   <div className="form-group p-5  bg-gradient-light text-dark m-3">
    <form  onSubmit={formHandler}>
    <label for="exampleFormControlTextarea1">Title for Article</label>
    <div className="w-100 "></div>
          <input
            className="form-control"
            id="title"
            size={25}
            max="50"
          >
    </input>
    <label for="exampleFormControlFile1">Upload Your Image</label>
    <div className="w-100 "></div>
    <input
      type="file"
      className="form-control-file"
      id="exampleFormControlFile1"
      // onChange={(e)=>{setImage(e.target.files[0])}}
    />
     <button type="submit"  className="btn btn-secondary m-2">Submit</button>
  
  </form>
  <form  onSubmit={formHandler1}>
  <div className="w-100"></div>
  <div className="w-100"></div>
  <label for="exampleFormControlFile1">Upload Your file</label>
    <div className="w-100 "></div>
    <input
      type="file"
      className="form-control-file"
      id="exampleFormControlFile2"
      o
    />
      <button type="submit"  className="btn btn-secondary m-2">Submit</button>
  
  </form>
  </div>
 {progress!==0 ?
  <h3>Image uploading{" "}{progress}%{""}File uploading{" "}{progress1}%</h3>
:
 <h3> </h3>
}
</div>
    </section>
    <aside className="sidebars col-md-4">
  <div className="container-fluid">
  <div className="w-100 "></div>
  <div className="">
    <Feedback />
  </div>
</div>
    </aside>
  </div>
  </>
  );
}
export default Write;
