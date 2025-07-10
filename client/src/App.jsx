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
import Profile from './pages/Profile/Profile';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer'
import { useEffect } from 'react';


const App = () => {

  const location = useLocation();
  const hideNavbarRoutes = ['/', '/login'];
  const hideFooterRoutes = ['/user', '/login'];
 
  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash?.substring(1);
    if (!hash) return;
    const timeout = setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <AuthProvider>
      <CartProvider>
        <div className='h-full overflow-hidden'>
          {!hideNavbarRoutes.includes(location.pathname) && <MenuBar />}
          <Routes>
            <Route path='/login' element={<LoginSignup />} />
            <Route path='/' element={<Shop />} />
            <Route path='/admin/create-product' element={<AdminRoutes><CreateProduct /></AdminRoutes>} />
            <Route path="/category/:type" element={<Category />} />
            <Route path="/product/:productId" element={<UserRoutes><Product /></UserRoutes>} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/user' element={<Profile />} />
          </Routes>
          {!hideFooterRoutes.includes(location.pathname) && <Footer />}
        </div>

      </CartProvider>
    </AuthProvider>
  )
}

export default App