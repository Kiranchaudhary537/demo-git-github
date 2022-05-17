import { Outlet, Link } from "react-router-dom";
import React,{useState,useEffect} from "react";
import { v4 as uuid } from 'uuid';
import MarkdownPreview from '@uiw/react-markdown-preview';

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
  
  useEffect(()=>{
   
  },[]);
return (
<> 
     <div className="container-fluid" >
        <Link to={{pathname:"/Articlemain", state: {fromDashboard: '${key}' }}}
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

function Articles() {
  const [list, setList] =  useState([]);
  const [page, setPage] =  useState(1);

  useEffect(()=>{
  
  },[]);
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
  return (
    <>  

    
     
      <div className="row row-cols-1 row-cols-md-2 g-4 ">
        { 
        getPaginatedData().map((index,i)=>(
                 
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

const Articlemain=(props)=> {

  const [color,setColor]=useState("light");
  const [title,setTitle]=useState("");
  const [images,setImages]=useState("");
  const [description,setDescription]=useState("");
  const [date,setDate]=useState("");
 
    useEffect(()=>{
   
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
     </aside>
			</div>
	 
    </>
  );
}