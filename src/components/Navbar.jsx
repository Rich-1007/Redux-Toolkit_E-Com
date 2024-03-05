import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex  justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-5">
            <img src="src/components/Logo-png-bg.png" className="h-12" />
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaCartShopping />
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
