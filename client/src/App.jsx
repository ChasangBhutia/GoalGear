import React from 'react'
import { useLocation, Routes, Route } from 'react-router-dom';
import "./App.css";
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
import MenuBar from './components/MenuBar';


const App = () => {

  const location = useLocation();
  const hideNavbarRoutes = ['/','/login'];

  return (
      <AuthProvider>
        <CartProvider>
          <div className='h-full overflow-hidden'>
            {!hideNavbarRoutes.includes(location.pathname) && <MenuBar/>}
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
  )
}

export default App