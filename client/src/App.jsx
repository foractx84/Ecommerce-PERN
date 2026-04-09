import { Routes, Route } from 'react-router-dom';
import SignUp from './features/auth/pages/SignUpPage';
import Login from './features/auth/pages/LoginPage';
import Home from './features/home/pages/HomePage';
import Wishlist from './features/wishlist/pages/WishlistPage';
import ROUTES from './constants/routes';
import MainLayout from './components/layouts/MainLayout';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        <Route path={ROUTES.LOG_IN} element={<Login />} />
        <Route path={ROUTES.WISHLIST} element={<Wishlist />} />
      </Routes>
    </MainLayout>
  );
}