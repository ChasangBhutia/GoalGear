import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import CreateProduct from './pages/CreateProduct';



const App = () => {
  return (
    <BrowserRouter>
      <div className='h-full overflow-hidden'>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/' element={<Shop/>}/>
          <Route path='/admin/create-product' element={<CreateProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App