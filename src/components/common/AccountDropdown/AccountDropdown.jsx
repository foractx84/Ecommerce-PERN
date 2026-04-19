import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  User,
  Package,
  XCircle,
  Star,
  LogOut,
} from 'lucide-react';
import ROUTES from '../../../constants/routes';

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const accountMenuItems = [
    { id: 1, label: 'Manage My Account', icon: User, href: ROUTES.ACCOUNT },
    { id: 2, label: 'My Order', icon: Package, href: '/orders' },
    { id: 3, label: 'My Cancellations', icon: XCircle, href: '/cancellations' },
    { id: 4, label: 'My Reviews', icon: Star, href: '/reviews' },
    { id: 5, label: 'Logout', icon: LogOut, href: '/logout' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
          isOpen ? 'bg-red-500 text-white' : 'text-black hover:text-red-500'
        }`}
      >
        <User size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-4 w-[225px] rounded-[4px] bg-black/40 p-5 text-white shadow-xl backdrop-blur-md">
          <ul className="space-y-4">
            {accountMenuItems.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.id}>
                  <NavLink
                    to={item.href}
                    className="flex items-center gap-4 text-sm text-white transition hover:text-red-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon size={24} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default AccountDropdown;