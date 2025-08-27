import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Head() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div className="flex justify-between px-10 text-3xl font-semibold py-4">
      <h1 className="text-3xl font-bold text-shadow-lg ">3T Shop</h1>

      <ul className="flex gap-6 items-center">
        {/* NavLink automatically applies active class when the route matches */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline  text-orange-600" : "text-black"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "underline  text-orange-600" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "underline  text-orange-600" : "text-black"
          }
        >
          Contact Us
        </NavLink>

        <NavLink
          to="/Menue"
          className={({ isActive }) =>
            isActive ? "underline  text-orange-600" : "text-black"
          }
        >
          Menue
        </NavLink>

        {/* Cart / Orders */}
        <div className="relative">
          <NavLink
            to="/Orders"
            className={({ isActive }) =>
              isActive ? "underline  text-orange-600" : "text-black"
            }
          >
            Orders <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>

          {/* Item count */}
          <h1 className="absolute -top-4 -right-6 text-xl text-orange-600">
            ({items.length})
          </h1>
        </div>
      </ul>
    </div>
  );
}

export default Head;
