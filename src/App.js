import {React} from "react";
import { CartProvider } from "react-use-cart";
import Home from './components/Home'
import Cart from './components/Cart'
import Finish from './components/finish'
import Drink from './components/bebidas'
import Login from './admin/adminlogin'
import Admin from './admin/admin'
import Editi from './admin/EditiAdmin'
import AdminDrink from './admin/adminDrink'
import RotaPrivada from './RotaPrivada'
import { LoginContextProvider } from "./admin/adminContext";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
 
const App = ()=> {
  return (
    <LoginContextProvider>
    <CartProvider>
    <Router>
    <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/cart' element={<Cart />} />
     <Route path='/drink' element={<Drink />} />
     <Route path='/finish' element={<Finish />} />
     <Route path='/admin' element={<Login />} />
     <Route path='/painel' element={<RotaPrivada><Admin/></RotaPrivada>} />
     <Route path='/painel/drink' element={<RotaPrivada><AdminDrink /></RotaPrivada>} />
     <Route path='/painel/adit' element={<RotaPrivada><Editi /></RotaPrivada>} />
    </Routes>
    </Router></CartProvider>
    </LoginContextProvider>
    )
}

export default App;
