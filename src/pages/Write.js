import React,{useEffect, useState} from "react";
import Feedback from "./Feedback";
import { storage  } from "../firebase";
import { getDownloadURL, uploadBytesResumable,ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import  {db}  from "../firebase";
import { collection, addDoc, onSnapshot} from "firebase/firestore";
import { getDatabase,ref as ref1,push, set,child } from "firebase/database";
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
  const [title,setTitle]=useState("");
  const [fileurl,setFileurl]=useState("");
  const [imageurl,setImageurl]=useState("");
  const [date,setDate]=useState("");
  const [filedata,setFiledata]=useState();
  const [files, setFiles] = useState([]);
  const db = getDatabase();
  let fileReader;
  
  const handleFileRead = (e) => {
    const content = fileReader.result;
    setFiledata(content);
  };
  
  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };
  const formHandler=(e)=>{
    e.preventDefault();
    const image=e.target[1].files[0];
    const file=e.target[2].files[0];
    setDate(new Date().toISOString());
    let a=new Date();
    let day=a.getDate();
    let month=a.getUTCMonth();
    let year=a.getFullYear();
    let hh=a.getHours();
    let mm=a.getMinutes();
    let ss=a.getSeconds();
    let d=`${year}/${month}/${day}/${hh}/${mm}/${ss}`;
    setDate(`${new Date().toISOString().replace(/[:.-]/g,'')}`);

    uploadimages(image);
    uploadfiles(file);
    
  };
 
  const uploadimages=(image)=>{
   if(!image) return;
   console.log("uploadfile");
   console.log(user.uid);
   const storageRef=ref(storage,`images/${user.uid}/${image.name}`);
   const uploadTask=uploadBytesResumable(storageRef,image);
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
  const uploadfiles=(file)=>{
   if(!file) return;
   console.log("uploadfile");
   const storageRef=ref(storage,`files/${user.ufid}/${file.name}`);
   const uploadTask=uploadBytesResumable(storageRef,file);
   uploadTask.on("state_changed",(snapshot)=>{
     const prog=Math.round(
       (snapshot.bytesTransferred/snapshot.totalBytes)*100
     );
     setProgress1(prog);
     uploadfilestoDatabase(file);
   },(err)=>alert(err),
   ()=>{
     getDownloadURL(uploadTask.snapshot.ref).then((url)=>setFileurl(url)
     )
     
   }, );
 
  }
  console.log(fileurl,imageurl,title,date);
  const uploadfilestoDatabase=(file)=>{
    if(!file) return;
      set(ref1(db, `Article/${user.uid}` + date), {
        title:title,
        images:imageurl,
        description:filedata,
        date:date,
        username:user.displayName,
        fileurl:fileurl
      },alert("Your file successfully uploaded"));
      
  };
  // const uploadfilestoDatabase=async(file)=>{
  //   if(!file) return;
  //   console.log("enter");
  //   // Get a key for a new Post.
  //   const newPostKey = push(ref1(db), 'Article').key;
  //   // console.log(newPostKey);
  //      set(ref1(db,`Article/`+newPostKey), {
  //     fileurl:fileurl,
  //     images:imageurl,
  //     date:date,
  //     title:title,
  //     username:user.displayName,
  //     description:filedata,
  //   }
  //   );
    // const newPost=ref(db,'Article').push();
    // console.log(newPost);
  // };
  // const uploadfilestoDatabase=async()=>{
  //  console.log("uploadfiletodatabase");
  // //  console.log(db);
  //  setDate(new Date());
  // //  console.log(date);
  // console.log("fileurl:" +fileurl);
  // console.log("iamgeurl: "+Imageurl);
  // const collectionRef=collection(db,"Articles");
  //  await addDoc(collectionRef,{FileUrl:fileurl,imageUrl:Imageurl,Date:date});
  //  console.log("collecton" +collectionRef);
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

  // };
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
            type="text"
            max="50"
            placeholder="Enter Title Here"
            onChange={(e)=>setTitle(e.target.value)}
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
    
  <div className="w-100"></div>
  <div className="w-100"></div>
  <label for="exampleFormControlFile1">Upload Your file</label>
    <div className="w-100 "></div>
    <input
      type="file"
      className="form-control-file"
      id="exampleFormControlFile2"
      accept='.md'
      onChange={e => handleFileChosen(e.target.files[0])}
    />
      <button type="submit"  className="btn btn-secondary m-2">Submit</button>
  
  </form>
  </div>
 {progress!==0 ?
  <h3>Image uploading{" "}{progress}%{"\n"}File uploading{" "}{progress1}%</h3>
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
