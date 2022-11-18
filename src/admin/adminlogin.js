import {React,  useContext} from 'react'
import {Logincss} from './styled-admin/login-styled'
import { LoginContext } from "./adminContext";
import { useNavigate } from 'react-router';


const Adminlogin = () => {
const { users, setUser, password, setPassword, login } = useContext(LoginContext)  
let history = useNavigate()
function logOk(){
  if(login){
  history("/painel")}else{
    alert("login nao autorizado")
    history("/admin")
  }
}
  return (<Logincss>
    <div>
        <h1>Logar</h1>
        <h3>Para ir ao Painel Administrativo<br />
        precisa estar logado
         </h3>
         <div className='card-login'>
        <label>Login</label>
        <input type='text' value={users}  onChange={(e)=> setUser (e.target.value)} ></input>
        <label>Password</label>
        <input type='password' value={password}
      onChange={(e)=> setPassword (e.target.value)}
         ></input>
     <button onClick={()=>{logOk()}}>Logar</button>
        </div>

    </div>
    </Logincss>)
}

export default Adminlogin