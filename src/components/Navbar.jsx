import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SiWoocommerce } from "react-icons/si";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5 flex justify-center items-center w-40 h-12 ">
            <div className="  w-full text-gray-300 h-full">
              E-commerce Shopping Cart
            </div>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaCartShopping className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-3 bg-yellow-600 text-white text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full ">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
