import React, {useEffect ,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./components/Card";

import Axios from "axios";


function App() {
  const [content, setContent] = useState([]);

  useEffect(()=>{
      
    Axios.get(`https://newsapi.org/v2/everything?q=popularity&apiKey=684a07e5f5a6480583694959c28c23e9`)
    .then((response)=> {
      console.log(response);
      setContent(response.data.articles)
    }).catch((e)=>{
      console.log(e);
    })

}, []);
  
  
function CreateCard(note,index) {
  return  <Card 
        key={index}
        title={note.title}
        author ={note.author}  
        description = {note.description}  
        imgurl = {note.urlToImage}       
  /> ;
}
  

  return (
    <div className="container-fluid App">
          <div className="header"><h1>Headlines<hr/></h1></div>
          {content.map(CreateCard)}
    </div>
  );
}

export default App;
