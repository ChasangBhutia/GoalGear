import { useLocation, Routes, Route } from 'react-router-dom';
import "./App.css";
import Shop from './pages/Home/Shop';
import LoginSignup from './pages/LoginSignup';
import CreateProduct from './pages/Admin/CreateProduct';
import Category from './pages/Category';
import Product from './pages/Product';
import Cart from './pages/Cart/Cart';
import AdminRoutes from './utils/AdminRoutes';
import UserRoutes from './utils/UserRoutes';
import ProtectedRoutes from './utils/ProtectedRoutes'
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Profile from './pages/Profile/Profile';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer'
import { useEffect } from 'react';
import AllUsers from './pages/Admin/AllUsers';
import AllProducts from './pages/Admin/AllProducts';
import { SharedStateProvider } from './context/SharedStateContext';



const AppContent = () => {
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
  
  return <div className='h-full overflow-hidden'>
    {!hideNavbarRoutes.includes(location.pathname) && <ProtectedRoutes><MenuBar /></ProtectedRoutes>}
    <Routes>
      <Route path='/login' element={<LoginSignup />} />
      <Route path='/' element={<Shop />} />
      <Route path='/admin/create-product' element={<AdminRoutes><CreateProduct /></AdminRoutes>} />
      <Route path='/admin/all-users' element={<AdminRoutes><AllUsers /></AdminRoutes>} />
      <Route path='/admin/all-products' element={<AdminRoutes><AllProducts /></AdminRoutes>} />
      <Route path="/category/:type" element={<Category />} />
      <Route path="/product/:productId" element={<ProtectedRoutes><Product /></ProtectedRoutes>} />
      <Route path="/cart" element={<UserRoutes><Cart /></UserRoutes>} />
      <Route path='/user' element={<Profile />} />
    </Routes>
    {!hideFooterRoutes.includes(location.pathname) && <Footer />}
  </div>
}

const App = () => {

  return (
    <SharedStateProvider>
      <AuthProvider>
        <CartProvider>
          <AppContent/>
        </CartProvider>
      </AuthProvider>
    </SharedStateProvider>
  )
}

export default App