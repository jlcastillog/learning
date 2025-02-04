import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ShoppingCartContext from "../../Context";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = "underline underline-offset-4";

  const isSignOut = context.isSignOut;

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            onClick={() => {
              context.setSearchByTitle(null);
              context.setSearchByCategory(null);
            }}
          >
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/"
            onClick={() => {
              context.setSearchByTitle(null);
              context.setSearchByCategory(null);
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            onClick={() => {
              context.setSearchByTitle(null);
              context.setSearchByCategory("clothes");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            onClick={() => {
              context.setSearchByTitle(null);
              context.setSearchByCategory("electronics");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furnitures"
            onClick={() => {
              context.setSearchByTitle(null);
              context.setSearchByCategory("furnitures");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            onClick={() => {
              context.setSearchByTitle(null);
              context.setSearchByCategory("toys");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            onClick={() => {
              context.setSearchByTitle(null);
              context.setSearchByCategory("others");
            }}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">{context.loggedUser?.email}</li>
        {!isSignOut && (
          <>
            <li>
              <NavLink
                to="/my-orders"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-account"
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
                My Account
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink
            to="/signin"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {isSignOut ? "Sign In" : "Sign Out"}
          </NavLink>
        </li>
        <li className="flex items-center justify-center gap-1">
          <ShoppingBagIcon className="size-5 text-black" />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
