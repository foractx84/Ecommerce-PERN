import Input from "../ui/Input";
import { Search} from "lucide-react";
import { useLocation } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import ROUTES from "../../constants/routes";
import Button from "../ui/Button/Button";
import AccountDropdown from "../common/AccountDropdown";
import { useEffect, useState } from 'react';

const Header = () => {
  const location = useLocation();

  const hideIcons =
    location.pathname === "/signup" || location.pathname === "/login";

    const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="pt-[40px] px-[135px] shadow-sm w-full border-b border-black/10">
      <div className="mx-auto flex items-center justify-between w-full">
        <div className="text-2xl font-bold text-black">Exclusive</div>

        <nav className="hidden md:flex space-x-12 text-black">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
          <a href="/signup" className="hover:underline">Sign Up</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              variant="outline"
              placeholder="What are you looking for?"
              icon={<Search size={16} />}
              className="w-48 md:w-64"
            />
            <button
              aria-label="Search"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
            >
              <Search size={16} />
            </button>
          </div>

          {!hideIcons && (
            <>
              <NavLink
                to={ROUTES.WISHLIST}
                className={({ isActive }) =>
                  `relative ${isActive ? 'text-red-500' : 'text-black hover:text-red-500'}`
                }
              >
                <Button mode="icon" variant="secondary" icon="heart" size="sm" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  4
                </span>
              </NavLink>
              
              <NavLink
                to={ROUTES.CART}
                className={({ isActive }) =>
                  `relative ${isActive ? 'text-red-500' : 'text-black hover:text-red-500'}`
                }
              >
                <Button mode="icon" variant="secondary" icon="cart" size="sm" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                  2
                </span>
              </NavLink>
              
              {isLoggedIn ? <AccountDropdown /> : null}
            </>
          )}
        </div>
      </div>

      <div className="mt-4"></div>
    </header>
  );
};

export default Header;