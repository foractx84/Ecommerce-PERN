import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../features/home/pages/HomePage';
import LoginPage from '../features/auth/pages/LoginPage';
import SignUpPage from '../features/auth/pages/SignUpPage';
import WishlistPage from '../features/wishlist/pages/WishlistPage';
import CartPage from '../features/cart/pages/CartPage';
import ROUTES from '../constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES.SIGN_UP,
    element: <SignUpPage />,
  },
  {
    path: ROUTES.LOG_IN,
    element: <LoginPage />,
  },
  {
    path: ROUTES.WISHLIST,
    element: <WishlistPage />,
  },
  {
    path: ROUTES.CART,
    element: <CartPage />,
  },
]);

export default router;