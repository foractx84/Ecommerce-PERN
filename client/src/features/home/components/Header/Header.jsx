import React from "react";
import Input from "../../../../components/ui/Input";
import { Heart, ShoppingCart, Search } from "lucide-react";

const Header = () => {
  return (
    <header className="pt-[40px] px-[135px] shadow-sm w-full border-b border-black/10">
      <div className=" mx-auto flex items-center justify-between w-full">
        <div className="text-2xl font-bold text-black">Exclusive</div>
        <nav className="hidden md:flex space-x-12 text-black">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Sign Up</a>
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

          <Heart className="text-gray-700 cursor-pointer" size={20} />
          <ShoppingCart className="text-gray-700 cursor-pointer" size={20} />
        </div>
      </div>
      <div className="mt-4"></div>
    </header>
  );
};

export default Header;