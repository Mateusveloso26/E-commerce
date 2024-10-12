import { useContext } from "react";
import { Link } from "react-router-dom";
import { PiBagThin } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";

import { CartContext } from "../../content/CartContent";

export function Header() {
  const { cartAmount} = useContext(CartContext)

  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <header className="w-full px-1 bg-slate-200 m  ">
      <nav className="w-full max-w-7xl h-20 flex items-center justify-between px-5 mx-auto">
        <Link to="/" className="font-bold text-3xl">
          <span className="text-red-600 uppercase">Dev</span> Shop
        </Link>

        <div className="relative flex items-center w-80">
          <input
            ref={inputRef}
            type="text"
            placeholder="O que você procura?"
            className="h-8 rounded-md px-10 w-full focus:outline-red-500"
          />
          <CiSearch
            size={24}
            color="#121212"
            className="absolute right-2 cursor-pointer"
            onClick={handleFocusInput}
          />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/">
            <CiHeart size={30} color="#000" />
          </Link>

          <Link className="relative" to="/cart">
            <PiBagThin size={28} color="#121212" />
           {cartAmount > 0 && (
             <span className="absolute -top-3 -right-3  px-2.5 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
              {cartAmount}
             </span>
           )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
