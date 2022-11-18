import {React, useContext} from 'react'
import {Navigate } from "react-router-dom";
import { LoginContext } from "./admin/adminContext";

const RotaPrivada = ({children}) => {
    const { login } = useContext(LoginContext)  
  return login ? children : <Navigate to="/admin" />
}

export default RotaPrivada


