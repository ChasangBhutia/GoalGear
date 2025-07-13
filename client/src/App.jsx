import { useLocation, Routes, Route } from 'react-router-dom';
import "./App.css";
import Shop from './pages/Shop';
import LoginSignup from './pages/LoginSignup';
import CreateProduct from './pages/CreateProduct';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart';
import AdminRoutes from './utils/AdminRoutes';

import ProtectedRoutes from './utils/ProtectedRoutes'
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Profile from './pages/Profile/Profile';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer'
import { useEffect } from 'react';
import AllUsers from './pages/AllUsers';
import AllProducts from './pages/AllProducts';
import { SharedStateProvider } from './context/SharedStateContext';


const App = () => {

  const location = useLocation();
  const hideNavbarRoutes = ['/', '/login'];
  const hideFooterRoutes = ['/login'];

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
    <SharedStateProvider>

      <AuthProvider>
        <CartProvider>
          <div className='h-full overflow-hidden'>
            {!hideNavbarRoutes.includes(location.pathname) && <ProtectedRoutes><MenuBar /></ProtectedRoutes>}
            <Routes>
              <Route path='/login' element={<LoginSignup />} />
              <Route path='/' element={<Shop />} />
              <Route path='/admin/create-product' element={<AdminRoutes><CreateProduct /></AdminRoutes>} />
              <Route path='/admin/all-users' element={<AdminRoutes><AllUsers /></AdminRoutes>} />
              <Route path='/admin/all-products' element={<AdminRoutes><AllProducts /></AdminRoutes>} />
              <Route path="/category/:type" element={<Category />} />
              <Route path="/product/:productId" element={<ProtectedRoutes><Product /></ProtectedRoutes>} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/user' element={<Profile />} />
            </Routes>
            {!hideFooterRoutes.includes(location.pathname) && <Footer />}
          </div>

        </CartProvider>
      </AuthProvider>
    </SharedStateProvider>
  )
}

export default App