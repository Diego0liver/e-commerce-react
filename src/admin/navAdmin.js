import React from 'react'
import {Link} from "react-router-dom";
import {Admincss} from './styled-admin/admin-styled'
import Homes from '../img/home.png'
import Edit from '../img/edit.png'
import Add from '../img/adds.png'


const NavAdmin = () => {
  return (<Admincss>
    <h1>Painel Administrativo</h1>
    <div className="conteiner-cart">
       <Link to="/"><img alt='home' src={Homes}></img></Link>
       <Link to="/painel"><img alt='drink' src={Add}></img></Link>
       <Link to="/painel/adit"><img alt='cart' src={Edit}></img></Link>
       </div>
       </Admincss>)
}

export default NavAdmin