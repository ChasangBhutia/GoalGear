import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import CreateProduct from './pages/CreateProduct';
import Category from './pages/Category';
import Product from './pages/Product';



const App = () => {
  return (
    <BrowserRouter>
      <div className='h-full overflow-hidden'>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/' element={<Shop/>}/>
          <Route path='/admin/create-product' element={<CreateProduct/>}/>
          <Route path="/category/:type" element={<Category/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App