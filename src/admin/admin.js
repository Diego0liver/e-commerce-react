import {React,  useState} from "react";
import {v4 as uuid} from 'uuid'
import axios from "axios";
import {Link} from "react-router-dom";
import NavAdmin from './navAdmin'
import {Admincss} from './styled-admin/admin-styled'

const baseURL = "http://localhost:3004/lanches/"

const Admin = () => {

  const ids = uuid()
  let unicoId = ids.slice(0.8)
  const [titulo, setTitulo] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')

  function cria(){
    if(titulo && desc && price){
     axios.post(baseURL, {
      id: unicoId,
      titulo: titulo,
      desc: desc,
      price: price
    }).then((alert("Lanche adicionado com sucesso")))
    setTitulo("")
    setDesc("")
    setPrice("")
   
}else{alert("Preencha todos os campos")}
}


  return (<Admincss><div>
    <NavAdmin />
    <div className='form'>
    <div className="navProd">
    <Link to="/painel"><p className="done">Lanche</p></Link>
    <Link to="/painel/drink"><p>Bebida</p></Link></div>
      <h2>Adicione um novo lanche</h2>
      <label>Titulo</label>
      <input type="text" value={titulo} onChange={(e)=> setTitulo (e.target.value)}></input>
      <label>Descricao</label>
      <input type="text" value={desc} onChange={(e)=> setDesc (e.target.value)}></input>
      <label>Preco</label>
      <input type="number" value={price} onChange={(e)=> setPrice (e.target.value)}></input>
      <button onClick={cria}>Adicionar lanche</button>
      
    </div>
        
    </div>
    </Admincss>
  )
}

export default Admin