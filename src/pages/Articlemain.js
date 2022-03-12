import React,{useEffect, useState} from "react";
import { useParams,useLocation } from "react-router-dom";
import { getDatabase, ref, child, get } from "firebase/database";
import Feedback from './Feedback';
import data from './ar.json';

const Articlemain=(props)=> {
  //  const {type} = useParams();
  //  const stateparamval =props.useLocation().state.stateParam;
  //  console.log(stateparamval);
  const [title,setTitle]=useState("");
  const [images,setImages]=useState("");
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("");
  const database = getDatabase();
    const key=useLocation().pathname.slice(13,);
    console.log(key);
    const dbRef = ref(getDatabase());
    useEffect(()=>{
    get(child(dbRef, `Aricles/${key}`)).then((snapshot) => {
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
  return (
    <>
      {/* <div>{props}</div> */}
    {/* <h1>{location1}hii</h1> */}
     {/* {data.roles.map(function(role, i) {  */}
					 <div className="row" id="articlerow">
         <section id="content" className="col-md-8 offset-md-2 p-4">
         <h2 className="p-2 ">
           {title}
         </h2>
         <div className="article">
         <img  id="articleimage"
               src={images}
               className="cardImg-top img-fluid img-thumbnail rounded"
               alt="..."
               
             />
           <p className="" style={{textAlign:"justify",}}>
           <div dangerouslySetInnerHTML={{__html:description}}></div>

           </p>
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
export default Articlemain;
