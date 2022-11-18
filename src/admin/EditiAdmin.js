import {React,  useState, useEffect} from "react";
import axios from "axios";
import NavAdmin from './navAdmin'
import {EditCss} from './styled-admin/edit-styled'
import Lixo from '../img/lixo.png'


 const baseURL = "http://localhost:3004/lanches/"
 const baseURL2 = "http://localhost:3004/bebidas/"

const Editi = () => {
 
  const [post, setPost] = useState([])
  const [post2, setPost2] = useState([])

  const loadUser2 = async () => {
    const result = await axios.get(baseURL2)
    setPost2(result.data)
  }
  const loadUser = async () => {
    const result = await axios.get(baseURL)
    setPost(result.data)
  }
  useEffect(()=>{
    loadUser()
    loadUser2()
  },[]);

  const delet = async (id)=> {
    await axios.delete(`${baseURL + id}`)
    loadUser()
    }
 
  const deletDrink = async (id)=> {
    await axios.delete(`${baseURL2 + id}`)
    loadUser2()
    }


  return (<>
   <NavAdmin />
   <EditCss>
    <h1>Editar produtos</h1>
    <h3>Lanches</h3>
    <div className="card-edit">
    {post.map((item)=>{
        return(
            <ul>
            <li><b>{item.titulo}</b></li>
            <li>R${item.price}</li>
            <li><button onClick={ () => {delet(item.id)}}>
              <img alt="lixo" src={Lixo} ></img>
              </button></li>
          </ul> )})} </div>
          <h3>Bebidas</h3>
          <div className="card-edit">
          {post2.map((item)=>{
        return(
            <ul>
            <li><b>{item.titulo}</b></li>
            <li>R${item.price}</li>
            <li><button  onClick={ () => {deletDrink(item.id)}}>
            <img alt="lixo" src={Lixo} ></img>
              </button></li>
          </ul> )})}</div>
          </EditCss>
   </>)
}

export default Editi