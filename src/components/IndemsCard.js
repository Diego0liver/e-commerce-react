import React from 'react'
import {useCart} from "react-use-cart";

const IndemsCard = (props) => {
    const {addItem} = useCart();
  return (
    <ul>
    <li><b>{props.titulo}</b></li>
    <li>{props.desc}</li>
    <div className="preco">
    <li>R${props.price}</li>
    <li><button onClick={()=>addItem(props.item)}>+</button></li>
    </div>
  </ul>
  )
}

export default IndemsCard