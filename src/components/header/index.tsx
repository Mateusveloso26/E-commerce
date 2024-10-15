import { useContext } from "react";
import { Link } from "react-router-dom";
import { PiBagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useRef } from "react";

import { CartContext } from "../../content/CartContext";

export function Header() {
  const { cartAmount } = useContext(CartContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <header className="bg-black text-white w-full ">
      <nav className="w-full max-w-7xl h-auto lg:h-24 flex flex-col lg:flex-row items-center justify-between px-5 py-3 mx-auto">
        <Link to="/" className="text-white font-bold text-3xl lg: mb-4 lg:mb-0">
          <span className="text-red-600 uppercase">TECH</span> Shop
        </Link>

        <div className="relative flex items-center w-full lg:w-80 mb-4 lg:mb-0">
          <input
            ref={inputRef}
            type="text"
            placeholder="O que você procura?"
            className="h-10 rounded-md px-10 w-full text-black focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <CiSearch
            size={24}
            color="red"
            className="absolute right-3 cursor-pointer"
            onClick={handleFocusInput}
          />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/">
            <CiHeart size={28} color="#dc2626" />
          </Link>

          <Link className="relative" to="/cart">
            <PiBagThin size={28} color="#fff" />
            {cartAmount > 0 && (
              <span className="absolute -top-3 -right-3 px-2.5 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                {cartAmount}
              </span>
            )}
          </Link>

          <Link to="/login">
            <CiUser size={28} color="#fff" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
