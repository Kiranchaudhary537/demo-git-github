import React, { useState } from "react";
import { storage  } from "../firebase";
import { getDownloadURL, uploadBytesResumable,ref } from "firebase/storage";
import  {db}  from "../firebase";
import { collection,doc, addDoc, onSnapshot, setDoc} from "firebase/firestore";
import { v4 as uuid } from 'uuid';

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
export default Feedback;
