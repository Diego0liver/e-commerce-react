import React from 'react'
import Boy from '../img/boy.jpg'
import {Finiish} from './styled/finish-styled'
import { useNavigate } from "react-router-dom";



const Finish = () => {
    let history = useNavigate()
    function ok(){
        history("/")
      }


  return (<Finiish>
    <div>
        <h1>Seu pedido foi finalizado chegara em 30 a 45min</h1>
        <img alt='boy' src={Boy}></img>
       
    </div> <button onClick={() =>ok()}>Ok</button>
    </Finiish> )
}

export default Finish