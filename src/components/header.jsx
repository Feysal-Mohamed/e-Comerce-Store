import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Head() {
  const items = useSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "underline text-orange-600" : "text-black"
        }
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>

      <NavLink
        to="/About"
        className={({ isActive }) =>
          isActive ? "underline text-orange-600" : "text-black"
        }
        onClick={() => setIsOpen(false)}
      >
        About
      </NavLink>

      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          isActive ? "underline text-orange-600" : "text-black"
        }
        onClick={() => setIsOpen(false)}
      >
        Contact Us
      </NavLink>

      <NavLink
        to="/Menue"
        className={({ isActive }) =>
          isActive ? "underline text-orange-600" : "text-black"
        }
        onClick={() => setIsOpen(false)}
      >
        Menue
      </NavLink>

      <div className="relative">
        <NavLink
          to="/Orders"
          className={({ isActive }) =>
            isActive ? "underline text-orange-600" : "text-black"
          }
          onClick={() => setIsOpen(false)}
        >
          Orders <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
        <h1 className="absolute -top-4 -right-6 text-xl text-orange-600">
          ({items.length})
        </h1>
      </div>
    </>
  );

  return (
    <div className="flex justify-between items-center px-6 py-4 text-3xl font-semibold relative">
      <h1
        className="text-3xl font-bold"
        style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)" }}
      >
        <span className="text-blue-600">3</span>
        <span className="text-orange-500">T</span> Store
      </h1>

      {/* Desktop Menu */}
      <ul className="sm:flex hidden gap-6 items-center">{navLinks}</ul>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-12 right-9 bg-white shadow-xl flex flex-col gap-4 text-lg p-7 sm:hidden z-50">
          {navLinks}
        </ul>
      )}
    </div>
  );
}

export default Head;
