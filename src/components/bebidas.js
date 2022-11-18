import {React,  useState, useEffect} from "react";
import axios from "axios";
import Nav from "./Nav";
import {Homes} from './styled/home-styled'
import ItemsCard from "./IndemsCard";

const baseURL = "http://localhost:3004/bebidas"

const Bebidas = () => {
  const [post, setPost] = useState([])
   

  const loadUser = async () => {
    const result = await axios.get(baseURL)
    setPost(result.data)
  }
  useEffect(()=>{
    loadUser()
  },[]);

  return (<><Nav />
    <Homes>
    <h1>Bebidas</h1>
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

export default Bebidas