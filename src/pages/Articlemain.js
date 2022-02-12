import React, { useState } from "react";
import Feedback from './Feedback';
import data from './ar';
import { useLocation, useParams } from "react-router-dom";
// const values;
function Articlemain() {
  // const d=useLocation();
  // const d1=d.state();
  // console.log(d1);
  return (
    <>
    
    
     {/* {data.roles.map(function (role, i) {  */}
					 <div className="row" id="articlerow">
         <section id="content" className="col-md-8 offset-md-2 p-4">
         <h2 className="p-2 ">
           {data.roles[0].title}
         </h2>
         <div className="article">
         <img  id="articleimage"
               src={data.roles[0].images}
               className="card-img-top img-fluid img-thumbnail rounded"
               alt="..."
               
             />
           <p className="" style={{textAlign:"justify",}}>
           {data.roles[0].description}
           </p>
         </div>
       </section>
       <aside className="sidebars offset-md-4 col-md-4">
          <Feedback />
        </aside>
												</div>
											{/* })} */}

       
      
    </>
  );
}
export default Articlemain;
