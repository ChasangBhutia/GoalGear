import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import CreateProduct from './pages/CreateProduct';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import AdminRoutes from './utils/AdminRoutes';
import UserRoutes from './utils/UserRoutes';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Profile from './pages/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div className='h-full overflow-hidden'>
            <Routes>
              <Route path='/login' element={<LoginSignup />} />
              <Route path='/' element={<Shop />} />
              <Route path='/admin/create-product' element={<AdminRoutes><CreateProduct /></AdminRoutes>} />
              <Route path="/category/:type" element={<Category />} />
              <Route path="/product/:productId" element={<UserRoutes><Product /></UserRoutes>} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/user' element={<Profile/>}/>
            </Routes>
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App