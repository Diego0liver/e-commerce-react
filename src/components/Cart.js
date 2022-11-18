import React from 'react'
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import  { useCart }  from  "react-use-cart" ;
import {Carts} from './styled/cart-styled'


const Cart = () => {
  let history = useNavigate()
  function finalizar(){
    history("/finish")
  }

    const { 
        totalUniqueItems, 
        items,
        totalItems,
        cartTotal,
        updateItemQuantity, 
        removeItem,
        emptyCart
      } = useCart();
      
  return (<><Nav />
  <Carts>
    
    <h1>Sacola</h1>
    <h4> Items ({totalUniqueItems}) total Items :({totalItems})</h4>
    <div className='cart-cont'>
    {items.map((item, index)=>{
      return(<ul key={index}>
        <li><b>{item.titulo}</b></li>
        <li>R$ {item.price}</li>
        <div className='btn-carts'>
        <button onClick={() =>
        updateItemQuantity(item.id, item.quantity - 1)}>-</button>
        {item.quantity}
        <button onClick={() =>
        updateItemQuantity(item.id, item.quantity + 1)}>+</button>
        <button className='remove' onClick={() => removeItem(item.id)}>x</button>
        </div>
    </ul>)})}
    <h2> Total: R$ {cartTotal.toFixed(2)}</h2>
    <div><button className='clear' onClick={() => emptyCart()}>Limpar carrinho</button>
         <button className='clear' style={{margin:5}}onClick={() => finalizar()} >Finalizar pedido</button>
    </div>
    </div>
    
    
    
    </Carts></> )
}

export default Cart