import React from 'react'
import Feedback from './Feedback';
import Footer from './Footer';
import Header from './Header';

function Articlemain(){
    return(
     <>
     <Header/>
     <div className="row">
         <div className="col">
          
         </div>
         <div className="col">
             <Feedback/>
         </div>
     </div>
     <Footer/>
     </>
    );
}
export default Articlemain;