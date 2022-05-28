// import { Outlet, Link } from "react-router-dom";
// import React,{useState,useEffect} from "react";
// import { v4 as uuid } from 'uuid';
// import MarkdownPreview from '@uiw/react-markdown-preview';
// import axios from 'axios';
// function Mainpage() {
//   return (
//     <div className="container-fluid ml-auto mr-auto">
//       <div className="row shadow">
//         <Tradingcard />
//       </div>
//       <div className="row">
//         <div className="col-lg-8 ">
//           <Article />
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Mainpage;


// // -----------------TradingCard--------------
// function Tradingcard() {
//   const [title,setTitle]=useState("");
//   const [images,setImages]=useState("");
//   const [description,setDescription]=useState("");
//   const [key,setKey]=useState("");
  
//   useEffect(()=>{
   
//   },[]);
// return (
// <> 
//      <div className="container-fluid" >
//         <Link to={{pathname:"/Articlemain", state: {fromDashboard: '${key}' }}}
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

// function Articles() {
 
//   // axios({
//   //   method: "get",
//   //   url: `https://raw.githubusercontent.com/Kiranchaudhary537/demo-git-github/onepage/src/articlegithub`,
//   //   headers: {
//   //       Authorization: `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`,
//   //       "Content-Type": "application/json"
//   //   },
//   //   auth: {
//   //       username: "Kiranchaudhary537",
//   //       password: "@Kiran9723@",
//   //   }
//   //   })
//   //   .then(res => console.log(res))
//   //   .catch(err => {
//   //       console.log(err)
//   //   });
// //   let repoBaseUrl = 'https://raw.githubusercontent.com/Kiranchaudhary537/demo-git-github/onepage/src';
// // let folders = [
// //   'articlegithub'
// // ];
// // const [filename,setFilename]=useState("");

// // let fetchFileName = async (folder) => {    
// //   // Your function to get the filename
// //   const filen= await axios.get("https://api.github.com/repos/Kiranchaudhary537/demo-git-github/git/trees/onepage?recursive=1");
// //   console.log(filen);
// //   return filename;
// // }

// // let fetchFileContent = async (folder, filename) => {
// //   try {
// //     const response = await axios.get(`${repoBaseUrl}/${folder}/${filename}`);
// //     return response.data;
// //   }
// //   catch(error) {
// //     // do something with the error
// //   }
// // }

// // let fetchFolderContent = async () => {
// //   const data = {};
// //   folders.forEach(async (folder) => {
// //     // const filename = await fetchFileName(folder);
// //     setFilename(filename);
// //     // console.log(filename);
// //     const content = await fetchFileContent(folder, "repo.json");
// //     data[folder] = {
// //       filename,
// //       content,
// //     } 
// //   });
// //   return data;
// // }

// // let main = async () => {
// //   const data = await fetchFolderContent();
// //   console.log(data);
// //   // Process your data
// //   // IE: save it GraphQL so you can consume it from Gatsbt
// // }

// // main();
//   const [list, setList] =  useState([]);
//   const [urllist, setUrllist] =  useState([]);
//   useEffect(()=>{
//   const getfilesurl = async() =>{
//     const filen= await axios.get("https://api.github.com/repos/Kiranchaudhary537/demo-git-github/git/trees/articlefiles?recursive=1");
//      return filen;
//   }
//   const getfiles = async ()=>{
//     const url= await getfilesurl();
//             var items = [];
//             for(const key in url.data.tree){
//               items.push({ key: url.data.tree[key].path.replace(/%20/gi, " ") });
//             //  console.log(items[key]);
//             }
//             setUrllist(items);
    
//         // console.log(urllist);
//   for(const key in urllist){
//     console.log(urllist[key].key);
//   axios
//   .get(`https://raw.githubusercontent.com/Kiranchaudhary537/demo-git-github/articlefiles/${urllist[key].key}`)
//   .then(resp => {
//     console.log(resp.data);
//   })
//   .catch(err => {
//     console.log("Unable to obtain repos list. " + err);
//     return;
//   });
//  }
// }
//  getfiles();
// },[]);
//   // const [page, setPage] =  useState(1);
//   // const [user,setUser] = useState("Kiranchaudhary537");
//   // const [repo,setRepo]= useState("demo-git-github");
//   // const [directory,setDirectory]= useState("demo-git-github/tree/onepage/src/articlegithub");
//   // useEffect(()=>{
//   //   const list_directory=async(user, repo, directory)=>{
//   //     const response = await axios.get(`https://raw.githubusercontent.com/Kiranchaudhary537/demo-git-github/onepage/src/articlegithub`);
//   //     console.log(response);
//     //   const url = `https://api.github.com/repos/${user}/${repo}/tree/onepage/src/articlegithub`;
//     //   directory = directory.split('/').filter(Boolean);
//     //   const dir = await directory.reduce(async (acc, dir) => {
//     //       const { url } = await acc;
//     //       const list = await fetch(url).then(res => res.json());
//     //       return list.tree.find(node => node.path === dir);
//     //   }, { url });
//     //   if (dir) {
//     //      const list = await fetch(dir.url).then(res => res.json());
//     //      return list.tree.map(node => node.path);
//     //   }
//     // }
//     // const list_directory=async(user, repo, directory)=>{
//     //   const url = `https://api.github.com/repos/${user}/${repo}/tree/onepage/src/articlegithub`;
//     //   directory = directory.split('/').filter(Boolean);
//     //   const dir = await directory.reduce(async (acc, dir) => {
//     //       const { url } = await acc;
//     //       const list = await fetch(url).then(res => res.json());
//     //       return list.tree.find(node => node.path === dir);
//     //   }, { url });
//     //   if (dir) {
//     //      const list = await fetch(dir.url).then(res => res.json());
//     //      return list.tree.map(node => node.path);
//     //   }
//     // }
//     // fetch("https://api.github.com/search/demo-git-github")
//     // .then(res=>res.json())
//     // .then(data=>{
//     //   console.log(data);
//     // })
//   //   list_directory(user,repo,directory);
//   //   console.log(list);
//   // },[]);
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
//   return (
//     <>  

    
     
//       <div className="row row-cols-1 row-cols-md-2 g-4 ">
//         { 
//         getPaginatedData().map((index,i)=>(
                 
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
//          )}
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

// const Articlemain=(props)=> {

//   const [color,setColor]=useState("light");
//   const [title,setTitle]=useState("");
//   const [images,setImages]=useState("");
//   const [description,setDescription]=useState("");
//   const [date,setDate]=useState("");
 
//     useEffect(()=>{
   
//   },[0]);
//   const checkcolor=()=>{
//     if(color=="light"){
//       setColor("dark");
//     }
//     else{
//       setColor("light");
//     }
//   }
//   return (
//     <>
//     	 <div className="row" id="articlerow">
//        <section id="content" className="col-md-8 offset-md-2 p-4">
//          <div className="form-check form-switch">
//   <input onClick={checkcolor} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//   <label className="form-check-label" for="flexSwitchCheckDefault">{color}</label>
// </div>
//          <h2 className="p-2 ">
//            {title}
//          </h2>
//          <div className="article">
//          <img  id="articleimage"
//                src={images}
//                className="cardImg-top img-fluid img-thumbnail rounded"
//                alt="..."
               
//              />
//            <div data-color-mode={color} className="" style={{textAlign:"justify",}}>
//            <MarkdownPreview source={description} />
//        </div>
//          </div>
//        </section>
//        <aside className="sidebars offset-md-4 col-md-4">
//      </aside>
// 			</div>
	 
//     </>
//   );
// }