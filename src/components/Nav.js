import React from 'react'
import  { useCart }  from  "react-use-cart" ;
import {Link} from "react-router-dom";
import {Navs} from './styled/nav-styled'
import CartBtn from '../img/cart.png'
import Dog from '../img/dog.png'
import Drinkz from '../img/drink.png'

const Nav = () => {
    const { 
        totalItems
      } = useCart();
      return (<Navs>
       <h1>food-hamburger delivery 🏍️💨</h1>
        <div className="conteiner-cart">
         <Link to="/"><img alt='dog' src={Dog}></img></Link>
         <Link to="/drink"><img alt='drink' src={Drinkz}></img></Link>
         <Link to="/cart"><img alt='cart' src={CartBtn}></img><button>{totalItems}</button></Link>
        </div></Navs>
  )
}

export default Nav