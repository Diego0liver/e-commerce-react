import {React,  useState, useEffect} from "react";
import axios from "axios";
import {Homes} from './styled/home-styled'
import Nav from "./Nav";
 import ItemsCard from "./IndemsCard";

 const baseURL = "http://localhost:3004/lanches"

const Home = () => {
  const [post, setPost] = useState([])
   

  const loadUser = async () => {
    const result = await axios.get(baseURL)
    setPost(result.data)
  }
  useEffect(()=>{
    loadUser()
  },[]);

  return (<>
    <Nav />
    <Homes>
    <h1>Dogao</h1>
  <div className="list">
    {post.map((item, index)=>{
        return(
          <ItemsCard 
            titulo={item.titulo} 
            desc={item.desc} 
            price={item.price}
            item={item}
            key={index}
         /> )})}
  </div>
   </Homes>
   </>)
}

export default Home